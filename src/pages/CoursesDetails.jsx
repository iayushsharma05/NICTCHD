import { useParams, Link } from "react-router-dom";
import { courses } from "../data/courses";
import {
  FaClock,
  FaGraduationCap,
  FaMoneyBillWave,
  FaLaptop,
  FaCertificate,
  FaBriefcase,
  FaArrowLeft,
} from "react-icons/fa";

export default function CourseDetails() {
  const { id } = useParams();

  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <section className="pt-32 pb-20 container-section text-center">
        <h1 className="text-3xl font-bold mb-4">
          Course Not Found
        </h1>

        <Link
          to="/courses"
          className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg"
        >
          <FaArrowLeft />
          Back to Courses
        </Link>
      </section>
    );
  }

  const Icon = course.icon || FaGraduationCap;

  return (
    <section className="pt-32 pb-20 bg-gray-50 dark:bg-slate-900">
      <div className="container-section">

        <Link
          to="/courses"
          className="inline-flex items-center gap-2 mb-8 text-primary-600 font-semibold"
        >
          <FaArrowLeft />
          Back to Courses
        </Link>

        <div className="card-base p-8 rounded-2xl shadow-lg">

          {/* Header */}

          <div className="flex flex-col md:flex-row gap-8">

            <div className="md:w-1/3">

              <img
                src={course.image}
                alt={course.title}
                className="w-full rounded-xl object-cover"
              />

            </div>

            <div className="flex-1">

              <div className="flex items-center gap-4 mb-4">

                <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-primary-500 to-accent text-white">

                  <Icon size={30} />

                </span>

                <div>

                  <h1 className="text-4xl font-bold">
                    {course.title}
                  </h1>

                  <div className="flex items-center gap-2 mt-2 text-gray-500">

                    <FaClock />

                    {course.duration}

                  </div>

                </div>

              </div>

              <p className="text-gray-600 leading-7">
                {course.overview}
              </p>

            </div>

          </div>

          {/* Info Cards */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">

            <div className="border rounded-xl p-5">
              <FaMoneyBillWave className="text-2xl text-primary-600 mb-2" />
              <h3 className="font-semibold">Course Fees</h3>
              <p>{course.fees}</p>
            </div>

            <div className="border rounded-xl p-5">
              <FaClock className="text-2xl text-primary-600 mb-2" />
              <h3 className="font-semibold">Duration</h3>
              <p>{course.duration}</p>
            </div>

            <div className="border rounded-xl p-5">
              <FaLaptop className="text-2xl text-primary-600 mb-2" />
              <h3 className="font-semibold">Mode</h3>
              <p>{course.mode}</p>
            </div>

            <div className="border rounded-xl p-5">
              <FaGraduationCap className="text-2xl text-primary-600 mb-2" />
              <h3 className="font-semibold">Level</h3>
              <p>{course.level}</p>
            </div>

            <div className="border rounded-xl p-5">
              <FaCertificate className="text-2xl text-primary-600 mb-2" />
              <h3 className="font-semibold">Certificate</h3>
              <p>
                {course.certificate ? "Available" : "Not Available"}
              </p>
            </div>

            <div className="border rounded-xl p-5">
              <FaBriefcase className="text-2xl text-primary-600 mb-2" />
              <h3 className="font-semibold">Placement</h3>
              <p>
                {course.placement
                  ? "Placement Assistance"
                  : "No Placement"}
              </p>
            </div>

          </div>

          {/* Syllabus */}

          {course.syllabus?.length > 0 && (
            <div className="mt-12">

              <h2 className="text-2xl font-bold mb-5">
                Course Syllabus
              </h2>

              <ul className="grid md:grid-cols-2 gap-3 list-disc ml-6">

                {course.syllabus.map((item) => (
                  <li key={item}>{item}</li>
                ))}

              </ul>

            </div>
          )}

          {/* Projects */}

          {course.projects?.length > 0 && (
            <div className="mt-12">

              <h2 className="text-2xl font-bold mb-5">
                Projects
              </h2>

              <ul className="grid md:grid-cols-2 gap-3 list-disc ml-6">

                {course.projects.map((item) => (
                  <li key={item}>{item}</li>
                ))}

              </ul>

            </div>
          )}

          {/* Features */}

          {course.features?.length > 0 && (
            <div className="mt-12">

              <h2 className="text-2xl font-bold mb-5">
                Features
              </h2>

              <ul className="grid md:grid-cols-2 gap-3 list-disc ml-6">

                {course.features.map((item) => (
                  <li key={item}>{item}</li>
                ))}

              </ul>

            </div>
          )}

          {/* Career */}

          {course.career?.length > 0 && (
            <div className="mt-12">

              <h2 className="text-2xl font-bold mb-5">
                Career Opportunities
              </h2>

              <ul className="grid md:grid-cols-2 gap-3 list-disc ml-6">

                {course.career.map((item) => (
                  <li key={item}>{item}</li>
                ))}

              </ul>

            </div>
          )}

        </div>
      </div>
    </section>
  );
}