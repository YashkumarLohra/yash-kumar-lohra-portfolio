import './styles/base.css';
import { renderNavbar, initNavbar } from './components/Navbar/Navbar.js';
import { renderHero } from './sections/Hero/Hero.js';
import { renderServices } from './sections/Services/Services.js';
import { renderValueProposition } from './sections/ValueProposition/ValueProposition.js';
import { renderFeaturedWork } from './sections/FeaturedWork/FeaturedWork.js';
import { renderAbout } from './sections/About/About.js';
import { renderSkills } from './sections/Skills/Skills.js';
import { initScrollReveal } from './utils/scrollReveal.js';

// Development Day 2 Setup
const app = document.querySelector('#app');

app.innerHTML = `
  ${renderNavbar()}
  <main>
    ${renderHero()}
    ${renderServices()}
    ${renderValueProposition()}
    ${renderFeaturedWork()}
    ${renderAbout()}
    ${renderSkills()}
  </main>
`;

// Initialize component logic
initNavbar();
initScrollReveal();
