import './Experience.css';
import { experienceData } from '../../data/experience.js';

function renderExperienceItem(exp, index) {
  const delay = (index + 1) * 150;
  const numberStr = String(index + 1).padStart(2, '0');

  const highlights = exp.highlights 
    ? `<ul class="experience-highlights" aria-label="Selected focus areas">
        ${exp.highlights.map(h => `<li class="experience-highlight-item">${h}</li>`).join('')}
       </ul>` 
    : '';

  return `
    <article class="experience-item reveal" style="transition-delay: ${delay}ms;">
      <div class="experience-meta">
        <span class="experience-number">${numberStr}</span>
        <span class="experience-period">${exp.period}</span>
      </div>
      <h3 class="experience-role">${exp.role}</h3>
      <div class="experience-org">${exp.organization} &bull; ${exp.type}</div>
      <p class="experience-desc">${exp.description}</p>
      ${highlights}
    </article>
  `;
}

export function renderExperience() {
  const currentFocusAreas = [
    "Frontend Development",
    "UI/UX Design",
    "JavaScript",
    "AI & Technology",
    "Website Building"
  ];

  return `
    <section id="experience" class="section experience-section" aria-labelledby="experience-title">
      <div class="container">
        
        <header class="experience-header reveal">
          <span class="experience-eyebrow">Professional Journey</span>
          <h2 id="experience-title" class="experience-headline">EXPERIENCE.</h2>
        </header>

        <div class="experience-container">
          
          <div class="experience-list">
            ${experienceData.map((exp, i) => renderExperienceItem(exp, i)).join('')}
          </div>

          <aside class="experience-focus reveal" style="transition-delay: 300ms;">
            <h3 class="experience-focus-title">CURRENTLY BUILDING</h3>
            <p class="experience-focus-desc">
              Alongside my B.Tech studies, I'm turning what I learn into real websites and digital experiences. My focus is on improving frontend development, UI/UX design, and practical problem solving through projects.
            </p>
            <div class="experience-focus-list">
              ${currentFocusAreas.map(area => `<span class="experience-focus-tag">${area}</span>`).join('')}
            </div>
          </aside>

        </div>

      </div>
    </section>
  `;
}
