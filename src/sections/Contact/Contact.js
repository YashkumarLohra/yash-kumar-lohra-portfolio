import './Contact.css';
import { siteConfig } from '../../config/site.js';

export function renderContact() {
  const projectTypes = [
    "Business websites",
    "Landing pages",
    "Restaurant & hospitality websites",
    "Gym & fitness websites",
    "Real estate websites",
    "SaaS landing pages",
    "UI/UX web experiences"
  ];

  const socialLinks = [
    { name: "LinkedIn", url: siteConfig.social.linkedin },
    { name: "Fiverr", url: siteConfig.social.fiverr },
    { name: "Upwork", url: siteConfig.social.upwork },
    { name: "Freelancer", url: siteConfig.social.freelancer }
  ].filter(link => link.url);

  return `
    <section id="contact" class="section contact-section" aria-labelledby="contact-title">
      <div class="container">
        
        <div class="contact-container">
          
          <div class="contact-left">
            <header class="contact-header reveal">
              <span class="contact-eyebrow">Start a Project</span>
              <h2 id="contact-title" class="contact-headline">HAVE A PROJECT IN MIND?</h2>
              <p class="contact-lead">Tell me what you're building, and let's talk about how I can turn the idea into a modern web experience.</p>
            </header>

            <div class="reveal" style="transition-delay: 150ms;">
              <h3 class="contact-project-types-title">Current Focus Areas</h3>
              <ul class="contact-project-types" aria-label="Project types accepted">
                ${projectTypes.map(type => `<li>${type}</li>`).join('')}
              </ul>
            </div>
          </div>

          <div class="contact-right contact-methods">
            
            <article class="contact-email-card reveal" style="transition-delay: 200ms;">
              <span class="contact-email-label">Direct Contact</span>
              <a href="mailto:${siteConfig.email}" class="contact-email-link" aria-label="Email Yash">${siteConfig.email}</a>
              <a href="mailto:${siteConfig.email}" class="contact-email-button">Email Me</a>
            </article>

            <article class="contact-social-card reveal" style="transition-delay: 300ms;">
              <h3 class="contact-social-title">Professional Networks</h3>
              <nav aria-label="Social and freelance profiles">
                <div class="contact-social-list">
                  ${socialLinks.map(link => `
                    <a href="${link.url}" class="contact-social-link" target="_blank" rel="noopener noreferrer" aria-label="${link.name} profile">
                      ${link.name}
                      <span class="contact-social-arrow" aria-hidden="true">&#8599;</span>
                    </a>
                  `).join('')}
                </div>
              </nav>
            </article>

          </div>

        </div>

      </div>
    </section>
  `;
}
