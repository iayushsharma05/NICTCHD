import Seo from '../components/ui/Seo'
import About from '../components/sections/About'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import Achievements from '../components/sections/Achievements'
import Placements from '../components/sections/Placements'

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Us | NICT Chandigarh Computer Education Institute"
        description="Learn about NICT Chandigarh's 20+ years of experience in computer education, our mission, faculty and placement support for students."
        canonical="https://www.nictchandigarh.in/about"
      />
      <div className="pt-20">
        <About />
        <WhyChooseUs />
        <Achievements />
        <Placements />
      </div>
    </>
  )
}
