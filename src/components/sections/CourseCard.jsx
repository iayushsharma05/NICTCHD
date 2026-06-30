import { motion } from 'framer-motion'
import {
  FaClock,
  FaArrowRight,
  FaGraduationCap,
  FaMoneyBillWave,
  FaLaptop,
  FaCertificate,
  FaBriefcase,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function CourseCard({ course, index = 0 }) {
  const {
    icon: Icon = FaGraduationCap,
    title,
    overview,
    duration,
    level,
    fees,
    mode,
    certificate,
    placement,
    id,
  } = course

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: (index % 3) * 0.1,
      }}
      whileHover={{ y: -8 }}
      className="card-base card-hover group p-6 flex flex-col h-full relative overflow-hidden"
    >
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-primary-100 to-accent/20 blur-xl group-hover:scale-125 transition-transform duration-500" />

      <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary-500 to-accent text-white shadow-lg mb-5">
        <Icon size={26} />
      </span>

      <h3 className="font-bold text-xl mb-3">
        {title}
      </h3>

      <p className="text-gray-600 text-sm mb-5 flex-1">
        {overview}
      </p>

      <div className="space-y-2 text-sm mb-5">

        <div className="flex items-center gap-2">
          <FaClock />
          <span>{duration}</span>
        </div>

        <div className="flex items-center gap-2">
          <FaMoneyBillWave />
          <span>{fees}</span>
        </div>

        <div className="flex items-center gap-2">
          <FaLaptop />
          <span>{mode}</span>
        </div>

        <div className="flex items-center gap-2">
          <FaCertificate />
          <span>
            {certificate ? "Certificate Included" : "No Certificate"}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <FaBriefcase />
          <span>
            {placement
              ? "Placement Assistance"
              : "No Placement"}
          </span>
        </div>

      </div>

      <div className="flex items-center justify-between border-t pt-4">

        <span className="text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700">
          {level}
        </span>

        <Link
          to={`/courses/${id}`}
          className="flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all"
        >
          Know More
          <FaArrowRight size={12} />
        </Link>

      </div>
    </motion.div>
  )
}