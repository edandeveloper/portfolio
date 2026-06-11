import { motion } from 'framer-motion'

const stats = [
  { label: 'RECON', sublabel: 'Cybersecurity', value: 72, color: '#00ff41' },
  { label: 'MATERIA', sublabel: 'Photography / Film', value: 85, color: '#4ecca3' },
  { label: 'LIMIT', sublabel: 'Creative Writing', value: 78, color: '#ffd700' },
  { label: 'SPEED', sublabel: 'Frontend Dev', value: 80, color: '#4ecca3' },
  { label: 'HARMONY', sublabel: 'Music', value: 68, color: '#ffd700' },
  { label: 'LUCK', sublabel: 'Life RNG', value: 99, color: '#ff3333' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
}

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

function StatBar({ stat, index }: { stat: typeof stats[0]; index: number }) {
  return (
    <motion.div
      variants={fadeUp}
      className="flex items-center gap-3"
    >
      <div className="w-20 flex-shrink-0">
        <div className="font-ui font-bold text-xs tracking-widest" style={{ color: stat.color }}>
          {stat.label}
        </div>
        <div className="font-mono text-xs text-text-muted mt-0.5">{stat.sublabel}</div>
      </div>
      <div className="flex-1 stat-bar-track">
        <motion.div
          className="stat-bar-fill"
          style={{ background: `linear-gradient(90deg, ${stat.color}88, ${stat.color})` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${stat.value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: index * 0.1, ease: 'easeOut' }}
        />
      </div>
      <div className="w-8 text-right font-mono text-xs" style={{ color: stat.color }}>
        {stat.value}
      </div>
    </motion.div>
  )
}

export default function HeroCharacterSheet() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12"
    >
      {/* FF7 diagonal stripe background */}
      <div className="absolute inset-0 ff7-stripes opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-void via-transparent to-void" />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: i % 2 === 0 ? '#4ecca3' : '#00ff41',
              left: `${10 + i * 7}%`,
              top: `${15 + (i * 13) % 70}%`,
              opacity: 0.4,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header label */}
        <motion.div variants={fadeUp} className="text-center mb-8">
          <div className="section-subheading mb-2">◆ CHARACTER STATUS ◆</div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left panel — identity */}
          <motion.div variants={slideLeft} className="ffxiv-panel rounded-sm overflow-hidden animate-glow-pulse">
            <div className="ffxiv-panel-title">PARTY MEMBER</div>
            <div className="p-6">
              {/* Avatar placeholder */}
              <div className="w-28 h-28 mx-auto mb-5 relative">
                <div
                  className="w-full h-full rounded-sm flex items-center justify-center text-5xl"
                  style={{
                    background: 'linear-gradient(135deg, #1a3a6b, #0f1826)',
                    border: '2px solid #4ecca3',
                    boxShadow: '0 0 16px rgba(78,204,163,0.3)',
                  }}
                >
                  🧑‍💻
                </div>
                {/* LVL badge */}
                <div
                  className="absolute -bottom-2 -right-2 px-2 py-0.5 text-xs font-mono font-bold"
                  style={{
                    background: '#ffd700',
                    color: '#080c14',
                    fontSize: '10px',
                  }}
                >
                  LVL 23
                </div>
              </div>

              <h1 className="font-display text-3xl font-bold text-center glow-teal text-teal mb-1">
                EDAN ZHAO
              </h1>
              <div className="text-center font-mono text-xs text-green mb-1 glow-green">
                &gt; PENETRATION TESTER / CREATIVE
              </div>
              <div className="text-center font-ui text-text-dim text-sm mb-5">
                Sydney, Australia
              </div>

              {/* Job class tags */}
              <div className="flex flex-wrap justify-center gap-2 mb-5">
                {['Photographer', 'Filmmaker', 'Writer', 'Dev', 'Hacker'].map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs font-ui font-semibold tracking-wider"
                    style={{
                      background: 'rgba(78, 204, 163, 0.1)',
                      border: '1px solid rgba(78, 204, 163, 0.3)',
                      color: '#4ecca3',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Flavour description */}
              <p className="text-text-dim font-ui text-sm text-center leading-relaxed">
                A creative mind studying cybersecurity. Shoots film, writes words, composes music,
                and finds vulnerabilities. Looking for the hidden path in every system.
              </p>
            </div>
          </motion.div>

          {/* Right panel — stats */}
          <motion.div variants={slideRight} className="ffxiv-panel rounded-sm overflow-hidden">
            <div className="ffxiv-panel-title flex items-center justify-between">
              <span>ABILITY SCORES</span>
              <span className="text-text-muted font-mono" style={{ fontSize: '11px' }}>
                EXP: ∞ / ∞
              </span>
            </div>
            <div className="p-6 space-y-4">
              <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                {stats.map((stat, i) => (
                  <StatBar key={stat.label} stat={stat} index={i} />
                ))}
              </motion.div>

              {/* Divider */}
              <div className="border-t border-teal-dim opacity-30 pt-4">
                <div className="flex justify-between text-xs font-mono text-text-muted">
                  <span>CLASS: Multi-Classed</span>
                  <span>JOB: Pending OSCP</span>
                </div>
              </div>

              {/* Limit break meter */}
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
        </div>

        {/* Scroll hint */}
        <motion.div
          variants={fadeUp}
          className="text-center mt-10"
        >
          <div className="font-mono text-xs text-text-muted">
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ▼ SCROLL TO CONTINUE ▼
            </motion.span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
