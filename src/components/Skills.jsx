import { motion } from 'framer-motion'

const skills = [
  'React',
  'JavaScript',
  'Node.js',
  'Express',
  'MongoDB',
  'Tailwind CSS',
  'Git',
  'REST APIs',
]

function MarqueeRow({ items, direction = 1, speed = 25 }) {
  const repeatedItems = [...items, ...items, ...items, ...items]

  return (
    <div className="relative overflow-hidden border-y border-neutral-900">
      <motion.div
        className="flex w-max items-center whitespace-nowrap py-3"
        animate={{
          x: direction === 1 ? ['0%', '-25%'] : ['-25%', '0%'],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {repeatedItems.map((skill, index) => (
          <div
            key={`${skill}-${index}`}
            className="flex items-center px-3 md:px-4"
          >
            <div
              className="
                group
                relative
                flex
                items-center
                rounded-full
                border
                border-neutral-800
                bg-[#0A0A0A]
                px-7
                py-4
                transition-all
                duration-500
                hover:border-neutral-500
                hover:bg-neutral-900
                md:px-10
                md:py-5
              "
            >
              {/* Small dot */}

              <span
                className="
                  mr-4
                  h-2
                  w-2
                  rounded-full
                  bg-neutral-700
                  transition-all
                  duration-500
                  group-hover:bg-white
                  group-hover:scale-125
                "
              />

              {/* Technology */}

              <span
                className="
                  text-[clamp(1.8rem,4vw,4.5rem)]
                  font-medium
                  uppercase
                  leading-none
                  tracking-[-0.04em]
                  text-neutral-400
                  transition-colors
                  duration-500
                  group-hover:text-white
                "
              >
                {skill}
              </span>

              {/* Arrow */}

              <span
                className="
                  ml-5
                  text-lg
                  text-neutral-700
                  transition-all
                  duration-500
                  group-hover:translate-x-1
                  group-hover:text-neutral-400
                "
              >
                ↗
              </span>
            </div>

            {/* Space between cards */}

            <span className="px-2 text-neutral-800 md:px-4">
              ✦
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#0A0A0A] py-8 md:py-16"
    >
      {/* Section heading */}

      <div className="mx-auto mb-20 max-w-7xl px-5 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3"
        >
          <span className="text-xs text-neutral-600">
            02
          </span>

          <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Skills
          </span>
        </motion.div>
      </div>

      {/* Marquee */}

      <div className="flex flex-col">

        <MarqueeRow
          items={skills.slice(0, 4)}
          direction={1}
          speed={28}
        />

        <MarqueeRow
          items={skills.slice(4)}
          direction={-1}
          speed={32}
        />

        <MarqueeRow
          items={skills}
          direction={1}
          speed={38}
        />

      </div>

      {/* Bottom description */}

      <div className="mx-auto mt-16 flex max-w-7xl justify-end px-5 md:px-8 lg:px-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-md text-right text-sm leading-6 text-neutral-600"
        >
          Technologies I use to turn ideas into
          functional, scalable and engaging web
          experiences.
        </motion.p>
      </div>
    </section>
  )
}

export default Skills