export interface InventoryItem {
  id: string
  icon: string
  name: string
  quantity: string
  description: string
  type: 'item' | 'key'
  rarity: 'common' | 'uncommon' | 'rare' | 'unique'
}

export const inventoryItems: InventoryItem[] = [
  { id: 'camera',    icon: '📷', name: 'Camera',           quantity: '∞',       description: 'Capturing moments in light and shadow. Photography has been a lens through which I explore the world.',          type: 'item', rarity: 'rare'     },
  { id: 'film',      icon: '🎬', name: 'Film Reel',        quantity: '∞',       description: 'Stories told frame by frame. Filmmaking lets me craft narratives that move people.',                            type: 'item', rarity: 'rare'     },
  { id: 'quill',     icon: '✍️',  name: 'Ink & Quill',     quantity: 'vol.∞',   description: 'Writing is thinking made visible. Essays, fiction, and everything in between.',                                 type: 'item', rarity: 'uncommon'  },
  { id: 'blog',      icon: '📝', name: 'Blog Scroll',      quantity: 'ongoing', description: 'A public journal of thoughts, opinions, and explorations across tech and life.',                               type: 'item', rarity: 'uncommon'  },
  { id: 'music',     icon: '🎵', name: 'Song Crystal',     quantity: '∞',       description: 'Melodies and lyrics woven from personal experience. Music as emotional architecture.',                          type: 'item', rarity: 'rare'     },
  { id: 'guitar',    icon: '🎸', name: 'Guitar',           quantity: '1',       description: 'Six strings, infinite possibilities. The instrument that started the music journey.',                           type: 'item', rarity: 'uncommon'  },
  { id: 'gaming',    icon: '🎮', name: 'Controller',       quantity: '∞',       description: 'Gaming as art, story, and community. Final Fantasy XIV is home.',                                              type: 'item', rarity: 'common'   },
  { id: 'book',      icon: '📚', name: 'Tome Collection',  quantity: '47',      description: 'A love of reading spanning fantasy, philosophy, and technical literature.',                                    type: 'item', rarity: 'common'   },
  { id: 'travel',    icon: '🗺️', name: 'World Map',        quantity: '∞',       description: 'Exploring new places, cultures, and perspectives. Every trip is a new story.',                                 type: 'item', rarity: 'uncommon'  },
  { id: 'coffee',    icon: '☕', name: 'Elixir (Coffee)',  quantity: '∞',       description: 'The universal creative fuel. Single origin, black.',                                                            type: 'item', rarity: 'common'   },
  { id: 'film2',     icon: '🎞️', name: 'Film Camera',      quantity: '1',       description: 'Analog photography — slowing down and being intentional with every frame.',                                    type: 'item', rarity: 'uncommon'  },
  { id: 'pen',       icon: '🖊️', name: 'Fountain Pen',     quantity: '3',       description: 'Journaling by hand. Some thoughts need to flow through ink before they become words.',                         type: 'item', rarity: 'common'   },
  { id: 'code',      icon: '⚙️', name: 'Code Fragment',    quantity: '∞',       description: 'React, TypeScript, Python. Building tools and interfaces for the web.',                                        type: 'key',  rarity: 'uncommon'  },
  { id: 'materia',   icon: '🔮', name: 'Blank Materia',    quantity: '1',       description: 'Untapped potential. The future skills and projects not yet discovered.',                                        type: 'key',  rarity: 'unique'   },
  { id: 'crystal',   icon: '💎', name: 'Soul Crystal',     quantity: '1',       description: 'The crystallised essence of purpose. What drives the build forward.',                                          type: 'key',  rarity: 'unique'   },
  { id: 'compass',   icon: '🧭', name: 'Wayfinder',        quantity: '1',       description: 'Direction in an uncertain world. Finding the path between creativity and craft.',                               type: 'key',  rarity: 'rare'     },
  { id: 'key',       icon: '🗝️', name: 'Master Key',       quantity: '1',       description: 'Every locked door is an invitation. Curiosity is the skeleton key.',                                          type: 'key',  rarity: 'rare'     },
  { id: 'scroll',    icon: '📜', name: 'Quest Log',        quantity: 'active',  description: 'Main story quests and side quests in progress. The adventure continues.',                                      type: 'key',  rarity: 'uncommon'  },
  { id: 'map',       icon: '🗾', name: 'Dungeon Map',      quantity: '1',       description: 'The layout of systems not yet explored. Study it before you enter.',                                           type: 'key',  rarity: 'uncommon'  },
  { id: 'wing',      icon: '🪶', name: 'Phoenix Down',     quantity: '3',       description: 'For the moments that knock you flat. Always keep a few in reserve.',                                          type: 'key',  rarity: 'rare'     },
]
