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
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  lavalab,
  rhomanAerospace,
  reussPharmacy,
  scaleAI,
  Mubotics,
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

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
    name: "TypeScript",
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
    name: "Node JS",
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "BOHS Mubotics",
    icon: Mubotics,
    iconBg: "#383E56",
    date: "Sep 2021 - May 2022",
    points: [
      "Played a key role in designing and implementing software for a competitive robotics project that achieved 6th place at the National Championships of the For Inspiration and Recognition of Science and Technology (FIRST) Robotics Competition in Houston, April 2022.",
      "Collaborated with a team to develop and fine-tune software solutions for a successful National Championships performance, contributing to the overall achievement.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Reuss Pharmacy",
    icon: reussPharmacy,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Aug 2023",
    points: [
      "Led the development of an inventory control system that uses barcodes for efficient pharmacy stock management by tracking real-time inventory, monitoring expiration dates, and facilitating reorder process resulting in an 80% increase in efficiency when compared to the previous system.",
      "Developed data pipelines using Python, NumPy, and Pandas to aggregate structured and unstructured datasets from various data sources, culminating in the organized storage of processed data within a MySQL database.",
      "Employed Scikit-learn, Seaborn, and Matplotlib to devise predictive ensemble models to predict future inventory requirements.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Scale AI",
    icon: scaleAI,
    iconBg: "#383E56",
    date: "Dec 2023 - Mar 2024",
    points: [
      "Enhanced the efficiency of the machine-learning model through training and advanced machine-learning techniques, leading to a 100% improvement in problem-solving accuracy and speed benefiting over 1,000,000 users.",
      "Developed advanced models and automated systems to enhance task quality assessment and labeler performance, resulting in a 25% boost in efficiency and a 50% reduction in manual task allocation.",
      "Designed and executed robust test cases to ensure code reliability, efficiency, and effectiveness, affirming adherence to quality standards in a variety of programming languages including C++, Java, and Python.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Lavalab",
    icon: lavalab,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - May 2024",
    points: [
      "Software developer for USC's premiere, student-run, product incubator.",
      "Leveraged Git for version control and React.js to develop a sophisticated website meticulously aligned with Figma designs, showcasing a commitment to precision and innovation in web development.",
      "Reached over a 100 users and presented startup product to an audience of over 200 people",
      "Developed Axle, a cutting-edge B2B SaaS platform using React and JavaScript, that serves as an e-commerce site for car parts.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Rhoman Aerospace",
    icon: rhomanAerospace,
    iconBg: "#383E56",
    date: "May 2024 - Present",
    points: [
      "Enhanced the efficiency of the machine-learning model through training and advanced machine-learning techniques, leading to a 100% improvement in problem-solving accuracy and speed benefiting over 1,000,000 users.",
      "Developed advanced models and automated systems to enhance task quality assessment and labeler performance, resulting in a 25% boost in efficiency and a 50% reduction in manual task allocation.",
      "Designed and executed robust test cases to ensure code reliability, efficiency, and effectiveness, affirming adherence to quality standards in a variety of programming languages including C++, Java, and Python.",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
