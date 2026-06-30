import Seo from '../components/ui/Seo'
import Reveal from '../components/ui/Reveal'

const sections = [
  {
    title: 'Information We Collect',
    body: 'When you fill out our contact form or enrollment inquiry, we collect your name, phone number, email address and the course you are interested in. We use this only to respond to your inquiry and provide information about admissions.',
  },
  {
    title: 'How We Use Your Information',
    body: 'Your information is used solely to contact you regarding course details, admissions, fee structure and placement support. We do not sell or rent your personal information to third parties.',
  },
  {
    title: 'Cookies',
    body: 'Our website may use cookies to improve browsing experience and understand site usage. You can disable cookies through your browser settings at any time.',
  },
  {
    title: 'Third-Party Links',
    body: 'Our website may contain links to external sites such as Instagram or Google Maps. We are not responsible for the privacy practices of these third-party sites.',
  },
  {
    title: 'Data Security',
    body: 'We take reasonable measures to protect the personal information you share with us from unauthorized access or disclosure.',
  },
  {
    title: 'Contact Us',
    body: 'If you have questions about this privacy policy, please contact us at info@nictchandigarh.in or call +91 98720 00706.',
  },
]

export default function PrivacyPolicy() {
  return (
    <>
      <Seo
        title="Privacy Policy | NICT Chandigarh"
        description="Read the privacy policy of NICT Chandigarh regarding collection and use of personal information submitted through our website."
        canonical="https://www.nictchandigarh.in/privacy-policy"
      />
      <section className="pt-32 pb-20 container-section max-w-3xl">
        <Reveal variant="fadeUp">
          <h1 className="heading-xl text-3xl sm:text-4xl mb-3">Privacy Policy</h1>
          <p className="text-sm text-ink-light dark:text-ink-inverse/60 mb-10">Last updated: June 2026</p>
        </Reveal>

        <div className="space-y-8">
          {sections.map((s, i) => (
            <Reveal key={s.title} variant="fadeUp" delay={i * 0.05}>
              <div>
                <h2 className="font-display font-semibold text-lg mb-2">{s.title}</h2>
                <p className="text-sm text-ink-light dark:text-ink-inverse/70 leading-relaxed">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
