import './Projects.css';
import { projects } from '../../data/projects.js';
import { renderProjectCard } from '../../components/ProjectCard/ProjectCard.js';

export function renderProjects() {
  // If no projects exist (unlikely), show an empty state safely.
  const hasProjects = projects && projects.length > 0;

  return `
    <section id="projects" class="projects-section" aria-labelledby="projects-title">
      <div class="container">
        
        <header class="projects-header reveal">
          <span class="projects-eyebrow">Work Showcase &bull; ${projects.length < 10 ? '0' + projects.length : projects.length} PROJECTS</span>
          <h2 id="projects-title" class="projects-headline">SELECTED PROJECTS.</h2>
          <p class="projects-subhead">
            A selection of websites and digital experiences I've built while developing my craft across frontend development and design.
          </p>
        </header>

        ${hasProjects ? `
          <div class="projects-grid">
            ${projects.map((project, index) => renderProjectCard(project, index)).join('')}
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
