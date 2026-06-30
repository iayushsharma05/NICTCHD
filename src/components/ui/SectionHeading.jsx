import Reveal from './Reveal'

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = 'center',
}) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`max-w-2xl ${alignClass} mb-12 md:mb-16`}>
      {eyebrow && (
        <Reveal variant="fadeUp">
          <span className="eyebrow mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal variant="fadeUp" delay={0.08}>
        <h2 className="heading-xl text-3xl sm:text-4xl md:text-5xl leading-tight">
          {title} {highlight && <span className="text-gradient">{highlight}</span>}
        </h2>
      </Reveal>
      {description && (
        <Reveal variant="fadeUp" delay={0.16}>
          <p className="mt-4 text-ink-light dark:text-ink-inverse/70 text-base md:text-lg leading-relaxed">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
