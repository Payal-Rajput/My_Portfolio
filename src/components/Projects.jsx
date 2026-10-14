import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "InstaClone",
    category: "FULL-STACK / AI",
    description:
      "A full-stack social media platform featuring authentication, real-time chat, media sharing, and AI-powered functionality.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "JWT",
      "AI",
    ],
    github:
      "https://github.com/Payal-Rajput/Full-Stack-Social-Media",

     image: "/images/1insta.png",    
  },

  {
    id: "02",
    title: "SoundStream",
    category: "FULL-STACK",
    description:
      "A full-stack music streaming platform built with React and Node.js, featuring secure authentication and media management.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "ImageKit",
    ],
    github:
      "https://github.com/Payal-Rajput/Full-Stack-Music-Streaming-Site",

     image: "/images/2soundstream.png",    
  },

  {
    id: "03",
    title: "EchoMind",
    category: "AI / FULL-STACK",
    description:
      "An AI-powered chatbot application integrating Gemini AI with secure authentication and OTP-based email verification.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "Gemini AI",
      "JWT",
      "NodeMailer",
    ],
    github:
      "https://github.com/Payal-Rajput/Openchat-AI",

     image: "/images/3echomind.png",    
  },

  {
    id: "04",
    title: "Floral Fragility",
    category: "FRONTEND",
    description:
      "A visually immersive frontend experience focused on elegant design, interactive elements, and smooth web animations.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    live: "https://floralfragility.netlify.app/",
    github:
      "https://github.com/Payal-Rajput/Project-floral-fragility",

    image: "/images/4floral.png",  
  },

  {
    id: "05",
    title: "3D Planet",
    category: "THREE.JS / WEBGL",
    description:
      "An interactive 3D planetary experience created with Three.js, WebGL, and immersive visual effects.",
    technologies: [
      "Three.js",
      "JavaScript",
      "WebGL",
    ],
    live: "https://3js-planet.netlify.app/",
    github:
      "https://github.com/Payal-Rajput/3JS-PLANET-Project",

    image: "/images/5planet.png",  
  },

  {
    id: "06",
    title: "Zajno",
    category: "THREE.JS / CREATIVE",
    description:
      "A creative 3D web experience combining Three.js, WebGL, interaction, and visual storytelling.",
    technologies: [
      "Three.js",
      "JavaScript",
      "WebGL",
    ],
    live: "https://3jszajno.netlify.app/",
    github:
      "https://github.com/Payal-Rajput/3JS-ZAJNO-Project",

    image: "/images/6zajno.png",  
  },

  {
    id: "07",
    title: "Blobmixer",
    category: "THREE.JS / WEBGL",
    description:
      "An experimental 3D experience built with Three.js, WebGL, and shaders to create an interactive visual environment.",
    technologies: [
      "Three.js",
      "WebGL",
      "JavaScript",
      "GLSL",
    ],
    live: "https://3jsblobmixer.netlify.app/",
    github:
      "https://github.com/Payal-Rajput/3JS-BlobMixer-Project",

    image: "/images/7blob.png",  
  },

  {
    id: "08",
    title: "Deveb",
    category: "THREE.JS / CREATIVE",
    description:
      "A creative Three.js experience focused on interactive 3D visuals, motion, and immersive web interaction.",
    technologies: [
      "Three.js",
      "WebGL",
      "JavaScript",
    ],
    live: "https://3jsdeveb.netlify.app/",
    github:
      "https://github.com/Payal-Rajput/3JS-DEVEB-Project",

    image: "/images/8deveb.png",  
  },

];

const majorProjects = projects.filter((project) =>
  ["01", "02", "03"].includes(project.id)
);

const minorProjects = projects.filter((project) =>
  ["04", "05", "06", "07", "08"].includes(project.id)
);



function ProjectCard({ project, index }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0.94]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -20]
  );

  return (
    <div
      ref={ref}
      className="sticky top-20 mb-10 h-[75vh] md:top-24"
      style={{ zIndex: index + 1 }}
    >
      <motion.article
        style={{ scale, y }}
        className="
          relative flex h-full flex-col
          overflow-hidden rounded-[2rem]
          border border-white/10
          bg-[#111111]
          p-6 shadow-2xl
          md:p-10 lg:p-12
        "
      >
        {/* Project Header */}
        <div className="flex items-start justify-between">
          <span className="text-sm text-gray-500">
            {project.id}
          </span>

          <span className="text-xs tracking-[0.25em] text-gray-500">
            {project.category}
          </span>
        </div>

        {/* Project Content */}
        <div className="grid min-h-0 flex-1 items-center gap-8 py-6 md:grid-cols-2 md:gap-10">

          {/* LEFT: Project Image */}
          <div
            className="
              relative h-[260px] min-w-0
              overflow-hidden rounded-3xl
              border border-white/10
              bg-[#181818]
              md:h-full
            "
          >
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.title} project preview`}
                loading="lazy"
                className="
                  absolute inset-0
                  h-full w-full
                  object-contain object-center
                  transition-transform duration-500
                  hover:scale-105
                "
              />
            ) : (
              <div
                className="
                  flex h-full items-center justify-center
                  text-sm tracking-[0.25em]
                  text-gray-600
                "
              >
                PROJECT PREVIEW
              </div>
            )}
          </div>

          {/* RIGHT: Project Details */}
          <div className="min-w-0">
            <h3
              className="
                break-words text-4xl font-medium
                tracking-tight
                md:text-5xl
                lg:text-7xl
              "
            >
              {project.title}
            </h3>

            <p
              className="
                mt-5 max-w-lg
                text-sm leading-7
                text-gray-400
                md:text-base
              "
            >
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full border border-white/10
                    px-3 py-2 text-xs text-gray-400
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    rounded-full bg-white
                    px-6 py-3 text-sm text-black
                    transition-transform duration-300
                    hover:scale-105
                  "
                >
                  Live Project ↗
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    rounded-full border border-white/20
                    px-6 py-3 text-sm
                    transition-all duration-300
                    hover:bg-white hover:text-black
                  "
                >
                  GitHub ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
}



function MinorProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      animate={{
        y: [0, -6, 0],
      }}
      transition={{
        y: {
          duration: 3 + index * 0.4,
          repeat: Infinity,
          ease: "easeInOut",
        },
        opacity: {
          duration: 0.6,
        },
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      className="
        group min-w-0 overflow-hidden
        rounded-2xl border border-white/10
        bg-[#111111] p-3
        transition-colors duration-300
        hover:border-white/25
      "
    >
      {/* Preview */}
      
<div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-xl bg-[#181818]">
  <img
    src={project.image}
    alt={`${project.title} project preview`}
    loading="lazy"
    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
  />

  <a
    href={project.live || project.github}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Open ${project.title}`}
    className="absolute inset-0 z-10"
  />

  <span className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition-colors group-hover:bg-white group-hover:text-black">
    ↗
  </span>
</div>

      {/* Project details */}
      <div className="px-1 pb-2">
        <p className="mb-2 text-[10px] tracking-[0.2em] text-gray-500">
          {project.category}
        </p>

        <h3 className="text-xl font-medium text-white">
          {project.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-400">
          {project.description}
        </p>

        {/* Technology tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="
                rounded-full border border-white/10
                px-2.5 py-1 text-[10px] text-gray-400
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-5 flex flex-wrap gap-3 border-t border-white/10 pt-4">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white transition-colors hover:text-gray-400"
            >
              Live Demo ↗
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-400 transition-colors hover:text-white"
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}


function Projects() {
  return (
    <section
      id="projects"
      className="overflow-hidden bg-[#0A0A0A] text-white"
    >
      {/* Main heading */}
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-32 md:px-10 lg:px-16">
        <p className="mb-4 text-sm tracking-[0.35em] text-gray-500">
          SELECTED WORK
        </p>

        <h2 className="text-6xl font-semibold tracking-tight md:text-8xl">
          Projects<span className="text-gray-500">.</span>
        </h2>

        <p className="mt-5 max-w-lg text-base leading-7 text-gray-400">
          A collection of full-stack applications, AI-powered
          experiences, and creative experiments.
        </p>
      </div>

      {/* MAJOR PROJECTS */}
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-10 px-2 md:px-4">
          <p className="mb-3 text-xs tracking-[0.3em] text-gray-500">
            01 — FEATURED WORK
          </p>

          <h3 className="text-3xl font-medium md:text-5xl">
            Major Projects<span className="text-gray-500">.</span>
          </h3>

          <p className="mt-3 text-sm text-gray-400">
            Full-stack development & AI applications
          </p>
        </div>

        {/* Existing sticky stacked cards */}
        {majorProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>

      {/* MINOR PROJECTS */}
      <div className="mx-auto max-w-7xl px-6 pb-32 pt-28 md:px-10 lg:px-16">
        <div className="mb-10">
          <p className="mb-3 text-xs tracking-[0.3em] text-gray-500">
            02 — CREATIVE EXPERIMENTS
          </p>

          <h3 className="text-3xl font-medium md:text-5xl">
            Minor Projects<span className="text-gray-500">.</span>
          </h3>

          <p className="mt-3 text-sm text-gray-400">
            Frontend explorations, 3D worlds & interactive visuals
          </p>
        </div>

        {/* Small animated cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {minorProjects.map((project, index) => (
            <MinorProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;