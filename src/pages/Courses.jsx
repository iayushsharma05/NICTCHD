import { useState } from 'react'
import Seo from '../components/ui/Seo'
import SectionHeading from '../components/ui/SectionHeading'
import CourseCard from '../components/sections/CourseCard'
import Reveal from '../components/ui/Reveal'
import { courses, courseCategories } from '../data/courses'

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? courses
    : courses.filter((c) => c.category === activeCategory)

  return (
    <>
      <Seo
        title="All Courses | NICT Chandigarh Computer Institute"
        description="Explore Full Stack Web Development, Python, Java, Data Science, AI & ML, Cyber Security, Digital Marketing and more at NICT Chandigarh."
        canonical="https://www.nictchandigarh.in/courses"
      />
      <section className="pt-32 pb-20 md:pb-28 container-section">
        <SectionHeading
          eyebrow="Explore Programs"
          title="All Courses at"
          highlight="NICT Chandigarh"
          description="Choose a category to filter, or browse all 15 industry-focused programs we offer."
        />

        <Reveal variant="fadeUp" className="flex flex-wrap justify-center gap-3 mb-12">
          {courseCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-display font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-primary-500 to-accent text-white shadow-premium'
                  : 'glass text-ink dark:text-ink-inverse hover:border-primary-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} />
          ))}
        </div>
      </section>
    </>
  )
}
