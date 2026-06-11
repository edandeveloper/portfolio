import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { timelineEvents } from '../data/timeline'

gsap.registerPlugin(ScrollTrigger)

const phaseColors: Record<string, string> = {
  origin:    '#ffd700',
  growth:    '#4ecca3',
  awakening: '#c084fc',
  work:      '#60a5fa',
  ascent:    '#ff8800',
  present:   '#ff3333',
}

export default function LifeTimeline() {
  const [activeId, setActiveId] = useState('birth')
  const sectionRef = useRef<HTMLDivElement>(null)
  const barFillRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!barFillRef.current || !sectionRef.current) return

      gsap.fromTo(
        barFillRef.current,
        { width: '0%' },
        {
          width: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'bottom 40%',
            scrub: 1,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const active = timelineEvents.find(e => e.id === activeId)

  return (
    <section id="timeline" ref={sectionRef} className="py-24 px-4 md:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-subheading mb-2">◆ ADVENTURE LOG ◆</div>
          <h2 className="section-heading text-3xl md:text-4xl">The Hero's Journey</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="ffxiv-panel rounded-sm overflow-hidden"
        >
          <div className="ffxiv-panel-title">HERO'S JOURNEY — ATB TIMELINE</div>

          <div className="p-6">
            {/* ATB bar track */}
            <div className="relative mb-8">
              {/* Track */}
              <div
                className="h-3 rounded-sm overflow-hidden"
                style={{
                  background: '#0a0e1a',
                  border: '1px solid rgba(78,204,163,0.2)',
                }}
              >
                <div
                  ref={barFillRef}
                  className="h-full"
                  style={{
                    width: '0%',
                    background: 'repeating-linear-gradient(90deg, #4ecca3 0px, #4ecca3 16px, #1a5040 16px, #1a5040 18px)',
                    boxShadow: '0 0 8px rgba(78,204,163,0.5)',
                  }}
                />
              </div>

              {/* Node row */}
              <div
                ref={scrollContainerRef}
                className="flex items-center justify-between mt-4 overflow-x-auto pb-2"
              >
                {timelineEvents.map((event) => {
                  const isActive = activeId === event.id
                  const color = phaseColors[event.phase]
                  return (
                    <div
                      key={event.id}
                      className="flex flex-col items-center cursor-pointer flex-shrink-0 px-2"
                      onClick={() => setActiveId(event.id)}
                    >
                      {/* Node */}
                      <motion.div
                        className="timeline-node mb-2"
                        style={{
                          borderColor: isActive ? color : 'rgba(78,204,163,0.5)',
                          background: isActive ? color : '#0f1826',
                          boxShadow: isActive ? `0 0 12px ${color}88` : undefined,
                          animation: isActive ? 'nodePulse 2s ease-in-out infinite' : undefined,
                        }}
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 0.9 }}
                      />

                      {/* Year */}
                      <div
                        className="font-mono text-xs font-bold"
                        style={{ color: isActive ? color : '#445566' }}
                      >
                        {event.year}
                      </div>

                      {/* Phase label */}
                      <div
                        className="font-ui text-xs tracking-wider mt-0.5 whitespace-nowrap"
                        style={{
                          color: isActive ? color : '#2a3a4a',
                          opacity: isActive ? 1 : 0.6,
                          fontSize: '10px',
                        }}
                      >
                        {event.label}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Event detail panel */}
            <AnimatePresence mode="wait">
              {active && (
                <motion.div
                  key={active.id}
                  className="p-5 rounded-sm"
                  style={{
                    background: '#0a0e1a',
                    border: `1px solid ${phaseColors[active.phase]}44`,
                    boxShadow: `0 0 16px ${phaseColors[active.phase]}11`,
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{active.icon}</span>
                    <div>
                      <div
                        className="font-display font-bold text-xl"
                        style={{
                          color: phaseColors[active.phase],
                          textShadow: `0 0 8px ${phaseColors[active.phase]}66`,
                        }}
                      >
                        {active.title}
                      </div>
                      <div className="font-mono text-xs text-text-muted">
                        {active.year} — {active.label}
                      </div>
                    </div>
                  </div>
                  <p className="font-ui text-text-dim leading-relaxed text-sm">
                    {active.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation arrows */}
            <div className="flex justify-between mt-4">
              <button
                className="font-mono text-xs text-text-muted hover:text-teal transition-colors disabled:opacity-20"
                onClick={() => {
                  const i = timelineEvents.findIndex(e => e.id === activeId)
                  if (i > 0) setActiveId(timelineEvents[i - 1].id)
                }}
                disabled={activeId === timelineEvents[0].id}
              >
                ◀ PREV
              </button>
              <div className="font-mono text-xs text-text-muted">
                {timelineEvents.findIndex(e => e.id === activeId) + 1} / {timelineEvents.length}
              </div>
              <button
                className="font-mono text-xs text-text-muted hover:text-teal transition-colors disabled:opacity-20"
                onClick={() => {
                  const i = timelineEvents.findIndex(e => e.id === activeId)
                  if (i < timelineEvents.length - 1) setActiveId(timelineEvents[i + 1].id)
                }}
                disabled={activeId === timelineEvents[timelineEvents.length - 1].id}
              >
                NEXT ▶
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
