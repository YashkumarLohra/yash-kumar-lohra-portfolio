import './JourneyStep.css';

export function renderJourneyStep(step, index) {
  const delay = (index + 1) * 150;
  return `
    <li class="journey-step reveal" style="transition-delay: ${delay}ms;">
      <div class="journey-step-content">
        <div class="journey-step-header">
          <span class="journey-step-number">${step.number}</span>
          <h3 class="journey-step-title">${step.title}</h3>
        </div>
        <p class="journey-step-desc">${step.description}</p>
      </div>
    </li>
  `;
}
