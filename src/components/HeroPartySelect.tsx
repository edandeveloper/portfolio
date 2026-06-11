import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { personas } from '../data/personas'
import type { GearSlotData } from '../data/personas'

const stats = [
  { label: 'VISION',    sublabel: 'Photography / Film', value: 85, color: '#ffd700' },
  { label: 'CHRONICLE', sublabel: 'Writing & Blog',     value: 78, color: '#4ecca3' },
  { label: 'RESONANCE', sublabel: 'Music',              value: 68, color: '#c084fc' },
  { label: 'ARCANE',    sublabel: 'Frontend Dev',       value: 80, color: '#4ecca3' },
  { label: 'WANDERER',  sublabel: 'Life & Adventure',   value: 72, color: '#60a5fa' },
  { label: 'FATE',      sublabel: 'Life RNG',           value: 99, color: '#ff3333' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

// ── Gear Slot ────────────────────────────────────────────────────────────────

interface GearSlotProps {
  slot: GearSlotData
  personaColor: string
}

function GearSlot({ slot, personaColor }: GearSlotProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="relative flex flex-col items-center gap-0.5">
      <motion.div
        className="gear-slot-box"
        style={{
          borderColor: hovered ? personaColor : undefined,
          boxShadow: hovered ? `0 0 10px ${personaColor}55, inset 0 0 8px ${personaColor}22` : undefined,
        }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.15 }}
      >
        <span className="text-4xl leading-none">{slot.icon}</span>
        {slot.ilvl > 0 && (
          <span className="gear-slot-ilvl" style={{ color: personaColor }}>
            {slot.ilvl}
          </span>
        )}
      </motion.div>
      <span className="gear-slot-label">{slot.slot}</span>

      <AnimatePresence>
        {hovered && (
          <motion.div
            className="gear-tooltip"
            initial={{ opacity: 0, y: 4, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.12 }}
          >
            <div className="font-ui font-bold text-xs text-text-primary">{slot.name}</div>
            {slot.ilvl > 0 && (
              <div className="font-mono text-xs" style={{ color: personaColor }}>
                iLv {slot.ilvl}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ── Character Equipment Screen ────────────────────────────────────────────────

interface CharScreenProps {
  persona: typeof personas[0]
}

function CharEquipScreen({ persona }: CharScreenProps) {
  const [frame, setFrame] = useState(1)

  useEffect(() => {
    const animated = ['auteur', 'wordsmith', 'bard', 'ghost']
    if (!animated.includes(persona.id)) return
    const id = setInterval(() => setFrame(f => f === 1 ? 2 : 1), 500)
    return () => { clearInterval(id); setFrame(1) }
  }, [persona.id])

  const spriteUrl =
    persona.id === 'auteur'    ? `/working-${frame}.png` :
    persona.id === 'wordsmith' ? `/filming-${frame}.png`  :
    persona.id === 'bard'      ? `/weights-${frame}.png` :
    persona.id === 'ghost'     ? `/kirby-${frame}.png` :
    '/pixel.png'

  return (
    <div className="char-screen">
      {/* Header */}
      <div className="char-screen-header">
        <div className="flex items-center gap-2">
          <span className="text-text-muted">⚙</span>
          <span>GEAR SET</span>
        </div>
        <div className="flex items-center gap-2">
          <span style={{ color: persona.color }}>★</span>
          <span>Lv {persona.level}</span>
          <span className="font-bold" style={{ color: persona.color }}>
            {persona.title.toUpperCase()}
          </span>
        </div>
        <div className="font-bold" style={{ color: persona.color }}>
          ✦{persona.iLevel}
        </div>
      </div>

      {/* Three-column layout */}
      <div className="char-screen-body">
        {/* Left column — armor + weapons */}
        <div className="char-screen-left">
          {persona.leftGear.map(g => (
            <GearSlot key={g.slot} slot={g} personaColor={persona.color} />
          ))}
        </div>

        {/* Center — sprite + identity */}
        <div className="char-screen-center">
          <div
            className="char-model-frame"
            style={{
              borderColor: `${persona.color}55`,
              boxShadow: `inset 0 0 40px ${persona.color}18, 0 0 20px ${persona.color}22`,
            }}
          >
            {/* Pixel sprite — crop to front-facing frame (top-left of 4×2 sheet) */}
            <div className="pixel-sprite-wrapper">
              <img
                src={spriteUrl}
                alt="Edan"
                className="pixel-sprite-img"
                draggable={false}
              />
            </div>
          </div>

          {/* Identity text below model */}
          <div className="mt-3 text-center">
            <div
              className="font-display font-bold text-lg tracking-widest leading-tight"
              style={{ color: persona.color }}
            >
              {persona.name}
            </div>
            <div className="font-ui text-sm text-text-dim tracking-wide mt-0.5">
              {persona.role}
            </div>
            <div className="font-ui text-xs text-text-muted mt-2 px-2 leading-relaxed italic">
              "{persona.description}"
            </div>
          </div>
        </div>

        {/* Right column — accessories */}
        <div className="char-screen-right">
          {persona.rightGear.map(g => (
            <GearSlot key={g.slot} slot={g} personaColor={persona.color} />
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Main Component ─────────────────────────────────────────────────────────────

export default function HeroPartySelect() {
  const [activeIndex, setActiveIndex] = useState(0)
  const persona = personas[activeIndex]

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-14 pb-16"
    >
      {/* FF diagonal stripe background */}
      <div className="absolute inset-0 ff7-stripes opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-void via-transparent to-void" />

      {/* Floating materia particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {personas.map((p, pi) =>
          [...Array(3)].map((_, i) => (
            <motion.div
              key={`${p.id}-${i}`}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: p.color,
                left: `${8 + pi * 22 + i * 6}%`,
                top: `${20 + (pi * 17 + i * 11) % 60}%`,
                opacity: 0.35,
              }}
              animate={{ y: [-8, 8, -8], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 3 + pi * 0.5 + i * 0.3, repeat: Infinity }}
            />
          ))
        )}
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-6">
        {/* Section label */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-6"
        >
          <motion.div variants={fadeUp} className="section-subheading mb-1">
            ◆ CHARACTER STATUS ◆
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl font-bold glow-teal text-teal tracking-widest"
          >
            EDAN ZHAO
          </motion.h1>
          <motion.div variants={fadeUp} className="font-ui text-text-dim text-sm mt-1 tracking-wide">
            Brisbane, Australia
          </motion.div>
        </motion.div>

        {/* Persona tabs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-1 mb-4"
        >
          {personas.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActiveIndex(i)}
              className="persona-tab"
              style={{
                borderBottomColor: activeIndex === i ? p.color : 'transparent',
                color: activeIndex === i ? p.color : undefined,
              }}
            >
              {p.name}
            </button>
          ))}
        </motion.div>

        {/* FFXIV character equipment screen */}
        <AnimatePresence mode="wait">
          <motion.div
            key={persona.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <CharEquipScreen persona={persona} />
          </motion.div>
        </AnimatePresence>

        {/* Ability scores */}
        <motion.div
          className="ffxiv-panel rounded-sm overflow-hidden mt-5"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="ffxiv-panel-title flex justify-between">
            <span>ABILITY SCORES</span>
            <span className="text-text-muted font-mono" style={{ fontSize: '11px' }}>
              EXP: ∞ / ∞
            </span>
          </div>
          <div className="p-5 space-y-3">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="w-24 flex-shrink-0">
                  <div
                    className="font-ui font-bold text-xs tracking-widest"
                    style={{ color: stat.color }}
                  >
                    {stat.label}
                  </div>
                  <div className="font-mono text-xs text-text-muted mt-0.5">
                    {stat.sublabel}
                  </div>
                </div>
                <div className="flex-1 stat-bar-track">
                  <motion.div
                    className="stat-bar-fill"
                    style={{ background: `linear-gradient(90deg, ${stat.color}88, ${stat.color})` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stat.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.08 }}
                  />
                </div>
                <div className="w-8 text-right font-mono text-xs" style={{ color: stat.color }}>
                  {stat.value}
                </div>
              </div>
            ))}

            <div className="border-t pt-3 mt-2" style={{ borderColor: 'rgba(78,204,163,0.2)' }}>
              <div className="flex justify-between text-xs font-mono text-text-muted">
                <span>CLASS: Multi-Classed</span>
                <span>JOB: Unlocked</span>
              </div>
            </div>

            {/* Limit break */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-ui font-bold text-xs tracking-widest text-red">LIMIT BREAK</span>
                <span className="font-mono text-xs text-red">READY</span>
              </div>
              <div className="stat-bar-track">
                <motion.div
                  className="h-full"
                  style={{
                    background: 'linear-gradient(90deg, #ff3333, #ff8800)',
                    boxShadow: '0 0 8px rgba(255,51,51,0.6)',
                    width: '100%',
                  }}
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll hint */}
        <div className="text-center mt-8">
          <motion.span
            className="font-mono text-xs text-text-muted"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ▼ SCROLL TO CONTINUE ▼
          </motion.span>
        </div>
      </div>
    </section>
  )
}
