import { FaUserTie, FaLaptopCode, FaProjectDiagram, FaHandshake, FaClock, FaTags } from 'react-icons/fa'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { stats } from '../../data/siteData'
import { useCountUp } from '../../hooks/useCountUp'

const highlights = [
  { icon: FaUserTie, text: 'Experienced Faculty' },
  { icon: FaLaptopCode, text: 'Practical Training' },
  { icon: FaProjectDiagram, text: 'Live Projects' },
  { icon: FaHandshake, text: 'Job Assistance' },
  { icon: FaClock, text: 'Flexible Timings' },
  { icon: FaTags, text: 'Affordable Fees' },
]

function StatCounter({ value, suffix, label }) {
  const [ref, count] = useCountUp(value)
  return (
    <div ref={ref} className="text-center">
      <p className="font-display font-bold text-3xl sm:text-4xl text-gradient">
        {count}{suffix}
      </p>
      <p className="mt-1 text-xs sm:text-sm text-ink-light dark:text-ink-inverse/60 font-medium">{label}</p>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="container-section py-20 md:py-28">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <SectionHeading
            align="left"
            eyebrow="About NICT Chandigarh"
            title="Two Decades of Shaping"
            highlight="IT Careers"
          />
          <Reveal variant="fadeUp">
            <p className="text-ink-light dark:text-ink-inverse/70 leading-relaxed mb-8 -mt-4">
             National Institute of Computer Technology (NICT) is one of the most reputed & oldest institute of Chandigarh in the field of Computer Education with a daily footfall of about 1200 students. Established in 1988, NICT has aided over 2 lakh Professionals & students in realizing their potential in computers. Having attained a FULL Accreditation by DEPTT. Of IT(DOEACC Society), Govt. Of India in 1994, we pioneer training in the region. NICT is an ISO: 9001:2015 certified institute.  
            </p>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {highlights.map(({ icon: Icon, text }, i) => (
              <Reveal key={text} variant="fadeUp" delay={i * 0.08}>
                <div className="card-base card-hover p-4 flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary-50 dark:bg-white/10 text-primary-600 dark:text-accent-light">
                    <Icon size={16} />
                  </span>
                  <span className="text-sm font-medium font-display">{text}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal variant="slideLeft">
          <div className="card-base p-8 sm:p-10 bg-gradient-to-br from-primary-50 via-white to-secondary-50/40 dark:from-primary-900/60 dark:via-primary-900/40 dark:to-primary-900/60">
            <div className="grid grid-cols-2 gap-8">
              {stats.map((s) => (
                <StatCounter key={s.id} value={s.value} suffix={s.suffix} label={s.label} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
