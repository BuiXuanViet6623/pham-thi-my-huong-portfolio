
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
    id: 'thanh-tra-tea',
    title: 'Thanh Tra Tea Identity',
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
    id: 'xabo-organic',
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
    id: 'iky-editorial',
    title: 'IKy System Design',
    category: 'Information Architecture',
    description: 'Corporate editorial and technical visualization system. Translating complex utility data into elegant, human-readable visual assets.',
    role: 'Visual Specialist',
    imageUrl: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=1400&auto=format&fit=crop',
    tools: ['InDesign', 'Illustrator', 'After Effects'],
    outcome: '',
    galleryImages: [
      'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1606857521015-7f9fbf423b40?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=1400&auto=format&fit=crop'
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
