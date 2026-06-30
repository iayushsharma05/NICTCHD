import Seo from '../components/ui/Seo'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import CoursesPreview from '../components/sections/CoursesPreview'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import Achievements from '../components/sections/Achievements'
import Placements from '../components/sections/Placements'
import Testimonials from '../components/sections/Testimonials'
import FAQ from '../components/sections/FAQ'

export default function Home() {
  return (
    <>
      <Seo
        title="NICT Chandigarh | Best Computer Education Institute in Sector 15-C"
        description="Industry-focused computer courses with practical training, live projects, certification and 95% placement support. Visit NICT Chandigarh today."
        canonical="https://www.nictchandigarh.in/"
      />
      <Hero />
      <About />
      <CoursesPreview />
      <WhyChooseUs />
      <Achievements />
      <Placements />
      <Testimonials />
      <FAQ />
    </>
  )
}
