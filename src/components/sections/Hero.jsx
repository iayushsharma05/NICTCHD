import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaPhoneAlt, FaUserGraduate, FaLaptopCode, FaCertificate, FaPython, FaReact, FaJsSquare } from 'react-icons/fa'
import StatChip from '../ui/StatChip'

const phrases = [
  'Full Stack Web Development',
  'Python Programming',
  'AI & Machine Learning',
  'Cyber Security',
  'Digital Marketing',
]

function useTypewriter(words, speed = 70, pause = 1600) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timeout

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), speed)
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), speed / 1.6)
    } else if (deleting && text.length === 0) {
      setDeleting(false)
      setWordIndex((i) => i + 1)
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, speed, pause])

  return text
}

const floatingIcons = [
  { Icon: FaPython, top: '10%', left: '4%', color: 'text-secondary', delay: 0 },
  { Icon: FaReact, top: '70%', left: '2%', color: 'text-accent', delay: 1.2 },
  { Icon: FaJsSquare, top: '18%', left: '92%', color: 'text-primary-400', delay: 0.6 },
  { Icon: FaCertificate, top: '78%', left: '90%', color: 'text-secondary', delay: 1.8 },
]

export default function Hero() {
  const typed = useTypewriter(phrases)

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-grid-pattern bg-[length:44px_44px] pt-28 pb-16">
      <div className="absolute inset-0 bg-hero-radial" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-surface/0 via-surface/0 to-surface dark:to-surface-dark" aria-hidden />

      {floatingIcons.map(({ Icon, top, left, color, delay }, i) => (
        <motion.div
          key={i}
          className={`absolute hidden md:block ${color} opacity-70`}
          style={{ top, left }}
          animate={{ y: [0, -18, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay, ease: 'easeInOut' }}
        >
          <Icon size={i % 2 === 0 ? 38 : 30} />
        </motion.div>
      ))}

      <div className="container-section relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow mb-5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
            Sector 15-C/30-A, Chandigarh · Since 1987
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-xl text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.1]"
          >
            Build Your Career in{' '}
            <span className="text-gradient">IT</span> with NICT Chandigarh
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-5 h-8 flex items-center font-display font-semibold text-lg sm:text-xl text-primary-600 dark:text-accent-light"
          >
            <span>{typed}</span>
            <span className="w-[2px] h-6 bg-secondary ml-1 animate-blink" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 text-base sm:text-lg text-ink-light dark:text-ink-inverse/70 max-w-xl leading-relaxed"
          >
  
      </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link to="/courses" className="btn-primary">
              Explore Courses <FaArrowRight size={13} />
            </Link>
            <Link to="/contact" className="btn-secondary">
              <FaPhoneAlt size={13} /> Contact Us
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <StatChip icon={FaUserGraduate} value="5000+" label="Students Trained" />
            <StatChip icon={FaLaptopCode} value="100+" label="Courses Offered" />
            <StatChip icon={FaCertificate} value="95%" label="Placement Support" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative mx-auto max-w-md">
            {/* Terminal-style signature panel */}
            <div className="rounded-3xl glass-strong shadow-premium p-1.5 rotate-1">
              <div className="rounded-[1.3rem] bg-primary-900 overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-white/5">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                  <span className="ml-3 text-xs text-white/50 font-mono">student@nict-chandigarh</span>
                </div>
                <div className="p-5 font-mono text-[13px] leading-relaxed text-accent-light space-y-1.5">
                  <p><span className="text-secondary">const</span> <span className="text-white">career</span> = {'{'}</p>
                  <p className="pl-4 text-white/80">institute: <span className="text-green-300">'NICT Chandigarh'</span>,</p>
                  <p className="pl-4 text-white/80">training: <span className="text-green-300">'Practical + Live Projects'</span>,</p>
                  <p className="pl-4 text-white/80">placement: <span className="text-green-300">'95% Assisted'</span>,</p>
                  <p className="pl-4 text-white/80">status: <span className="text-green-300">'In Progress...'</span></p>
                  <p>{'}'}</p>
                  <p className="pt-2 text-white/40">// your future, compiled here</p>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-6 -right-6 glass rounded-2xl px-4 py-3 shadow-glass"
            >
              <p className="font-display font-bold text-primary-600 dark:text-white text-sm">20+ Years</p>
              <p className="text-[11px] text-ink-light dark:text-ink-inverse/60">of Excellence</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-8 glass rounded-2xl px-4 py-3 shadow-glass"
            >
              <p className="font-display font-bold text-secondary text-sm">Live Projects</p>
              <p className="text-[11px] text-ink-light dark:text-ink-inverse/60">Hands-on Learning</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
