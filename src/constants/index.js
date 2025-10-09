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
  generalMotors,
  keplrAI,
  pythonLogo,
  tryPng,
  cPlusPlus,
  javaPng,
  postgresql,
  axlePic,
  infectaScanPic,
  jobSearchPic,
  thomasYoumans,
  jonathanWavell,
  hiddenProfile,
  AirSimProjectDemo,
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
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Java/C++/Python Developer",
    icon: mobile,
  },
  {
    title: "React Developer",
    icon: backend,
  },
  {
    title: "AI Software Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "postgresql",
    icon: postgresql,
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
    name: "C++",
    icon: cPlusPlus,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "python",
    icon: pythonLogo,
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
    name: "Java",
    icon: javaPng,
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
      "Led development of a barcode-based inventory system for pharmacy stock management, improving real-time tracking, expiration monitoring, and reordering, boosting efficiency by 315% over the previous system.",
      "Engineered efficient data pipelines using Python, NumPy, and Pandas to seamlessly aggregate 20+ structured and unstructured datasets, applying software testing principles to ensure data accuracy and system reliability.",
      "Formulated data-driven forecasting tools with Scikit-learn and visualization techniques from Matplotlib; optimized inventory planning efficiency by identifying seasonal trends across 150 distinct product categories based on sales data.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Scale AI",
    icon: scaleAI,
    iconBg: "#383E56",
    date: "Dec 2023 - Mar 2024",
    points: [
      "Conceived an efficient task routing solution leveraging optimal data structures, algorithms, and automation tools like Selenium and Java; streamlined workflows, reducing task turnaround time by 25% and enhancing team productivity.",
      "Built an intuitive frontend interface using React.js, enabling customers to submit tasks and labelers to manage workloads, impacting over 100,000 users.",
      "Composed and executed over 500 detailed test cases across C++, Java, and Python to confirm code stability; ensured all features met defined quality standards resulting in zero regression issues during deployment.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Lavalab",
    icon: lavalab,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - May 2024",
    points: [
      "Developed Axle, a full stack B2B SaaS and mobile platform utilizing React and JavaScript that simplified the e-commerce process for car parts, applying software design principles and object-oriented programming.",
      "Engineered database management processes with PostgreSQL that streamlined operational efficiency; reduced manual entry errors by handling up to 1,000 transactions daily without compromising accuracy or performance.",
      "Spearheaded the launch of a Minimum Viable Product (MVP) employing Scrum-based Agile methodologies, gathering customer feedback throughout; adoption by over 20 auto body shops led to a 65% increase in operational productivity.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Rhoman Aerospace",
    icon: rhomanAerospace,
    iconBg: "#383E56",
    date: "May 2024 - Sep 2024",
    points: [
      "Designed and implemented an innovative data model within MongoDB to improve storage efficiency for 150+ unique drone mission scenarios, directly facilitating faster retrieval of critical information during real-time operations.",
      "Implemented scene comprehension use cases leveraging OpenCV and the OpenAI API within an Unreal Engine environment, resulting in a 58% improvement in UAV maneuverability and mission success rate.",
    ],
  },
  {
    title: "CTO",
    company_name: "KeplrAI (Keplr)",
    icon: keplrAI,
    iconBg: "#E6DEDD",
    date: "Nov 2024 - May 2025",
    points: [
      "Architected and created an AI-powered platform leveraging AWS, React, and PostgreSQL to automate enterprise inventory management and Request for Quotation (RFQ) processes, resulting in a 5x faster workflow.",
      "Secured strategic pilot partnerships, including Enerflex, and preparing to deploy AI-driven solutions directly integrated with SAP ERP systems to automatically recommend optimal suppliers based on price, delivery speed, and past performance, managing upwards of 5,000 RFQs monthly.",
    ],
  },
  {
    title: "AI & Full-Stack Software Engineer Intern",
    company_name: "General Motors",
    icon: generalMotors,
    iconBg: "#E6DEDD",
    date: "May 2025 - Aug 2025",
    points: [
      "Developed an AI-powered assistant enabling GM fleet managers to access insights for their fleets via conversational queries, replacing manual SQL workflows; positioned as a scalable SaaS product projected to support 1M+ vehicles and generate $30M+ in annual revenue.",
      "Engineered a Python-based MLflow evaluation pipeline with a custom dataset and automated evaluation framework that triggers on every model deployment in Databricks, reducing end-to-end model evaluation time by 85%.",
      "Improved AI assistant accuracy by 50% on custom metrics (VES, soft-F1, EX) through prompt engineering, golden query validation, and optimizing data tables as part of iterative refinement in Databricks.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Rakshith's cutting-edge developments in UAV technology enhanced our mission success rate by 58%. An invaluable asset to our team.",
    name: "Thomas Youmans",
    designation: "CEO",
    company: "Rhoman Aerospace",
    image: thomasYoumans,
  },
  {
    testimonial:
      "Rakshith's innovative API integration and scene comprehension work significantly improved our UAV operations. A truly exceptional engineer.",
    name: "Jonathan Wavell",
    designation: "Project Manager",
    company: "Rhoman Aerospace",
    image: jonathanWavell,
  },
  {
    testimonial:
      "Rakshith revolutionized our inventory management system, boosting efficiency by 315% with his innovative project. A true game-changer!",
    name: "Anand Yaparla",
    designation: "CEO",
    company: "Reuss Pharmacy",
    image: hiddenProfile,
  },
];

const projects = [
  {
    name: "Axle",
    description:
      "A cutting-edge B2B SaaS web-based platform that serves as an e-commerce site for car parts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: axlePic,
    source_code_link: "https://github.com/rakthuraga/Axle",
  },
  {
    name: "InfectaScan",
    description:
      "Web application that determines the correct type of bacteria given a new image in testing allowing hospitals to identify antibiotic misuse in patients up to 70 times faster than traditional methods.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "machine learning",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
    ],
    image: infectaScanPic,
    source_code_link: "https://github.com/rakthuraga/InfectaScan",
  },
  {
    name: "OpenDrone AI",
    description:
      "An AI-powered drone navigation system that uses real-time image processing and command-based input to autonomously maneuver through obstacles in a simulated environment, integrating Unreal Engine and OpenAI to transform text-based instructions into precise flight commands.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: AirSimProjectDemo,
    source_code_link: "https://github.com/rakthuraga/AirsimProject",
  },
];

export { services, technologies, experiences, testimonials, projects };
