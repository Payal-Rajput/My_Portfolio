
import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Code2,
  Video,
  Palette,
  ArrowUpRight,
  MapPin,
  FileCheck,
} from "lucide-react";

const experiences = [
  {
  id: 1,
  company: "Palak Jain Cancer Rehab",
  role: " Website Developer · Content Creator · Video Editor ",
  period: "12 Jul – 12 Oct, 2026",
  duration: "3 Months",
  type: "Full-time",
  certificate: "/certificate/rehab.pdf",
  location: "On-site",
    description:
      "Worked across content creation, video editing, and website development to support the organization's digital presence.",
    responsibilities: [
        {
          icon: Code2,
          title: "Website Development",
          detail: "Worked on website development and improvements.",
        },
      {
        icon: Palette,
        title: "Content Creation",
        detail: "Created digital content for the organization.",
      },
      {
        icon: Video,
        title: "Video Editing",
        detail: "Edited videos for digital communication and content.",
      },
    ],
    tags: [ "Web Development","Content Creation", "Video Editing"],
  },
  {
    id: 2,
    company: "Unified Mentor Pvt. Ltd.",
    role: "Web Development Intern",
    period: "1 Aug – 1 Sep, 2024",
    duration: "1 Month",
    type: "Internship",
    certificate: "/certificate/unified-mentor.pdf",
    location: "Remote",
    description:
      "Completed a one-month remote internship focused on web development.",
    responsibilities: [
      {
        icon: Code2,
        title: "Web Development",
        detail: "Gained practical experience in a web development internship.",
      },
    ],
    tags: ["Web Development", "Remote"],
  },
];

export  function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#0A0A0A] px-5 py-24 text-white sm:px-8 lg:px-16 lg:py-32"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute -left-40 top-40 h-80 w-80 rounded-full bg-teal-500/[0.06] blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-teal-500/[0.05] blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-teal-400">
            My Journey
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Experience<span className="text-teal-400">.</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
            The roles and experiences that have helped me grow,
            build practical skills, and explore the digital world.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute bottom-8 left-[15px] top-8 w-px bg-gradient-to-b from-teal-400/70 via-teal-400/20 to-transparent sm:left-[19px]" />

          <div className="space-y-10">
            {experiences.map((experience, index) => (
              <motion.article
                key={experience.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                className="relative pl-10 sm:pl-14"
              >
                {/* Timeline marker */}
                <div className="absolute left-[9px] top-7 z-10 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-teal-400 bg-[#0A0A0A] shadow-[0_0_14px_rgba(45,212,191,0.25)] sm:left-[13px]" />

                <div className="group rounded-2xl border border-white/[0.09] bg-white/[0.025] p-5 transition-all duration-300 hover:border-teal-400/30 hover:bg-white/[0.04] sm:p-8 lg:p-9">
                  {/* Card header */}
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-teal-400/20 bg-teal-400/[0.08] px-3 py-1 text-xs font-medium text-teal-300">
                          {experience.type}
                        </span>

                        <span className="text-xs text-zinc-500">
                          {experience.duration}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                        {experience.company}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-teal-300 sm:text-base">
                        {experience.role}
                      </p>
                    </div>

                    <div className="shrink-0 sm:text-right">
                      <p className="text-sm text-zinc-300">
                        {experience.period}
                      </p>

                      <p className="mt-2 flex items-center gap-1.5 text-xs text-zinc-500 sm:justify-end">
                        <MapPin size={13} />
                        {experience.location}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-6 max-w-3xl text-sm leading-7 text-zinc-400">
                    {experience.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {experience.responsibilities.map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.title}
                          className="rounded-xl border border-white/[0.06] bg-black/20 p-4"
                        >
                          <Icon
                            size={19}
                            className="mb-3 text-teal-400"
                          />

                          <h4 className="text-sm font-medium text-zinc-200">
                            {item.title}
                          </h4>

                          <p className="mt-2 text-xs leading-5 text-zinc-500">
                            {item.detail}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  {/* Skill tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {experience.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-white/[0.05] px-3 py-1.5 text-xs text-zinc-400 transition-colors group-hover:bg-white/[0.07]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
{/* certificate */}
                  {experience.certificate && (
  <a
    href={experience.certificate}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-6 inline-flex items-center gap-2
      text-sm font-medium text-teal-400
      transition-colors hover:text-teal-600"
  >
    <FileCheck size={16} />
    View Certificate
    <ArrowUpRight size={16} />
  </a>
)}


                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 flex items-center gap-3 pl-10 text-sm text-zinc-500 sm:pl-14"
        >
          <BriefcaseBusiness size={17} className="text-teal-400" />
          <p>Every experience is another step forward.</p>
          <ArrowUpRight size={15} className="text-teal-400" />
        </motion.div>
      </div>
    </section>
  );
}
