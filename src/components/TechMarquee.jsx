import { motion } from 'framer-motion'

function TechMarquee() {
  const technologies = [
      'JavaScript',
    'React',
    'Node.js',
    'Express',
    'MongoDB',
    'Git',
    'GitHub',
    'REST APIs',
  ]

  return (
    <section className="overflow-hidden border-y border-neutral-800 py-5">
      <motion.div
        className="flex w-max items-center gap-8 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {[...technologies, ...technologies].map((tech, index) => (
          <div
            key={`${tech}-${index}`}
            className="flex items-center gap-8"
          >
            <span className="text-sm font-medium uppercase tracking-[0.15em] text-neutral-500">
              {tech}
            </span>

            <span className="text-neutral-700">✦</span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}

export default TechMarquee