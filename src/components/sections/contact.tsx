"use client"

import { personalInfo, socialLinks } from "@/data/portfolio"
import { Github, Linkedin, Mail, MapPin, ArrowRight, Twitter } from "lucide-react"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { motion } from "framer-motion"

export function Contact() {
  return (
    <SectionWrapper id="contact" className="px-6 py-32 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
          <h2 className="text-sm font-medium tracking-widest uppercase text-primary">
            Contact
          </h2>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary" />
        </motion.div>

        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-balance"
        >
          {"Let's Build Something"}
          <span className="text-primary"> Amazing</span>
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed"
        >
          {"I'm currently"} <span className="text-primary font-medium">{personalInfo.availability.toLowerCase()}</span>. 
          Whether you have a project in mind, a question, or just want to say hi - my inbox is always open!
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 text-muted-foreground mb-12"
        >
          <MapPin className="w-4 h-4 text-primary" />
          <span>{personalInfo.location}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <MagneticButton className="inline-block cursor-pointer mb-16">
            <a
              href={socialLinks.email}
              className="group inline-flex items-center gap-3 px-10 py-5 text-lg font-medium rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30"
            >
              <Mail className="w-5 h-5" />
              Say Hello
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </MagneticButton>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-6"
        >
          {[
            { href: socialLinks.github, icon: Github, label: "GitHub" },
            { href: socialLinks.linkedin, icon: Linkedin, label: "LinkedIn" },
            { href: socialLinks.twitter, icon: Twitter, label: "Twitter" },
            { href: socialLinks.email, icon: Mail, label: "Email" },
          ].map((social, i) => (
            <MagneticButton key={social.label} className="cursor-pointer">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + i * 0.1, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
              >
                <a
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-14 h-14 rounded-full bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-card/80 transition-all group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </motion.div>
            </MagneticButton>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
