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
          <div class="hero-visual-parallax">
            <div class="hero-visual-mesh">
              
              <!-- 1. BACKGROUND DEPTH -->
              <div class="visual-layer layer-bg">
                <div class="bg-grid"></div>
              </div>
              
              <!-- 2. MIDGROUND GEOMETRIC ELEMENTS -->
              <div class="visual-layer layer-mid">
                <div class="geometric-shape shape-circle"></div>
                <div class="geometric-shape shape-square"></div>
              </div>
              
              <!-- 3. PRIMARY 3D OBJECT/COMPOSITION -->
              <div class="visual-layer layer-primary">
                <div class="primary-glass-panel">
                  <div class="glass-reflection"></div>
                </div>
              </div>
              
              <!-- 4. FOREGROUND DETAIL -->
              <div class="visual-layer layer-fg">
                <div class="fg-element fg-dot"></div>
                <div class="fg-element fg-line"></div>
                <div class="fg-element fg-cross"></div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  `;
}

export function initHero() {
  const heroSection = document.querySelector('.hero-section');
  const parallaxContainer = document.querySelector('.hero-visual-parallax');
  
  if (!heroSection || !parallaxContainer) return;

  const handleMouseMove = (e) => {
    // Respect reduced motion preferences
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    
    // Disable on mobile/tablet to prioritize performance and usability
    if (window.innerWidth < 1024) return;

    const rect = heroSection.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalize coordinates from -0.5 to 0.5
    const xNorm = (x / rect.width) - 0.5;
    const yNorm = (y / rect.height) - 0.5;

    // Use requestAnimationFrame for smooth performance
    requestAnimationFrame(() => {
      parallaxContainer.style.setProperty('--mouse-x', xNorm.toFixed(3));
      parallaxContainer.style.setProperty('--mouse-y', yNorm.toFixed(3));
    });
  };

  heroSection.addEventListener('mousemove', handleMouseMove);
  
  // Reset when mouse leaves the section
  heroSection.addEventListener('mouseleave', () => {
    requestAnimationFrame(() => {
      parallaxContainer.style.setProperty('--mouse-x', 0);
      parallaxContainer.style.setProperty('--mouse-y', 0);
    });
  });
}
