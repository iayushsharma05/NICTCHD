import Seo from '../components/ui/Seo'
import Faculty from '../components/sections/Faculty'

export default function FacultyPage() {
  return (
    <>
      <Seo
        title="Our Faculty | NICT Chandigarh"
        description="Meet the certified, industry-experienced trainers at NICT Chandigarh who lead our Full Stack, Python, Cyber Security, and Digital Marketing courses."
        canonical="https://www.nictchandigarh.in/faculty"
      />
      <div className="pt-20">
        <Faculty />
      </div>
    </>
  )
}
