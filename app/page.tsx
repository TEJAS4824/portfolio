import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Experience } from "@/components/sections/experience"
import { Projects } from "@/components/sections/projects"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { FloatingNav } from "@/components/ui/floating-nav"
import { InstallPrompt, OfflineIndicator } from "@/components/pwa/install-button"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <FloatingNav />
      <OfflineIndicator />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <InstallPrompt />
    </main>
  )
}
