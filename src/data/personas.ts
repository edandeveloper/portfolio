export interface GearSlotData {
  slot: string
  icon: string
  name: string
  ilvl: number
}

export interface PersonaData {
  id: string
  name: string
  title: string
  level: number
  iLevel: number
  color: string
  description: string
  role: string
  leftGear: GearSlotData[]
  rightGear: GearSlotData[]
}

export const personas: PersonaData[] = [
  {
    id: 'auteur',
    name: 'THE AUTEUR',
    title: 'Cinematographer',
    level: 85,
    iLevel: 853,
    color: '#ffd700',
    description: 'Storyteller through light and shadow. Every frame is a decision.',
    role: 'Photography & Film',
    leftGear: [
      { slot: 'Main Hand', icon: '🎥', name: "Director's Cine Camera", ilvl: 853 },
      { slot: 'Off Hand',  icon: '🔦', name: 'Aputure Light Wand',     ilvl: 840 },
      { slot: 'Head',      icon: '🎩', name: "Director's Beret",        ilvl: 850 },
      { slot: 'Body',      icon: '🎬', name: 'Film Production Jacket',  ilvl: 853 },
      { slot: 'Legs',      icon: '👖', name: 'Cargo Trousers',          ilvl: 848 },
      { slot: 'Feet',      icon: '👟', name: 'On-Location Boots',       ilvl: 846 },
    ],
    rightGear: [
      { slot: 'Necklace',     icon: '🎞️', name: '35mm Film Pendant',     ilvl: 848 },
      { slot: 'Bracelet',     icon: '⌚', name: 'Clapper Board Band',    ilvl: 844 },
      { slot: 'Ring',         icon: '💿', name: 'Memory Card Ring',      ilvl: 852 },
      { slot: 'Soul Crystal', icon: '🔮', name: 'Crystal of Vision',     ilvl: 0   },
    ],
  },
  {
    id: 'wordsmith',
    name: 'THE WORDSMITH',
    title: 'Chronicler',
    level: 78,
    iLevel: 780,
    color: '#4ecca3',
    description: 'Ideas made flesh in ink. The pen outlasts the sword.',
    role: 'Writing & Blog',
    leftGear: [
      { slot: 'Main Hand', icon: '✒️', name: 'Obsidian Quill',       ilvl: 780 },
      { slot: 'Off Hand',  icon: '📓', name: 'Leather Notebook',     ilvl: 775 },
      { slot: 'Head',      icon: '🔭', name: "Scholar's Spectacles", ilvl: 778 },
      { slot: 'Body',      icon: '🧥', name: 'Oxford Longcoat',      ilvl: 780 },
      { slot: 'Legs',      icon: '👔', name: 'Fitted Slacks',        ilvl: 778 },
      { slot: 'Feet',      icon: '👞', name: 'Chelsea Boots',        ilvl: 777 },
    ],
    rightGear: [
      { slot: 'Necklace',     icon: '⚙️', name: "Editor's Key Pendant",       ilvl: 777 },
      { slot: 'Bracelet',     icon: '🖋️', name: 'Typeface Band',              ilvl: 775 },
      { slot: 'Ring',         icon: '📜', name: 'Unfinished Manuscript Ring', ilvl: 780 },
      { slot: 'Soul Crystal', icon: '🔮', name: 'Crystal of Words',           ilvl: 0   },
    ],
  },
  {
    id: 'bard',
    name: 'THE BARD',
    title: 'Musician',
    level: 68,
    iLevel: 680,
    color: '#c084fc',
    description: 'Chords and silence. Music says what words cannot.',
    role: 'Music',
    leftGear: [
      { slot: 'Main Hand', icon: '🎸', name: 'Acoustic Guitar',    ilvl: 680 },
      { slot: 'Off Hand',  icon: '🎵', name: 'Golden Pick',        ilvl: 672 },
      { slot: 'Head',      icon: '🎧', name: 'Studio Headphones',  ilvl: 677 },
      { slot: 'Body',      icon: '👕', name: 'Flannel Overshirt',  ilvl: 680 },
      { slot: 'Legs',      icon: '👖', name: 'Stage Jeans',        ilvl: 678 },
      { slot: 'Feet',      icon: '🥾', name: 'Beat-Up Docs',       ilvl: 676 },
    ],
    rightGear: [
      { slot: 'Necklace',     icon: '🎵', name: 'Chord Pendant',    ilvl: 676 },
      { slot: 'Bracelet',     icon: '🎤', name: 'Setlist Band',     ilvl: 673 },
      { slot: 'Ring',         icon: '🎸', name: 'Fret Ring',        ilvl: 679 },
      { slot: 'Soul Crystal', icon: '🔮', name: 'Crystal of Sound', ilvl: 0   },
    ],
  },
  {
    id: 'ghost',
    name: 'THE GHOST',
    title: 'Infiltrator',
    level: 72,
    iLevel: 720,
    color: '#60a5fa',
    description: 'The network is the dungeon. Every system a lock to pick.',
    role: 'Cybersecurity',
    leftGear: [
      { slot: 'Main Hand', icon: '💻', name: 'Operator Laptop',     ilvl: 720 },
      { slot: 'Off Hand',  icon: '🔑', name: 'Master Keychain',     ilvl: 715 },
      { slot: 'Head',      icon: '🕶️', name: 'Ghost Hoodie',        ilvl: 718 },
      { slot: 'Body',      icon: '🧥', name: 'Zero-Day Jacket',     ilvl: 720 },
      { slot: 'Legs',      icon: '👖', name: 'Tactical Trousers',   ilvl: 719 },
      { slot: 'Feet',      icon: '👟', name: 'Silent Treads',       ilvl: 717 },
    ],
    rightGear: [
      { slot: 'Necklace',     icon: '🔒', name: 'Zero-Day Pendant',        ilvl: 717 },
      { slot: 'Bracelet',     icon: '💾', name: 'Payload Drive Band',      ilvl: 714 },
      { slot: 'Ring',         icon: '🛡️', name: 'Firewall Ring',           ilvl: 720 },
      { slot: 'Soul Crystal', icon: '🔮', name: 'Crystal of Shadows',      ilvl: 0   },
    ],
  },
]
