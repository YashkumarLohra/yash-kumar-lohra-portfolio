import './Services.css';
import { services } from '../../data/services.js';
import { renderServiceCard } from '../../components/ServiceCard/ServiceCard.js';

export function renderServices() {
  return `
    <section id="services" class="services-section" aria-labelledby="services-title">
      <div class="container">
        
        <header class="services-header reveal">
          <span class="services-eyebrow">Services</span>
          <h2 id="services-title" class="services-headline">WHAT I CAN BUILD FOR YOU</h2>
          <p class="services-subhead">
            I create modern websites and digital experiences tailored to businesses, brands, and ideas.
          </p>
        </header>

        <div class="services-grid">
          ${services.map((service, index) => renderServiceCard(service, index)).join('')}
        </div>

      </div>
    </section>
  `;
}
