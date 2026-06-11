export interface TimelineEvent {
  id: string
  year: string
  label: string
  title: string
  description: string
  icon: string
  phase: 'origin' | 'growth' | 'awakening' | 'ascent' | 'present'
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'birth',
    year: '2003',
    label: 'ORIGIN',
    title: 'Character Created',
    description: 'A new save file begins. Born into a world of stories, music, and possibility. The adventure starts here.',
    icon: '✨',
    phase: 'origin',
  },
  {
    id: 'primary',
    year: '2009',
    label: 'TUTORIAL ARC',
    title: 'Primary School',
    description: 'The tutorial zone. First encounters with creativity — drawing, storytelling, music. The foundations of curiosity laid down.',
    icon: '📖',
    phase: 'growth',
  },
  {
    id: 'highschool',
    year: '2015',
    label: 'LEVELLING ARC',
    title: 'High School',
    description: 'Stats began to grow. Discovered photography, first guitar chords, early lines of code. The character build starts to take shape.',
    icon: '🎯',
    phase: 'growth',
  },
  {
    id: 'uni',
    year: '2021',
    label: 'MAJOR QUEST',
    title: 'University',
    description: 'Enrolled in the grand quest. Studying technology and cybersecurity. Party members gained, world expanded. Skills: unlocked.',
    icon: '🎓',
    phase: 'awakening',
  },
  {
    id: 'work',
    year: '2023',
    label: 'FIELD MISSION',
    title: 'Work',
    description: 'First field deployment. Applying theory to reality, earning Gil, learning that every workplace is its own dungeon.',
    icon: '⚔️',
    phase: 'ascent',
  },
  {
    id: 'present',
    year: '2026',
    label: 'CURRENT SAVE',
    title: 'Present Day',
    description: 'Active questlog: become a penetration tester, ship creative projects, keep levelling every skill simultaneously.',
    icon: '🔮',
    phase: 'present',
  },
]
