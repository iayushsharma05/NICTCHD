import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import SectionHeading from '../ui/SectionHeading'
import { testimonials } from '../../data/siteData'

function getVisibleCount() {
  if (typeof window === 'undefined') return 1
  if (window.innerWidth >= 1024) return 3
  if (window.innerWidth >= 640) return 2
  return 1
}

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(getVisibleCount())

  useEffect(() => {
    const onResize = () => setVisible(getVisibleCount())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const maxIndex = Math.max(testimonials.length - visible, 0)

  const next = useCallback(() => setIndex((i) => (i >= maxIndex ? 0 : i + 1)), [maxIndex])
  const prev = useCallback(() => setIndex((i) => (i <= 0 ? maxIndex : i - 1)), [maxIndex])

  useEffect(() => {
    const timer = setInterval(next, 4500)
    return () => clearInterval(timer)
  }, [next])

  const visibleItems = testimonials.slice(index, index + visible)

  return (
    <section className="container-section py-20 md:py-28">
      <SectionHeading
        eyebrow="Student Voices"
        title="What Our Students"
        highlight="Say About Us"
      />

      <div className="relative">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[280px]">
          <AnimatePresence mode="wait">
            {visibleItems.map((t) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="card-base p-6 relative"
              >
                <FaQuoteLeft className="text-primary-100 dark:text-white/10 absolute top-5 right-5" size={28} />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <FaStar key={i} className="text-secondary" size={14} />
                  ))}
                </div>
                <p className="text-sm text-ink-light dark:text-ink-inverse/70 leading-relaxed mb-6">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-primary-500 to-accent text-white font-display font-bold text-sm">
                    {t.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                  </span>
                  <div>
                    <p className="font-display font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-ink-light dark:text-ink-inverse/55">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={prev}
            aria-label="Previous testimonials"
            className="grid h-11 w-11 place-items-center rounded-full glass shadow-glass hover:scale-105 transition-transform"
          >
            <FaChevronLeft size={14} />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? 'w-7 bg-gradient-to-r from-primary-500 to-accent' : 'w-2 bg-primary-200 dark:bg-white/20'
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next testimonials"
            className="grid h-11 w-11 place-items-center rounded-full glass shadow-glass hover:scale-105 transition-transform"
          >
            <FaChevronRight size={14} />
          </button>
        </div>
      </div>
    </section>
  )
}
