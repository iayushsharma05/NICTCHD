import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp, FaEnvelope,
  FaInstagram, FaClock, FaPaperPlane, FaCheckCircle,
} from 'react-icons/fa'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { contactInfo } from '../../data/siteData'
import { courses as courseList } from '../../data/courses'

const initialForm = { name: '', phone: '', email: '', course: '', message: '' }

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Please enter your name.'
  if (!/^\d{10}$/.test(form.phone.replace(/\s/g, ''))) errors.phone = 'Enter a valid 10-digit phone number.'
  if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Enter a valid email address.'
  if (!form.course) errors.course = 'Please select a course.'
  if (!form.message.trim()) errors.message = 'Please add a short message.'
  return errors
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false) // Fixed: changed initial state from true to false
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    setErrors((errs) => ({ ...errs, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitError('')

    const validationErrors = validate(form)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true)

      try {
        // Prepare the payload for Web3Forms
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            // Use Vite's env client-side mapping syntax
            access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
            subject: `New Lead from ${form.name} - ${form.course}`,
            ...form
          })
        })

        const result = await response.json()

        if (result.success) {
          setSubmitted(true)
          setForm(initialForm)
        } else {
          setSubmitError(result.message || 'Something went wrong. Please try again.')
        }
      } catch (err) {
        setSubmitError('Network error. Please check your connection and try again.')
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  return (
    <section id="contact" className="container-section py-20 md:py-28">
      <SectionHeading
        eyebrow="Get In Touch"
        title="Let's Start Your"
        highlight="IT Journey"
        description="Have a question about a course, fees or batch timing? Reach out — our counsellors reply fast."
      />

      <div className="grid lg:grid-cols-5 gap-8">
        <Reveal variant="slideRight" className="lg:col-span-2 space-y-5">
          <div className="card-base p-6">
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-50 dark:bg-white/10 text-primary-600 dark:text-accent-light">
                <FaMapMarkerAlt size={16} />
              </span>
              <div>
                <h3 className="font-display font-semibold text-sm mb-1">Visit Us</h3>
                <p className="text-sm text-ink-light dark:text-ink-inverse/65 leading-relaxed">{contactInfo.address}</p>
                {contactInfo.address2 && (
                  <p className="text-sm text-ink-light dark:text-ink-inverse/65 leading-relaxed mt-1">{contactInfo.address2}</p>
                )}
              </div>
            </div>
          </div>

          <div className="card-base p-6">
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-50 dark:bg-white/10 text-primary-600 dark:text-accent-light">
                <FaPhoneAlt size={16} />
              </span>
              <div>
                <h3 className="font-display font-semibold text-sm mb-1">Call Us</h3>
                {contactInfo.phones.map((phone) => (
                  <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="block text-sm text-ink-light dark:text-ink-inverse/65 hover:text-primary-500">
                    {phone}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="card-base p-6">
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-50 dark:bg-white/10 text-primary-600 dark:text-accent-light">
                <FaEnvelope size={16} />
              </span>
              <div>
                <h3 className="font-display font-semibold text-sm mb-1">Email & Social</h3>
                <a href={`mailto:${contactInfo.email}`} className="block text-sm text-ink-light dark:text-ink-inverse/65 hover:text-primary-500">
                  {contactInfo.email}
                </a>
                <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-ink-light dark:text-ink-inverse/65 hover:text-primary-500 mt-1">
                  <FaInstagram size={14} /> @nict.chandigarh
                </a>
              </div>
            </div>
          </div>

          <div className="card-base p-6">
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-50 dark:bg-white/10 text-primary-600 dark:text-accent-light">
                <FaClock size={16} />
              </span>
              <div className="w-full">
                <h3 className="font-display font-semibold text-sm mb-2">Working Hours</h3>
                {contactInfo.workingHours.map((wh) => (
                  <div key={wh.day} className="flex justify-between text-sm text-ink-light dark:text-ink-inverse/65">
                    <span>{wh.day}</span>
                    <span className="font-medium">{wh.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <a
            href={`https://wa.me/${contactInfo.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] text-white font-display font-semibold py-4 shadow-premium hover:-translate-y-0.5 transition-transform"
          >
            <FaWhatsapp size={18} /> Chat on WhatsApp
          </a>
        </Reveal>

        <Reveal variant="slideLeft" className="lg:col-span-3">
          <div className="card-base p-6 sm:p-8 h-full">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-16"
              >
                <FaCheckCircle className="text-primary-500 mb-4" size={48} />
                <h3 className="font-display font-bold text-xl mb-2">Message Sent!</h3>
                <p className="text-sm text-ink-light dark:text-ink-inverse/65 max-w-sm">
                  Thanks for reaching out. Our counsellor will contact you within 24 hours.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-secondary mt-6 text-sm">
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1.5">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={`w-full rounded-xl border bg-white dark:bg-white/5 px-4 py-3 text-sm outline-none transition-colors ${errors.name ? 'border-red-400' : 'border-primary-100 dark:border-white/10 focus:border-primary-500'
                        }`}
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1.5">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="98XXXXXXXX"
                      className={`w-full rounded-xl border bg-white dark:bg-white/5 px-4 py-3 text-sm outline-none transition-colors ${errors.phone ? 'border-red-400' : 'border-primary-100 dark:border-white/10 focus:border-primary-500'
                        }`}
                    />
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email (optional)</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`w-full rounded-xl border bg-white dark:bg-white/5 px-4 py-3 text-sm outline-none transition-colors ${errors.email ? 'border-red-400' : 'border-primary-100 dark:border-white/10 focus:border-primary-500'
                        }`}
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="course" className="block text-sm font-medium mb-1.5">Interested Course</label>
                    <select
                      id="course"
                      name="course"
                      value={form.course}
                      onChange={handleChange}
                      className={`w-full rounded-xl border bg-white dark:bg-white/5 px-4 py-3 text-sm outline-none transition-colors ${errors.course ? 'border-red-400' : 'border-primary-100 dark:border-white/10 focus:border-primary-500'
                        }`}
                    >
                      <option value="">Select a course</option>
                      {courseList.map((c) => (
                        <option key={c.id} value={c.title}>{c.title}</option>
                      ))}
                    </select>
                    {errors.course && <p className="text-xs text-red-500 mt-1">{errors.course}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us what you'd like to know..."
                    className={`w-full rounded-xl border bg-white dark:bg-white/5 px-4 py-3 text-sm outline-none transition-colors resize-none ${errors.message ? 'border-red-400' : 'border-primary-100 dark:border-white/10 focus:border-primary-500'
                      }`}
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                </div>

                {submitError && (
                  <p className="text-sm text-red-500 font-medium">{submitError}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full sm:w-auto disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} <FaPaperPlane size={13} />
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>

      {/* Maps Layout */}
      <Reveal variant="fadeUp" className="mt-10 grid md:grid-cols-2 gap-6">
        <div className="rounded-3xl overflow-hidden shadow-glass border border-primary-100/70 dark:border-white/10 h-80">
          <iframe
            title="NICT Chandigarh Location 1"
            src={contactInfo.mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        {contactInfo.mapEmbed2 && (
          <div className="rounded-3xl overflow-hidden shadow-glass border border-primary-100/70 dark:border-white/10 h-80">
            <iframe
              title="NICT Chandigarh Location 2"
              src={contactInfo.mapEmbed2}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        )}
      </Reveal>
    </section>
  )
}