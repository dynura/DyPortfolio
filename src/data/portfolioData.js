// data/portfolioData.js
export const portfolioData = {
  personal: {
    logo: "DYNURA",
    greeting: "Hi, I'm Ezzah!",
    subtitle: "A Software Developer passionate about building smart, inclusive, and user-centered digital solutions.",
    tagline: '"Creating scalable and accessible solutions powered by modern tech."',
    profileImage: {
      src: "/assets/main.png", 
      alt: "Ezzah - Software Developer"
    },
    ctaButtons: [
      {
        text: "🚀 View My Projects",
        variant: "btn-primary",
        onClick: "projects"
      },
      {
        text: "📄 Download Resume",
        variant: "btn-secondary",
        href: "https://drive.google.com/file/d/1gtIQ2tjTn-p6M3KyekjKWL9W4OsV1U7q/view?usp=sharing"
      },
      {
        text: "💬 Let's Connect!",
        variant: "btn-secondary",
        onClick: "contact"
      }
    ]
  },

  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ],

  about: {
    stats: [
      { number: "4+", label: "Years of Coding" },
      { number: "6+", label: "Projects Built" },
      { number: "10+", label: "Technologies" },
      { number: "2025", label: "Graduation Year" }
    ],
    description: [
      "I'm a final-year Software Engineering student with hands-on experience in web development, mobile app development, and UI/UX design. I specialize in creating cross-platform solutions using modern frameworks and tools.",
      "My passion lies in developing inclusive, accessible, and scalable applications that solve real-world problems. I have experience with agile methodologies, version control, and cloud integration, making me well-equipped for modern software development challenges."
    ]
  },

  skills: [
    {
      title: "💻 Web Development",
      tags: ["JavaScript", "HTML5 & CSS", "PHP", "Python", "ReactJS"]
    },
    {
      title: "📱 Mobile App Development",
      tags: ["Flutter", "TensorFlow Lite", "Java", "React Native"]
    },
    {
      title: "🎨 UI/UX Design",
      tags: ["Figma", "User Experience", "Interface Design", "Prototyping"]
    },
    {
      title: "☁️ Cloud & Database",
      tags: ["Firebase", "MySQL", "Cloud Integration", "Application Deployment"]
    },
    {
      title: "🔧 Development Tools",
      tags: ["Visual Studio Code", "GitHub", "Git", "Linux", "Version Control", "REST API"]
    },
    {
      title: "⚡ Project Management",
      tags: ["Agile & Scrum", "Software Testing", "LMS Management"]
    }
  ],

  projects: [
    {
      title: "📖 Crowdsourced Study Material App",
      description: "A web and mobile platform that allows students to upload, share, and access study materials collaboratively. Includes real-time chatrooms by subject, AI-powered quiz generation, and file management features integrated with Firebase and TFLite.",
      tech: ["Flutter", "TensorFlow Lite", "Firebase", "Python"],
      image: {
        src: "/assets/studyapp.png", 
        alt: "Crowdsourced Study Material App"
      },
      links: [
        { text: "🔗 Live Demo", href: "#", variant: "btn-primary" },
        { text: "📱 GitHub", href: "https://github.com/dynura/study_app", variant: "btn-secondary" }
      ]
    },
    {
      title: "🍗 FoodShare: Reduce Food Waste App",
      description: "A community-based donation app designed to reduce food waste by connecting donors with nearby recipients in need. Features include geolocation, donation tracking, and user verification — built with a focus on accessibility and social impact.",
      tech: ["React Native", "Firebase"],
      image: {
        src: "/assets/foodshare.png", 
        alt: "FoodShare"
      },
      links: [
        { text: "🔗 Live Demo", href: "#", variant: "btn-primary" },
        { text: "📱 GitHub", href: "https://github.com/Hafiiii/FoodShare", variant: "btn-secondary" }
      ]
    },
    {
      title: "🤖 NeverOut: AI Inventory Assistant App",
      description: "An intelligent inventory tracking app that uses AI to remind users before supplies run out. Supports image-based input, smart notifications, and consumption prediction — ideal for household and small business use.",
      tech: ["Flutter", "Firebase", "Python", "Google Cloud Vision"],
      image: {
        src: "/assets/neverout.png", 
        alt: "NeverOut"
      },
      links: [
        { text: "🔗 Live Demo", href: "#", variant: "btn-primary" },
        { text: "📱 GitHub", href: "https://github.com/dynura/NeverOut", variant: "btn-secondary" }
      ]
    }
  ],

  contact: {
    description: "I'm always open to discussing new opportunities, collaborating on projects, or just having a chat about technology!",
    links: [
      { text: "📧 Email Me", href: "mailto:ezzahadibah@gmail.com" },
      { text: "💼 LinkedIn", href: "https://linkedin.com/in/dayang-nur-ezzah-adibah" },
      { text: "💻 GitHub", href: "https://github.com/dynura" }
    ]
  }
};