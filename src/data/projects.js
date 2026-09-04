// src/data/projects.js
import lumiereImg from '../assets/images/projects/lumiere.png';
import primeestateImg from '../assets/images/projects/primeestate.png';
import growthsparkImg from '../assets/images/projects/growthspark.png';
import aisaasImg from '../assets/images/projects/aisaas.png';

export const projects = [
  {
    id: 'lumiere',
    name: 'Lumière Restaurant Website',
    shortName: 'Lumière',
    categories: ['Websites', 'UI/UX'],
    type: 'Restaurant / Hospitality',
    year: '2026',
    status: 'Completed',
    shortDescription: 'Luxury restaurant website demonstrating premium web design and responsive frontend architecture.',
    description: 'Engineered a luxury restaurant website to showcase premium web design, responsive frontend development, UI/UX optimization, motion design, and hospitality branding.',
    objective: 'Develop a highly responsive and visually engaging frontend interface with premium aesthetics.',
    problem: null,
    solution: null,
    challenges: null,
    impact: null,
    technologies: [
      'HTML5',
      'Vanilla CSS3',
      'JavaScript ES6+',
      'CSS Grid & Flexbox',
      'Glassmorphism',
      'Responsive UI'
    ],
    features: [
      'Accessible HTML structure',
      'Modular JavaScript architecture',
      'Google Fonts integration',
      'Inline SVG icons'
    ],
    image: lumiereImg,
    screenshots: [lumiereImg],
    githubUrl: 'https://github.com/YashkumarLohra/lumiere-restaurant-website',
    liveUrl: 'https://lumiererestaurantwebsite.netlify.app/',
    caseStudyUrl: null,
    featured: true
  },
  {
    id: 'primeestate',
    name: 'PrimeEstate Real Estate',
    shortName: 'PrimeEstate',
    categories: ['Landing Pages', 'UI/UX'],
    type: 'Landing Page',
    year: '2026',
    status: 'Completed',
    shortDescription: 'A premium real estate landing page with a modern visual system and responsive layouts.',
    description: 'Built a premium real estate landing page designed to present properties through a modern visual system, responsive property-focused sections, and a polished, accessible browsing experience.',
    objective: 'Create a clean, conversion-focused landing page layout for real estate property presentation.',
    problem: null,
    solution: null,
    challenges: null,
    impact: null,
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript ES6+',
      'Frontend Architecture'
    ],
    features: [
      'Responsive property presentation',
      'Property-focused sections',
      'Modern landing-page layout',
      'Responsive navigation',
      'Mobile-friendly design'
    ],
    image: primeestateImg,
    screenshots: [primeestateImg],
    githubUrl: 'https://github.com/YashkumarLohra/primeestate-real-estate-landing-page',
    liveUrl: 'https://realestatelandingpg.netlify.app/',
    caseStudyUrl: null,
    featured: false
  },
  {
    id: 'growthspark',
    name: 'Digital Marketing Agency',
    shortName: 'Agency Site',
    categories: ['Websites'],
    type: 'Agency Website',
    year: '2026',
    status: 'Completed',
    shortDescription: 'Modern digital presence focusing on service presentation and professional visual hierarchy.',
    description: 'Developed a modern digital presence for a marketing agency, focusing on service presentation, responsive experience, clear conversion pathways, and professional visual hierarchy.',
    objective: 'Build a professional agency website with clear service offerings and strong calls to action.',
    problem: null,
    solution: null,
    challenges: null,
    impact: null,
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'UI Development',
      'Responsive Design'
    ],
    features: [
      'Agency presentation',
      'Service presentation',
      'Clear CTAs',
      'Professional visual hierarchy'
    ],
    image: growthsparkImg,
    screenshots: [growthsparkImg],
    githubUrl: 'https://github.com/YashkumarLohra/Digital-Marketing-Agency-Website',
    liveUrl: 'https://growthsparkagencywebsite.netlify.app/',
    caseStudyUrl: null,
    featured: false
  },
  {
    id: 'aisaas',
    name: 'AI SaaS Landing Page',
    shortName: 'AI SaaS',
    categories: ['AI / SaaS', 'Landing Pages'],
    type: 'SaaS',
    year: '2026',
    status: 'Completed',
    shortDescription: 'A premium SaaS platform interface designed to help users discover and compare AI tools.',
    description: 'Developed a premium AI SaaS platform interface designed to help users discover, compare, and choose the right AI tools for their tasks through intelligent recommendations and a streamlined product experience.',
    objective: 'Design and build a clean SaaS product layout emphasizing visual hierarchy and clarity.',
    problem: null,
    solution: null,
    challenges: null,
    impact: null,
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Product UI',
      'Modern Web Design'
    ],
    features: [
      'Visual product concept',
      'SaaS layout',
      'Responsive design'
    ],
    image: aisaasImg,
    screenshots: [aisaasImg],
    githubUrl: 'https://github.com/YashkumarLohra/ai-saas-platform',
    liveUrl: 'https://tangerine-cactus-97e14.netlify.app/',
    caseStudyUrl: null,
    featured: false
  }
];
