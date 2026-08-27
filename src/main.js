import './styles/base.css';
import { renderNavbar, initNavbar } from './components/Navbar/Navbar.js';
import { renderHero } from './sections/Hero/Hero.js';
import { renderServices } from './sections/Services/Services.js';
import { renderValueProposition } from './sections/ValueProposition/ValueProposition.js';
import { renderFeaturedWork } from './sections/FeaturedWork/FeaturedWork.js';
import { renderAbout } from './sections/About/About.js';
import { renderSkills } from './sections/Skills/Skills.js';
import { renderProcess } from './sections/Process/Process.js';
import { renderProjects } from './sections/Projects/Projects.js';
import { renderExperience } from './sections/Experience/Experience.js';
import { renderEducation } from './sections/Education/Education.js';
import { renderClientValue } from './sections/ClientValue/ClientValue.js';
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
    ${renderProcess()}
    ${renderProjects()}
    ${renderExperience()}
    ${renderEducation()}
    ${renderClientValue()}
  </main>
`;

// Initialize component logic
initNavbar();
initScrollReveal();
