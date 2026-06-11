import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

interface Props {
  onComplete: () => void
}

const bootLines = [
  { text: 'BIOS v2.4.7 — PORTFOLIO SYSTEM INITIALIZING...', delay: 0, color: '#8899aa' },
  { text: 'CPU: EDAN ZHAO // CREATIVE PROCESSOR [ACTIVE]', delay: 0.3, color: '#4ecca3' },
  { text: 'MEMORY: LOADING LIFE EXPERIENCE DATA...', delay: 0.6, color: '#8899aa' },
  { text: '  [############################] 100%', delay: 0.9, color: '#00ff41' },
  { text: 'MATERIA SLOTS: DETECTED [6/6]', delay: 1.2, color: '#ffd700' },
  { text: '  → PHOTOGRAPHY.materia ........... EQUIPPED', delay: 1.5, color: '#4ecca3' },
  { text: '  → FILMMAKING.materia ............. EQUIPPED', delay: 1.7, color: '#4ecca3' },
  { text: '  → WRITING.materia ............... EQUIPPED', delay: 1.9, color: '#4ecca3' },
  { text: '  → MUSIC.materia .................. EQUIPPED', delay: 2.1, color: '#4ecca3' },
  { text: '  → CYBERSECURITY.materia ......... EQUIPPED', delay: 2.3, color: '#00ff41' },
  { text: '  → LIMIT_BREAK.materia ........... EQUIPPED', delay: 2.5, color: '#ff3333' },
  { text: 'NETWORK: SCANNING FOR VULNERABILITIES...', delay: 2.8, color: '#8899aa' },
  { text: '  [NONE FOUND] — SYSTEM SECURE', delay: 3.1, color: '#00ff41' },
  { text: 'COMBAT SYSTEMS: ONLINE', delay: 3.4, color: '#ffd700' },
  { text: 'PORTFOLIO v1.0.0 // READY', delay: 3.7, color: '#4ecca3' },
]

export default function BootSequence({ onComplete }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const linesRef = useRef<HTMLDivElement[]>([])
  const barRef = useRef<HTMLDivElement>(null)
  const [skipped, setSkipped] = useState(false)

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.5,
          delay: 0.4,
          onComplete,
        })
      },
    })

    linesRef.current.forEach((line, i) => {
      if (!line) return
      tl.to(
        line,
        { opacity: 1, x: 0, duration: 0.2, ease: 'power1.out' },
        bootLines[i].delay
      )
    })

    tl.to(barRef.current, { width: '100%', duration: 0.8, ease: 'power2.inOut' }, 3.5)

    return () => { tl.kill() }
  }, [onComplete])

  const handleSkip = () => {
    if (skipped) return
    setSkipped(true)
    gsap.killTweensOf('*')
    gsap.to(containerRef.current, {
      opacity: 0,
      duration: 0.3,
      onComplete,
    })
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-start justify-center bg-void px-8 md:px-16"
      style={{ fontFamily: "'Share Tech Mono', monospace" }}
    >
      {/* CRT scanline */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)',
        }}
      />

      {/* Boot text lines */}
      <div className="w-full max-w-2xl space-y-1 mb-8">
        {bootLines.map((line, i) => (
          <div
            key={i}
            ref={el => { if (el) linesRef.current[i] = el }}
            className="text-sm leading-relaxed boot-line"
            style={{
              color: line.color,
              textShadow: `0 0 6px ${line.color}60`,
              opacity: 0,
              transform: 'translateX(-4px)',
            }}
          >
            {line.text}
          </div>
        ))}
      </div>

      {/* FF-style progress bar */}
      <div className="w-full max-w-2xl mb-6">
        <div className="text-xs text-text-dim mb-2" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
          LOADING PORTFOLIO DATA
        </div>
        <div
          className="h-4 bg-void border border-teal-dim overflow-hidden"
          style={{ borderRadius: '1px' }}
        >
          <div
            ref={barRef}
            className="h-full"
            style={{
              width: '0%',
              background: 'repeating-linear-gradient(90deg, #00ff41 0px, #00ff41 16px, #004a10 16px, #004a10 18px)',
              boxShadow: '0 0 8px rgba(0, 255, 65, 0.6)',
            }}
          />
        </div>
      </div>

      {/* Skip button */}
      <button
        onClick={handleSkip}
        className="text-xs text-text-muted hover:text-teal transition-colors"
        style={{ fontFamily: "'Share Tech Mono', monospace" }}
      >
        [ PRESS TO SKIP ]
        <span className="cursor-blink ml-1" />
      </button>
    </div>
  )
}
