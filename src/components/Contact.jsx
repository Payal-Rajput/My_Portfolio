
import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";



function GithubIcon({ size = 17 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.05c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.51 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3.01 0 4.28-2.61 5.22-5.1 5.5.4.35.75 1.03.75 2.08V22c0 .29.2.63.76.53A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function LinkedInIcon({ size = 17 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.45H4.96V9h2.97v9.45ZM6.45 7.71a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12 10.74h-2.97v-4.6c0-1.1-.02-2.52-1.54-2.52-1.55 0-1.79 1.2-1.79 2.44v4.68H9.18V9h2.85v1.29h.04a3.13 3.13 0 0 1 2.82-1.55c3.01 0 3.56 1.98 3.56 4.55v5.16Z" />
    </svg>
  );
}



const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Payal-Rajput",
    icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/payal-rajput-910365256",
    icon: LinkedInIcon,
  },
];

export default function Contact() {
 
const email = "payal3j04@gmail.com";


  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0A0A0A] px-5 py-24 text-white sm:px-8 lg:px-16 lg:py-32"
    >
      {/* Subtle teal glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400/[0.05] blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65 }}
        className="relative mx-auto max-w-4xl text-center"
      >
        <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-teal-400">
          Let's Connect
        </p>

        <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
          Let's work
          {/* <br /> */}
          <span className="text-teal-400">  together.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-zinc-400 sm:text-base">
          Have an opportunity or an interesting project in mind?
          Feel free to reach out. I'd love to connect.
        </p>

        {/* Email button */}
     
<motion.a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=payal3j04%40gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.04 }}
  whileTap={{ scale: 0.97 }}
  className="mt-9 inline-flex items-center gap-3 rounded-full bg-teal-400 px-6 py-4 text-sm font-semibold text-[#0A0A0A] transition-colors hover:bg-teal-300"
>
  <Mail size={18} />
  Get in touch via email
  <ArrowUpRight size={18} />
</motion.a>

        {/* Social links */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;

            return (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-zinc-300 transition-colors hover:border-teal-400/40 hover:text-teal-400"
              >
                <Icon size={17} />
                {social.name}
                <ArrowUpRight size={14} />
              </motion.a>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-20 border-t border-white/[0.08] pt-6">
          <p className="text-xs text-zinc-500">
            Designed & built with care.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
