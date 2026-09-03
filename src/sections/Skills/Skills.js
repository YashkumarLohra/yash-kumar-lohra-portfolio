import './Skills.css';
import { skillsData, currentlyExploring } from '../../data/skills.js';

function renderSkillGroup(group, index) {
  const delay = (index + 1) * 100; // Stagger reveal
  return `
    <article class="skill-group reveal" style="transition-delay: ${delay}ms;">
      <header class="skill-group-header">
        <span class="skill-group-number">${group.number}</span>
        <h3 class="skill-group-title">${group.title}</h3>
      </header>
      <p class="skill-group-desc">${group.description}</p>
      <ul class="skill-list" aria-label="Skills in ${group.title}">
        ${group.skills.map(skill => `<li class="skill-item">${skill}</li>`).join('')}
      </ul>
    </article>
  `;
}

export function renderSkills() {
  return `
    <section id="skills" class="section skills-section" aria-labelledby="skills-title">
      <div class="container">
        
        <header class="skills-header reveal">
          <span class="skills-eyebrow">Capabilities</span>
          <h2 id="skills-title" class="skills-headline">TOOLS FOR TURNING IDEAS INTO EXPERIENCES.</h2>
          <p class="skills-subhead">
            I combine frontend development and visual design to create responsive websites, landing pages, and digital experiences.
          </p>
        </header>

        <div class="skills-grid">
          ${skillsData.map((group, i) => renderSkillGroup(group, i)).join('')}
        </div>

        <div class="skills-exploring reveal" style="transition-delay: 300ms;">
          <h3 class="exploring-label">Currently Exploring &amp; Learning</h3>
          <div class="exploring-list">
            ${currentlyExploring.map(item => `<span class="exploring-tag">${item}</span>`).join('')}
          </div>
        </div>

      </div>
    </section>
  `;
}
