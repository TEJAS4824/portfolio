"use client"

import { projects } from "@/data/portfolio"
import { Github, ExternalLink, Folder, ArrowRight, Code2 } from "lucide-react"
import { useState } from "react"
import { SectionWrapper, StaggerContainer, StaggerItem } from "@/components/ui/section-wrapper"
import { GlowingCard } from "@/components/ui/glowing-card"
import { motion, AnimatePresence } from "framer-motion"

export function Projects() {
  const [showAll, setShowAll] = useState(false)
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)
  const displayedOtherProjects = showAll ? otherProjects : otherProjects.slice(0, 3)

  return (
    <SectionWrapper id="projects" className="px-6 py-32 md:px-12 lg:px-24 relative">
      <div className="absolute top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      
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
            Projects
          </h2>
        </div>

        {/* Featured Projects */}
        <StaggerContainer className="space-y-32 mb-32">
          {featuredProjects.map((project, index) => (
            <StaggerItem key={project.id}>
              <motion.div
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={`relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-secondary to-secondary/50 border border-border/50 group ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code2 className="w-20 h-20 text-muted-foreground/20 group-hover:text-primary/30 transition-colors duration-500" />
                  </div>
                  
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/20 text-primary backdrop-blur-sm border border-primary/20">
                      Featured
                    </span>
                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-background/50 backdrop-blur-sm text-muted-foreground hover:text-foreground transition-colors"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-background/50 backdrop-blur-sm text-muted-foreground hover:text-foreground transition-colors"
                          aria-label={`View ${project.title} live`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>

                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <motion.span 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-primary font-mono text-sm mb-4 block"
                  >
                    0{index + 1}.
                  </motion.span>
                  <h3 className="text-3xl font-bold mb-4 group">
                    {(project.liveUrl || project.githubUrl) ? (
                      <a 
                        href={project.liveUrl || project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors inline-flex items-center gap-2"
                      >
                        {project.title}
                        <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2">
                        {project.title}
                      </span>
                    )}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 text-sm font-medium rounded-full bg-secondary/50 text-secondary-foreground border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-6">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group/link"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="w-5 h-5" />
                      <span>View Code</span>
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group/link"
                        aria-label={`View ${project.title} live demo`}
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Live Demo</span>
                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-12 text-center">Other Noteworthy Projects</h3>
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {displayedOtherProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <GlowingCard className="h-full">
                    <div className="p-6 h-full flex flex-col">
                      <div className="flex items-center justify-between mb-6">
                        <div className="p-3 rounded-xl bg-primary/10 text-primary">
                          <Folder className="w-8 h-8" />
                        </div>
                        <div className="flex items-center gap-3">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                            aria-label={`View ${project.title} on GitHub`}
                          >
                            <Github className="w-5 h-5" />
                          </a>
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-primary transition-colors"
                              aria-label={`View ${project.title} live`}
                            >
                              <ExternalLink className="w-5 h-5" />
                            </a>
                          )}
                        </div>
                      </div>
                      <h4 className="text-xl font-semibold mb-3 transition-colors">
                        {(project.liveUrl || project.githubUrl) ? (
                          <a href={project.liveUrl || project.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                            {project.title}
                          </a>
                        ) : (
                          <span>{project.title}</span>
                        )}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs text-primary/80 font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </GlowingCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {otherProjects.length > 3 && (
            <motion.div layout className="text-center mt-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAll(!showAll)}
                className="px-8 py-3 text-sm font-medium rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg shadow-primary/10 hover:shadow-primary/25"
              >
                {showAll ? "Show Less" : "Show More Projects"}
              </motion.button>
            </motion.div>
          )}
        </div>
      </div>
    </SectionWrapper>
  )
}
