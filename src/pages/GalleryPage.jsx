import Seo from '../components/ui/Seo'
import Gallery from '../components/sections/Gallery'

export default function GalleryPage() {
  return (
    <>
      <Seo
        title="Gallery | NICT Chandigarh"
        description="Take a look at our computer lab, smart classrooms, coding workshops and student events at NICT Chandigarh."
        canonical="https://www.nictchandigarh.in/gallery"
      />
      <div className="pt-20">
        <Gallery />
      </div>
    </>
  )
}
