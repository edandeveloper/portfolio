export interface InventoryItem {
  id: string
  icon: string
  name: string
  quantity: string
  description: string
  type: 'item' | 'key'
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'unique'
  link?: string
  linkLabel?: string
}

export const inventoryItems: InventoryItem[] = [
  { id: 'canonr50',  icon: '📷', name: 'Canon R50',         quantity: '1',       description: 'My camera for photography and filming. I\'ve never owned a camera this expensive and it shocked me to realise this was considered a budget option.', type: 'item', rarity: 'rare', link: '/photography.html', linkLabel: '▶ Photography Portfolio' },
  { id: 'insta360',  icon: '🎥', name: 'Insta360 Go Ultra', quantity: '1',       description: 'Tiny but mighty. Clips anywhere and captures everything. The camera that goes where others can\'t. This is my go to camera for vlogs, which you can find on my super cool youtube channel.', type: 'item', rarity: 'rare', link: 'https://www.youtube.com/@edanzhao', linkLabel: '▶ YouTube Channel' },
  { id: 'redthread', icon: '🧵', name: 'Red Thread',         quantity: '1',       description: 'My psychological coming-of-age miniseries: Don\'t Leave Me Alone. Find out more below.', type: 'item', rarity: 'unique', link: 'https://www.instagram.com/dontleavemealoneseries/', linkLabel: '▶ Don\'t Leave Me Alone' },
  { id: 'quill',     icon: '✍️',  name: 'Ink & Quill',      quantity: '1',      description: 'I like writing, because it provides a medium for my yapping. Speaking of yapping, if you want to read about my rants and philosophical debates, check out my blog, yap \'n\' crap.', type: 'item', rarity: 'uncommon', link: 'https://www.yapncrap.au/', linkLabel: '▶ Yap \'n\' Crap' },
  { id: 'mic',       icon: '🎙️', name: 'Blue Yeti Microphone', quantity: '1',    description: 'My faithful microphone for late-night recording sessions where I (attempt to the best of my ability) sing aloud my self-written lyrics.', type: 'item', rarity: 'uncommon', link: 'https://open.spotify.com/artist/0Drla45RubNM9L0OSpvcvD?si=hOBQTnp5Roec0vCQrpO8OQ', linkLabel: '▶ My Music' },
  { id: 'gaming',    icon: '🎮', name: 'Controller',         quantity: '∞',      description: 'Gaming as art, story, and community. Final Fantasy has all my attention at the moment, especially VII and XIV.',                                             type: 'item', rarity: 'common'   },
  { id: 'macbook',   icon: '💻', name: 'Macbook Pro',        quantity: '1',      description: 'This is where I cook up all of my software projects, from time to time.', type: 'item', rarity: 'epic', link: 'https://github.com/edandeveloper', linkLabel: '▶ GitHub' },
  { id: 'code',      icon: '⚙️', name: 'Code Fragment',    quantity: '∞',       description: 'React, TypeScript, Python, C, Java, Haskell. Building tools and interfaces for the web and beyond.',                                        type: 'key',  rarity: 'uncommon'  },
  { id: 'materia',   icon: '🔮', name: 'Blank Materia',    quantity: '1',       description: 'Untapped potential. The future skills and projects not yet discovered.',                                        type: 'key',  rarity: 'unique'   },
  { id: 'crystal',   icon: '💎', name: 'Soul Crystal',     quantity: '1',       description: 'The crystallised essence of purpose. What drives the build forward.',                                          type: 'key',  rarity: 'unique'   },
  { id: 'compass',   icon: '🧭', name: 'Wayfinder',        quantity: '1',       description: 'Direction in an uncertain world. Finding the path between creativity and craft.',                               type: 'key',  rarity: 'rare'     },
  { id: 'key',       icon: '🗝️', name: 'Master Key',       quantity: '1',       description: 'Every locked door is an invitation. Curiosity is the skeleton key.',                                          type: 'key',  rarity: 'rare'     },
  { id: 'scroll',    icon: '📜', name: 'Quest Log',        quantity: 'active',  description: 'Main story quests and side quests in progress. The adventure continues.',                                      type: 'key',  rarity: 'uncommon'  },
  { id: 'map',       icon: '🗾', name: 'Dungeon Map',      quantity: '1',       description: 'The layout of systems not yet explored. Study it before you enter.',                                           type: 'key',  rarity: 'uncommon'  },
  { id: 'wing',      icon: '🪶', name: 'Phoenix Down',     quantity: '3',       description: 'For the moments that knock you flat. Always keep a few in reserve.',                                          type: 'key',  rarity: 'rare'     },
]
