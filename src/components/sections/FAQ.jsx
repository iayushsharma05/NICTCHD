import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { faqs } from '../../data/siteData'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-20 md:py-28 bg-primary-50/40 dark:bg-primary-900/20">
      <div className="container-section max-w-3xl">
        <SectionHeading
          eyebrow="Got Questions?"
          title="Frequently Asked"
          highlight="Questions"
        />

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <Reveal key={faq.question} variant="fadeUp" delay={(i % 4) * 0.05}>
                <div className="card-base overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <div>
                      <span className="text-[11px] font-display font-semibold uppercase tracking-wide text-secondary">
                        {faq.category}
                      </span>
                      <p className="font-display font-semibold text-sm sm:text-base mt-1">{faq.question}</p>
                    </div>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="shrink-0 grid h-9 w-9 place-items-center rounded-full bg-primary-50 dark:bg-white/10 text-primary-600 dark:text-accent-light"
                    >
                      <FaChevronDown size={12} />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="px-5 pb-5 text-sm text-ink-light dark:text-ink-inverse/65 leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
