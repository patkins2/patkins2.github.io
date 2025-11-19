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
    title: "Lead Software Engineer",
    company: "TrackLab",
    location: "Charlotte, NC",
    dates: "Mar 2024 - Present",
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
    id: 2,
    title: "Software Developer",
    company: "General Motors",
    location: "Austin, TX",
    dates: "Sept 2021 - Feb 2024",
    description: [
      "Worked on CVI Insourcing project involving pulling from large databases and creating Power BI reports and Python scripts for data analysis",
      "Transitioned to Full Stack Pyspark ETL Developer",
      "Created & maintained CI/CD Automation & Release ETL Pipelines",
      "Populated/managed team's Hive/Hadoop/Greenplum datasets",
      "Coordinated with the Cloud team on transitioning from on-prem TFS pipelines to Azure DevOps",
      "Maintained team's Git repository, co-led deployments/releases for the project",
      "Held daily working sessions for project's automation team",
      "Led Quality Assurance on Power BI reports for newly formed team"
    ]
  },
  {
    id: 3,
    title: "Graduate Research Assistant",
    company: "UNC Charlotte",
    location: "Charlotte, NC",
    dates: "June 2019 - May 2020",
    description: [
      "Worked on gaming and virtual/augmented reality projects for Microsoft HoloLens, HTC Vive, and iPad",
      "Partnered with the Charlotte Fire Department on AR projects",
      "Created Augmented Reality CPR Guide/Manual",
      "Developed Augmented Reality Indoor Team Tracker"
    ]
  },
  {
    id: 4,
    title: "College of Computing & Informatics Technology Solutions Office Technician",
    company: "UNC Charlotte",
    location: "Charlotte, NC",
    dates: "Oct 2017 - April 2019",
    description: [
      "Lead Technician at IT Help Desk for UNC Charlotte's College of Computing and Informatics",
      "Lab maintenance and device deployment",
      "Equipment pickup/delivery/receiving and documentation",
      "Workstation imaging and client services ticket fulfillment",
      "Trained new technicians",
      "Assisted with client incident software/hardware diagnostics and remediation",
      "Software deployment"
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
