export interface Project {
  id: string
  title: string
  subtitle: string
  icon: string
  description: string
  tags: string[]
  link: string
  preview: string
  color: string
}

export const projects: Project[] = [
  {
    id: 'photography',
    title: 'Photography',
    subtitle: 'Visual Storytelling',
    icon: '📷',
    description: 'A collection of stills capturing fleeting moments — street photography, portraiture, and landscapes. Every frame is a decision.',
    tags: ['Street', 'Portrait', 'Film'],
    link: '#',
    preview: 'PORTFOLIO LOADING...',
    color: '#4ecca3',
  },
  {
    id: 'filmmaking',
    title: 'Filmmaking',
    subtitle: 'Motion & Narrative',
    icon: '🎬',
    description: 'Short films, music videos, and documentary work. Stories told through motion, sound, and light over time.',
    tags: ['Short Film', 'Documentary', 'Editing'],
    link: '#',
    preview: '▶ PLAY REEL',
    color: '#ffd700',
  },
  {
    id: 'writing',
    title: 'Writing',
    subtitle: 'Words & Ideas',
    icon: '✍️',
    description: 'Essays, short fiction, and long-form explorations. Writing as a way of thinking — clarifying what I believe by articulating it.',
    tags: ['Essays', 'Fiction', 'Long-form'],
    link: '#',
    preview: 'READ SAMPLES',
    color: '#4ecca3',
  },
  {
    id: 'blog',
    title: 'Blog',
    subtitle: 'Dispatches & Thoughts',
    icon: '📝',
    description: 'A running log of ideas, opinions, and discoveries. Technology, creativity, culture, and the intersections between them.',
    tags: ['Tech', 'Culture', 'Personal'],
    link: '#',
    preview: 'LATEST POSTS',
    color: '#4ecca3',
  },
  {
    id: 'music',
    title: 'Music',
    subtitle: 'Songs & Sounds',
    icon: '🎵',
    description: 'Original songs written, recorded, and produced. Guitar-led, emotionally direct, somewhere between folk and alternative.',
    tags: ['Guitar', 'Original', 'Produced'],
    link: '#',
    preview: '♫ LISTEN NOW',
    color: '#ffd700',
  },
  {
    id: 'design',
    title: 'Design',
    subtitle: 'Visual Direction',
    icon: '🎨',
    description: 'Graphic design, motion graphics, and creative direction. Shaping how things look and feel — from album covers to interfaces.',
    tags: ['Graphic', 'Motion', 'Direction'],
    link: '#',
    preview: 'VIEW WORK',
    color: '#c084fc',
  },
]
