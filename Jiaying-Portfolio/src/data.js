const social = [
  {
    name: "Github",
    icon: "/icons/logo-github.svg",
    ion_icon_name: "logo-github",
    link: "https://github.com/Jiaying330",
  },

  {
    name: "LinkedIn",
    icon: "/icons/logo-linkedin.svg",
    ion_icon_name: "logo-linkedin",
    link: "https://www.linkedin.com/in/jiaying-hou-494542195/",
  },
];

const education = [
  {
    title: "University of Pennsylvania",
    time: "Sept. 2022 - May 2024",
    subTitle: "Master's Degree",
    descriptions: [
      "My M.S.E. in Systems Engineering focused on Machine Learning, Deep Learning, Product Design, and Engineering Entrepreneurship, effectively blending analytical rigor with innovative thinking.",
    ],
  },

  {
    title: "University of California, Santa Cruz",
    time: "Sept. 2018 - June 2022",
    subTitle: "Bachelor's Degree",
    descriptions: [
      "My B.S. in Computer Science focused on Game Design and complemented by coursework in Advanced Programming, Algorithm Analysis, and Software Engineering, merges technical proficiency with creative design.",
    ],
  },
];

const experience = [
  {
    title: "Baskin School of Engineering",
    time: "Jan. 2021 – Jan. 2022",
    subTitle: "Advanced Programming Grader",
    descriptions: [
      "Assessed C++ programming projects for over 100 students in the Advanced Programming course, contributing to their growth and understanding of advanced programming concepts.",
    ],
  },

  {
    title: "UCSC Chinese Alumni Association",
    time: "Mar. 2020 – Mar. 2021",
    subTitle: "Software Developer",
    descriptions: [
      "Developed a staffing management system in C++/C# for event notifications and account management.",
      "Designed a MySQL schema for database connectivity, and implemented secure login features using Java and Spring.",
      "Project management was handled with Agile practices via JIRA and Git for version control.",
    ],
  },

  {
    title: "FLY Technology",
    time: "Jul. 2019 - Aug. 2019",
    subTitle: "Unity Engineer Intern",
    descriptions: [
      "Developed VR scenes with electric power features in Unity to enhance virtual training experiences.",
      "Contributed to a web-based teaching management platform using JavaScript and HTML.",
      "Optimized the VR development process, creating comprehensive documentation for future use.",
    ],
  },
];

const skills = [
  {
    title: "Programming Languages",
    descriptions: [
      "JavaScript, HTML, CSS, EJS, SQL, Java, Python, C++, C#, C, MySQL, MongoSQL, Cypher",
    ],
  },

  {
    title: "Development Tools & Frameworks",
    descriptions: ["Sass, React, Node.js, jQuery, Git, Vue, Unity, Spring"],
  },

  {
    title: "Languages",
    descriptions: ["English (Proficient), Chinese (Native)"],
  },
];

const projects = [
  {
    title: "Disney Home Page",
    time: "June 2024",
    descriptions: ["Recreation of Disney landing page"],
    github: "https://github.com/Jiaying330/Disney-Home-page",
    live: "https://disney-home-page-flax.vercel.app/",
  },
  {
    title: "THE MET READY",
    time: "May 2024",
    descriptions: [
      "A web application enhancing visitor pre-planning by integrating The Met Collection API with Axios for real-time data fetching.",
      "Implemented keyword and advanced filtering options in React.js, enabling users to refine artwork selections by medium, era, and display status for enhanced navigation.",
      "Crafted a responsive and user-friendly interface using HTML, CSS, and React.js, modeled after The MET's original artwork search page for intuitive user interactions.",
      "Engineered a personalized 'Artwork Cart' feature that automatically organizes selected artworks by department and gallery, optimizing the visitor's tour experience.",
    ],
    github: "https://github.com/Jiaying330/TheMet_Ready",
    live: "https://the-met-ready.vercel.app/",
  },
  {
    title: "My Book Notes",
    time: "Apr. 2023",
    descriptions: [
      "A personal digital library application designed for book lovers, utilizing Node.js with Express and PostgreSQL to manage a robust backend.",
      "Implemented full CRUD (Create, Read, Update, Delete) functionality to manage books and notes within the library, allowing users to efficiently handle their digital collections.",
      "Designed a user interface with server-side rendering using EJS and JavaScript, enabling dynamic content delivery and responsive user interactions.",
    ],
    github: "https://github.com/Jiaying330/MyBookNotes",
    live: "",
  },

  {
    title: "RecipEasy",
    time: "Mar. 2024 - May. 2024",
    descriptions: [
      "A web-based recipe recommendation platform offering personalized meal suggestions based on available ingredients and time constraints to simplify meal planning and improve cooking experiences.",
      "Outlined website functionalities and designed the user interface using React, Redux, and Material UI.",
      "Developed and integrated search and statistical analysis features, utilizing AWS RDS, MySQL, MongoDB, and Node.js for backend processes.",
    ],
  },

  {
    title: "Break Alert",
    time: "Mar. 2021 - Jun. 2021",
    descriptions: [
      "A productivity-enhancing Chrome extension toolkit, strengthening leadership skills.",
      "Designed and implemented a user-friendly frontend UI using JavaScript and HTML, seamlessly integrating various modules such as scheduler, to-do list, and alarm system.",
      "Managed version control using Git for efficient collaboration within the team.",
      "Adopted Agile methodologies for product development, resulting in an organized and iterative development process.",
    ],
    github: "https://github.com/Jiaying330/Break-Alert",
    live: "https://chrome.google.com/webstore/detail/break-alert/bilocpkncpeojgehfelfaecabikkdolb/",
  },

  {
    title: "Upside Down",
    time: "Oct. 2021",
    descriptions: [
      "A gravity-reversed game for users to jump between two zones to pass each level with rewards.",
      "Implemented game interactions using JavaScript and TypeScript and created Game UI using crisp-game-lib.",
    ],
    github: "https://github.com/Jiaying330/Upside_Down",
    live: "https://jiaying330.github.io/Upside_Down/",
  },

  {
    title: "One Touch RPG",
    time: "Oct. 2021",
    descriptions: [
      "An RPG game involving actions including slashing, stabbing, and guarding for users to enjoy level-based adventures.",
      "Identified game scenes, components, interaction, and bonus rules using UML.",
      "Adopted rapid and mechanic-focused prototyping strategy to implement functionalities using JavaScript (crisp-game-lib) and TypeScrip.",
    ],
    github: "https://github.com/NathanWang00/One-Touch-RPG",
    live: "https://nathanwang00.github.io/One-Touch-RPG/?onetouchrpg/",
  },
];

export { social, education, experience, skills, projects };
