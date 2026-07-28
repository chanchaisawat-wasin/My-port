import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaBriefcase,
  FaCode,
  FaDatabase,
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaGraduationCap,
  FaLayerGroup,
  FaPaperPlane,
  FaPython,
  FaReact,
  FaServer,
  FaTerminal,
  FaTools,
} from "react-icons/fa";
import {
  SiDocker,
  SiLaravel,
  SiPostman,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import formalPortrait from "./assets/wasin-formal.jpg";
import cyberPortrait from "./assets/wasin-cyber.png";
import "./App.css";

const publicAsset = (path) => `${import.meta.env.BASE_URL}${path}`;
const contactEmail = "chanchaisawat.wasin@hotmail.com";

const copyByLanguage = {
  th: {
    skip: "ข้ามไปยังเนื้อหาหลัก",
    homeLabel: "หน้าแรกของพอร์ตวศิน",
    navigationLabel: "เมนูหลัก",
    mobileNavigationLabel: "เมนูสำหรับมือถือ",
    menuLabel: "เปิดหรือปิดเมนู",
    nav: ["เกี่ยวกับ", "ทักษะ", "ประสบการณ์", "ตัวตน", "ติดต่อ"],
    available: "พร้อมร่วมงาน",
    hero: {
      eyebrow: "SOFTWARE DEVELOPER // ชลบุรี",
      lines: ["สร้างระบบ", "ดิจิทัล", "ที่ใช้ได้จริง"],
      intro:
        "ผม วศิน ชาญชัยสวัสดิ์ — Software Developer / Full-Stack Developer ที่พัฒนาเว็บแอปพลิเคชันตั้งแต่หน้าจอ API และฐานข้อมูล ไปจนถึงการดูแลระบบหลังเปิดใช้งาน",
      explore: "ดูประสบการณ์",
      cv: "ดาวน์โหลด CV",
      chapters: "เส้นทาง\nการทำงาน",
      systems: "เครื่องมือ\nเทคโนโลยี",
      panda: "โหมด\nแพนด้า",
      imageAlt: "วศินในชุดไซเบอร์โทนเขียวแห่งอนาคต",
      subject: "บุคคล_001 // ยืนยันแล้ว",
      biometric: "การเชื่อมต่อไบโอเมตริกเสถียร",
      protocol: "โปรโตคอลส่วนตัว",
      pandaMode: "โหมดแพนด้า",
      active: "ทำงาน_",
      scroll: "เลื่อนเพื่อดูข้อมูล",
    },
    about: {
      title: "นักพัฒนาที่เข้าใจทั้งโค้ดและธุรกิจ",
      caption: "สร้างระบบให้ใช้ง่าย ทำงานได้จริง และดูแลต่อได้ในระยะยาว",
      photoAlt: "ภาพทางการของวศิน ชาญชัยสวัสดิ์",
      identity: "ตัวตน // ยืนยันแล้ว",
      base: "ที่ตั้ง",
      quoteStart: "“ผมเปลี่ยนความต้องการทางธุรกิจให้เป็น",
      quoteEm: "เว็บแอปพลิเคชันที่ใช้งานได้จริง”",
      body: [
        "มีประสบการณ์พัฒนาทั้ง Frontend และ Backend ตั้งแต่การออกแบบหน้าจอ เชื่อมต่อ API จัดการฐานข้อมูล ไปจนถึงดูแลและปรับปรุงระบบ Production",
        "เคยทำงานกับระบบภายในองค์กร ระบบจัดการกระบวนการทำงาน เว็บไซต์ E-commerce และ Automation โดยให้ความสำคัญกับความเข้าใจง่าย ประสิทธิภาพ และการแก้ปัญหาที่ตอบโจทย์ผู้ใช้",
      ],
      facts: [
        ["ตำแหน่ง", "Software Developer / Full-Stack Developer"],
        ["พื้นที่ทำงาน", "กรุงเทพมหานคร · ชลบุรี · ระยอง"],
        ["รูปแบบงาน", "Full-time · Hybrid · Remote · On-site"],
        ["ความถนัด", "Business Web Application · Automation"],
      ],
    },
    skills: {
      title: "ทักษะที่ใช้สร้างและดูแลระบบ",
      caption: "ชุดเทคโนโลยีครอบคลุมตั้งแต่ Interface, Server, Database ไปจนถึง Deployment",
      groupTitles: ["Frontend", "Backend", "Database", "Tools & DevOps", "Automation & Delivery"],
    },
    experience: {
      title: "ประสบการณ์ทำงาน",
      caption: "บทบาทและขอบเขตงานที่ผ่านการใช้งานจริง โดยสรุปเฉพาะข้อมูลที่เหมาะกับพอร์ต Public",
      verified: "ข้อมูลยืนยันแล้ว",
      items: [
        {
          role: "Programmer",
          period: "ต.ค. 2025 — ก.ค. 2026",
          details:
            "พัฒนาและดูแลเว็บภายในองค์กร ปรับปรุง Workflow และระบบคลังสินค้า สร้างโมดูลด้วย ASP Classic, Laravel และ ASP.NET Core พร้อมดูแล SQL Server, Deployment และการแก้ปัญหา Production",
        },
        {
          role: "Frontend Developer",
          period: "มิ.ย. 2024 — ก.ย. 2024",
          details:
            "พัฒนาระบบ HR ด้วย React และ TypeScript ปรับ UI สู่เวอร์ชันใหม่ และสร้างระบบค้นหา ตัวกรอง ตารางข้อมูล และ Modal ร่วมกับทีมผลิตภัณฑ์",
        },
        {
          role: "Freelance Frontend Developer",
          period: "ประมาณ 2 เดือน",
          details:
            "พัฒนาเว็บไซต์ Responsive ด้วย React.js เชื่อมต่อ REST API และปรับประสบการณ์ให้รองรับคอมพิวเตอร์ แท็บเล็ต และโทรศัพท์",
        },
        {
          role: "Software Developer Intern",
          period: "ก.ค. 2021 — ต.ค. 2021",
          details:
            "พัฒนาระบบจัดการงานแบบ Drag-and-Drop ด้วย React.js สำหรับสร้าง จัดลำดับ และติดตามงาน พร้อมเรียนรู้การทำงานร่วมกับทีมซอฟต์แวร์",
        },
        {
          role: "University–Industry Project",
          period: "ก.ค. 2020 — ก.พ. 2021",
          details:
            "พัฒนา KYC แบบหลายขั้นตอนด้วย Laravel, Node.js และ Bootstrap ครอบคลุมส่วนติดต่อผู้ใช้และขั้นตอนยืนยันข้อมูล",
        },
      ],
    },
    projects: {
      title: "โปรเจกต์ที่สะท้อนสิ่งที่ทำได้",
      caption: "คัดเฉพาะผลงานที่แสดงทักษะด้าน Business Application, E-commerce และ Automation โดยไม่เปิดเผยข้อมูลภายใน",
      items: [
        {
          title: "Internal Business Management System",
          type: "BUSINESS WEB APPLICATION",
          text: "ระบบบริหารกระบวนการทำงานภายในองค์กร ครอบคลุมการจัดการข้อมูล การติดตามสถานะ การอนุมัติ และรายงาน",
        },
        {
          title: "AR-KANG Collection E-commerce",
          type: "E-COMMERCE WEBSITE",
          text: "เว็บไซต์แสดงและจำหน่ายสินค้า พร้อมส่วนจัดการสินค้าและข้อมูลการจัดส่งสำหรับการใช้งานจริง",
        },
        {
          title: "Telegram Automation Bots",
          type: "AUTOMATION SYSTEM",
          text: "บอทสำหรับจัดการสมาชิก สิทธิ์ผู้ใช้ การบันทึกข้อมูล การคำนวณ และการแจ้งเตือนอัตโนมัติ",
        },
        {
          title: "Real-time Crypto Ranking",
          type: "DATA-DRIVEN WEB APP",
          text: "เว็บไซต์แสดงและจัดอันดับข้อมูล Cryptocurrency พร้อมอัปเดตข้อมูลแบบใกล้เคียง Real-time",
        },
        {
          title: "Drag-and-Drop Task Management",
          type: "INTERACTIVE WEB APP",
          text: "ระบบจัดการงานที่สร้าง จัดลำดับ และย้ายงานระหว่างสถานะด้วย Drag-and-Drop",
        },
      ],
    },
    profile: {
      title: "จุดแข็งและสิ่งที่กำลังพัฒนา",
      caption: "ภาพรวมการทำงานอย่างตรงไปตรงมา—ทั้งสิ่งที่ทำได้ดีและทักษะที่กำลังยกระดับ",
      educationLabel: "การศึกษา",
      degree: "วิศวกรรมศาสตรบัณฑิต สาขาวิศวกรรมซอฟต์แวร์",
      university: "มหาวิทยาลัยบูรพา",
      graduated: "สำเร็จการศึกษา พ.ศ. 2564",
      strengthsLabel: "CORE STRENGTHS",
      strengths: [
        ["แก้ปัญหาอย่างเป็นระบบ", "ตรวจสอบสาเหตุทีละขั้นและคำนึงถึงผลกระทบต่อข้อมูลและระบบจริง"],
        ["พัฒนาได้ครบทั้ง Stack", "ทำงานได้ตั้งแต่ React, Backend และ Database ไปจนถึง Deploy และ Server"],
        ["เข้าใจกระบวนการธุรกิจ", "เก็บ Requirement วิเคราะห์ Workflow และแปลงเป็นระบบที่ผู้ใช้ทำงานได้ง่ายขึ้น"],
        ["รับผิดชอบระบบหลังพัฒนา", "ดูแล Bug, Deployment, Database และปัญหาที่เกิดหลังเปิดใช้งาน"],
        ["ปรับตัวกับเทคโนโลยี", "ทำงานได้ทั้ง Modern Stack และ Legacy System พร้อมเรียนรู้ต่อเนื่อง"],
        ["ใส่ใจประสบการณ์ผู้ใช้", "ละเอียดกับ Search, Table, Modal และขั้นตอนการทำงานที่ผู้ใช้สัมผัส"],
      ],
      growthLabel: "CURRENTLY IMPROVING",
      growthLead: "กำลังวางตัวให้ชัดในสาย Full-Stack Developer ที่เด่นด้าน Business Web Application และ Automation",
      growth: [
        ["System Design & Architecture", "พัฒนาการออกแบบระบบขนาดใหญ่ Scalability และ Design Patterns ให้ลึกขึ้น"],
        ["Automated Testing & CI/CD", "เพิ่ม Unit Test, Integration Test และ Deployment Pipeline ในผลงาน"],
        ["Professional English", "ฝึกการประชุม อธิบายงาน และสื่อสารกับทีมต่างชาติให้มั่นใจขึ้น"],
        ["Presentation & Communication", "ฝึกเล่าปัญหา วิธีแก้ และผลลัพธ์ของงานให้กระชับและชัดเจน"],
        ["Delivery Prioritization", "แยกสิ่งจำเป็นต่อการส่งมอบออกจากรายละเอียดที่ปรับปรุงในรอบถัดไปได้"],
      ],
    },
    contact: {
      titleTop: "พร้อมสำหรับ",
      titleBottom: "โอกาสใหม่",
      body:
        "เปิดรับตำแหน่ง Software Developer หรือ Full-Stack Developer สำหรับเว็บแอปพลิเคชัน ระบบภายในองค์กร และผลิตภัณฑ์ดิจิทัล ทั้ง Full-time, Hybrid, Remote และ On-site",
      channel: "อีเมล",
      encrypted: "พร้อมติดต่อ",
      response: "พื้นที่",
      asap: "กทม. · ชลบุรี · ระยอง",
      status: "สถานะ",
      available: "OPEN TO WORK",
      nameLabel: "ชื่อของคุณ",
      namePlaceholder: "ระบุชื่อ",
      emailLabel: "อีเมล",
      emailPlaceholder: "ระบุอีเมล",
      briefLabel: "รายละเอียดโปรเจกต์หรือตำแหน่งงาน",
      briefPlaceholder: "ส่งข้อความของคุณ...",
      sending: "กำลังส่ง...",
      send: "ส่งข้อความ",
      success: "✓ ได้รับข้อความแล้ว",
      error: "เชื่อมต่อไม่สำเร็จ — กรุณาลองอีกครั้ง",
    },
    footer: {
      line: "ออกแบบด้วยโค้ด ความอยากรู้อยากเห็น และพลังแพนด้า",
      back: "กลับขึ้นด้านบน ↑",
    },
  },
  en: {
    skip: "Skip to main content",
    homeLabel: "Wasin portfolio home",
    navigationLabel: "Main navigation",
    mobileNavigationLabel: "Mobile navigation",
    menuLabel: "Toggle navigation",
    nav: ["ABOUT", "SKILLS", "EXPERIENCE", "PROFILE", "CONTACT"],
    available: "OPEN TO WORK",
    hero: {
      eyebrow: "SOFTWARE DEVELOPER // CHONBURI",
      lines: ["BUILDING", "PRACTICAL", "SYSTEMS"],
      intro:
        "I’m Wasin Chanchaisawat — a Software Developer / Full-Stack Developer building web applications from interfaces, APIs, and databases through production maintenance.",
      explore: "VIEW EXPERIENCE",
      cv: "DOWNLOAD CV",
      chapters: "CAREER\nCHAPTERS",
      systems: "TECH\nTOOLS",
      panda: "PANDA\nMODE",
      imageAlt: "Wasin in a futuristic green cyber outfit",
      subject: "SUBJECT_001 // VERIFIED",
      biometric: "BIOMETRIC LINK STABLE",
      protocol: "PERSONAL PROTOCOL",
      pandaMode: "PANDA MODE",
      active: "ACTIVE_",
      scroll: "SCROLL TO EXPLORE",
    },
    about: {
      title: "A DEVELOPER WHO UNDERSTANDS CODE AND BUSINESS",
      caption: "Building systems that are easy to use, production-ready, and maintainable over time.",
      photoAlt: "Formal portrait of Wasin Chanchaisawat",
      identity: "IDENTITY // CONFIRMED",
      base: "BASE",
      quoteStart: "“I turn business needs into",
      quoteEm: "practical web applications.”",
      body: [
        "I develop both Frontend and Backend—from interface design and API integration to database work, production maintenance, and system improvement.",
        "My experience spans internal business systems, workflow platforms, E-commerce, and automation. I focus on usability, performance, and solutions grounded in real user needs.",
      ],
      facts: [
        ["ROLE", "Software Developer / Full-Stack Developer"],
        ["WORK LOCATIONS", "Bangkok · Chonburi · Rayong"],
        ["WORK MODES", "Full-time · Hybrid · Remote · On-site"],
        ["FOCUS", "Business Web Application · Automation"],
      ],
    },
    skills: {
      title: "SKILLS FOR BUILDING AND OPERATING SYSTEMS",
      caption: "A practical toolkit spanning interfaces, servers, databases, deployment, and maintenance.",
      groupTitles: ["Frontend", "Backend", "Database", "Tools & DevOps", "Automation & Delivery"],
    },
    experience: {
      title: "WORK EXPERIENCE",
      caption: "Roles and production responsibilities summarized at a level appropriate for a public portfolio.",
      verified: "LOG VERIFIED",
      items: [
        {
          role: "Programmer",
          period: "OCT 2025 — JUL 2026",
          details:
            "Developed and maintained internal web systems, improved workflow and inventory operations, delivered modules across ASP Classic, Laravel, and ASP.NET Core, and supported SQL Server, deployment, and production troubleshooting.",
        },
        {
          role: "Frontend Developer",
          period: "JUN 2024 — SEP 2024",
          details:
            "Built an HR platform with React and TypeScript, modernized the interface, and delivered search, filtering, data table, and modal workflows in collaboration with the product team.",
        },
        {
          role: "Freelance Frontend Developer",
          period: "APPROX. 2 MONTHS",
          details:
            "Developed a responsive React.js website, integrated REST APIs, and optimized the experience across desktop, tablet, and mobile.",
        },
        {
          role: "Software Developer Intern",
          period: "JUL 2021 — OCT 2021",
          details:
            "Built a React.js drag-and-drop task management experience for creating, prioritizing, and tracking work while collaborating with a software team.",
        },
        {
          role: "University–Industry Project",
          period: "JUL 2020 — FEB 2021",
          details:
            "Developed a multi-step KYC flow with Laravel, Node.js, and Bootstrap, covering both user interfaces and data verification steps.",
        },
      ],
    },
    projects: {
      title: "PROJECTS THAT SHOW WHAT I CAN DO",
      caption: "Selected work across business applications, E-commerce, and automation—without exposing confidential internal details.",
      items: [
        {
          title: "Internal Business Management System",
          type: "BUSINESS WEB APPLICATION",
          text: "An internal operations platform covering data management, status tracking, approvals, and reporting.",
        },
        {
          title: "AR-KANG Collection E-commerce",
          type: "E-COMMERCE WEBSITE",
          text: "A product showcase and sales website with product administration and delivery information workflows.",
        },
        {
          title: "Telegram Automation Bots",
          type: "AUTOMATION SYSTEM",
          text: "Bots for membership, user permissions, data capture, calculations, and automated notifications.",
        },
        {
          title: "Real-time Crypto Ranking",
          type: "DATA-DRIVEN WEB APP",
          text: "A cryptocurrency ranking website with near real-time data updates and API integration.",
        },
        {
          title: "Drag-and-Drop Task Management",
          type: "INTERACTIVE WEB APP",
          text: "A task management system for creating, prioritizing, and moving work between statuses.",
        },
      ],
    },
    profile: {
      title: "STRENGTHS AND GROWTH",
      caption: "An honest view of how I work well today and the capabilities I am actively strengthening.",
      educationLabel: "EDUCATION",
      degree: "Bachelor of Engineering in Software Engineering",
      university: "Burapha University",
      graduated: "Graduated in 2021",
      strengthsLabel: "CORE STRENGTHS",
      strengths: [
        ["Practical Problem Solving", "Investigate root causes step by step and consider production data and system impact."],
        ["Full-Stack Development", "Work across React, backend services, databases, deployment, and server operations."],
        ["Business Process Understanding", "Translate requirements and workflows into systems that make users’ work easier."],
        ["System Ownership", "Stay responsible for bugs, deployments, databases, and post-launch issues."],
        ["Adaptability", "Work across modern stacks and legacy systems while continuously learning."],
        ["UX Attention", "Care about the search, tables, modals, and workflows users interact with every day."],
      ],
      growthLabel: "CURRENTLY IMPROVING",
      growthLead: "Positioning myself as a Full-Stack Developer focused on Business Web Applications and Automation.",
      growth: [
        ["System Design & Architecture", "Deepening large-system design, scalability, and design pattern knowledge."],
        ["Automated Testing & CI/CD", "Adding clearer unit, integration, and deployment pipeline work to my portfolio."],
        ["Professional English", "Building confidence in meetings, technical explanations, and international teamwork."],
        ["Presentation & Communication", "Practicing concise explanations of problems, decisions, and outcomes."],
        ["Delivery Prioritization", "Balancing detail with the work required to deliver value first."],
      ],
    },
    contact: {
      titleTop: "OPEN FOR",
      titleBottom: "THE NEXT OPPORTUNITY",
      body:
        "I’m open to Software Developer and Full-Stack Developer roles focused on web applications, internal systems, and digital products across Full-time, Hybrid, Remote, and On-site arrangements.",
      channel: "EMAIL",
      encrypted: "READY",
      response: "LOCATIONS",
      asap: "BKK · CHONBURI · RAYONG",
      status: "STATUS",
      available: "OPEN TO WORK",
      nameLabel: "YOUR NAME",
      namePlaceholder: "ENTER_IDENTITY",
      emailLabel: "EMAIL CHANNEL",
      emailPlaceholder: "ENTER_EMAIL",
      briefLabel: "PROJECT OR ROLE BRIEF",
      briefPlaceholder: "TRANSMIT_MESSAGE...",
      sending: "TRANSMITTING...",
      send: "SEND TRANSMISSION",
      success: "✓ TRANSMISSION RECEIVED",
      error: "CONNECTION ERROR — PLEASE TRY AGAIN",
    },
    footer: {
      line: "DESIGNED WITH CODE, CURIOSITY & PANDA ENERGY.",
      back: "BACK TO TOP ↑",
    },
  },
};

const navTargets = ["about", "skills", "experience", "profile", "contact"];

const skillGroups = [
  {
    code: "SYS.01",
    icon: <FaCode />,
    items: ["React.js / Next.js", "TypeScript / JavaScript", "Tailwind CSS / Bootstrap", "Responsive Web Design", "Framer Motion / Swiper / AOS"],
  },
  {
    code: "SYS.02",
    icon: <FaServer />,
    items: ["Laravel / PHP", "Node.js / Express.js", "ASP.NET Core MVC", "ASP Classic", "RESTful API"],
  },
  {
    code: "SYS.03",
    icon: <FaDatabase />,
    items: ["MySQL / MariaDB", "Microsoft SQL Server", "PostgreSQL", "SQLite", "Prisma ORM"],
  },
  {
    code: "SYS.04",
    icon: <FaTools />,
    items: ["Git / GitHub", "Docker / Docker Compose", "Nginx / Linux Server", "Postman", "GitHub Pages"],
  },
  {
    code: "SYS.05",
    icon: <FaTerminal />,
    items: ["Python Automation", "CI/CD Fundamentals", "Deployment & Troubleshooting", "API Integration", "Production Maintenance"],
  },
];

const experienceBase = [
  { index: "01", company: "Jintai", stack: ["ASP Classic", "Laravel", "ASP.NET Core", "SQL Server"] },
  { index: "02", company: "Til It’s Done", stack: ["React", "TypeScript", "HR Platform"] },
  { index: "03", company: "Freelance", stack: ["React.js", "REST API", "Responsive"] },
  { index: "04", company: "Bitkub Blockchain Technology", stack: ["React.js", "Drag & Drop", "Team Collaboration"] },
  { index: "05", company: "Bitkub Online", stack: ["Laravel", "Node.js", "Bootstrap", "KYC"] },
];

const projectBase = [
  { number: "P—01", tech: "LARAVEL · ASP.NET CORE · ASP CLASSIC · SQL SERVER", icon: <FaServer /> },
  { number: "P—02", tech: "LARAVEL · BLADE · TAILWIND · MYSQL · NGINX", icon: <FaLayerGroup /> },
  { number: "P—03", tech: "PYTHON · TELEGRAM BOT API · GOOGLE SHEETS API", icon: <FaPython /> },
  { number: "P—04", tech: "ASP.NET · API INTEGRATION", icon: <FaDatabase /> },
  { number: "P—05", tech: "REACT.JS · DRAG & DROP", icon: <FaReact /> },
];

const stackIcons = [
  [<FaReact />, "REACT"],
  [<SiTypescript />, "TYPESCRIPT"],
  [<SiTailwindcss />, "TAILWIND"],
  [<SiLaravel />, "LARAVEL"],
  [<FaPython />, "PYTHON"],
  [<SiDocker />, "DOCKER"],
  [<SiPostman />, "POSTMAN"],
  [<FaGithub />, "GITHUB"],
];

const reveal = {
  initial: { opacity: 0, y: 34 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.16 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

function getInitialLanguage() {
  const saved = window.localStorage.getItem("portfolio-language");
  if (saved === "th" || saved === "en") return saved;
  return window.navigator.language.toLowerCase().startsWith("th") ? "th" : "en";
}

function PandaNode({ compact = false }) {
  return (
    <div className={`panda-node ${compact ? "panda-node--compact" : ""}`} aria-hidden="true">
      <span className="panda-ear panda-ear--left" />
      <span className="panda-ear panda-ear--right" />
      <span className="panda-eye panda-eye--left" />
      <span className="panda-eye panda-eye--right" />
      <span className="panda-nose" />
    </div>
  );
}

function SectionTitle({ code, title, caption }) {
  return (
    <div className="section-title">
      <div>
        <span className="section-code">[ {code} ]</span>
        <h2>{title}</h2>
      </div>
      <p>{caption}</p>
    </div>
  );
}

function LanguageToggle({ language, onChange }) {
  return (
    <div className="language-toggle" role="group" aria-label="Language / ภาษา">
      {["th", "en"].map((option) => (
        <button
          key={option}
          type="button"
          className={language === option ? "is-active" : ""}
          aria-pressed={language === option}
          aria-label={option === "th" ? "เปลี่ยนเป็นภาษาไทย" : "Switch to English"}
          onClick={() => onChange(option)}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function App() {
  const glowRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState(getInitialLanguage);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formState, setFormState] = useState("idle");
  const copy = copyByLanguage[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title =
      language === "th"
        ? "วศิน ชาญชัยสวัสดิ์ | Software Developer"
        : "Wasin Chanchaisawat | Software Developer";
    window.localStorage.setItem("portfolio-language", language);
  }, [language]);

  useEffect(() => {
    const updateGlow = (event) => {
      if (!glowRef.current) return;
      glowRef.current.style.setProperty("--x", `${event.clientX}px`);
      glowRef.current.style.setProperty("--y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", updateGlow, { passive: true });
    return () => window.removeEventListener("pointermove", updateGlow);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormState("sending");
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbynl-XgHxqrKesLHEl_4zXdIIk9ornsvkFWdUsdI6FSNtpixwdmgluWDVD2w_Pxv9O7Zg/exec",
        { method: "POST", body: JSON.stringify(formData) },
      );
      const data = await response.json();
      if (data.result !== "success") throw new Error("Request failed");
      setFormData({ name: "", email: "", message: "" });
      setFormState("success");
    } catch {
      setFormState("error");
    }
  };

  return (
    <div className={`site-shell lang-${language}`} ref={glowRef}>
      <a className="skip-link" href="#main">{copy.skip}</a>
      <div className="ambient-grid" aria-hidden="true" />
      <div className="cursor-glow" aria-hidden="true" />
      <div className="matrix-streams" aria-hidden="true">
        <span>010101101001</span><span>110010100110</span><span>001101010011</span>
        <span>101100101101</span><span>011010010110</span>
      </div>

      <header className="topbar">
        <a className="brand" href="#home" aria-label={copy.homeLabel}>
          <PandaNode compact />
          <span>WASIN<span className="brand-dot">_</span>DEV</span>
        </a>
        <nav className={`desktop-nav ${menuOpen ? "is-open" : ""}`} aria-label={copy.navigationLabel}>
          {navTargets.map((id, index) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              <span>0{index + 1}</span>{copy.nav[index]}
            </a>
          ))}
        </nav>
        <div className="topbar-actions">
          <div className="system-status"><i />{copy.available}</div>
          <LanguageToggle language={language} onChange={setLanguage} />
          <button
            className="menu-trigger"
            type="button"
            aria-label={copy.menuLabel}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span /><span />
          </button>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="home">
          <div className="hero-copy">
            <motion.div className="eyebrow" initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.55 }}>
              <span className="eyebrow-pulse" />{copy.hero.eyebrow}
            </motion.div>
            <motion.h1 key={`headline-${language}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              <span>{copy.hero.lines[0]}</span>
              <span className="outline-text">{copy.hero.lines[1]}</span>
              <span>{copy.hero.lines[2]}<span className="green-dot">.</span></span>
            </motion.h1>
            <motion.p className="hero-intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.22 }}>
              {copy.hero.intro}
            </motion.p>
            <motion.div className="hero-actions" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.34 }}>
              <a className="button button--primary" href="#experience">{copy.hero.explore}<FaArrowRight /></a>
              <a className="button button--ghost" href={publicAsset("CV-Wasin-Chanchaisawat.pdf")} download><FaDownload />{copy.hero.cv}</a>
            </motion.div>
            <motion.div className="hero-readout" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              {[["05", copy.hero.chapters], ["20+", copy.hero.systems], ["24/7", copy.hero.panda]].map(([value, label]) => (
                <div key={value}><b>{value}</b><span>{label.split("\n").map((line) => <span key={line}>{line}</span>)}</span></div>
              ))}
            </motion.div>
          </div>

          <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}>
            <div className="visual-frame">
              <img src={cyberPortrait} alt={copy.hero.imageAlt} />
              <div className="scan-line" />
              <span className="frame-corner frame-corner--tl" /><span className="frame-corner frame-corner--tr" />
              <span className="frame-corner frame-corner--bl" /><span className="frame-corner frame-corner--br" />
              <div className="image-label image-label--top">{copy.hero.subject}</div>
              <div className="image-label image-label--bottom"><i />{copy.hero.biometric}</div>
            </div>
            <div className="orbit orbit--one" /><div className="orbit orbit--two" />
            <div className="panda-mode"><PandaNode /><div><span>{copy.hero.protocol}</span><strong>{copy.hero.pandaMode}</strong><em>{copy.hero.active}</em></div></div>
            <div className="coordinates">13.3114° N<br />101.1122° E</div>
          </motion.div>
          <div className="scroll-cue"><span>{copy.hero.scroll}</span><i /></div>
        </section>

        <div className="tech-rail" aria-label="Technology stack">
          <div className="tech-rail__track">
            {[...stackIcons, ...stackIcons].map(([icon, name], index) => <span key={`${name}-${index}`}>{icon}{name}<b>◆</b></span>)}
          </div>
        </div>

        <section className="about section-wrap" id="about">
          <SectionTitle code="IDENTITY_01" title={copy.about.title} caption={copy.about.caption} />
          <div className="about-grid">
            <motion.div className="identity-card" {...reveal}>
              <div className="identity-photo"><img src={formalPortrait} alt={copy.about.photoAlt} /><span className="identity-scan" /></div>
              <div className="identity-meta">
                <span>{copy.about.identity}</span><strong>WASIN<br />CHANCHAISAWAT</strong>
                <div><small>ID</small><b>WC-DEV</b><small>{copy.about.base}</small><b>{language === "th" ? "บ้านบึง, ชลบุรี" : "BAN BUNG, CHONBURI, TH"}</b></div>
              </div>
            </motion.div>
            <motion.div className="about-copy" {...reveal} transition={{ ...reveal.transition, delay: 0.12 }}>
              <span className="mono-label">PROFESSIONAL_SUMMARY.TXT</span>
              <h3>{copy.about.quoteStart} <em>{copy.about.quoteEm}</em></h3>
              {copy.about.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <div className="profile-facts">
                {copy.about.facts.map(([label, value], index) => <div key={label}><span>0{index + 1} // {label}</span><b>{value}</b></div>)}
              </div>
              <a className="profile-email" href={`mailto:${contactEmail}`}><FaEnvelope />{contactEmail}</a>
            </motion.div>
          </div>
        </section>

        <section className="skills section-wrap" id="skills">
          <SectionTitle code="CAPABILITIES_02" title={copy.skills.title} caption={copy.skills.caption} />
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <motion.article className={`skill-card skill-card--${index + 1}`} key={group.code} {...reveal} transition={{ ...reveal.transition, delay: index * 0.06 }}>
                <div className="skill-card__top"><span>{group.code}</span><i>{group.icon}</i></div>
                <h3>{copy.skills.groupTitles[index]}</h3>
                <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
                <div className="skill-signal"><span /><span /><span /><span /><span /></div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="experience section-wrap" id="experience">
          <SectionTitle code="LOG_03" title={copy.experience.title} caption={copy.experience.caption} />
          <div className="timeline">
            {experienceBase.map((item, index) => {
              const localized = copy.experience.items[index];
              return (
                <motion.article className="timeline-item" key={item.company} {...reveal} transition={{ ...reveal.transition, delay: index * 0.06 }}>
                  <div className="timeline-index">{item.index}</div><div className="timeline-node"><i /></div>
                  <div className="timeline-content">
                    <div className="timeline-heading">
                      <div><span>{localized.period}</span><h3>{localized.role}</h3><h4>@ {item.company}</h4></div>
                      <div className="log-state"><i /> {copy.experience.verified}</div>
                    </div>
                    <p>{localized.details}</p>
                    <div className="tag-list">{item.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="projects section-wrap" id="projects">
          <SectionTitle code="DEPLOYMENTS_04" title={copy.projects.title} caption={copy.projects.caption} />
          <div className="project-grid">
            {projectBase.map((project, index) => {
              const localized = copy.projects.items[index];
              return (
                <motion.article className="project-card" key={project.number} {...reveal} transition={{ ...reveal.transition, delay: index * 0.06 }}>
                  <div className="project-card__head"><span>{project.number}</span><i>{project.icon}</i></div>
                  <small>{localized.type}</small><h3>{localized.title}</h3><p>{localized.text}</p>
                  <div className="project-card__foot"><b>{project.tech}</b><FaArrowRight /></div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="profile section-wrap" id="profile">
          <SectionTitle code="PROFILE_05" title={copy.profile.title} caption={copy.profile.caption} />
          <div className="profile-grid">
            <motion.article className="education-card" {...reveal}>
              <div className="education-icon"><FaGraduationCap /></div>
              <div><span>{copy.profile.educationLabel}</span><h3>{copy.profile.degree}</h3><p>{copy.profile.university} · {copy.profile.graduated}</p></div>
            </motion.article>
            <motion.article className="profile-panel strengths-panel" {...reveal}>
              <div className="profile-panel__heading"><FaBriefcase /><span>{copy.profile.strengthsLabel}</span></div>
              <div className="profile-list">
                {copy.profile.strengths.map(([title, description], index) => <div key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></div>)}
              </div>
            </motion.article>
            <motion.article className="profile-panel growth-panel" {...reveal}>
              <div className="profile-panel__heading"><FaTerminal /><span>{copy.profile.growthLabel}</span></div>
              <p className="growth-lead">{copy.profile.growthLead}</p>
              <div className="profile-list">
                {copy.profile.growth.map(([title, description], index) => <div key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></div>)}
              </div>
            </motion.article>
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="contact-panel">
            <motion.div className="contact-copy" {...reveal}>
              <span className="section-code">[ CONNECTION_06 ]</span>
              <h2>{copy.contact.titleTop}<br /><span>{copy.contact.titleBottom}</span></h2>
              <p>{copy.contact.body}</p>
              <a className="contact-email" href={`mailto:${contactEmail}`}><FaEnvelope />{contactEmail}</a>
              <div className="connection-readout">
                <div><i /><span>{copy.contact.channel}</span><b>{copy.contact.encrypted}</b></div>
                <div><i /><span>{copy.contact.response}</span><b>{copy.contact.asap}</b></div>
                <div><i /><span>{copy.contact.status}</span><b>{copy.contact.available}</b></div>
              </div>
            </motion.div>
            <motion.form className="contact-form" onSubmit={handleSubmit} {...reveal}>
              <label><span>01 // {copy.contact.nameLabel}</span><input name="name" value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} placeholder={copy.contact.namePlaceholder} required /></label>
              <label><span>02 // {copy.contact.emailLabel}</span><input type="email" name="email" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} placeholder={copy.contact.emailPlaceholder} required /></label>
              <label><span>03 // {copy.contact.briefLabel}</span><textarea name="message" rows="5" value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} placeholder={copy.contact.briefPlaceholder} required /></label>
              <button className="button button--primary" type="submit" disabled={formState === "sending"}>{formState === "sending" ? copy.contact.sending : copy.contact.send}<FaPaperPlane /></button>
              <div className={`form-message form-message--${formState}`} aria-live="polite">{formState === "success" && copy.contact.success}{formState === "error" && copy.contact.error}</div>
            </motion.form>
          </div>
        </section>
      </main>

      <footer><div className="brand"><PandaNode compact /><span>WASIN_DEV</span></div><p>{copy.footer.line}</p><a href="#home">{copy.footer.back}</a></footer>
      <nav className="mobile-dock" aria-label={copy.mobileNavigationLabel}>
        {navTargets.map((id, index) => <a key={id} href={`#${id}`}><span>0{index + 1}</span>{copy.nav[index]}</a>)}
      </nav>
    </div>
  );
}

export default App;
