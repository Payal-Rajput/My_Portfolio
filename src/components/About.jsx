import { motion } from 'framer-motion'

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0A0A0A] px-5 py-24 md:px-8 md:py-32 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="mb-20 flex items-center gap-3"
        >
          <span className="text-xs text-neutral-600">
            01
          </span>

          <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            About
          </span>
        </motion.div>


        {/* Main Layout */}
        <div className="grid gap-16 lg:grid-cols-[1.3fr_0.7fr]">


          {/* ================= LEFT ================= */}

          <div>

            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-5xl text-[clamp(3rem,6.5vw,7rem)] font-medium leading-[0.95] tracking-[-0.055em] text-neutral-500"
            >
              I build things
              <br />

              <span className="text-white">
                that feel simple.
              </span>
            </motion.h2>


            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="mt-14 max-w-xl"
            >

              <p className="text-lg leading-8 text-neutral-400 md:text-xl">
                I'm a Full Stack Developer who enjoys
                turning ideas into clean, functional and
                meaningful digital experiences.
              </p>

              <p className="mt-6 text-base leading-7 text-neutral-600">
                I love working across the frontend and backend,
                solving problems through code and constantly
                learning better ways to build for the web.
              </p>

            </motion.div>

          </div>


          {/* ================= RIGHT ================= */}

          <div className="flex flex-col justify-end lg:pb-2">


            {/* Arrow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.3,
              }}
              className="mb-12 flex justify-start lg:justify-end"
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-full border border-neutral-800 text-2xl text-neutral-500 transition-all duration-500 hover:-rotate-45 hover:border-neutral-500 hover:text-white">
                ↗
              </span>
            </motion.div>


            {/* Highlight 01 */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="group mb-10"
            >

              <div className="flex items-center justify-between">

                <span className="text-xs text-neutral-600">
                  01
                </span>

                <span className="text-xs uppercase tracking-[0.2em] text-neutral-700">
                  Focus
                </span>

              </div>

              <h3 className="mt-5 text-2xl font-medium tracking-tight text-neutral-200 transition-colors duration-300 group-hover:text-[#e9dfcf]">
                Full Stack Development
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-6 text-neutral-600">
                Creating responsive interfaces and
                reliable backend systems.
              </p>

            </motion.div>


            {/* Highlight 02 */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.35,
              }}
              className="group"
            >

              <div className="flex items-center justify-between">

                <span className="text-xs text-neutral-600">
                  02
                </span>

                <span className="text-xs uppercase tracking-[0.2em] text-neutral-700">
                  Mindset
                </span>

              </div>

              <h3 className="mt-5 text-2xl font-medium tracking-tight text-neutral-200 transition-colors duration-300 group-hover:text-[#e9dfcf]">
                Learn. Build. Improve.
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-6 text-neutral-600">
                Always exploring new technologies
                and better ways to solve problems.
              </p>

            </motion.div>

          </div>

        </div>


        {/* Bottom Floating Text */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-28 flex justify-end"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-700">
            Curiosity drives everything I build.
          </span>
        </motion.div>

      </div>
    </section>
  )
}

export default About