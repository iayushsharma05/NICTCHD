import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { contactInfo } from '../../data/siteData'

export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${contactInfo.whatsapp}?text=Hi%2C%20I%20want%20to%20know%20more%20about%20courses%20at%20NICT%20Chandigarh`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.92 }}
      transition={{ delay: 1.2, type: 'spring' }}
      className="fixed bottom-6 left-5 sm:left-8 z-50 grid h-14 w-14 place-items-center rounded-full
        bg-[#25D366] text-white shadow-premium"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366]/60 animate-pulseRing" />
      <FaWhatsapp size={26} className="relative z-10" />
    </motion.a>
  )
}
