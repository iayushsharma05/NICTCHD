import { FaLinkedin, FaUserTie } from 'react-icons/fa'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { faculty } from '../../data/siteData'

export default function Faculty() {
  return (
    <section id="faculty" className="container-section py-20 md:py-28">
      <SectionHeading
        eyebrow="Meet The Mentors"
        title="Learn From Industry"
        highlight="Experts"
        description="Our trainers bring real corporate experience into the classroom, not just textbooks."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {faculty.map((person, i) => (
          <Reveal key={person.id} variant="fadeUp" delay={(i % 3) * 0.1}>
            <div className="card-base card-hover p-6 text-center group">
              <div className="relative mx-auto mb-5 h-24 w-24">
                <div className="h-full w-full rounded-full bg-gradient-to-br from-primary-100 to-accent/20 dark:from-white/10 dark:to-accent/10 grid place-items-center">
                  {person.img ? (
                    <img src={person.img} alt={person.name} className="h-full w-full rounded-full object-cover" />
                  ) : (
                    <person className="img text-primary-500 dark:text-accent-light" size={36}>
                      {person.name.charAt(4)}
                    </person>
                  )}
                </div>
                <span className="absolute bottom-0 right-0 h-7 w-7 rounded-full bg-gradient-to-br from-primary-500 to-accent grid place-items-center text-white">
                  <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={13} />
                  </a>
                </span>
              </div>
              <h3 className="font-display font-semibold text-base">{person.name}</h3>
              <p className="text-xs text-secondary font-medium mt-1">{person.experience}</p>
              <p className="text-sm text-ink-light dark:text-ink-inverse/65 mt-2">{person.specialization}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
