import './Navbar.css';

export function renderNavbar() {
  return `
    <header class="navbar-wrapper" id="navbar">
      <div class="container navbar-inner">
        <a href="#" class="navbar-brand" aria-label="Home">YASH.</a>
        
        <!-- Desktop Nav -->
        <nav class="navbar-nav" aria-label="Primary navigation">
          <a href="#work" class="nav-link">Work</a>
          <a href="#services" class="nav-link">Services</a>
          <a href="#about" class="nav-link">About</a>
          <a href="#contact" class="btn btn--primary">Let's Work Together</a>
        </nav>

        <!-- Mobile Toggle -->
        <button class="navbar-mobile-toggle" id="mobile-toggle" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div class="mobile-menu" id="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile navigation">
        <nav style="display: flex; flex-direction: column; align-items: center; gap: var(--space-lg);">
          <a href="#work" class="nav-link mobile-link">Work</a>
          <a href="#services" class="nav-link mobile-link">Services</a>
          <a href="#about" class="nav-link mobile-link">About</a>
          <a href="#contact" class="btn btn--primary mobile-link" style="margin-top: var(--space-md);">Let's Work Together</a>
        </nav>
      </div>
    </header>
  `;
}

export function initNavbar() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('mobile-toggle');
  const menu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  
  let isOpen = false;

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile menu toggle
  const toggleMenu = () => {
    isOpen = !isOpen;
    toggle.setAttribute('aria-expanded', isOpen.toString());
    
    if (isOpen) {
      menu.classList.add('is-open');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
      // Change icon to close (X)
      toggle.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
      toggle.setAttribute('aria-label', 'Close menu');
    } else {
      menu.classList.remove('is-open');
      document.body.style.overflow = '';
      // Change back to hamburger
      toggle.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
      toggle.setAttribute('aria-label', 'Open menu');
    }
  };

  if(toggle) {
    toggle.addEventListener('click', toggleMenu);
  }

  // Close menu when clicking a link
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (isOpen) toggleMenu();
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) {
      toggleMenu();
      toggle.focus();
    }
  });

  // Scrollspy logic for active nav links
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link:not(.btn)');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -80% 0px', // Triggers when section is near top
    threshold: 0
  };

  const scrollspyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const currentId = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${currentId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => scrollspyObserver.observe(sec));
}
