import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import SectionHeading from '../ui/SectionHeading'
import CourseCard from './CourseCard'
import Reveal from '../ui/Reveal'
import { courses } from '../../data/courses'

export default function CoursesPreview() {
  const featured = courses.slice(0, 6)


  // home -> course 
  return (
    <section id="courses" className="relative py-20 md:py-28 bg-primary-50/40 dark:bg-primary-900/20">
      <div className="container-section">
        <SectionHeading
          eyebrow="Our Programs"
          title="Courses Designed for"
          highlight="Real Careers"
          description="From beginner-friendly basics to advanced specializations — every course is built around what employers are hiring for right now."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} />
          ))}
        </div>

        <Reveal variant="fadeUp" className="text-center mt-12">
          <Link to="/courses" className="btn-outline-orange">
            View All Courses <FaArrowRight size={13} />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
