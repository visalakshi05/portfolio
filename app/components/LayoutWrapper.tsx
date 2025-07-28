'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    // On route change, hide content first
    setIsReady(false)

    // Show content after delay (adjust for your needs)
    const timeout = setTimeout(() => setIsReady(true), 70)

    return () => clearTimeout(timeout)
  }, [pathname])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        {/* Preloader */}
        {!isReady && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 z-50"
          >
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-violet-500"></div>
          </motion.div>
        )}

        {/* Page content */}
        {isReady && (
          <motion.main
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="min-h-screen"
          >
            {children}
          </motion.main>
        )}
      </AnimatePresence>
    </>
  )
}
