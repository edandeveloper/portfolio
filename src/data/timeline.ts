export interface TimelineEvent {
  id: string
  year: string
  label: string
  title: string
  description: string
  icon: string
  phase: 'origin' | 'growth' | 'awakening' | 'work' | 'ascent' | 'present'
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'birth',
    year: '2005',
    label: 'ORIGIN',
    title: 'Character Created',
    description: 'A new save file begins in Brisbane, Australia. Born into a world of stories, music, and possibility. The adventure starts here.',
    icon: '✨',
    phase: 'origin',
  },
  {
    id: 'primary',
    year: '2010',
    label: 'TUTORIAL ARC',
    title: 'Primary School',
    description: 'The tutorial zone. First encounters with creativity — drawing, storytelling, music. The foundations of curiosity laid down.',
    icon: '📖',
    phase: 'growth',
  },
  {
    id: 'middle',
    year: '2018',
    label: 'LEVELLING ARC',
    title: 'Middle School',
    description: 'Stats began to grow. Discovered photography, gaming, and a love of narrative. The character build starts to take shape.',
    icon: '📚',
    phase: 'growth',
  },
  {
    id: 'highschool',
    year: '2021',
    label: 'AWAKENING ARC',
    title: 'High School',
    description: 'The party expands. Creative skills sharpened — photography, film, writing, music. Class identity beginning to solidify.',
    icon: '🏫',
    phase: 'awakening',
  },
  {
    id: 'sushi',
    year: 'Sep 2021',
    label: 'SIDE QUEST I',
    title: 'Sushi Paradise',
    description: 'First job unlocked. Front-of-house at Sushi Paradise — people skills, fast pace, the Gil begins to flow. Every hero starts somewhere.',
    icon: '🍣',
    phase: 'work',
  },
  {
    id: 'target',
    year: 'Oct 2021',
    label: 'SIDE QUEST II',
    title: 'Target',
    description: 'Parallel side quest accepted. Retail at Target — learned patience, teamwork, and the art of the customer interaction.',
    icon: '🛒',
    phase: 'work',
  },
  {
    id: 'miniso',
    year: 'Jan 2024',
    label: 'SIDE QUEST III',
    title: 'Miniso',
    description: 'Third side quest accepted. Retail experience deepened — product knowledge, customer service, and the grind before the real quest.',
    icon: '🛍️',
    phase: 'work',
  },
  {
    id: 'uni',
    year: '2024',
    label: 'MAJOR QUEST',
    title: 'University',
    description: 'Enrolled in the grand quest. Studying Bachelor of Computer Science / Master of Cybersecurity. Party members gained, world expanded. The build becomes intentional.',
    icon: '🎓',
    phase: 'ascent',
  },
  {
    id: 'codecamp',
    year: 'Sep 2025',
    label: 'FIELD MISSION',
    title: 'Code Camp',
    description: 'First tech-adjacent deployment. Teaching code to the next generation — solidifying fundamentals by explaining them to others.',
    icon: '💻',
    phase: 'work',
  },
  {
    id: 'present',
    year: '2026',
    label: 'CURRENT SAVE',
    title: 'SAP',
    description: 'The main story arc begins. Joined SAP — first career-level deployment in the tech industry. Active questlog: ship creative projects, keep levelling every skill simultaneously.',
    icon: '🔮',
    phase: 'present',
  },
]
