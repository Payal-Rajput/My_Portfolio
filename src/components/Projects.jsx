import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    id: "01",
    title: "InstaClone",
    category: "FULL-STACK / AI",
    description:
      "A full-stack social media platform with real-time communication and AI-powered features.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "AI"],
  },
  {
    id: "02",
    title: "SoundStream",
    category: "FULL-STACK",
    description:
      "A full-stack music streaming web application built with React, Node.js and MongoDB.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
  },
  {
    id: "03",
    title: "EchoMind",
    category: "AI / FULL-STACK",
    description:
      "An AI-powered chatbot platform with Gemini AI, authentication and OTP verification.",
    technologies: ["React", "Node.js", "Gemini AI", "JWT", "NodeMailer"],
  },
  {
    id: "04",
    title: "Floral Fragility",
    category: "FRONTEND",
    description:
      "A visually focused frontend experience built around modern UI, interactions and animations.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "05",
    title: "3D Planet",
    category: "THREE.JS / WEBGL",
    description:
      "An interactive 3D planetary experience created with Three.js and WebGL.",
    technologies: ["Three.js", "WebGL", "JavaScript"],
  },
  {
    id: "06",
    title: "Zajno",
    category: "THREE.JS / CREATIVE",
    description:
      "A creative 3D web experience focused on immersive visuals and interaction.",
    technologies: ["Three.js", "WebGL", "JavaScript"],
  },
  {
    id: "07",
    title: "Blobmixer",
    category: "THREE.JS / WEBGL",
    description:
      "An experimental 3D experience built around dynamic shapes, interaction and motion.",
    technologies: ["Three.js", "WebGL", "JavaScript"],
  },
  {
    id: "08",
    title: "Deveb",
    category: "THREE.JS / CREATIVE",
    description:
      "A creative Three.js experiment combining 3D visuals, interaction and animation.",
    technologies: ["Three.js", "WebGL", "JavaScript"],
  },
];

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
      style={{
        zIndex: index + 1,
      }}
    >
      <motion.article
        style={{
          scale,
          y,
        }}
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
        <div className="grid flex-1 items-center gap-10 py-10 md:grid-cols-2">

          {/* Project Preview */}
          <div
            className="
              h-[280px]
              overflow-hidden
              rounded-3xl
              border border-white/10
              bg-[#181818]
              md:h-[55vh]
            "
          >
            <div
              className="
                flex h-full items-center justify-center
                text-sm tracking-[0.25em]
                text-gray-600
              "
            >
              PROJECT PREVIEW
            </div>
          </div>

          {/* Project Details */}
          <div>
            <h3
              className="
                text-5xl font-medium
                tracking-tight
                md:text-7xl
                lg:text-8xl
              "
            >
              {project.title}
            </h3>

            <p
              className="
                mt-6 max-w-lg
                text-sm leading-7
                text-gray-400
                md:text-base
              "
            >
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mt-8 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    border border-white/10
                    px-4 py-2
                    text-xs
                    text-gray-400
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-10 flex gap-4">
              <a
                href="#"
                className="
                  rounded-full
                  bg-white
                  px-6 py-3
                  text-sm text-black
                  transition-transform
                  duration-300
                  hover:scale-105
                "
              >
                Live Project ↗
              </a>

              <a
                href="#"
                className="
                  rounded-full
                  border border-white/20
                  px-6 py-3
                  text-sm
                  transition-all
                  duration-300
                  hover:bg-white
                  hover:text-black
                "
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
}


function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0A0A0A] text-white"
    >
      {/* Section Heading */}
      <div
        className="
          mx-auto max-w-7xl
          px-6
          pb-20
          pt-32
          md:px-10
          lg:px-16
        "
      >
        <p
          className="
            mb-4
            text-sm
            tracking-[0.35em]
            text-gray-500
          "
        >
          SELECTED WORK
        </p>

        <h2
          className="
            text-6xl
            font-semibold
            tracking-tight
            md:text-8xl
          "
        >
          Projects<span className="text-gray-500">.</span>
        </h2>
      </div>

      {/* Stacked Projects */}
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>

      {/* Bottom spacing */}
      <div className="h-32" />
    </section>
  );
}

export default Projects;