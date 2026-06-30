import { FaUserGraduate, FaBook, FaAward, FaBriefcase } from 'react-icons/fa'
import { stats } from '../../data/siteData'
import { useCountUp } from '../../hooks/useCountUp'
import Reveal from '../ui/Reveal'

const icons = [FaAward, FaUserGraduate, FaBook, FaBriefcase]

function AchievementCard({ icon: Icon, value, suffix, label, delay }) {
  const [ref, count] = useCountUp(value, 2000)
  return (
    <Reveal variant="zoomIn" delay={delay}>
      <div ref={ref} className="text-center px-4">
        <span className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-2xl bg-white/10 text-white">
          <Icon size={26} />
        </span>
        <p className="font-display font-extrabold text-4xl sm:text-5xl text-white">
          {count}{suffix}
        </p>
        <p className="mt-2 text-sm text-white/70 font-medium">{label}</p>
      </div>
    </Reveal>
  )
}

export default function Achievements() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-primary-600 via-primary-500 to-accent overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[length:32px_32px] opacity-10" />
      <div className="container-section relative grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <AchievementCard
            key={s.id}
            icon={icons[i % icons.length]}
            value={s.value}
            suffix={s.suffix}
            label={s.label}
            delay={i * 0.1}
          />
        ))}
      </div>
    </section>
  )
}
