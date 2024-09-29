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
      "Reached over 20 autobody shops as users and presented startup product to an audience of over 200 people",
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
      "Developed an API to integrate UAV perception pipeline with OpenAI API using Python, enabling accurate scene comprehension and caption generation using MongoDB to store the metadata.",
      "Implemented scene comprehension use cases with OpenCV and ChatGPT, improving UAV maneuverability and mission success rate by 30%.",
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
      "Rakshith revolutionized our inventory management system, boosting efficiency by 80% with his innovative project. A true game-changer!",
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
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: jobSearchPic,
    source_code_link: "https://github.com/rakthuraga/JobSearch",
  },
];

export { services, technologies, experiences, testimonials, projects };
