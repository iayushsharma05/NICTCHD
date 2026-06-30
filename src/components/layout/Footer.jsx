import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebook, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { contactInfo } from '../../data/siteData'
import { courses } from '../../data/courses'

export default function Footer() {
  const year = new Date().getFullYear()
  const featuredCourses = courses.slice(0, 6)

  return (
    <footer className="relative bg-primary-900 text-ink-inverse overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[length:36px_36px] opacity-[0.07]" />
      <div className="relative container-section pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary-500 to-accent text-white font-display font-bold text-lg">
                N
              </span>
              <span className="font-display font-bold text-lg text-white">NICT Chandigarh</span>
            </Link>
            <p className="text-sm text-ink-inverse/70 leading-relaxed mb-5">
              Industry-focused computer courses with practical training, live projects, certification and placement assistance.
            </p>
            <div className="flex gap-3">
              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-primary-500 hover:to-accent transition-colors"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-primary-500 hover:to-accent transition-colors"
              >
                <FaFacebook size={16} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-primary-500 hover:to-accent transition-colors"
              >
                <FaYoutube size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-ink-inverse/70">
              <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="hover:text-secondary transition-colors">Courses</Link></li>
              <li><Link to="/gallery" className="hover:text-secondary transition-colors">Gallery</Link></li>
              <li><Link to="/faculty" className="hover:text-secondary transition-colors">Faculty</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Popular Courses</h4>
            <ul className="space-y-2.5 text-sm text-ink-inverse/70">
              {featuredCourses.map((course) => (
                <li key={course.id}>
                  <Link to={`/courses#${course.id}`} className="hover:text-secondary transition-colors">
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3.5 text-sm text-ink-inverse/70">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-secondary mt-0.5 shrink-0" />
                <span>{contactInfo.address}</span>
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-secondary shrink-0" />
                <a href={`tel:${contactInfo.phones[0].replace(/\s/g, '')}`} className="hover:text-secondary transition-colors">
                  {contactInfo.phones[0]}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-secondary shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-secondary transition-colors">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-inverse/50">
          <p>© {year} NICT Chandigarh. All rights reserved.</p>
          <p>Designed and Built By <a href="https://iayushsharma05-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer"> Ayush Sharma</a></p>
        </div>
      </div>
    </footer>
  )
}
