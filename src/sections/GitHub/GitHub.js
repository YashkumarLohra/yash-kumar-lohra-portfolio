import './GitHub.css';
import { githubConfig } from '../../data/github.js';
import { siteConfig } from '../../config/site.js';

export function renderGitHub() {
  const githubUrl = siteConfig.social.github;
  
  // Decide how to render the CTA based on URL presence
  const ctaMarkup = githubUrl 
    ? `<a href="${githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn--primary github-cta">${githubConfig.ctaLabel}</a>`
    : `<button class="btn btn--primary github-cta disabled" disabled>${githubConfig.ctaLabel} (Coming Soon)</button>`;

  return `
    <section id="github" class="section github-section" aria-labelledby="github-title">
      <div class="container">
        
        <div class="github-grid">
          
          <!-- Left: Content -->
          <div class="github-content reveal">
            <span class="github-eyebrow">${githubConfig.eyebrow}</span>
            <h2 id="github-title" class="github-headline">${githubConfig.title}</h2>
            <p class="github-description">${githubConfig.description}</p>
            ${ctaMarkup}
          </div>

          <!-- Right: Decorative Code Visual -->
          <div class="github-visual reveal" aria-hidden="true" style="transition-delay: 200ms;">
            <div class="code-panel-header">
              <div class="code-dot"></div>
              <div class="code-dot"></div>
              <div class="code-dot"></div>
            </div>
            <div class="code-panel-body">
<span class="code-line"><span class="code-keyword">const</span> <span class="code-variable">developer</span> <span class="code-punctuation">=</span> <span class="code-punctuation">{</span></span>
<span class="code-line">  <span class="code-property">design</span><span class="code-punctuation">:</span> <span class="code-boolean">true</span><span class="code-punctuation">,</span></span>
<span class="code-line">  <span class="code-property">build</span><span class="code-punctuation">:</span> <span class="code-boolean">true</span><span class="code-punctuation">,</span></span>
<span class="code-line">  <span class="code-property">learn</span><span class="code-punctuation">:</span> <span class="code-boolean">true</span><span class="code-punctuation">,</span></span>
<span class="code-line">  <span class="code-property">pushToProduction</span><span class="code-punctuation">:</span> <span class="code-keyword">function</span><span class="code-punctuation">() {</span></span>
<span class="code-line">    <span class="code-keyword">return</span> <span class="code-variable">this</span><span class="code-punctuation">.</span><span class="code-property">build</span><span class="code-punctuation">;</span></span>
<span class="code-line">  <span class="code-punctuation">}</span></span>
<span class="code-line"><span class="code-punctuation">};</span></span>
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}
