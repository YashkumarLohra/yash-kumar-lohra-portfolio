import './About.css';
import { siteConfig } from '../../config/site.js';

export function renderAbout() {
  return `
    <section id="about" class="section about-section" aria-labelledby="about-title">
      <div class="container">
        
        <header class="about-header reveal">
          <span class="about-eyebrow">About</span>
          <h2 id="about-title" class="about-headline">BUILDING TODAY. BECOMING BETTER TOMORROW.</h2>
        </header>

        <div class="about-container">
          
          <!-- Left: Abstract Personal Visual -->
          <div class="about-visual-column reveal" style="transition-delay: 100ms;">
            <div class="about-visual-wrapper" aria-hidden="true">
              <div class="about-visual-grid"></div>
              <span class="about-visual-label label-1">CODE</span>
              <span class="about-visual-label label-2">DESIGN</span>
              <span class="about-visual-label label-3">BUILD</span>
              <span class="about-visual-label label-4">LEARN</span>
              <div class="about-visual-letter">Y</div>
            </div>
          </div>

          <!-- Right: Personal Positioning Copy -->
          <div class="about-content-column">
            
            <h3 class="about-statement reveal" style="transition-delay: 200ms;">
              "I'm interested in the space where technology, design, and real-world problems meet."
            </h3>
            
            <div class="reveal" style="transition-delay: 300ms;">
              <p class="about-paragraph">
                My name is ${siteConfig.name}. I am pursuing a B.Tech in Computer Science at DYPIU.
                I also build websites and landing pages for businesses, brands, and ideas, combining frontend development with visual design to create modern digital experiences.
              </p>
              
              <p class="about-paragraph">
                I'm continuously expanding my skills across web development, UI/UX, AI, and software development while turning what I learn into real projects.
              </p>
            </div>

            <div class="about-info-blocks reveal" style="transition-delay: 400ms;">
              <div class="info-block">
                <span class="info-block-label">Based In / Education</span>
                <span class="info-block-value">B.Tech Computer Science<br>DYPIU</span>
              </div>
              <div class="info-block">
                <span class="info-block-label">Current Focus</span>
                <span class="info-block-value">Web Development &bull; UI/UX<br>AI &bull; Coding</span>
              </div>
              <div class="info-block" style="grid-column: 1 / -1;">
                <span class="info-block-label">Work</span>
                <span class="info-block-value">Freelance Websites & Landing Pages</span>
              </div>
            </div>

            <div class="about-cta reveal" style="transition-delay: 500ms;">
              <span class="about-cta-text">Have a project in mind?</span>
              <a href="#contact" class="btn btn--primary">Let's Talk</a>
            </div>

          </div>
          
        </div>

      </div>
    </section>
  `;
}
