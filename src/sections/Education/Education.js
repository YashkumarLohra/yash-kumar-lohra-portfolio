import './Education.css';
import { educationData } from '../../data/education.js';

function renderEducationItem(edu, index) {
  const delay = (index + 1) * 150;

  return `
    <article class="education-item reveal" style="transition-delay: ${delay}ms;">
      <span class="education-period">${edu.period}</span>
      <h3 class="education-degree">${edu.degree}</h3>
      <div class="education-org">${edu.institution}</div>
      <div class="education-location">${edu.location}</div>
      <div class="education-status">${edu.status}</div>
      <p class="education-desc">${edu.description}</p>
    </article>
  `;
}

export function renderEducation() {
  const learningAreas = [
    "Exploring Web Development",
    "Developing UI/UX instincts",
    "Learning Programming Fundamentals",
    "Engaging with AI & Technology"
  ];

  return `
    <section id="education" class="education-section" aria-labelledby="education-title">
      <div class="container">
        
        <header class="education-header reveal">
          <span class="education-eyebrow">Academic Background</span>
          <h2 id="education-title" class="education-headline">WHERE I'M LEARNING.</h2>
        </header>

        <div class="education-container">
          
          <div class="education-list">
            ${educationData.map((edu, i) => renderEducationItem(edu, i)).join('')}
          </div>

          <aside class="education-learning-block reveal" style="transition-delay: 300ms;">
            <h3 class="learning-block-title">LEARNING BY BUILDING</h3>
            <p class="learning-block-desc">
              Academic learning becomes more meaningful when it is applied to real projects.
            </p>
            <ul class="learning-focus-list" aria-label="Academic application areas">
              ${learningAreas.map(area => `<li class="learning-focus-item">${area}</li>`).join('')}
            </ul>
          </aside>

        </div>

      </div>
    </section>
  `;
}
