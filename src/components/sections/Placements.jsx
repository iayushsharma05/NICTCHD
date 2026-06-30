import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { companies, placementTimeline } from '../../data/siteData'

export default function Placements() {
  return (
    <section className="py-20 md:py-28 bg-primary-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[length:36px_36px] opacity-[0.06]" />
      <div className="container-section relative">
        <SectionHeading
          eyebrow="Placement Assistance"
          title="Students Placed at"
          highlight="Top Companies"
          description="Our placement cell works closely with hiring partners to connect students with real opportunities."
        />

        <div className="relative mb-20 mask-fade-x overflow-hidden">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[...companies, ...companies].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="font-display font-bold text-2xl sm:text-3xl text-white/30 hover:text-white/70 transition-colors shrink-0"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-[18px] sm:left-1/2 top-0 bottom-0 w-px bg-white/15 sm:-translate-x-1/2" />
          <div className="space-y-10">
            {placementTimeline.map((item, i) => (
              <Reveal
                key={item.step}
                variant={i % 2 === 0 ? 'slideRight' : 'slideLeft'}
                className={`relative pl-12 sm:pl-0 sm:flex sm:items-center sm:gap-10 ${
                  i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse sm:text-right'
                }`}
              >
                <div className="absolute left-0 sm:left-1/2 top-0 sm:-translate-x-1/2 grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-primary-500 to-accent text-xs font-display font-bold shadow-glow-primary">
                  {item.step}
                </div>
                <div className="sm:w-1/2" />
                <div className="glass-strong rounded-2xl p-5 sm:w-1/2">
                  <h3 className="font-display font-semibold text-lg mb-1.5">{item.title}</h3>
                  <p className="text-sm text-white/65 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
