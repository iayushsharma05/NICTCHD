import {
  FaCode, FaPython, FaJava, FaRobot, FaShieldAlt, FaUserSecret,
  FaBullhorn, FaPaintBrush, FaVideo, FaDraftingCompass, FaFileInvoiceDollar,
  FaFileWord, FaDesktop, FaDatabase, FaCogs,
} from 'react-icons/fa'


import fullstackImage from '../assets/courses/full-stack.png'
import pythonimg from '../assets/courses/python.jpg'
import javaimg from '../assets/courses/java.png'
import ccppimg from '../assets/courses/c-pp.png'
import datasciimg from '../assets/courses/data-sci.png'
import aimlimg from '../assets/courses/Ai-Ml.png'
import cybersecimg from '../assets/courses/cyber.png'
import ethicalhackimg from '../assets/courses/ethical.png'
import digitalmarketingimg from '../assets/courses/digital.png'
import graphicdesignimg from '../assets/courses/graphic.png'
import videoeditingimg from '../assets/courses/videoediting.png'
import autocadimg from '../assets/courses/autocad.png'
import tallygstimg from '../assets/courses/tally.png'
import msofficeimg from '../assets/courses/msoffice.png'
import basiccomputerimg from '../assets/courses/basiccomp.png'


export const courses = [
 {
      "id": "full-stack-web-dev",
      icon: FaCode,
      "title": "Full Stack Web Development",
      "category": "Development",
      "duration": "6 Months",
      "mode": "Offline / Online",
      "level": "Beginner to Advanced",
      "fees": "₹25,000",
      "image": fullstackImage,
      "certificate": true,
      "placement": true,
      "overview": "Master HTML, CSS, JavaScript, React, Node.js & databases to build complete web applications.",
      "syllabus": [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST API",
        "Authentication",
        "Deployment"
      ],
      "projects": [
        "Portfolio Website",
        "E-Commerce",
        "Blog",
        "College ERP"
      ],
      "features": [
        "Live Projects",
        "Certificate",
        "Interview Preparation",
        "Placement Assistance"
      ]
    },
    {
      "id": "python-programming",
      icon: FaPython,
      "title": "Python Programming",
      "category": "Development",
      "duration": "3 Months",
      "mode": "Offline / Online",
      "level": "Beginner Friendly",
      "fees": "₹12,000",
      "image": pythonimg,
      "certificate": true,
      "placement": true,
      "overview": "Learn Python from basics to advanced concepts including OOP, libraries and automation.",
      "syllabus": [
        "Variables",
        "Loops",
        "Functions",
        "OOP",
        "File Handling",
        "Modules",
        "Libraries",
        "Projects"
      ],
      "projects": [
        "Calculator",
        "Student Management",
        "Weather App"
      ],
      "features": [
        "Assignments",
        "Projects",
        "Certificate",
        "Placement Support"
      ]
    },
    {
      "id": "java-programming",
      icon: FaJava,
      "title": "Java Programming",
      "category": "Development",
      "duration": "3 Months",
      "mode": "Offline",
      "level": "Beginner Friendly",
      "fees": "₹13,000",
      "image": javaimg,
      "certificate": true,
      "placement": true,
      "overview": "Core & advanced Java with OOP concepts, collections, and real-world project building."
    },
    {
      "id": "c-cpp",
      icon: FaCogs,
      "title": "C / C++",
      "category": "Development",
      "duration": "2 Months",
      "mode": "Offline",
      "level": "Beginner Friendly",
      "fees": "₹8,000",
      "image": ccppimg,
      "certificate": true,
      "placement": false,
      "overview": "Build a rock-solid programming foundation with structured and object-oriented concepts."
    },
    {
      "id": "data-science",
      icon: FaDatabase,
      "title": "Data Science",
      "category": "Data & AI",
      "duration": "4 Months",
      "mode": "Offline / Online",
      "level": "Intermediate",
      "fees": "₹20,000",
      "image": datasciimg,
      "certificate": true,
      "placement": true,
      "overview": "Data analysis, visualization, statistics and predictive modelling using Python tools."
    },
    {
      "id": "ai-ml",
      icon: FaRobot,
      "title": "AI & Machine Learning",
      "category": "Data & AI",
      "duration": "4 Months",
      "mode": "Offline / Online",
      "level": "Intermediate",
      "fees": "₹22,000",
      "image": aimlimg,
      "certificate": true,
      "placement": true,
      "overview": "Hands-on training in machine learning algorithms, neural networks and AI fundamentals."
    },
    {
      "id": "cyber-security",
      icon: FaShieldAlt,
      "title": "Cyber Security",
      "category": "Security",
      "duration": "3 Months",
      "mode": "Offline",
      "level": "Intermediate",
      "fees": "₹18,000",
      "image": cybersecimg,
      "certificate": true,
      "placement": true,
      "overview": "Understand network security, threat detection and defensive security practices."
    },
    {
      "id": "ethical-hacking",
      icon: FaUserSecret,
      "title": "Ethical Hacking",
      "category": "Security",
      "duration": "3 Months",
      "mode": "Offline",
      "level": "Intermediate",
      "fees": "₹18,000",
      "image": ethicalhackimg,
      "certificate": true,
      "placement": true,
      "overview": "Learn penetration testing, vulnerability assessment and ethical hacking techniques."
    },
    {
      "id": "digital-marketing",
      icon: FaBullhorn,
      "title": "Digital Marketing",
      "category": "Marketing & Design",
      "duration": "3 Months",
      "mode": "Offline / Online",
      "level": "Beginner Friendly",
      "fees": "₹12,000",
      "image": digitalmarketingimg,
      "certificate": true,
      "placement": true,
      "overview": "SEO, social media marketing, Google Ads and content strategy for the digital era."
    },
    {
      "id": "graphic-designing",
      icon: FaPaintBrush,
      "title": "Graphic Designing",
      "category": "Marketing & Design",
      "duration": "3 Months",
      "mode": "Offline",
      "level": "Beginner Friendly",
      "fees": "₹15,000",
      "image": graphicdesignimg,
      "certificate": true,
      "placement": true,
      "overview": "Photoshop, Illustrator and design principles to craft stunning visual content."
    },
    {
      "id": "video-editing",
      icon: FaVideo,
      "title": "Video Editing",
      "category": "Marketing & Design",
      "duration": "2 Months",
      "mode": "Offline",
      "level": "Beginner Friendly",
      "fees": "₹10,000",
      "image": videoeditingimg,
      "certificate": true,
      "placement": false,
      "overview": "Professional video editing, motion graphics and post-production workflows."
    },
    {
      "id": "autocad",
      icon: FaCogs,
      "title": "AutoCAD",
      "category": "Design Tools",
      "duration": "2 Months",
      "mode": "Offline",
      "level": "Beginner Friendly",
      "fees": "₹12,000",
      "image": autocadimg,
      "certificate": true,
      "placement": false,
      "overview": "2D & 3D drafting and design for architecture, civil and mechanical applications."
    },
    {
      "id": "tally-gst",
      icon: FaDatabase,
      "title": "Tally with GST",
      "category": "Office & Accounts",
      "duration": "2 Months",
      "mode": "Offline",
      "level": "Beginner Friendly",
      "fees": "₹9,000",
      "image": tallygstimg,
      "certificate": true,
      "placement": true,
      "overview": "Complete accounting, billing and GST compliance training using Tally Prime."
    },
    {
      "id": "ms-office",
      icon: FaFileWord,
      "title": "MS Office",
      "category": "Office & Accounts",
      "duration": "6 Weeks",
      "mode": "Offline",
      "level": "Beginner Friendly",
      "fees": "₹5,000",
      "image": msofficeimg,
      "certificate": true,
      "placement": false,
      "overview": "Word, Excel, PowerPoint and Outlook skills essential for any workplace."
    },
    {
      "id": "basic-computer",
      icon: FaDesktop,
      "title": "Basic Computer Course",
      "category": "Office & Accounts",
      "duration": "6 Weeks",
      "mode": "Offline",
      "level": "Beginner Friendly",
      "fees": "₹4,000",
      "image": basiccomputerimg,
      "certificate": true,
      "placement": false,
      "overview": "Fundamentals of computer operations, internet usage and digital literacy."
    },
]

export const courseCategories = [
  'All',
  'Office & Accounts',
  'Development',
  'Data & AI',
  'Security',
  'Marketing & Design',
  'Design Tools',
]
