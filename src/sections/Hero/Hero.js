import './Hero.css';
import { renderSocialLinks } from '../../components/SocialLinks/SocialLinks.js';

export function renderHero() {
  return `
    <section class="hero-section" id="hero" aria-label="Introduction">
      <div class="container hero-grid">
        
        <!-- Left Content -->
        <div class="hero-content">
          <span class="hero-eyebrow">Freelance Web Developer</span>
          <h1 class="hero-headline">
            I BUILD WEBSITES<br>
            THAT MAKE BUSINESSES<br>
            STAND OUT.
          </h1>
          <p class="hero-subhead">
            I design and build modern, responsive websites and landing pages for businesses, brands, and ideas.
          </p>
          
          <div class="hero-ctas">
            <a href="#work" class="btn btn--primary">View My Work</a>
            <a href="#contact" class="btn">Let's Work Together</a>
          </div>

          <div class="hero-social">
            ${renderSocialLinks()}
          </div>
        </div>

        <!-- Right Visual (CSS 3D Depth) -->
        <div class="hero-visual-container" aria-hidden="true">
          <div class="hero-visual-mesh">
            <div class="visual-layer layer-3"></div>
            <div class="visual-layer layer-2"></div>
            <div class="visual-layer layer-1"></div>
          </div>
        </div>

      </div>
    </section>
  `;
}
