
import { Project, ExperienceItem, SkillGroup } from './types';

export const COLORS = {
  primary: '#FFC0CB',
  secondary: '#FFF0F3',
  accent: '#E87A90',
  text: '#1A1A1A',
  lightGray: '#F9F9F9'
};

export const PROJECTS: Project[] = [
  {
    id: 'thanh-tra',
    title: 'Thanh Trà Identity',
    category: 'Brand Architecture',
    description: 'A contemporary visual system for premium botanical tea, merging Vietnamese cultural symbols with modern minimalist geometry.',
    role: 'Creative Lead',
    outcome: 'Increased luxury market penetration by 45% through high-end packaging and spatial design.',
    tools: ['Illustrator', 'Dimension', 'Photoshop'],
    imageUrl: 'https://images.unsplash.com/photo-1594631252845-29fc458635b7?q=80&w=1400&auto=format&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1594631252845-29fc458635b7?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1563911191-333-289524029272?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515694590185-73647ba02c10?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544787210-2827d344b124?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=1400&auto=format&fit=crop'
    ]
  },
  {
    id: 'xabo',
    title: 'XABO Organic Lab',
    category: 'Visual Strategy',
    description: 'Sustainable skincare identity focusing on "Purity & Ethics". Developing a tactical design system for international organic standards.',
    role: 'Art Director',
    imageUrl: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=1400&auto=format&fit=crop',
    tools: ['Figma', 'Lightroom', 'Illustrator'],
    outcome: '',
    galleryImages: [
      'https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1400&auto=format&fit=crop'
    ]
  },
  {
    id: 'catalogue',
    title: 'Editorial CATALOGUE',
    category: 'Information Architecture',
    description: 'Premium print layouts and digital catalogues for high-end fashion and interior design houses.',
    role: 'Visual Designer',
    imageUrl: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=1400&auto=format&fit=crop',
    tools: ['InDesign', 'Photoshop', 'Lightroom'],
    outcome: '',
    galleryImages: [
      'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1606857521015-7f9fbf423b40?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1400&auto=format&fit=crop'
    ]
  },
  {
    id: 'creative-post',
    title: 'Visual POST Design',
    category: 'Advertising Art',
    description: 'Experimental graphic compositions for promotional narratives, focusing on bold typography and abstract forms.',
    role: 'Graphic Artist',
    imageUrl: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1400&auto=format&fit=crop',
    tools: ['Photoshop', 'Illustrator'],
    outcome: '',
    galleryImages: [
      'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1635405074683-96d6921a2a2c?q=80&w=1400&auto=format&fit=crop'
    ]
  },
  {
    id: 'social-post',
    title: 'SOCIAL POST System',
    category: 'Digital Marketing',
    description: 'A comprehensive social media design kit engineered for maximum engagement and brand consistency across platforms.',
    role: 'Art Director',
    imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1400&auto=format&fit=crop',
    tools: ['Figma', 'Photoshop', 'After Effects'],
    outcome: '',
    galleryImages: [
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=1400&auto=format&fit=crop'
    ]
  },
  {
    id: 'gif-design',
    title: 'GIF DESIGN Narratives',
    category: 'Motion Graphics',
    description: 'Micro-interactions and loop animations that bring digital static elements to life with fluid cinematic transitions.',
    role: 'Motion Designer',
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1400&auto=format&fit=crop',
    tools: ['After Effects', 'Photoshop'],
    outcome: '',
    galleryImages: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?q=80&w=1400&auto=format&fit=crop'
    ]
  },
  {
    id: 'post-beauty',
    title: 'POST BEAUTY Collection',
    category: 'Luxury Cosmetics',
    description: 'High-end cosmetic visualization and editorial posts for skincare brands, emphasizing light, texture, and elegance.',
    role: 'Creative Lead',
    imageUrl: 'https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?q=80&w=1400&auto=format&fit=crop',
    tools: ['Photoshop', 'Dimension', 'Lightroom'],
    outcome: '',
    galleryImages: [
      'https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=1400&auto=format&fit=crop'
    ]
  },
  {
    id: 'illustrator',
    title: 'Digital ILLUSTRATOR',
    category: 'Vector Art',
    description: 'Custom vector illustrations and character design for modern branding and storytelling projects.',
    role: 'Visual Artist',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1400&auto=format&fit=crop',
    tools: ['Illustrator', 'Procreate', 'Photoshop'],
    outcome: '',
    galleryImages: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1400&auto=format&fit=crop'
    ]
  },
  {
    id: 'clothing-design',
    title: 'CLOTHING DESIGN Lab',
    category: 'Apparel Branding',
    description: 'Textile patterns and garment conceptualization for streetwear and eco-conscious fashion labels.',
    role: 'Fashion Strategist',
    imageUrl: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1400&auto=format&fit=crop',
    tools: ['Illustrator', 'Photoshop', 'CLO 3D'],
    outcome: '',
    galleryImages: [
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1400&auto=format&fit=crop'
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: '1',
    role: 'Visual Designer',
    company: 'Thien Co Tri Lien Co., Ltd',
    period: 'Oct 2024 - Present',
    description: 'Leading creative narratives for luxury botanical brands, overseeing brand consistency across all physical and digital touchpoints.'
  },
  {
    id: '2',
    role: 'Graphic Design Associate',
    company: 'IKy Smart Utility Technology',
    period: 'Jul 2024 - Oct 2024',
    description: 'Developed technical visualization systems and marketing collateral for international utility technology showcases.'
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Core Expertise',
    skills: ['Brand Identity', 'Editorial Design', 'Visual Strategy', 'UI/UX Ecosystems', 'Motion Narratives', 'Packaging Design']
  },
  {
    category: 'Toolbox',
    skills: ['Adobe Creative Suite', 'Figma', 'InDesign', 'After Effects', 'Dimension', 'Prototyping']
  }
];
