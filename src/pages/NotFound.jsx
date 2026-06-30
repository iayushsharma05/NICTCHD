import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import Seo from '../components/ui/Seo'

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found | NICT Chandigarh" description="The page you're looking for doesn't exist." />
      <section className="min-h-[80vh] flex items-center justify-center container-section text-center pt-20">
        <div>
          <p className="font-display font-extrabold text-7xl sm:text-8xl text-gradient mb-4">404</p>
          <h1 className="heading-xl text-2xl sm:text-3xl mb-3">Page Not Found</h1>
          <p className="text-ink-light dark:text-ink-inverse/65 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or may have been moved.
          </p>
          <Link to="/" className="btn-primary">
            <FaHome size={14} /> Back to Home
          </Link>
        </div>
      </section>
    </>
  )
}
