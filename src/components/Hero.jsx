import { motion } from 'framer-motion'

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0A0A0A] px-5 pt-24 md:px-8 lg:px-10"
    >

      {/* ================= BACKGROUND GRID ================= */}


<div className="pointer-events-none absolute inset-0 z-0">

  {/* Vertical Lines */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage:
        'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px)',
      backgroundSize: '90px 100%',
    }}
  />

  {/* Horizontal Lines */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage:
        'linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)',
      backgroundSize: '100% 90px',
    }}
  />

</div>


      {/* ================= AMBIENT GLOW ================= */}

      <motion.div
        className="pointer-events-none absolute right-[10%] top-[30%] -z-10 h-[450px] w-[450px] rounded-full bg-[#e9dfcf]/[0.035] blur-[120px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />


      {/* ================= MAIN CONTAINER ================= */}

      <div className="mx-auto w-full max-w-7xl">

        <div className="grid items-center lg:grid-cols-2">


          {/* ================= LEFT SIDE ================= */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10"
          >

            {/* Role */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-7 text-xs font-medium uppercase tracking-[0.35em] text-neutral-500"
            >
              Full Stack Developer
            </motion.p>


            {/* Name */}

            <div className="overflow-hidden">

              <motion.h1
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-semibold leading-[0.9] tracking-[-0.065em]"
              >

                <span className="block text-[clamp(4rem,9vw,8rem)] text-[#ffffff]">
                  Hi, I'm
                </span>

                <span className="block text-[clamp(4rem,9vw,8rem)] text-neutral-500">
                  Payal Rajput.
                </span>

              </motion.h1>

            </div>


            {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.35,
              }}
              className="mt-8 max-w-lg text-base leading-7 text-neutral-400 md:text-lg"
            >
              I build modern web applications using the MERN
              stack, with a focus on clean code, scalable
              solutions and meaningful user experiences.
            </motion.p>

          </motion.div>



          {/* ================= RIGHT SIDE — IMAGE ================= */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mt-12 flex min-h-[450px] items-center justify-center lg:mt-0 lg:min-h-[650px]"
          >


            {/* BIG CIRCLE */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute h-[330px] w-[330px] rounded-full border border-neutral-800/70 md:h-[550px] md:w-[550px]"
            />


            {/* INNER CIRCLE */}

            <div className="absolute h-[250px] w-[250px] rounded-full border border-neutral-800/40 md:h-[410px] md:w-[410px]" />


            {/* IMAGE */}

            <motion.img
              src="/images/profile3.png"
              alt="Payal Rajput"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative z-10 max-h-[620px] w-auto max-w-full object-contain"
            />

          </motion.div>

        </div>

      </div>


      {/* ================= SCROLL INDICATOR ================= */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-7 right-8 hidden items-center gap-3 md:flex"
      >

        <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-600">
          Scroll down
        </span>

        <motion.span
          animate={{ y: [0, 7, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="text-neutral-500"
        >
          ↓
        </motion.span>

      </motion.div>

    </section>
  )
}

export default Hero