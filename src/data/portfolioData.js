// Portfolio data - easily update your content here

export const personalInfo = {
  name: "Paul Atkins",
  title: "Software Developer",
  email: "patkins789@gmail.com",
  linkedin: "https://www.linkedin.com/in/paul-atkins-300667104/",
  github: "https://github.com/patkins2",
  artstation: "https://www.artstation.com/small_napkins",
  resumeFile: "PaulAtkinsResume_1125.pdf"
};

export const aboutText = `Welcome to my page! I am a passionate software developer with expertise in multiple programming languages & tech stacks. I enjoy tackling challenging problems and building innovative solutions.`;

export const workExperience = [
  {
    id: 1,
    title: "CSS Support Engineer",
    company: "Palantir",
    location: "Remote",
    dates: "September 2025 - Present",
    description: [
      "Contract via Prime Technical Services Inc.",
      "Diagnosed and resolved user issues related to data setup, pipeline configuration, and data processing within the Foundry platform to ensure the success of Palantir clients in terms of integration, engagement, and impact.",
      "Partnered closely with cross-functional teams to manage a portfolio of enterprise level customer accounts, helping customers to achieve their business goals and get the most value from the Palantir products they purchased throughout the lifecycle of their contract.",
      "Ensured the success of Palantir clients in terms of integration, engagement, and impact by collaborating with developers to identify and address data-related bottlenecks and improve the overall functionality of Foundry applications.",
      "Provided technical guidance to users on utilizing Foundry applications (Workshop, Quiver, Slate, Code Workbooks, Pipeline Builder, and Contour) to manipulate and transform data for their desired outcomes."
    ]
  },
  {
    id: 2,
    title: "Lead Software Engineer",
    company: "TrackLab",
    location: "Charlotte, NC",
    dates: "March 2024 - Present",
    description: [
      "Designed and developed a real-time race tracking and strategy web application leveraging HTML/CSS/JS for the frontend and Go ETL for the backend, connecting to MongoDB.",
      "Engineered RESTful APIs to fetch and display race statistics, lap times, and driver performance.",
      "Implemented geolocation-based weather tracking, utilizing OpenStreetMap API and the National Weather Service, API to provide localized weather data.",
      "Managed authentication and user access, implementing Google OAuth for secure event participation and administrative controls.",
      "Set up and managed the TrackLab web server, overseeing deployment processes, & server configurations.",
      "Maintained and structured the team's GitHub repository, enforcing branching strategies, code reviews, and version control best practices to streamline development and collaboration."
    ]
  },
  {
    id: 3,
    title: "Software Developer",
    company: "General Motors",
    location: "Austin, TX",
    dates: "September 2021 - Feburary 2024",
    description: [
      "Designed, implemented, and maintained custom ETL processes using Python (PySpark) and SQL to extract, transform, and analyze large structured and semi-structured datasets in Hive, Hadoop, and Greenplum environments.",
      "Built and optimized Power BI reports and Python scripts for data analysis, leading QA to ensure data accuracy and standardized report formatting.",
      "Developed and maintained CI/CD automation and release pipelines for large-scale data systems, collaborating with Cloud teams to transition on-prem TFS pipelines to Azure DevOps and optimize release management.",
      "Coordinated with stakeholders to troubleshoot and resolve issues impacting pipeline stability and deployments.",
      "Conducted code reviews for Python and SQL, ensuring scalable, efficient, and maintainable data solutions.",
      "Managed the team's Git repository, co-led deployments and release processes, and facilitated daily working sessions with the automation team, contributing to over 50 successful deployments."
    ]
  },
  {
    id: 4,
    title: "Graduate Research Assistant",
    company: "UNC Charlotte",
    location: "Charlotte, NC",
    dates: "June 2019 - May 2020",
    description: [
      "Developed immersive gaming and virtual/augmented reality applications for platforms including Microsoft HoloLens, HTC Vive, and iPad.",
      "Collaborated with the Charlotte Fire Department on innovative public safety technology initiatives.",
      "Designed and implemented an Augmented Reality CPR Guide/Manual to support real-time emergency training and response."
    ]
  },
  {
    id: 5,
    title: "College of Computing & Informatics Technology Solutions Office Technician",
    company: "UNC Charlotte",
    location: "Charlotte, NC",
    dates: "October 2017 - April 2019",
    description: [
      "Led IT support for the College of Computing and Informatics, assisting with device deployment, workstation imaging, and troubleshooting hardware/software issues for faculty and staff.",
      "Coordinated the IT Help Desk team, mentoring new technicians and ensuring smooth operation through task prioritization and incident remediation.",
      "Managed software deployments, client services ticket fulfillment, and maintained detailed documentation for service operations and IT procedures."
    ]
  }
];

export const skills = [
  "Programming Languages: Java, Python, C#, C++, SQL, HTML/CSS",
  "Tools: Azure, Git/GitHub, Adobe Suite, MS Office, Unity, Unreal"
];

export const projects = [
  {
    id: 1,
    title: "Virtual Reality Team Tracker. Made for UNCC VisLab.",
    type: "video",
    videoUrl: "https://www.youtube.com/embed/Ij16HLPgvjE"
  },
  {
    id: 2,
    title: "Augmented Reality CPR Guide/Trainer for Microsoft Hololens. Made for UNCC VisLab.",
    type: "lightbox",
    thumbnailImage: "images/screenshot5.png",
    images: [
      { src: "images/screenshot1.png", alt: "Start Page" },
      { src: "images/screenshot2.png", alt: "Questions or Tasks are presented to the user" },
      { src: "images/screenshot3.png", alt: "Users can click next, the checkbox in the center, or use voice commands to navigate through the pages." },
      { src: "images/screenshot4.png", alt: "The amount of time it takes a user to complete a cycle with be displayed in seconds." },
      { src: "images/screenshot5.png", alt: "Avatar is superimposed on the real world to help with training." }
    ]
  },
  {
    id: 3,
    title: "Unity VR Solar System. Made for ITCS 6125 - Virtual & Augmented Reality. ",
    type: "video",
    videoUrl: "https://www.youtube.com/embed/Sky0Cmaqzcg"
  },
  {
    id: 4,
    title: "Text-Based Adventure Game Made In Unity.",
    type: "image",
    image: "images/text_based.png",
    link: "https://github.com/patkins2/Text-Based-Adventure-Game"
  }
];

export const education = [
  {
    id: 1,
    degree: "Master of Science, Computer Science",
    school: "UNC Charlotte",
    location: "Charlotte, NC",
    dates: "Aug 2019 - Dec 2020",
    gpa: "3.8",
    minors: null
  },
  {
    id: 2,
    degree: "Bachelor of Science, Computer Science",
    school: "UNC Charlotte",
    location: "Charlotte, NC",
    dates: "Aug 2015 - May 2019",
    gpa: "3.3",
    minors: "Computer Engineering, Mathematics"
  }
];
