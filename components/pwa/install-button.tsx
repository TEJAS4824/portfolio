"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Download, Check, Wifi, WifiOff } from "lucide-react"
import { usePWA } from "./pwa-provider"
import { Button } from "@/components/ui/button"

export function InstallButton() {
  const { isInstallable, isInstalled, installApp } = usePWA()

  if (isInstalled) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm"
      >
        <Check className="w-4 h-4" />
        <span>Installed</span>
      </motion.div>
    )
  }

  if (!isInstallable) {
    return null
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
      >
        <Button
          onClick={installApp}
          variant="outline"
          size="sm"
          className="gap-2 bg-primary/10 border-primary/30 text-primary hover:bg-primary/20 hover:border-primary/50"
        >
          <Download className="w-4 h-4" />
          <span>Install App</span>
        </Button>
      </motion.div>
    </AnimatePresence>
  )
}

export function OfflineIndicator() {
  const { isOnline } = usePWA()

  return (
    <AnimatePresence>
      {!isOnline && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-4 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm backdrop-blur-md"
        >
          <WifiOff className="w-4 h-4" />
          <span>You&apos;re offline</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function InstallPrompt() {
  const { isInstallable, isInstalled, installApp } = usePWA()

  if (isInstalled || !isInstallable) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ delay: 3, duration: 0.5 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-4 px-6 py-4 rounded-2xl bg-card/80 border border-border/50 backdrop-blur-xl shadow-2xl max-w-md mx-4"
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20">
        <Download className="w-6 h-6 text-primary" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-foreground">Install App</h3>
        <p className="text-sm text-muted-foreground truncate">
          Add to home screen for quick access
        </p>
      </div>
      <Button
        onClick={installApp}
        size="sm"
        className="flex-shrink-0 bg-primary hover:bg-primary/90"
      >
        Install
      </Button>
    </motion.div>
  )
}
