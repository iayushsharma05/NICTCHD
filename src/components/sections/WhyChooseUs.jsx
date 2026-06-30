import {
  FaCertificate, FaProjectDiagram, FaHandshake, FaBook,
  FaClock, FaChalkboardTeacher, FaDesktop, FaQuestionCircle,
} from 'react-icons/fa'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { whyChooseUs } from '../../data/siteData'

const icons = [FaCertificate, FaProjectDiagram, FaHandshake, FaBook, FaClock, FaChalkboardTeacher, FaDesktop, FaQuestionCircle]

export default function WhyChooseUs() {
  return (
    <section className="container-section py-20 md:py-28">
      <SectionHeading
        eyebrow="Why NICT"
        title="Everything You Need to"
        highlight="Succeed"
        description="A learning environment built around outcomes — not just attendance."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {whyChooseUs.map((item, i) => {
          const Icon = icons[i % icons.length]
          return (
            <Reveal key={item.title} variant="zoomIn" delay={i * 0.06}>
              <div className="card-base card-hover p-6 h-full text-center group">
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-primary-50 to-accent/10 dark:from-white/10 dark:to-accent/10 text-primary-600 dark:text-accent-light mb-4 group-hover:from-primary-500 group-hover:to-accent group-hover:text-white transition-all duration-300">
                  <Icon size={24} />
                </span>
                <h3 className="font-display font-semibold text-base mb-1.5">{item.title}</h3>
                <p className="text-xs text-ink-light dark:text-ink-inverse/60 leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
