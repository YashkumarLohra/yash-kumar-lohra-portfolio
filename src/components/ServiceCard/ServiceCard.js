import './ServiceCard.css';

export function renderServiceCard(service, index) {
  const delay = (index % 3) * 100;
  
  return `
    <article class="service-card reveal" style="transition-delay: ${delay}ms;">
      <div class="service-card-icon" aria-hidden="true">
        ${service.icon}
      </div>
      <div class="service-card-content">
        <header class="service-card-header">
          <span class="service-card-number">${service.number}</span>
          <h3 class="service-card-title">${service.title}</h3>
        </header>
        <p class="service-card-desc">${service.shortDescription}</p>
      </div>
    </article>
  `;
}
