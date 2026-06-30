import Seo from '../components/ui/Seo'
import Contact from '../components/sections/Contact'

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact Us | NICT Chandigarh - SCO 25, Sector 15-C"
        description="Visit NICT Chandigarh at SCO 25, Sector 15-C, Chandigarh. Call +91 98720 00706 or +91 172 2728335, or send us a message about admissions."
        canonical="https://www.nictchandigarh.in/contact"
      />
      <div className="pt-20">
        <Contact />
      </div>
    </>
  )
}
