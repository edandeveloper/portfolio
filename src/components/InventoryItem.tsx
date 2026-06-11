import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { InventoryItem as Item } from '../data/inventory'

const rarityColors: Record<Item['rarity'], string> = {
  common: '#8899aa',
  uncommon: '#4ecca3',
  rare: '#ffd700',
  epic: '#c084fc',
  unique: '#ff3333',
}

interface Props {
  item: Item | null
  isActive: boolean
  onSelect: (item: Item | null) => void
}

export default function InventoryItem({ item, isActive, onSelect }: Props) {
  const [hovered, setHovered] = useState(false)

  if (!item) {
    return (
      <div
        className="inv-slot opacity-30 cursor-default"
        style={{ border: '1px solid rgba(78, 204, 163, 0.08)' }}
      />
    )
  }

  const color = rarityColors[item.rarity]

  return (
    <motion.div
      className={`inv-slot ${isActive ? 'active' : ''}`}
      style={{
        borderColor: isActive ? '#ffd700' : hovered ? color : 'rgba(78, 204, 163, 0.2)',
        boxShadow: isActive
          ? `0 0 8px rgba(255,215,0,0.5), inset 0 0 8px rgba(255,215,0,0.1)`
          : hovered
          ? `0 0 8px ${color}66, inset 0 0 8px ${color}11`
          : undefined,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onSelect(isActive ? null : item)}
      whileTap={{ scale: 0.92 }}
    >
      <span className="select-none" style={{ fontSize: '22px' }}>{item.icon}</span>
      <span className="inv-qty">{item.quantity}</span>

      {/* Rarity corner pip */}
      <div
        className="absolute top-1 left-1 w-1.5 h-1.5 rounded-full"
        style={{ background: color, boxShadow: `0 0 4px ${color}` }}
      />

      {/* Hover tooltip (simple) */}
      <AnimatePresence>
        {hovered && !isActive && (
          <motion.div
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 z-20 pointer-events-none whitespace-nowrap"
            style={{
              background: '#0a1420',
              border: `1px solid ${color}`,
              boxShadow: `0 0 8px ${color}44`,
            }}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.12 }}
          >
            <div className="font-ui font-bold text-xs tracking-wide" style={{ color }}>
              {item.name}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
