import './ProjectCard.css';

export function renderProjectCard(project, index) {
  const delay = (index + 1) * 150;
  const isFirst = index === 0;

  // Extract authentic screenshot
  const imageSrc = project.image || (project.screenshots && project.screenshots.length > 0 ? project.screenshots[0] : null);
  const hasImage = Boolean(imageSrc);

  let displayDomain = project.shortName.toLowerCase().replace(/\s+/g, '') + '.app';
  if (project.liveUrl) {
    try {
      displayDomain = new URL(project.liveUrl).hostname;
    } catch {
      // Keep default
    }
  }

  const visualContent = hasImage
    ? `
      <div class="project-card-showcase layer-bg">
        <div class="showcase-browser-bar layer-frame">
          <div class="browser-dots" aria-hidden="true">
            <span class="browser-dot"></span>
            <span class="browser-dot"></span>
            <span class="browser-dot"></span>
          </div>
          <div class="browser-url-pill" aria-hidden="true">
            <span class="browser-lock-icon">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </span>
            <span class="browser-url-text">${displayDomain}</span>
          </div>
        </div>
        <div class="showcase-image-wrapper layer-screen">
          <img 
            src="${imageSrc}" 
            alt="${project.name} preview screenshot"
            class="project-screenshot"
            width="1024"
            height="490"
            loading="${isFirst ? 'eager' : 'lazy'}"
            decoding="async"
          />
          <div class="screenshot-sheen" aria-hidden="true"></div>
        </div>
      </div>
    `
    : `
      <div class="project-card-fallback layer-bg" aria-hidden="true">
        <div class="fallback-browser-bar layer-frame">
          <div class="fallback-dot"></div>
          <div class="fallback-dot"></div>
          <div class="fallback-dot"></div>
        </div>
        <div class="fallback-content layer-screen">
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
    <article class="project-card reveal" style="transition-delay: ${delay}ms;" data-project-id="${project.id}">
      <div class="project-card-inner">
      
        ${visualContent}
        
        <div class="project-card-content">
          <header class="project-card-header layer-md">
            <h3 class="project-card-title layer-fg">${project.name}</h3>
            <div class="project-card-meta">
              <span>${project.type || project.category}</span>
              <span class="meta-sep" aria-hidden="true">&bull;</span>
              <span>${project.status}</span>
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
              <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-action-link project-action-live">
                <span>Live Demo</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            ` : ''}
            ${project.githubUrl ? `
              <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="project-action-link project-action-github">
                <span>View Source</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            ` : ''}
            ${project.caseStudyUrl ? `
              <a href="${project.caseStudyUrl}" class="project-action-link project-action-casestudy">
                <span>View Case Study &rarr;</span>
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

  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motionQuery.matches) return;

  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!canHover) return;

  cards.forEach(card => {
    let rafId = null;

    const handleMouseMove = (e) => {
      // Disable 3D on mobile viewports (< 768px)
      if (window.innerWidth < 768) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Normalize from -0.5 to 0.5
      const xNorm = (x / rect.width) - 0.5;
      const yNorm = (y / rect.height) - 0.5;

      // Scale down slightly on tablet (768px - 1024px)
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
      const intensity = isTablet ? 0.5 : 1.0;

      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        card.style.setProperty('--card-rot-x', (yNorm * intensity).toFixed(4));
        card.style.setProperty('--card-rot-y', (xNorm * intensity).toFixed(4));
        card.style.setProperty('--card-hover', (1 * intensity).toFixed(2));
      });
    };

    const handleMouseLeave = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        card.style.setProperty('--card-rot-x', '0');
        card.style.setProperty('--card-rot-y', '0');
        card.style.setProperty('--card-hover', '0');
      });
    };

    card.addEventListener('mousemove', handleMouseMove, { passive: true });
    card.addEventListener('mouseleave', handleMouseLeave, { passive: true });
  });
}
