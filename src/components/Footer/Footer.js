import './Footer.css';
import { siteConfig } from '../../config/site.js';

export function renderFooter() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "LinkedIn", url: siteConfig.social.linkedin },
    { name: "Fiverr", url: siteConfig.social.fiverr },
    { name: "Upwork", url: siteConfig.social.upwork },
    { name: "Freelancer", url: siteConfig.social.freelancer },
    { name: "GitHub", url: siteConfig.social.github }
  ].filter(link => link.url);

  return `
    <footer class="site-footer">
      <div class="container">
        
        <div class="footer-top">
          <!-- Brand Column -->
          <div class="footer-brand">
            <a href="#top" class="footer-logo">${siteConfig.name.split(' ')[0].toUpperCase()}.</a>
            <p class="footer-role">${siteConfig.role}</p>
            <a href="#contact" class="footer-cta">Let's build something meaningful &rarr;</a>
          </div>

          <!-- Quick Navigation -->
          <div class="footer-nav-col">
            <h3 class="footer-nav-title">Navigation</h3>
            <nav aria-label="Footer navigation">
              <ul class="footer-nav-list">
                <li><a href="#work" class="footer-nav-link">Work</a></li>
                <li><a href="#services" class="footer-nav-link">Services</a></li>
                <li><a href="#about" class="footer-nav-link">About</a></li>
                <li><a href="#experience" class="footer-nav-link">Experience</a></li>
              </ul>
            </nav>
          </div>

          <!-- Connect Column -->
          <div class="footer-social-col">
            <h3 class="footer-nav-title">Connect</h3>
            <div class="footer-social-list">
              <a href="mailto:${siteConfig.email}" class="footer-social-link">Email</a>
              ${socialLinks.map(link => `
                <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="footer-social-link">
                  ${link.name}
                </a>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="footer-copyright">
            &copy; ${currentYear} ${siteConfig.name}. All rights reserved.
          </div>
          <a href="#top" class="footer-back-to-top" aria-label="Back to top">Back to top &uarr;</a>
        </div>

      </div>
    </footer>
  `;
}
