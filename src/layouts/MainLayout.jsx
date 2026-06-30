import { Outlet } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ScrollProgressBar from '../components/ui/ScrollProgressBar'
import BackToTop from '../components/ui/BackToTop'
import WhatsAppButton from '../components/ui/WhatsAppButton'
import { useDarkMode } from '../hooks/useDarkMode'

export default function MainLayout() {
  const [isDark, toggleDark] = useDarkMode()

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgressBar />
      <Navbar isDark={isDark} toggleDark={toggleDark} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </div>
  )
}
