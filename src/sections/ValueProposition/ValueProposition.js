import './ValueProposition.css';

export function renderValueProposition() {
  return `
    <section id="why-work-with-me" class="section value-section" aria-labelledby="value-title">
      <div class="container value-container">
        
        <div class="value-left reveal">
          <div class="value-header">
            <h2 id="value-title" class="value-headline">YOUR WEBSITE SHOULD DO MORE THAN EXIST.</h2>
            <p class="value-subhead">
              Your website is often the first impression people have of your business. I focus on creating digital experiences that make that first impression clear, modern, and memorable.
            </p>
            <div class="value-cta">
              <span style="display: block; font-weight: 600; margin-bottom: var(--space-sm);">Have a website idea? Let's build it.</span>
              <a href="#contact" class="btn btn--primary">Start a Project</a>
            </div>
          </div>
        </div>

        <div class="value-right">
          <div class="value-grid">
            <div class="value-item reveal" style="transition-delay: 100ms;">
              <h3 class="value-item-title">Modern Design</h3>
              <p class="value-item-desc">Clean, contemporary interfaces focused on visual quality and usability.</p>
            </div>
            
            <div class="value-item reveal" style="transition-delay: 200ms;">
              <h3 class="value-item-title">Responsive Experience</h3>
              <p class="value-item-desc">Websites designed to work flawlessly across mobile, tablet, and desktop.</p>
            </div>
            
            <div class="value-item reveal" style="transition-delay: 300ms;">
              <h3 class="value-item-title">Attention to Detail</h3>
              <p class="value-item-desc">Careful attention to spacing, typography, layout, interaction, and visual consistency.</p>
            </div>
            
            <div class="value-item reveal" style="transition-delay: 400ms;">
              <h3 class="value-item-title">Direct Collaboration</h3>
              <p class="value-item-desc">A simple communication-focused workflow where your requirements guide the website.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  `;
}
