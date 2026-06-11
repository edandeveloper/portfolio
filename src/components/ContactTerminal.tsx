import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const contactLines = [
  { delay: 300,  prompt: true,  text: 'cat contact.txt' },
  { delay: 900,  prompt: false, text: '' },
  { delay: 1100, prompt: false, text: '╔═══════════════════════════════════╗' },
  { delay: 1200, prompt: false, text: '║  EDAN ZHAO — CONTACT INFORMATION  ║' },
  { delay: 1300, prompt: false, text: '╚═══════════════════════════════════╝' },
  { delay: 1500, prompt: false, text: '' },
  { delay: 1700, prompt: false, text: '  Email:    zhao.edan@gmail.com' },
  { delay: 1900, prompt: false, text: '  GitHub:   github.com/edanzhao' },
  { delay: 2100, prompt: false, text: '  LinkedIn: linkedin.com/in/edanzhao' },
  { delay: 2300, prompt: false, text: '' },
  { delay: 2500, prompt: false, text: '  STATUS:   Open to opportunities' },
  { delay: 2700, prompt: false, text: '  SEEKING:  Creative / Technical roles' },
  { delay: 2900, prompt: false, text: '' },
]

const socialLinks = [
  { flag: '--email',    label: 'zhao.edan@gmail.com',       href: 'mailto:zhao.edan@gmail.com', color: '#4ecca3' },
  { flag: '--github',   label: 'github.com/edanzhao',        href: '#',                          color: '#4ecca3' },
  { flag: '--linkedin', label: 'linkedin.com/in/edanzhao',   href: '#',                          color: '#ffd700' },
]

export default function ContactTerminal() {
  const [visibleLines, setVisibleLines] = useState<number>(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold: 0.3 }
    )
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!inView) return
    contactLines.forEach((line, i) => {
      setTimeout(() => setVisibleLines(v => Math.max(v, i + 1)), line.delay)
    })
  }, [inView])

  return (
    <section id="contact" className="py-24 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-subheading mb-2">◆ ESTABLISH CONNECTION ◆</div>
          <h2 className="section-heading text-3xl md:text-4xl">Contact</h2>
        </motion.div>

        {/* Terminal window */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-sm overflow-hidden"
          style={{
            background: '#050810',
            border: '1px solid rgba(78, 204, 163, 0.3)',
            boxShadow: '0 0 20px rgba(78, 204, 163, 0.08)',
          }}
        >
          {/* Window chrome */}
          <div
            className="flex items-center gap-2 px-4 py-2 border-b"
            style={{ background: '#0a0e1a', borderColor: 'rgba(78,204,163,0.2)' }}
          >
            <div className="w-3 h-3 rounded-full opacity-70" style={{ background: '#ff5f56' }} />
            <div className="w-3 h-3 rounded-full opacity-70" style={{ background: '#ffbd2e' }} />
            <div className="w-3 h-3 rounded-full opacity-70" style={{ background: '#27c93f' }} />
            <div className="ml-3 font-mono text-xs text-text-muted">
              edan@portfolio — bash — 80×24
            </div>
          </div>

          {/* Terminal body */}
          <div className="p-5 font-mono text-sm space-y-1 min-h-64">
            {/* Static initial prompt */}
            <div>
              <span style={{ color: '#4ecca3' }}>edan@portfolio</span>
              <span style={{ color: '#8899aa' }}>:</span>
              <span style={{ color: '#ffd700' }}>~</span>
              <span style={{ color: '#8899aa' }}>$ </span>
              <span style={{ color: '#e8e8e8' }}>_</span>
            </div>

            {contactLines.slice(0, visibleLines).map((line, i) => (
              <div key={i}>
                {line.prompt ? (
                  <div>
                    <span style={{ color: '#4ecca3' }}>edan@portfolio</span>
                    <span style={{ color: '#8899aa' }}>:</span>
                    <span style={{ color: '#ffd700' }}>~</span>
                    <span style={{ color: '#8899aa' }}>$ </span>
                    <span className="terminal-text">{line.text}</span>
                  </div>
                ) : (
                  <div
                    className="terminal-text"
                    style={{
                      color: line.text.includes('STATUS') || line.text.includes('SEEKING')
                        ? '#ffd700'
                        : '#4ecca3',
                    }}
                  >
                    {line.text || ' '}
                  </div>
                )}
              </div>
            ))}

            {/* Blinking cursor at end */}
            {visibleLines >= contactLines.length && (
              <div>
                <span style={{ color: '#4ecca3' }}>edan@portfolio</span>
                <span style={{ color: '#8899aa' }}>:</span>
                <span style={{ color: '#ffd700' }}>~</span>
                <span style={{ color: '#8899aa' }}>$ </span>
                <span className="cursor-blink" />
              </div>
            )}
          </div>
        </motion.div>

        {/* Social links as CLI flags */}
        <motion.div
          className="mt-6 space-y-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {socialLinks.map(link => (
            <a
              key={link.flag}
              href={link.href}
              className="flex items-center gap-3 px-4 py-3 rounded-sm group transition-all"
              style={{
                background: 'rgba(78,204,163,0.04)',
                border: '1px solid rgba(78,204,163,0.12)',
              }}
            >
              <span className="font-mono text-sm font-bold flex-shrink-0" style={{ color: link.color }}>
                {link.flag}
              </span>
              <span className="font-mono text-xs text-text-muted group-hover:text-text-primary transition-colors">
                {link.label}
              </span>
              <span
                className="ml-auto font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: link.color }}
              >
                ▶ OPEN
              </span>
            </a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="font-mono text-xs text-text-muted">
            EDAN ZHAO // PORTFOLIO v3.0 // {new Date().getFullYear()}
          </div>
          <div className="font-mono text-xs text-text-muted mt-1 opacity-50">
            Built with React + Vite // Theme: Final Fantasy
          </div>
        </motion.div>
      </div>
    </section>
  )
}
