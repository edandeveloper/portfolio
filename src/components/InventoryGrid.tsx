import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { inventoryItems, type InventoryItem } from '../data/inventory'
import InventoryItemSlot from './InventoryItem'

const GRID_SIZE = 20
const rarityColors: Record<InventoryItem['rarity'], string> = {
  common: '#8899aa',
  uncommon: '#4ecca3',
  rare: '#ffd700',
  unique: '#ff3333',
}
const rarityLabels: Record<InventoryItem['rarity'], string> = {
  common: 'COMMON',
  uncommon: 'UNCOMMON',
  rare: 'RARE',
  unique: 'UNIQUE',
}

export default function InventoryGrid() {
  const [activeTab, setActiveTab] = useState<'item' | 'key'>('item')
  const [selected, setSelected] = useState<InventoryItem | null>(null)

  const tabItems = inventoryItems.filter(i => i.type === activeTab)
  const slots: (InventoryItem | null)[] = [
    ...tabItems,
    ...Array(Math.max(0, GRID_SIZE - tabItems.length)).fill(null),
  ]

  return (
    <section id="inventory" className="py-24 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-subheading mb-2">◆ PASSIONS & PURSUITS ◆</div>
          <h2 className="section-heading text-3xl md:text-4xl">Inventory</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="ffxiv-panel rounded-sm overflow-hidden"
        >
          {/* Title bar */}
          <div className="ffxiv-panel-title flex items-center justify-between">
            <span>INVENTORY</span>
            <span className="font-mono text-text-muted" style={{ fontSize: '11px' }}>
              {tabItems.length}/{GRID_SIZE}
            </span>
          </div>

          {/* Tabs — FFXIV style */}
          <div
            className="flex border-b"
            style={{ borderColor: 'rgba(78, 204, 163, 0.2)' }}
          >
            {(['item', 'key'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setSelected(null) }}
                className="relative px-5 py-2 font-ui font-semibold text-sm tracking-widest uppercase transition-colors"
                style={{
                  color: activeTab === tab ? '#4ecca3' : '#445566',
                  background: activeTab === tab ? 'rgba(78,204,163,0.08)' : 'transparent',
                }}
              >
                {tab === 'item' ? 'Items' : 'Key Items & Skills'}
                {activeTab === tab && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal"
                    layoutId="tab-indicator"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-0">
            {/* Grid */}
            <div className="p-3 flex-shrink-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  className="grid gap-1"
                  style={{ gridTemplateColumns: 'repeat(5, 56px)' }}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                >
                  {slots.map((item, i) => (
                    <InventoryItemSlot
                      key={item ? item.id : `empty-${i}`}
                      item={item}
                      isActive={selected?.id === item?.id}
                      onSelect={setSelected}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Detail pane — FFXIV side panel */}
            <div
              className="flex-1 border-l md:min-h-[calc(5*57px+32px)]"
              style={{ borderColor: 'rgba(78, 204, 163, 0.15)' }}
            >
              <AnimatePresence mode="wait">
                {selected ? (
                  <motion.div
                    key={selected.id}
                    className="p-5 h-full"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <div
                        className="w-12 h-12 flex items-center justify-center text-2xl flex-shrink-0"
                        style={{
                          background: '#0a1420',
                          border: `2px solid ${rarityColors[selected.rarity]}`,
                          boxShadow: `0 0 10px ${rarityColors[selected.rarity]}44`,
                        }}
                      >
                        {selected.icon}
                      </div>
                      <div>
                        <div
                          className="font-ui font-bold text-lg leading-tight"
                          style={{ color: rarityColors[selected.rarity] }}
                        >
                          {selected.name}
                        </div>
                        <div
                          className="font-mono text-xs mt-0.5"
                          style={{ color: rarityColors[selected.rarity], opacity: 0.7 }}
                        >
                          ◈ {rarityLabels[selected.rarity]}
                        </div>
                      </div>
                    </div>

                    <div
                      className="text-sm font-ui text-text-dim leading-relaxed mb-4 pb-4"
                      style={{ borderBottom: '1px solid rgba(78,204,163,0.15)' }}
                    >
                      {selected.description}
                    </div>

                    <div className="flex justify-between text-xs font-mono text-text-muted">
                      <span>QTY: {selected.quantity}</span>
                      <span>TYPE: {selected.type.toUpperCase()}</span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    className="p-5 h-full flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="text-center text-text-muted">
                      <div className="text-3xl mb-3 opacity-30">◈</div>
                      <div className="font-mono text-xs">SELECT AN ITEM</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
