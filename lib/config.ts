export interface NavItem {
  href: string;
  label: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
}

export interface Skill {
  name: string;
  level: string;
  hot?: boolean;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  bgClass: string;
  iconClass: string;
  skills: Skill[];
}

export interface Experience {
  position: string;
  company: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface ContactInfo {
  iconName: string;
  label: string;
  value: string;
  link: string | null;
}

export interface Config {
  developer: {
    name: string;
  };
  social: {
    github: string;
    discord: string;
  };
  NAV_ITEMS: NavItem[];
  recentTracks: boolean;
  projects: Project[];
  skills: SkillCategory[];
  experiences: Experience[];
  contactInfo: ContactInfo[];
}

export const config: Config = {
  developer: {
    name: "Hariom Suthar",
  },
  social: {
    github: "Heria021",
    discord: "#",
  },
  NAV_ITEMS: [
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ],
  recentTracks: true,
  projects: [
    {
      id: 1,
      title: "Sentinal - Customer Support Bot",
      description:
        "AI chatbot platform reducing customer resolution time by 35% (12min → 7.8min) while processing 500+ daily queries with 92% first-contact resolution rate. Deployed 12 RESTful APIs serving 25+ enterprise clients with 99.5% uptime, enabling automated query resolution for 80% of common customer issues. Optimized LLM performance through advanced caching and model fine-tuning, achieving 2,500 queries/hour processing capacity.",
      image: "/projects/project-1.webp",
      technologies: [
        "Next.js",
        "TypeScript",
        "FastAPI",
        "Gen AI",
        "AWS",
        "MongoDB",
      ],
      github: "#",
      demo: "#",
    },
    {
      id: 2,
      title: "NeuraMail – AI Email Assistant",
      description:
        "AI email assistant processing 1,000+ daily emails with 75% reduction in response time, serving 50+ business users through intelligent reply generation and contextual analysis. Achieved 92% email intent classification accuracy using hybrid RAG retrieval system, enabling automated handling of 300% higher email volume per user. Deployed AWS Cognito authentication system maintaining 99.9% uptime.",
      image: "/projects/project-2.webp",
      technologies: [
        "Next.js",
        "FastAPI",
        "MongoDB",
        "OpenAI API",
        "OAuth2",
        "AWS Cognito",
      ],
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      title: "MedScribe 2.0 - AI Healthcare Platform",
      description:
        "AI healthcare platform processing 10,000+ medical documents daily with 95% transcription accuracy, reducing clinical documentation time by 60% across 10 specialized medical domains. Implemented HIPAA-compliant RAG system achieving sub-200ms response times and enabling semantic search across clinical databases with 98% query relevance scoring. Architected full-stack healthcare solution supporting 500+ concurrent users.",
      image: "/projects/project-3.webp",
      technologies: ["Python", "FastAPI", "RAG Systems", "Vector Databases", "AWS", "HIPAA Compliance"],
      github: "#",
      demo: "#",
    },
    {
      id: 4,
      title: "Narayani Traders",
      description:
        "Real-time project dashboard managing 50+ architecture portfolios with automated PDF generation producing 200+ estimates monthly, reducing manual documentation time by 40%. Implemented secure role-based access control supporting 3 user tiers with 100% authentication success rate and zero unauthorized access incidents across 6-month production deployment.",
      image: "/projects/project-4.webp",
      technologies: [
        "Next.js",
        "Firebase",
        "Convex",
        "PDF Generation",
        "Real-Time Data",
      ],
      github: "#",
      demo: "#",
    },
  ],
  skills: [
    {
      title: "Frontend",
      iconName: "HiCode",
      description: "Modern web interfaces",
      bgClass: "bg-blue-500/10",
      iconClass: "text-blue-500",
      skills: [
        { name: "Next.js", level: "Advanced", hot: true },
        { name: "React", level: "Advanced", hot: true },
        { name: "TypeScript", level: "Advanced" },
        { name: "JavaScript", level: "Advanced" },
        { name: "HTML/CSS", level: "Expert" },
      ],
    },
    {
      title: "Backend",
      iconName: "HiDatabase",
      description: "Server & Database",
      bgClass: "bg-emerald-500/10",
      iconClass: "text-emerald-500",
      skills: [
        { name: "Node.js", level: "Advanced", hot: true },
        { name: "FastAPI", level: "Advanced", hot: true },
        { name: "Express.js", level: "Advanced" },
        { name: "Python", level: "Advanced" },
        { name: "RESTful APIs", level: "Expert" },
      ],
    },
    {
      title: "Databases",
      iconName: "HiDatabase",
      description: "Data Management",
      bgClass: "bg-purple-500/10",
      iconClass: "text-purple-500",
      skills: [
        { name: "MongoDB", level: "Advanced", hot: true },
        { name: "PostgreSQL", level: "Advanced" },
        { name: "MySQL", level: "Advanced" },
        { name: "Firebase", level: "Intermediate" },
        { name: "AWS DynamoDB", level: "Intermediate" },
        { name: "Supabase", level: "Intermediate" },
      ],
    },
    {
      title: "AI/ML Technologies",
      iconName: "HiLightningBolt",
      description: "Artificial Intelligence",
      bgClass: "bg-pink-500/10",
      iconClass: "text-pink-500",
      skills: [
        { name: "OpenAI APIs", level: "Advanced", hot: true },
        { name: "RAG Systems", level: "Advanced", hot: true },
        { name: "Vector Databases", level: "Advanced" },
        { name: "LangChain", level: "Intermediate" },
        { name: "Multi-Agent Systems", level: "Intermediate" },
      ],
    },
    {
      title: "Cloud & DevOps",
      iconName: "HiCloud",
      description: "Infrastructure & Tools",
      bgClass: "bg-orange-500/10",
      iconClass: "text-orange-500",
      skills: [
        { name: "AWS S3", level: "Advanced", hot: true },
        { name: "AWS Cognito", level: "Advanced" },
        { name: "Git/GitHub", level: "Expert" },
        { name: "Microservices", level: "Intermediate" },
      ],
    },
    {
      title: "Programming Languages",
      iconName: "HiCube",
      description: "Core Languages",
      bgClass: "bg-cyan-500/10",
      iconClass: "text-cyan-500",
      skills: [
        { name: "C/C++", level: "Intermediate" },
        { name: "Python", level: "Advanced", hot: true },
        { name: "JavaScript", level: "Advanced" },
        { name: "TypeScript", level: "Advanced", hot: true },
        { name: "SQL", level: "Advanced" },
      ],
    },
  ],
  experiences: [
    {
      position: "AI Healthcare Systems Research Intern",
      company: "Centre of Excellence on AI for Education (CoE-AIE), JIIT",
      period: "May 2025 - June 2025",
      location: "Noida, Uttar Pradesh",
      description:
        "Pioneered clinical AI automation achieving 95% accuracy in medical transcription and 60% reduction in documentation time across 10 specialized medical domains. Led research on multi-agent healthcare systems with findings submitted for peer review in international AI conferences.",
      responsibilities: [
        "Developed MedScribe 2.0 AI platform processing 10,000+ medical documents daily with 95% transcription accuracy",
        "Implemented HIPAA-compliant RAG system achieving sub-200ms response times and enabling semantic search across clinical databases with 98% query relevance scoring",
        "Architected full-stack healthcare solution supporting 500+ concurrent users across doctor, patient, and pharmacy roles",
        "Led research on multi-agent healthcare systems and clinical AI automation",
      ],
      technologies: [
        "Python",
        "FastAPI",
        "RAG Systems",
        "Vector Databases",
        "OpenAI APIs",
        "Multi-Agent Architectures",
        "AWS",
        "HIPAA Compliance",
      ],
    },
  ],
  contactInfo: [
    {
      iconName: "FaGithub",
      label: "GitHub",
      value: "@Heria021",
      link: `https://github.com/Heria021`,
    },
    {
      iconName: "FaLinkedin",
      label: "LinkedIn",
      value: "Hariom Suthar",
      link: "https://linkedin.com/in/hariom-suthar",
    },
    {
      iconName: "HiMail",
      label: "Email",
      value: "hariomsuthar7143@gmail.com",
      link: "mailto:hariomsuthar7143@gmail.com",
    },
    {
      iconName: "HiPhone",
      label: "Phone",
      value: "+91 7014247460",
      link: "tel:+917014247460",
    },
    {
      iconName: "FaMapPin",
      label: "Location",
      value: "Noida, Uttar Pradesh, India",
      link: null,
    },
  ],
};