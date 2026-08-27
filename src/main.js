import './styles/base.css';
import { siteConfig } from './config/site.js';
import { projects } from './data/projects.js';

// Development Day 1 Foundation Setup
document.querySelector('#app').innerHTML = `
  <main style="padding: var(--space-xl) var(--space-md);">
    <h1 style="margin-bottom: var(--space-sm);">${siteConfig.name}</h1>
    <p style="color: var(--color-text-secondary); margin-bottom: var(--space-lg);">${siteConfig.role}</p>
    
    <div style="margin-bottom: var(--space-xl);">
      <a href="mailto:${siteConfig.email}" class="btn btn--primary">Get in Touch</a>
    </div>

    <section>
      <h2 style="margin-bottom: var(--space-md);">Featured Work</h2>
      <div style="background: var(--color-bg-surface); padding: var(--space-md); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
        <h3 style="margin-bottom: var(--space-xs);">${projects[0].name}</h3>
        <p style="color: var(--color-text-secondary); margin-bottom: var(--space-md);">${projects[0].shortDescription}</p>
        <a href="${projects[0].liveUrl}" target="_blank" class="btn">View Project</a>
      </div>
    </section>
  </main>
`;
