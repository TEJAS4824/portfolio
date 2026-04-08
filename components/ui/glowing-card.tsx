"use client"

import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { type ReactNode, type MouseEvent } from "react"

interface GlowingCardProps {
  children: ReactNode
  className?: string
}

export function GlowingCard({ children, className = "" }: GlowingCardProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - left)
    mouseY.set(e.clientY - top)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-2xl bg-card border border-border ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(100, 200, 180, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative">{children}</div>
    </motion.div>
  )
}
