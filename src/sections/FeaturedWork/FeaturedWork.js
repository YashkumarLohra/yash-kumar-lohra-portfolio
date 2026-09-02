import './FeaturedWork.css';
import { projects } from '../../data/projects.js';

export function renderFeaturedWork() {
  // Find Lumière project specifically as requested
  const lumiere = projects.find(p => p.id === 'lumiere');
  
  if (!lumiere) return ''; // Fail gracefully if data is missing

  // Simplify tech list for visual presentation (take first 6 to keep it clean)
  const displayTech = lumiere.technologies.slice(0, 6);

  return `
    <section id="work" class="section work-section" aria-labelledby="work-title">
      <div class="container">
        
        <header class="work-header reveal">
          <span class="work-eyebrow">Selected Work</span>
          <h2 id="work-title" class="work-headline">BUILT WITH PURPOSE.</h2>
        </header>

        <article class="featured-project">
          
          <figure class="project-visual-wrapper reveal">
            ${lumiere.image 
              ? `<img src="${lumiere.image}" alt="${lumiere.name} homepage" class="project-visual-img" />`
              : `
              <div class="project-visual-browser" aria-hidden="true">
                <div class="browser-dot"></div>
                <div class="browser-dot"></div>
                <div class="browser-dot"></div>
              </div>
              <div class="project-visual-content" aria-hidden="true">
                <div class="visual-skeleton-hero"></div>
                <div class="visual-skeleton-grid">
                  <div class="visual-skeleton-box"></div>
                  <div class="visual-skeleton-box"></div>
                </div>
              </div>
              `
            }
          </figure>

          <!-- Project Information -->
          <div class="project-info reveal" style="transition-delay: 200ms;">
            <span class="project-badge">01 / Featured</span>
            
            <h3 class="project-title">${lumiere.name}</h3>
            
            <div class="project-category">
              ${lumiere.category} &bull; ${lumiere.status}
            </div>
            
            <p class="project-desc">
              ${lumiere.description}
            </p>
            
            <div class="project-tech-list" aria-label="Technologies used">
              ${displayTech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>

            <div class="project-ctas">
              <a href="${lumiere.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn--primary">
                View Live Website
              </a>
              <a href="${lumiere.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn">
                View Source
              </a>
            </div>
          </div>

        </article>

      </div>
    </section>
  `;
}
