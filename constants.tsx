
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
    title: 'Thanh Tra Tea Ecosystem',
    category: 'Brand Strategy & Identity',
    description: 'A complete architectural visual system for a premium botanical tea brand. Developing a cohesive narrative between traditional Vietnamese culture and contemporary minimalist aesthetics.',
    role: 'Lead Visual Strategist',
    outcome: 'Synthesized heritage motifs with modern design systems, increasing brand perception by 40% for the 2025 "At Ty" Lunar New Year collection.',
    tools: ['Adobe Illustrator', 'Photoshop', 'Dimension'],
    imageUrl: 'https://images.unsplash.com/photo-1544787210-2827d344b124?auto=format&fit=crop&q=80&w=1200',
    galleryImages: [
      'https://images.unsplash.com/photo-1544787210-2827d344b124?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1627483262268-9c2b5b2834b5?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'xabo-skincare',
    title: 'XABO Organic Identity',
    category: 'Visual Communication',
    description: 'Crafting a sustainable minimalist identity for organic skincare. Leveraging organic geometries and a muted color palette to symbolize purity and ethical beauty.',
    role: 'Graphic Designer',
    outcome: 'Established an evergreen social media design framework that catalyzed a 5,000+ follower growth within the first quarter.',
    tools: ['Figma', 'Adobe Lightroom', 'Illustrator'],
    imageUrl: 'https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&q=80&w=800',
    galleryImages: [
      'https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: 'iky-catalog',
    title: 'IKy Information Design',
    category: 'Editorial & System Design',
    description: 'Corporate architecture and technical visualization for high-security utility systems. Transforming complex data into accessible, elegant editorial layouts.',
    role: 'Information Architect',
    outcome: 'Engineered a 50-page technical design system that reduced user cognitive load and enhanced product comprehension for international stakeholders.',
    tools: ['Adobe InDesign', 'Adobe Illustrator'],
    imageUrl: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800',
    galleryImages: [
      'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1542744095-2ad48c08b0ee?auto=format&fit=crop&q=80&w=800'
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: '1',
    role: 'Visual Designer',
    company: 'Thien Co Tri Lien Co., Ltd',
    period: 'Oct 2024 - Present',
    description: 'Spearheading the creative direction for high-end wellness and tea collectives. Responsible for holistic brand storytelling across packaging, digital interfaces, and spatial design.'
  },
  {
    id: '2',
    role: 'Graphic Design Associate',
    company: 'IKy Smart Utility Technology',
    period: 'Jul 2024 - Oct 2024',
    description: 'Collaborated directly with the Design Lead to re-engineer the corporate identity. Focused on multi-channel marketing collateral and information systems for global trade showcases.'
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Core Expertise',
    skills: ['Brand Architecture', 'UI/UX Ecosystems', 'Strategic Storytelling', 'Systemic Editorial Design', 'Motion Narrative', 'Packaging Design']
  },
  {
    category: 'Technical Stack',
    skills: ['Adobe Creative Suite', 'Figma', 'Cinema 4D (Basics)', 'InDesign', 'After Effects', 'Prototyping']
  }
];
