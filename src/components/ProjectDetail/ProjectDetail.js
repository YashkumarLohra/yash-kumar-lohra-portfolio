import './ProjectDetail.css';

/**
 * Foundation for a project detail / case study view.
 * Designed to be rendered as an overlay or dedicated view in the future.
 * Only renders sections where factual data exists.
 */
export function renderProjectDetail(project) {
  if (!project) return '';

  const {
    name,
    type,
    year,
    description,
    objective,
    problem,
    solution,
    challenges,
    impact,
    technologies,
    screenshots,
    liveUrl,
    githubUrl
  } = project;

  // Reusable section renderer that safely ignores null/empty data
  const renderSection = (title, content) => {
    if (!content) return '';
    return `
      <section class="case-study-section">
        <h3 class="case-study-section-title">${title}</h3>
        <div class="case-study-section-content">${content}</div>
      </section>
    `;
  };

  const techTags = (technologies || [])
    .map(tech => `<span class="project-card-tech-item">${tech}</span>`)
    .join('');

  return `
    <article class="project-detail" aria-labelledby="case-study-title">
      <header class="project-detail-header">
        <div class="container">
          <span class="project-detail-eyebrow">${type} &bull; ${year}</span>
          <h1 id="case-study-title" class="project-detail-title">${name}</h1>
          <p class="project-detail-desc">${description}</p>
          
          <div class="project-detail-actions">
            ${liveUrl ? `<a href="${liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn--primary">Live Demo</a>` : ''}
            ${githubUrl ? `<a href="${githubUrl}" target="_blank" rel="noopener noreferrer" class="btn">View Source</a>` : ''}
          </div>
        </div>
      </header>

      ${screenshots && screenshots.length > 0 ? `
        <figure class="project-detail-hero-img">
          <img src="${screenshots[0]}" alt="${name} primary screenshot" width="1024" height="490" loading="eager" />
        </figure>
      ` : ''}

      <div class="container case-study-body">
        <div class="case-study-content">
          ${renderSection('Overview & Objective', objective)}
          ${renderSection('The Problem', problem)}
          ${renderSection('The Solution', solution)}
          ${renderSection('Technical Challenges', challenges)}
          ${renderSection('Measurable Impact', impact)}
        </div>
        
        <aside class="case-study-sidebar">
          ${technologies && technologies.length > 0 ? `
            <div class="case-study-tech">
              <h4 class="case-study-sidebar-title">Technologies</h4>
              <div class="project-card-tech">
                ${techTags}
              </div>
            </div>
          ` : ''}
        </aside>
      </div>
    </article>
  `;
}
