import './Process.css';
import { processData } from '../../data/process.js';

function renderProcessStep(step, index) {
  const delay = (index + 1) * 150;
  return `
    <article class="process-step reveal" style="transition-delay: ${delay}ms;">
      <div class="process-step-node" aria-hidden="true"></div>
      <span class="process-step-number">${step.number}</span>
      <h3 class="process-step-title">${step.title}</h3>
      <p class="process-step-desc">${step.description}</p>
      ${step.outcome ? `<span class="process-step-outcome">Outcome: ${step.outcome}</span>` : ''}
    </article>
  `;
}

export function renderProcess() {
  return `
    <section id="process" class="section process-section" aria-labelledby="process-title">
      <div class="container">
        
        <div class="process-container">
          
          <header class="process-header reveal">
            <span class="process-eyebrow">How I Work</span>
            <h2 id="process-title" class="process-headline">FROM IDEA TO LAUNCH.</h2>
            <p class="process-subhead">
              Every project starts with understanding what you need, then moves through design, development, refinement, and launch.
            </p>
          </header>

          <div class="process-content">
            <div class="process-list">
              ${processData.map((step, i) => renderProcessStep(step, i)).join('')}
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}
