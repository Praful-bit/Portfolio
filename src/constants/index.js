import { color } from "framer-motion";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  basify,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id:"experience",
    title: "Experience"
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-End Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: reactjs,
  },
  {
    title: "Software Developer",
    icon: backend,
  },
  {
    title: "JavaScript Developer",
    icon: javascript,
  },
];
const intro =
  "I'm a Software Engineer with strong expertise in HTML, CSS, JavaScript, TypeScript, and Tailwind CSS, specializing in React.js and knowledgeable in Next.js. I have hands-on experience in building dynamic, responsive web applications, optimizing code for efficiency, and using libraries like Redux and React Query. I'm a quick learner who excels in collaborative environments, consistently delivering scalable, user-focused solutions that solve real-world problems. Let's work together to bring your ideas to life and create a high-performance digital experience!";

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "FireBase",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Next JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Basify",
    icon: basify, // ✅ Replace with Basify logo if available
    iconBg: "#383E56",
    date: "June 2024 - June 2025",
    points: [
      "Built and maintained dynamic web applications using React.js, Tailwind CSS, and modern frontend tools.",
      "Collaborated with designers, product managers, and backend engineers to deliver scalable features.",
      "Improved responsiveness and cross-browser compatibility, enhancing user experience across devices.",
      "Conducted code reviews and actively contributed to UI/UX improvements and performance optimization.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "MailBox",
    description:
      "MailBox cliwnt is an application where user can send and receive mail. Each user has their  own account and users cannot access other user data.",
    tags: [
      { name: "html", color: "pink-text-gradient" },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Praful-bit/MailBox",
  },
  {
    name: "Expense Tracker",
    description:
      "Developed an expense Tracker app which user can add, delete and update expense. Premium feature are also introduce to get dark mode and Download expense",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Praful-bit/Expense",
  },
  {
    name: "E-COMMERCE APP",
    description:
      "An Ecommerce application using React.js for front end  Context API for storing data and Firebase for authentication.  React Router for page navigation, GitHub for version control.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Praful-bit/E-commerce",
  },
];

export { services, intro, technologies, experiences, testimonials, projects };
