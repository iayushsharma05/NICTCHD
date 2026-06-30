import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
} from 'react-icons/fa'
import SectionHeading from '../ui/SectionHeading'

// Images for the gallery
import {galleryItems} from '../../data/siteData'

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null)

  const close = () => setActiveIndex(null)

  const showNext = () =>
    setActiveIndex((i) => (i + 1) % galleryItems.length)

  const showPrev = () =>
    setActiveIndex((i) => (i - 1 + galleryItems.length) % galleryItems.length)

  return (
    <section
      id="gallery"
      className="py-20 md:py-28 bg-primary-50/40 dark:bg-primary-900/20"
    >
      <div className="container-section">
        <SectionHeading
          eyebrow="Campus Life"
          title="A Glimpse Into"
          highlight="NICT Chandigarh"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, i) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveIndex(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: i * 0.05,
              }}
              whileHover={{
                scale: 1.03,
              }}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-lg group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition flex items-center justify-center">
                <FaExpand
                  className="text-white opacity-0 group-hover:opacity-100"
                  size={24}
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <p className="text-xs text-white/80">
                  {item.tag}
                </p>

                <p className="text-white font-semibold">
                  {item.title}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute top-5 right-5 text-white bg-black/40 rounded-full p-3"
            >
              <FaTimes />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                showPrev()
              }}
              className="absolute left-4 text-white bg-black/40 p-3 rounded-full"
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                showNext()
              }}
              className="absolute right-4 text-white bg-black/40 p-3 rounded-full"
            >
              <FaChevronRight />
            </button>

            <motion.img
              key={activeIndex}
              src={galleryItems[activeIndex].image}
              alt={galleryItems[activeIndex].title}
              className="max-h-[85vh] max-w-[90vw] rounded-3xl object-contain"
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.8,
                opacity: 0,
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}