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
    description: 'Newbie in the corporate world: will he survive the office jargon and endless meetings?',
    role: 'SAP · Brisbane',
    leftGear: [
      { slot: 'Main Hand', icon: '💻', name: 'Work Laptop',          ilvl: 994  },
      { slot: 'Off Hand',  icon: '🤖', name: 'Claude',                ilvl: 2048 },
      { slot: 'Head',      icon: '🧠', name: 'Intern Brain',          ilvl: 10 },
      { slot: 'Body',      icon: '👔', name: 'Business Casual Shirt',ilvl: 9  },
      { slot: 'Legs',      icon: '👖', name: 'Chinos',               ilvl: 9  },
      { slot: 'Feet',      icon: '👞', name: 'Smart Shoes',          ilvl: 8  },
    ],
    rightGear: [
      { slot: 'Necklace',     icon: '🪪', name: 'SAP Employee Lanyard', ilvl: 10 },
      { slot: 'Bracelet',     icon: '⌚', name: 'GUESS Watch',          ilvl: 203 },
      { slot: 'Ring',         icon: '💍', name: 'Smart Ring',            ilvl: 5  },
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
    description: 'A24 one day, or A24: Day One?',
    role: 'Film & Creative Direction',
    leftGear: [
      { slot: 'Main Hand', icon: '🎥', name: 'Canon R50',                    ilvl: 803 },
      { slot: 'Off Hand',  icon: '📜', name: 'Screenplay',                   ilvl: 7   },
      { slot: 'Head',      icon: '🎧', name: 'Monitor Headphones',           ilvl: 47  },
      { slot: 'Body',      icon: '🧥', name: "Indie Filmmaker's Plain Hoodie", ilvl: 6  },
      { slot: 'Legs',      icon: '👖', name: 'Blue Denim Jeans',             ilvl: 8   },
      { slot: 'Feet',      icon: '👟', name: "Bapesta's",                    ilvl: 97  },
    ],
    rightGear: [
      { slot: 'Necklace',     icon: '📿', name: 'Vivienne Westwood Necklace', ilvl: 193 },
      { slot: 'Bracelet',     icon: '⌚', name: 'Apple Watch',                ilvl: 487 },
      { slot: 'Ring',         icon: '🔘', name: 'Insta360 Go Ultra Ring Remote', ilvl: 104 },
      { slot: 'Soul Crystal', icon: '🔮', name: 'Crystal of Vision',          ilvl: 0   },
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
      { slot: 'Main Hand', icon: '💻', name: 'Macbook Pro',             ilvl: 1487 },
      { slot: 'Off Hand',  icon: '📷', name: 'Retro Polaroid Camera',   ilvl: 94   },
      { slot: 'Head',      icon: '🎧', name: 'Sony Headphones',         ilvl: 493  },
      { slot: 'Body',      icon: '👕', name: 'Gym Shirt',               ilvl: 9    },
      { slot: 'Legs',      icon: '🩳', name: 'Training Shorts',         ilvl: 11   },
      { slot: 'Feet',      icon: '👟', name: 'Training Shoes',          ilvl: 8    },
    ],
    rightGear: [
      { slot: 'Necklace',     icon: '📿', name: 'Insta360 Go Ultra Magnetic Pendant', ilvl: 47  },
      { slot: 'Bracelet',     icon: '⌚', name: 'Apple Watch',                         ilvl: 487 },
      { slot: 'Ring',         icon: '💍', name: 'Simple Silver Ring',                  ilvl: 12  },
      { slot: 'Soul Crystal', icon: '🔮', name: 'Crystal of Passion',                  ilvl: 0   },
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
    role: 'Orange Menace',
    leftGear: [
      { slot: 'Main Hand', icon: '🐾', name: 'Deadly Murder Mittens', ilvl: 9999 },
      { slot: 'Off Hand',  icon: '🐭', name: 'Toy Mouse',             ilvl: 420  },
      { slot: 'Head',      icon: '😻', name: 'Dangerously Cute Kitty Eyes', ilvl: 9999 },
      { slot: 'Body',      icon: '🐈', name: 'Luxurious Fur Coat',    ilvl: 9999 },
      { slot: 'Legs',      icon: '🐾', name: 'Four Paws of Fury',     ilvl: 9999 },
      { slot: 'Feet',      icon: '🫘', name: 'Velvet Toe Beans',       ilvl: 9999 },
    ],
    rightGear: [
      { slot: 'Necklace',     icon: '🔔', name: 'Bell Collar',          ilvl: 50   },
      { slot: 'Bracelet',     icon: '🎀', name: 'Ribbon of Disdain',    ilvl: 1    },
      { slot: 'Ring',         icon: '🍣', name: 'Treat Bribe Ring',     ilvl: 100  },
      { slot: 'Soul Crystal', icon: '😴', name: 'Crystal of Naps',      ilvl: 0    },
    ],
  },
]
