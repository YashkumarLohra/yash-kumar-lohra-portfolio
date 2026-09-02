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
    category: 'Web Development',
    type: 'Restaurant / Hospitality',
    year: '2026',
    status: 'Completed',
    shortDescription: 'Luxury restaurant website with premium web design and responsive frontend development.',
    description: 'Lumière is a luxury restaurant website created to demonstrate premium web design, responsive frontend development, UI/UX, motion design, and hospitality branding.',
    problem: null,
    solution: null,
    technologies: [
      'HTML5',
      'Vanilla CSS3',
      'JavaScript ES6+',
      'CSS Grid & Flexbox',
      'Glassmorphism'
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
    category: 'Web Development',
    type: 'Landing Page',
    year: '2026',
    status: 'Completed',
    shortDescription: 'A premium real estate landing page designed to present properties through a modern visual system.',
    description: 'A premium real estate landing page designed to present properties through a modern visual system, responsive layouts, clear property sections, and a polished browsing experience.',
    problem: null,
    solution: null,
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript'
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
    category: 'Web Development',
    type: 'Agency Website',
    year: '2026',
    status: 'Completed',
    shortDescription: 'A modern digital presence for a marketing agency focusing on professional visual hierarchy and responsive experience.',
    description: 'A modern digital presence for a marketing agency focusing on service presentation, responsive experience, clear CTAs, and a professional visual hierarchy.',
    problem: null,
    solution: null,
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript'
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
    category: 'Web Development',
    type: 'SaaS',
    year: '2026',
    status: 'Completed',
    shortDescription: 'A premium AI SaaS platform that helps users discover, compare, and choose AI tools.',
    description: 'A premium AI SaaS platform that helps users discover, compare, and choose the right AI tools for their tasks through intelligent recommendations and a streamlined product experience.',
    problem: null,
    solution: null,
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript'
    ],
    features: [
      'Visual product concept',
      'SaaS layout',
      'Responsive design'
    ],
    image: aisaasImg,
    screenshots: [aisaasImg],
    githubUrl: 'https://github.com/YashkumarLohra/ai-saas-platform',
    liveUrl: 'https://tangerine-cactus-97e14d.netlify.app/',
    caseStudyUrl: null,
    featured: false
  }
];
