import { siteConfig } from '../../config/site.js';

export function renderSocialLinks() {
  const { social } = siteConfig;
  
  // Minimal SVGs for social platforms
  const icons = {
    linkedin: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
    github: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`,
    fiverr: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`, // Placeholder abstract icon
    upwork: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>`, // Placeholder abstract icon
    freelancer: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>` // Abstract tech icon
  };

  const getLinkHTML = (url, name, icon) => {
    if (!url) return '';
    return `
      <a href="${url}" target="_blank" rel="noopener noreferrer" aria-label="${name}" title="${name}" class="social-link" style="color: var(--color-text-secondary); display: inline-flex; align-items: center; justify-content: center; padding: var(--space-xs); transition: color var(--transition-fast);">
        ${icon}
      </a>
    `;
  };

  return `
    <div class="social-links" style="display: flex; gap: var(--space-md); align-items: center;">
      ${getLinkHTML(social.linkedin, 'LinkedIn', icons.linkedin)}
      ${getLinkHTML(social.fiverr, 'Fiverr', icons.fiverr)}
      ${getLinkHTML(social.upwork, 'Upwork', icons.upwork)}
      ${getLinkHTML(social.freelancer, 'Freelancer', icons.freelancer)}
      ${getLinkHTML(social.github, 'GitHub', icons.github)}
    </div>
  `;
}
