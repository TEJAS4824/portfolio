"use client"

import { aboutMe, skills } from "@/data/portfolio"
import { SectionWrapper, StaggerContainer, StaggerItem } from "@/components/ui/section-wrapper"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Sparkles, Zap, Globe } from "lucide-react"

const icons = [Code2, Sparkles, Zap, Globe]

function AnimatedSkillBar({ skill, index }: { skill: { name: string; level: number }; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ delay: 0.3 + index * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </motion.div>
      </div>
    </motion.div>
  )
}

export function About() {
  return (
    <SectionWrapper id="about" className="px-6 py-32 md:px-12 lg:px-24 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative">
        <div className="flex items-center gap-4 mb-16">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="h-px bg-gradient-to-r from-primary to-transparent" 
          />
          <h2 className="text-sm font-medium tracking-widest uppercase text-primary">
            About
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-8">
            <StaggerContainer className="space-y-6">
              {aboutMe.paragraphs.map((paragraph, index) => (
                <StaggerItem key={index}>
                  <p className="text-muted-foreground leading-relaxed text-pretty text-lg">
                    {paragraph}
                  </p>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <StaggerContainer className="pt-8">
              <StaggerItem>
                <h3 className="text-sm font-semibold mb-6 text-foreground uppercase tracking-wider">
                  Highlights
                </h3>
              </StaggerItem>
              <div className="grid sm:grid-cols-2 gap-4">
                {aboutMe.highlights.map((highlight, index) => {
                  const Icon = icons[index % icons.length]
                  return (
                    <StaggerItem key={index}>
                      <div className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors group">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm text-muted-foreground leading-relaxed">{highlight}</span>
                      </div>
                    </StaggerItem>
                  )
                })}
              </div>
            </StaggerContainer>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-10 text-foreground uppercase tracking-wider">
              Technologies & Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <AnimatedSkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20"
            >
              <p className="text-sm text-muted-foreground">
                <span className="text-primary font-semibold">Always learning.</span> Currently exploring AI/ML integration, WebAssembly, and advanced animation techniques.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
