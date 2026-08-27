import './ClientValueCard.css';

export function renderClientValueCard(value, index) {
  const delay = (index + 1) * 100;
  return `
    <article class="client-value-card reveal" style="transition-delay: ${delay}ms;">
      <span class="client-value-number">${value.number}</span>
      <h3 class="client-value-title">${value.title}</h3>
      <p class="client-value-desc">${value.description}</p>
    </article>
  `;
}
