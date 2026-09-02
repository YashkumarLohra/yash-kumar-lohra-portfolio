import './Hero.css';
import { renderSocialLinks } from '../../components/SocialLinks/SocialLinks.js';
import { siteConfig } from '../../config/site.js';
import profileImg from '../../assets/images/profile.jpg';

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

        <!-- Right Visual (CSS 3D Depth + Professional Profile Photo) -->
        <div class="hero-visual-container" aria-label="Professional profile of ${siteConfig.name}">
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
              
              <!-- 3. PRIMARY 3D COMPOSITION: PROFESSIONAL PORTRAIT -->
              <div class="visual-layer layer-primary">
                <div class="hero-portrait-card">
                  <div class="hero-portrait-frame">
                    <img 
                      src="${profileImg}" 
                      alt="${siteConfig.name} — Freelance Web Developer and UI/UX Designer" 
                      class="hero-portrait-img"
                      width="1024"
                      height="1024"
                      loading="eager"
                      fetchpriority="high"
                      decoding="async"
                    />
                    <div class="hero-portrait-glare" aria-hidden="true"></div>
                  </div>
                  
                  <!-- Floating Identity Badge -->
                  <div class="hero-portrait-badge layer-badge" aria-label="Identity Label">
                    <span class="badge-name">${siteConfig.name}</span>
                    <span class="badge-sep" aria-hidden="true">&bull;</span>
                    <span class="badge-role">Freelance Web Developer</span>
                  </div>
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

  // Respect reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Disable on touch-only devices
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!canHover) return;

  let rafId = null;

  const handleMouseMove = (e) => {
    // Disable on mobile viewports (< 768px)
    if (window.innerWidth < 768) return;

    const rect = heroSection.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalize coordinates from -0.5 to 0.5
    const xNorm = (x / rect.width) - 0.5;
    const yNorm = (y / rect.height) - 0.5;

    // Scale intensity on tablet (768px - 991px)
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 992;
    const intensity = isTablet ? 0.5 : 1.0;

    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      // Subtle clamping: maximum ~5deg to 6deg
      parallaxContainer.style.setProperty('--mouse-x', (xNorm * intensity).toFixed(3));
      parallaxContainer.style.setProperty('--mouse-y', (yNorm * intensity).toFixed(3));
      parallaxContainer.style.setProperty('--hero-hover', (1 * intensity).toFixed(2));
    });
  };

  heroSection.addEventListener('mousemove', handleMouseMove, { passive: true });
  
  // Clean reset when mouse leaves
  heroSection.addEventListener('mouseleave', () => {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      parallaxContainer.style.setProperty('--mouse-x', '0');
      parallaxContainer.style.setProperty('--mouse-y', '0');
      parallaxContainer.style.setProperty('--hero-hover', '0');
    });
  }, { passive: true });
}
