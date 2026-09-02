import './ProjectCard.css';

export function renderProjectCard(project, index) {
  const delay = (index + 1) * 150;
  
  // Render visual (Image or Fallback)
  // Currently defaulting to fallback if image/screenshots aren't valid strings
  const hasImage = project.image || (project.screenshots && project.screenshots.length > 0);
  const imageSrc = project.image || (project.screenshots ? project.screenshots[0] : null);

  const visualContent = hasImage 
    ? `<img src="${imageSrc}" alt="${project.name} homepage" loading="lazy" decoding="async" />`
    : `
      <div class="project-card-fallback" aria-hidden="true">
        <div class="fallback-browser-bar">
          <div class="fallback-dot"></div>
          <div class="fallback-dot"></div>
          <div class="fallback-dot"></div>
        </div>
        <div class="fallback-content">
          <div class="fallback-skeleton large"></div>
          <div class="fallback-skeleton small"></div>
          <div class="fallback-skeleton small" style="width: 50%;"></div>
        </div>
      </div>
    `;

  // Limit tech tags to 5 for cleanliness
  const techTags = (project.technologies || []).slice(0, 5)
    .map(tech => `<span class="project-card-tech-item">${tech}</span>`)
    .join('');

  return `
    <article class="project-card reveal" style="transition-delay: ${delay}ms;">
      <div class="project-card-inner">
      
        <div class="project-card-visual layer-bg">
          ${visualContent}
        </div>
        
        <div class="project-card-content">
          <header class="project-card-header layer-md">
          <h3 class="project-card-title layer-fg">${project.name}</h3>
          <div class="project-card-meta">
            ${project.category} &bull; ${project.status}
          </div>
        </header>
        
        <p class="project-card-desc layer-md">
          ${project.shortDescription || project.description}
        </p>
        
        <div class="project-card-tech layer-fg" aria-label="Technologies used">
          ${techTags}
        </div>
        
        <footer class="project-card-actions layer-front">
          ${project.liveUrl ? `
            <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-action-link">
              View Live &rarr;
            </a>
          ` : ''}
          ${project.githubUrl ? `
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-action-link">
              View Source &rarr;
            </a>
          ` : ''}
          ${project.caseStudyUrl ? `
            <a href="${project.caseStudyUrl}" class="project-action-link">
              View Case Study &rarr;
            </a>
          ` : ''}
        </footer>
      </div>
      
      </div>
    </article>
  `;
}

export function initProjectCards() {
  const cards = document.querySelectorAll('.project-card');
  if (!cards.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  // Disable on mobile/tablet to prioritize performance and usability
  if (window.innerWidth < 1024) return;

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Normalize from -0.5 to 0.5
      const xNorm = (x / rect.width) - 0.5;
      const yNorm = (y / rect.height) - 0.5;

      requestAnimationFrame(() => {
        card.style.setProperty('--card-rot-x', yNorm.toFixed(3));
        card.style.setProperty('--card-rot-y', xNorm.toFixed(3));
        card.style.setProperty('--card-hover', 1);
      });
    });

    card.addEventListener('mouseleave', () => {
      requestAnimationFrame(() => {
        card.style.setProperty('--card-rot-x', 0);
        card.style.setProperty('--card-rot-y', 0);
        card.style.setProperty('--card-hover', 0);
      });
    });
  });
}
