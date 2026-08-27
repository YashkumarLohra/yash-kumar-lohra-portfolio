import './Journey.css';
import { journeyData } from '../../data/journey.js';
import { renderJourneyStep } from '../../components/JourneyStep/JourneyStep.js';

export function renderJourney() {
  return `
    <section id="journey" class="journey-section" aria-labelledby="journey-title">
      <div class="container">
        
        <div class="journey-container">
          
          <header class="journey-header reveal">
            <span class="journey-eyebrow">Professional Progression</span>
            <h2 id="journey-title" class="journey-headline">STILL BUILDING.</h2>
            <p class="journey-lead">I'm building my skills by turning what I learn into things people can actually use.</p>
          </header>

          <div>
            <ol class="journey-timeline" aria-label="Professional Journey Steps">
              ${journeyData.map((step, index) => renderJourneyStep(step, index)).join('')}
            </ol>
            
            <div class="journey-footer reveal" style="transition-delay: 400ms;">
              <span class="journey-footer-text">More to build. More to learn.</span>
              <a href="#contact" class="journey-footer-link">Let's Work Together &rarr;</a>
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}
