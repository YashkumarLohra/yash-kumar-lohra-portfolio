import './Projects.css';
import { projects } from '../../data/projects.js';
import { renderProjectCard } from '../../components/ProjectCard/ProjectCard.js';

const PROJECT_CATEGORIES = ['All', 'Websites', 'Landing Pages', 'UI/UX', 'AI / SaaS'];

export function renderProjects() {
  // If no projects exist (unlikely), show an empty state safely.
  const hasProjects = projects && projects.length > 0;

  const filterHTML = hasProjects ? `
    <div class="projects-filter-container reveal">
      <ul class="projects-filter-list" role="tablist" aria-label="Project Categories">
        ${PROJECT_CATEGORIES.map((cat, index) => `
          <li role="presentation">
            <button 
              class="projects-filter-btn ${index === 0 ? 'active' : ''}" 
              role="tab" 
              aria-selected="${index === 0 ? 'true' : 'false'}"
              data-filter="${cat === 'All' ? 'all' : cat}"
            >
              ${cat}
            </button>
          </li>
        `).join('')}
      </ul>
    </div>
  ` : '';

  return `
    <section id="projects" class="section projects-section" aria-labelledby="projects-title">
      <div class="container">
        
        <header class="projects-header reveal">
          <span class="projects-eyebrow">Work Showcase &bull; ${projects.length < 10 ? '0' + projects.length : projects.length} PROJECTS</span>
          <h2 id="projects-title" class="projects-headline">SELECTED PROJECTS.</h2>
          <p class="projects-subhead">
            A selection of websites and digital experiences I've built while developing my craft across frontend development and design.
          </p>
        </header>

        ${filterHTML}

        ${hasProjects ? `
          <div class="projects-grid">
            ${projects.map((project, index) => renderProjectCard(project, index)).join('')}
            <div class="projects-filter-empty" aria-live="polite">
              No projects in this category yet.
            </div>
          </div>
        ` : `
          <div class="projects-empty reveal">
            Projects are currently being updated. Check back soon.
          </div>
        `}

      </div>
    </section>
  `;
}

export function initProjectsFilter() {
  const filterBtns = document.querySelectorAll('.projects-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const emptyState = document.querySelector('.projects-filter-empty');

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterValue = btn.getAttribute('data-filter');
      let visibleCount = 0;

      // Filter projects
      projectCards.forEach(card => {
        const categoriesStr = card.getAttribute('data-categories');
        if (!categoriesStr) return;
        
        const categories = categoriesStr.split(',');
        
        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.classList.remove('hidden');
          card.style.display = '';
          visibleCount++;
        } else {
          card.classList.add('hidden');
          card.style.display = 'none';
        }
      });

      // Handle empty state
      if (emptyState) {
        emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    });
  });
}
