
import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  School,
  Award,
} from "lucide-react";

const education = [
  {
    id: 1,
    title: "B.Tech",
    subtitle: "Computer Science & Engineering",
    institution: "LNCT Group of Colleges, Bhopal",
    period: "2022 – 2026",
    cgpa: "8.81",
    icon: GraduationCap,
    featured: true,
  },
  {
    id: 2,
    title: "Class XII",
    subtitle: "Higher Secondary Education",
    institution: "Kendriya Vidyalaya",
    period: "2021",
    icon: BookOpen,
  },
  {
    id: 3,
    title: "Class X",
    subtitle: "Secondary Education",
    institution: "St Charles School, Hoshangabad",
    period: "2019",
    icon: School,
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-[#0A0A0A] px-5 py-24 text-white sm:px-8 lg:px-16 lg:py-32"
    >
      {/* Subtle teal background glow */}
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-teal-500/[0.05] blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-teal-400">
            My Background
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Education<span className="text-teal-400">.</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
            My academic journey and educational background.
          </p>
        </motion.div>

        {/* Education cards */}
        <div className="grid gap-5 md:grid-cols-2">
          {education.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                className={`group rounded-2xl border p-6 transition-all duration-300 sm:p-8 ${
                  item.featured
                    ? "border-teal-400/25 bg-teal-400/[0.025] hover:border-teal-400/40"
                    : "border-white/[0.08] bg-white/[0.02] hover:border-teal-400/25"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-teal-400/20 bg-teal-400/[0.07]">
                    <Icon
                      size={23}
                      strokeWidth={1.6}
                      className="text-teal-400"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="mb-2 text-xs font-medium uppercase tracking-wider text-teal-400">
                      {item.title}
                    </p>

                    <h3 className="text-lg font-semibold leading-snug text-white sm:text-xl">
                      {item.subtitle}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      {item.institution}
                    </p>

                    <p className="mt-4 text-xs text-zinc-500">
                      {item.period}
                    </p>

                    {item.cgpa && (
                      <div className="mt-6 flex items-center justify-between border-t border-white/[0.08] pt-4">
                        <div className="flex items-center gap-2 text-sm text-zinc-400">
                          <Award
                            size={17}
                            className="text-teal-400"
                          />
                          CGPA
                        </div>

                        <span className="text-xl font-semibold text-teal-400">
                          {item.cgpa}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
