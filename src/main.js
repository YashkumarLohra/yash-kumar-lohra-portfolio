import './styles/base.css';
import { renderNavbar, initNavbar } from './components/Navbar/Navbar.js';
import { renderHero } from './sections/Hero/Hero.js';

// Development Day 2 Setup
const app = document.querySelector('#app');

app.innerHTML = `
  ${renderNavbar()}
  <main>
    ${renderHero()}
  </main>
`;

// Initialize component logic
initNavbar();
