import { motion } from 'framer-motion'
import { projects } from '../data/projects'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function ProjectCards() {
  return (
    <section id="projects" className="py-24 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="section-subheading mb-2">◆ CREATIVE WORKS ◆</div>
          <h2 className="section-heading text-3xl md:text-4xl">Projects</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {projects.map(project => (
            <motion.div key={project.id} variants={cardVariants}>
              <motion.a
                href={project.link}
                className="ff7-card block rounded-sm overflow-hidden h-full"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                {/* Card stripe accent top */}
                <div
                  className="h-0.5"
                  style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
                />

                <div className="p-5 relative z-10">
                  {/* Icon + title row */}
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 flex items-center justify-center text-xl flex-shrink-0"
                      style={{
                        background: `${project.color}15`,
                        border: `1px solid ${project.color}44`,
                      }}
                    >
                      {project.icon}
                    </div>
                    <div>
                      <h3
                        className="font-ui font-bold text-lg leading-none tracking-wide"
                        style={{ color: project.color }}
                      >
                        {project.title}
                      </h3>
                      <div className="font-mono text-xs text-text-muted mt-0.5">
                        {project.subtitle}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-text-dim font-ui text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-1.5 py-0.5 font-mono text-xs"
                        style={{
                          background: `${project.color}10`,
                          border: `1px solid ${project.color}30`,
                          color: project.color,
                          opacity: 0.8,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA — FF7 cursor style */}
                  <div
                    className="flex items-center gap-2 font-ui font-bold text-sm"
                    style={{ color: project.color }}
                  >
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      ▶
                    </motion.span>
                    {project.preview}
                  </div>
                </div>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
