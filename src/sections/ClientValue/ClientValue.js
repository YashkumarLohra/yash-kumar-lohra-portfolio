import './ClientValue.css';
import { clientValueData } from '../../data/clientValue.js';
import { renderClientValueCard } from '../../components/ClientValueCard/ClientValueCard.js';

export function renderClientValue() {
  return `
    <section id="why-work-with-me" class="section client-value-section" aria-labelledby="cv-title">
      <div class="container">
        
        <header class="cv-header reveal">
          <span class="cv-eyebrow">Client Value</span>
          <h2 id="cv-title" class="cv-headline">BUILT AROUND YOUR GOALS.</h2>
          <p class="cv-lead">Good websites are more than visual pieces. They should communicate clearly, represent the business, and make it easy for people to take the next step.</p>
        </header>

        <div class="cv-grid">
          ${clientValueData.map((val, index) => renderClientValueCard(val, index)).join('')}
        </div>

      </div>
    </section>
  `;
}
