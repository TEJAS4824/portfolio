"use client"

import { experience } from "@/data/portfolio"
import { ArrowUpRight, Briefcase } from "lucide-react"
import { SectionWrapper, StaggerContainer, StaggerItem } from "@/components/ui/section-wrapper"
import { motion } from "framer-motion"

export function Experience() {
  return (
    <SectionWrapper id="experience" className="px-6 py-32 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/0 via-card/50 to-card/0 pointer-events-none" />
      
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
            Experience
          </h2>
        </div>

        <StaggerContainer className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-[200px] lg:left-[240px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent hidden md:block" />
          
          <div className="space-y-12">
            {experience.map((job, index) => (
              <StaggerItem key={job.id}>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="group grid md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr] gap-6 md:gap-12 relative"
                >
                  {/* Timeline dot */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    viewport={{ once: true }}
                    className="absolute left-0 md:left-[200px] lg:left-[240px] top-1 w-3 h-3 -ml-1.5 rounded-full bg-primary border-4 border-background hidden md:block shadow-lg shadow-primary/30"
                  />
                  
                  <div className="text-sm text-muted-foreground font-mono">
                    <div className="flex items-center gap-2 md:justify-end">
                      <Briefcase className="w-4 h-4 text-primary md:hidden" />
                      {job.period}
                    </div>
                  </div>
                  
                  <div className="md:pl-8 lg:pl-12">
                    <div className="p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 hover:bg-card transition-all duration-300">
                      <h3 className="text-xl font-semibold mb-2 flex flex-wrap items-center gap-2">
                        <span className="text-foreground">{job.role}</span>
                        <span className="text-muted-foreground/50">@</span>
                        <a
                          href={job.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline inline-flex items-center gap-1 group/link"
                        >
                          {job.company}
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                        </a>
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {job.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 text-xs font-medium rounded-full bg-secondary/50 text-secondary-foreground border border-border/50 hover:border-primary/30 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </SectionWrapper>
  )
}
