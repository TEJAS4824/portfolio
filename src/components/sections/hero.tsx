"use client"

import { personalInfo, socialLinks, navigation } from "@/data/portfolio"
import { Github, Linkedin, Mail, ArrowDown, Download } from "lucide-react"
import { motion } from "framer-motion"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { CharacterReveal } from "@/components/ui/text-reveal"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between px-6 py-8 md:px-12 lg:px-24 overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-20 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-[150px] animate-pulse delay-1000" />

      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center justify-between relative z-10"
      >
        <div>
          <h2 className="text-lg font-semibold tracking-tight">{personalInfo.name}</h2>
          <p className="text-sm text-muted-foreground">{personalInfo.title}</p>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
            >
              <a
                href={item.href}
                className="relative text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            </motion.div>
          ))}
        </nav>
      </motion.header>

      <div className="flex-1 flex flex-col lg:flex-row items-center justify-between gap-12 py-12 lg:py-20 relative z-10">
        {/* Left side - Text content */}
        <div className="flex-1 max-w-2xl order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 w-fit"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            {personalInfo.availability}
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-balance">
            <CharacterReveal text={personalInfo.name} delay={0.3} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-xl sm:text-2xl md:text-3xl font-medium mb-4 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent"
          >
            {personalInfo.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-base md:text-lg text-muted-foreground leading-relaxed mb-3 text-pretty"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="text-sm md:text-base text-muted-foreground/80 leading-relaxed mb-8"
          >
            {personalInfo.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-wrap items-center gap-3"
          >
            <MagneticButton className="cursor-pointer">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
              >
                Get In Touch
                <ArrowDown className="w-4 h-4 rotate-[-90deg]" />
              </a>
            </MagneticButton>

            <MagneticButton className="cursor-pointer">
              <a
                href="/resume.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full border border-border hover:bg-card transition-colors"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex items-center gap-3 mt-8"
          >
            {[
              { href: socialLinks.github, icon: Github, label: "GitHub" },
              { href: socialLinks.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: socialLinks.email, icon: Mail, label: "Email" },
            ].map((social, i) => (
              <MagneticButton key={social.label} className="cursor-pointer">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 + i * 0.1, type: "spring", stiffness: 200 }}
                >
                  <a
                    href={social.href}
                    target={social.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-11 h-11 rounded-full bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                </motion.div>
              </MagneticButton>
            ))}
          </motion.div>
        </div>

        {/* Right side - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
          className="relative order-1 lg:order-2"
        >
          {/* Animated rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 rounded-full border border-dashed border-primary/30"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-8 rounded-full border border-dashed border-primary/20"
          />

          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-primary/10 rounded-full blur-2xl" />

          {/* Image container */}
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-background shadow-2xl shadow-primary/20">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10 pointer-events-none" />
            <img
              src={personalInfo.image}
              alt={personalInfo.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating elements */}
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-2 -right-2 w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center shadow-lg"
          >
            <span className="text-2xl">{"</>"}</span>
          </motion.div>
          <motion.div
            animate={{ y: [5, -5, 5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-2 -left-2 w-10 h-10 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center shadow-lg"
          >
            <span className="text-2xl">{`{}`}</span>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        className="flex items-center gap-4 relative z-10"
      >
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
        <a
          href="#about"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
        >
          <span>Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </a>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
      </motion.div>
    </section>
  )
}
