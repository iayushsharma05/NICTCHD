import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-surface dark:bg-surface-dark"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className="flex flex-col items-center gap-5">
            <div className="relative h-16 w-16">
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500 to-accent animate-pulse" />
              <span className="absolute inset-0 grid place-items-center font-display font-bold text-white text-2xl">
                N
              </span>
              <span className="absolute -inset-2 rounded-3xl border-2 border-secondary/60 animate-pulseRing" />
            </div>
            <p className="font-display text-sm font-medium text-ink-light tracking-wide">
              Loading NICT Chandigarh…
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
