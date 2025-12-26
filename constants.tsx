
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
    title: 'Thanh Tra Tea Branding',
    category: 'Brand Identity & Campaign',
    description: 'A comprehensive visual system for a premium floral tea brand, focusing on the sensory connection between aroma and taste. This project includes billboard advertising, roll-up banner systems, and a 2025 commemorative calendar.',
    role: 'Lead Visual Designer',
    outcome: 'Synthesized traditional Vietnamese tea culture with modern minimalism. The campaign resulted in high engagement for the 2025 "At Ty" collection.',
    tools: ['Adobe Illustrator', 'Photoshop', 'Dimension'],
    imageUrl: 'https://images.unsplash.com/photo-1544787210-2827d344b124?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1544787210-2827d344b124?auto=format&fit=crop&q=80&w=1200', // Billboard
      'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&q=80&w=800', // Rollup 1
      'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=800', // Rollup 2
      'https://images.unsplash.com/photo-1627483262268-9c2b5b2834b5?auto=format&fit=crop&q=80&w=800', // Calendar 1
      'https://images.unsplash.com/photo-1564844536311-de546a28c87d?auto=format&fit=crop&q=80&w=800', // Logo Typography
      'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&q=80&w=800', // Packaging Detail
      'https://images.unsplash.com/photo-1542744095-2ad48c08b0ee?auto=format&fit=crop&q=80&w=800', // Lifestyle 1
      'https://images.unsplash.com/photo-1558603668-6570496b66f8?auto=format&fit=crop&q=80&w=800', // Texture detail
      'https://images.unsplash.com/photo-1545231027-63b6af0c37ad?auto=format&fit=crop&q=80&w=800', // Color Palette
      'https://images.unsplash.com/photo-1531241413003-ef3b5c962c8d?auto=format&fit=crop&q=80&w=800'  // Secondary Logo
    ]
  },
  {
    id: 'xabo-skincare',
    title: 'XABO Soap Identity',
    category: 'Visual Design',
    description: 'A minimalist approach to skincare branding, using organic shapes and soft color palettes to evoke a sense of purity.',
    role: 'Graphic Designer',
    outcome: 'Established a consistent social media aesthetic that grew the Instagram following by 5,000 in three months.',
    tools: ['Figma', 'Illustrator', 'Lightroom'],
    imageUrl: 'https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&q=80&w=800',
    galleryImages: [
      'https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'iky-catalog',
    title: 'IKy Smart Security',
    category: 'Editorial Design',
    description: 'Corporate profile and product catalogue for a leading tech firm, balancing complex data with elegant layout design.',
    role: 'Layout Specialist',
    outcome: 'Streamlined the information architecture of a 50-page technical catalogue for better client readability.',
    tools: ['Adobe InDesign', 'Illustrator'],
    imageUrl: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800',
    galleryImages: [
      'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1542744095-2ad48c08b0ee?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800'
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: '1',
    role: 'Visual Designer',
    company: 'Thien Co Tri Lien Co., Ltd',
    period: 'Oct 2024 - Present',
    description: 'Leading the creative direction for luxury tea and wellness brands. Responsible for end-to-end brand storytelling, including visual identity, packaging, and digital marketing strategies.'
  },
  {
    id: '2',
    role: 'Graphic Design Intern',
    company: 'IKy Smart Utility Technology',
    period: 'Jul 2024 - Oct 2024',
    description: 'Directly supported the Creative Director in refreshing the corporate identity for high-tech security products. Developed marketing collateral for international trade shows.'
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Specialties',
    skills: ['Brand Identity', 'UI/UX Design', 'Advertising Design', 'Packaging Design', 'Motion Graphics', 'Typography']
  },
  {
    category: 'Software Suite',
    skills: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe After Effects', 'Figma', 'InDesign', 'CapCut']
  }
];
