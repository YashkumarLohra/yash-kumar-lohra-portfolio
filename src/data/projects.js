// src/data/projects.js
export const projects = [
  {
    id: 'lumiere',
    slug: 'lumiere-restaurant',
    name: 'Lumière Restaurant Website',
    shortDescription: 'Luxury restaurant website with premium web design and responsive frontend development.',
    description: 'Lumière is a luxury restaurant website created to demonstrate premium web design, responsive frontend development, UI/UX, motion design, and hospitality branding.',
    category: 'Web Development & UI/UX',
    year: new Date().getFullYear().toString(),
    status: 'Completed',
    technologies: [
      'HTML5',
      'Semantic HTML',
      'Vanilla CSS3',
      'CSS Variables',
      'Flexbox',
      'CSS Grid',
      'Glassmorphism',
      'CSS Keyframes',
      'Dark/Light Themes',
      'Vanilla JavaScript ES6+'
    ],
    features: [
      'Accessible HTML structure',
      'Modular JavaScript architecture',
      'Google Fonts integration',
      'Inline SVG icons'
    ],
    githubUrl: 'https://github.com/YashkumarLohra/lumiere-restaurant-website',
    liveUrl: 'https://lumiererestaurantwebsite.netlify.app/',
    featured: true
  }
];
