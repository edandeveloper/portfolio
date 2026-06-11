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
    name: 'THE SALARYMAN',
    title: 'Office Worker',
    level: 1,
    iLevel: 10,
    color: '#ffd700',
    description: 'First day of the main story. Joined SAP — the office is the new dungeon and the corporate ladder is the final boss. Inventory: one laptop, infinite coffee.',
    role: 'SAP · Brisbane',
    leftGear: [
      { slot: 'Main Hand', icon: '💻', name: 'Work Laptop',          ilvl: 10 },
      { slot: 'Off Hand',  icon: '📋', name: 'Meeting Agenda',       ilvl: 8  },
      { slot: 'Head',      icon: '🧠', name: 'Fresh Graduate Brain', ilvl: 10 },
      { slot: 'Body',      icon: '👔', name: 'Business Casual Shirt',ilvl: 9  },
      { slot: 'Legs',      icon: '👖', name: 'Chinos',               ilvl: 9  },
      { slot: 'Feet',      icon: '👞', name: 'Smart Shoes',          ilvl: 8  },
    ],
    rightGear: [
      { slot: 'Necklace',     icon: '🪪', name: 'SAP Employee Lanyard', ilvl: 10 },
      { slot: 'Bracelet',     icon: '⌚', name: 'Punctuality Watch',    ilvl: 7  },
      { slot: 'Ring',         icon: '☕', name: 'Coffee Ring (Stain)',  ilvl: 5  },
      { slot: 'Soul Crystal', icon: '🔮', name: 'Crystal of Ambition',  ilvl: 0  },
    ],
  },
  {
    id: 'wordsmith',
    name: 'THE DIRECTOR',
    title: 'Filmmaker',
    level: 1,
    iLevel: 780,
    color: '#4ecca3',
    description: 'Every scene is a statement. Director, cinematographer, editor — the whole crew in one person. Life is the script; the camera is always rolling.',
    role: 'Film & Creative Direction',
    leftGear: [
      { slot: 'Main Hand', icon: '🎥', name: "Director's Cinema Camera", ilvl: 780 },
      { slot: 'Off Hand',  icon: '🎬', name: 'Clapperboard',             ilvl: 775 },
      { slot: 'Head',      icon: '🎩', name: "Director's Beret",          ilvl: 778 },
      { slot: 'Body',      icon: '🧥', name: 'Film Jacket',               ilvl: 780 },
      { slot: 'Legs',      icon: '👖', name: 'Cargo Trousers',            ilvl: 778 },
      { slot: 'Feet',      icon: '👟', name: 'On-Location Boots',         ilvl: 777 },
    ],
    rightGear: [
      { slot: 'Necklace',     icon: '🎞️', name: '35mm Film Pendant',    ilvl: 777 },
      { slot: 'Bracelet',     icon: '🔦', name: 'Light Meter Band',      ilvl: 775 },
      { slot: 'Ring',         icon: '💿', name: 'Memory Card Ring',      ilvl: 780 },
      { slot: 'Soul Crystal', icon: '🔮', name: 'Crystal of Vision',     ilvl: 0   },
    ],
  },
  {
    id: 'bard',
    name: 'THE HOBBYIST',
    title: 'Multi-Classed',
    level: 5,
    iLevel: 750,
    color: '#c084fc',
    description: 'Jack of all passions, master of all of them eventually. Photography, writing, gym, music — the stats sheet of someone who refuses to pick just one thing.',
    role: 'Photography · Writing · Gym · Music',
    leftGear: [
      { slot: 'Main Hand', icon: '📷', name: 'Film Camera',        ilvl: 750 },
      { slot: 'Off Hand',  icon: '✒️', name: 'Fountain Pen',       ilvl: 742 },
      { slot: 'Head',      icon: '🎧', name: 'Studio Headphones',  ilvl: 747 },
      { slot: 'Body',      icon: '👕', name: 'Gym Shirt',          ilvl: 750 },
      { slot: 'Legs',      icon: '🩳', name: 'Training Shorts',    ilvl: 748 },
      { slot: 'Feet',      icon: '👟', name: 'Training Shoes',     ilvl: 746 },
    ],
    rightGear: [
      { slot: 'Necklace',     icon: '🎵', name: 'Chord Pendant',       ilvl: 746 },
      { slot: 'Bracelet',     icon: '📓', name: 'Notebook Wristband',  ilvl: 743 },
      { slot: 'Ring',         icon: '🏋️', name: 'Lifting Chalk Ring',  ilvl: 749 },
      { slot: 'Soul Crystal', icon: '🔮', name: 'Crystal of Passion',  ilvl: 0   },
    ],
  },
  {
    id: 'ghost',
    name: 'THE CAT',
    title: 'Kirby',
    level: 2,
    iLevel: 9999,
    color: '#f472b6',
    description: 'Edan\'s cat. Named after the pink video game character — equally round, equally powerful. Primary stats: napping, demanding breakfast at 5am, and knocking things off tables. iLv: immeasurable.',
    role: 'Household Deity',
    leftGear: [
      { slot: 'Main Hand', icon: '🐾', name: 'Deadly Murder Mittens', ilvl: 9999 },
      { slot: 'Off Hand',  icon: '🐭', name: 'Toy Mouse',             ilvl: 420  },
      { slot: 'Head',      icon: '😾', name: 'Resting Grumpy Face',   ilvl: 9999 },
      { slot: 'Body',      icon: '🐈', name: 'Luxurious Fur Coat',    ilvl: 9999 },
      { slot: 'Legs',      icon: '🐾', name: 'Four Paws of Fury',     ilvl: 9999 },
      { slot: 'Feet',      icon: '🧤', name: 'Velvet Toe Beans',      ilvl: 9999 },
    ],
    rightGear: [
      { slot: 'Necklace',     icon: '🔔', name: 'Bell Collar',          ilvl: 50   },
      { slot: 'Bracelet',     icon: '🎀', name: 'Ribbon of Disdain',    ilvl: 1    },
      { slot: 'Ring',         icon: '🍣', name: 'Treat Bribe Ring',     ilvl: 100  },
      { slot: 'Soul Crystal', icon: '😴', name: 'Crystal of Naps',      ilvl: 0    },
    ],
  },
]
