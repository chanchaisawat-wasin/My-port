import { useEffect, useState } from "react";
import { FaArrowRight, FaDatabase, FaEnvelope, FaGithub, FaGlobe, FaServer } from "react-icons/fa";
import { SiDocker, SiLaravel, SiNginx, SiPhp, SiReact, SiTailwindcss } from "react-icons/si";
import profileImage from "./assets/ff33e1e4-feb3-41cf-8441-83cb51906942.png";
import "./App.css";

const copy = {
  en: {
    nav: ["About", "Experience", "Projects", "Contact"],
    available: "Open to Software Developer opportunities",
    intro: "I turn complex business workflows into practical software—from user interfaces and APIs to databases, deployment, and production support.",
    view: "View my work", resume: "Download Thai CV", location: "Bangkok, Thailand",
    aboutTitle: "I build software that works in the real world.",
    about: "My experience spans internal production systems, e-commerce, automation, and web applications. I enjoy understanding the real problem first, then designing a solution that is clear, maintainable, and useful to the people operating it.",
    highlights: [["Full-stack delivery", "Front-end, back-end, database, and deployment"], ["System thinking", "Translate business workflows into reliable software"], ["Production ownership", "Debug, maintain, and improve live systems"]],
    stack: "Core stack", expTitle: "Experience", expLead: "Hands-on experience building and supporting business-critical systems.",
    experiences: [
      ["Oct 2025 — Jul 2026", "Programmer", "Jintai", ["Developed and maintained internal production, warehouse, planning, and order-management systems.", "Improved workflows across ASP Classic, Laravel, SQL Server, and Google Sheets automation.", "Diagnosed production issues involving databases, servers, Nginx, PHP-FPM, Git, and deployments.", "Worked directly with users to turn operational problems into clear system requirements."]],
      ["Jun 2024 — Sep 2024", "Full-stack Developer", "Til It’s Done", ["Modernized an HR system interface from V1 to V2.", "Built multi-level filtering, data tables, and modal-based workflows with React and TypeScript."]],
      ["Jul 2021 — Oct 2021", "Frontend Developer Intern", "Bitkub Blockchain Technology", ["Built a responsive drag-and-drop task management application with React.", "Collaborated in an iterative product-development workflow."]],
      ["Jul 2020 — Feb 2021", "Software Developer · University–Industry Project", "Bitkub Online", ["Developed a multi-step KYC flow with Laravel, Node.js, and Bootstrap.", "Implemented user verification and feature-unlock workflows as part of a university project."]],
    ],
    projectTitle: "Selected projects", projectLead: "A selection of systems I have designed, built, or maintained.",
    projects: [
      ["E-COMMERCE", "AR-KANG COLLECTION", "Customer storefront and order-management system for a jewelry business, including product discovery, admin workflows, SEO, and deployment.", ["Laravel", "Tailwind CSS", "MySQL", "Nginx"]],
      ["INTERNAL SYSTEMS", "Production & Warehouse Systems", "Operational software covering stock receive/issue, planning, BOM, job tracking, approvals, and exception handling for factory workflows.", ["ASP Classic", "SQL Server", "Laravel", "JavaScript"]],
      ["AUTOMATION", "Telegram Bots & Workflow Automation", "Bots for permissions, data entry, member workflows, notifications, scheduled resets, and operational calculations.", ["Python", "Telegram API", "Google Sheets"]],
      ["OPERATIONS", "Deployment & Production Support", "Server configuration, Docker services, Nginx, PHP-FPM, Git workflows, incident diagnosis, and deployment planning.", ["Docker", "Nginx", "Git", "Linux"]],
    ],
    contactEyebrow: "LET’S WORK TOGETHER", contactTitle: "Have a role or project in mind?",
    contact: "I’m interested in Software Developer and Full-stack Developer roles where I can solve real problems and keep growing with a strong team.",
    email: "Send an email", github: "View GitHub", footer: "Designed and built by Wasin Chanchaisawat.",
  },
  th: {
    nav: ["เกี่ยวกับผม", "ประสบการณ์", "ผลงาน", "ติดต่อ"],
    available: "กำลังมองหาโอกาสงาน Software Developer",
    intro: "ผมเปลี่ยนขั้นตอนการทำงานที่ซับซ้อนให้เป็นซอฟต์แวร์ที่ใช้งานได้จริง ตั้งแต่หน้าจอ API ฐานข้อมูล ไปจนถึงการ Deploy และดูแลระบบ Production",
    view: "ดูผลงานของผม", resume: "ดาวน์โหลด CV ภาษาไทย", location: "กรุงเทพฯ ประเทศไทย",
    aboutTitle: "ผมสร้างซอฟต์แวร์ที่ตอบโจทย์การใช้งานจริง",
    about: "ประสบการณ์ของผมครอบคลุมระบบภายในโรงงาน E-commerce ระบบอัตโนมัติ และ Web Application ผมชอบเริ่มจากการทำความเข้าใจปัญหาจริง ก่อนออกแบบวิธีแก้ที่ชัดเจน ดูแลต่อได้ง่าย และมีประโยชน์ต่อผู้ใช้งาน",
    highlights: [["พัฒนาได้ครบวงจร", "Front-end, Back-end, Database และ Deployment"], ["เข้าใจภาพรวมระบบ", "เปลี่ยน Flow ธุรกิจให้เป็นซอฟต์แวร์ที่เชื่อถือได้"], ["ดูแลระบบจริง", "วิเคราะห์ แก้ไข และพัฒนาระบบ Production"]],
    stack: "เทคโนโลยีหลัก", expTitle: "ประสบการณ์ทำงาน", expLead: "ประสบการณ์ตรงในการพัฒนาและดูแลระบบสำคัญของธุรกิจ",
    experiences: [
      ["ต.ค. 2568 — ก.ค. 2569", "Programmer", "Jintai", ["พัฒนาและดูแลระบบภายในด้านการผลิต คลังสินค้า การวางแผน และการจัดการคำสั่งซื้อ", "ปรับปรุง Flow การทำงานด้วย ASP Classic, Laravel, SQL Server และ Google Sheets Automation", "วิเคราะห์ปัญหา Production ที่เกี่ยวข้องกับฐานข้อมูล Server, Nginx, PHP-FPM, Git และการ Deploy", "ทำงานร่วมกับผู้ใช้โดยตรง เพื่อเปลี่ยนปัญหาหน้างานให้เป็น Requirement ที่ชัดเจน"]],
      ["มิ.ย. 2567 — ก.ย. 2567", "Full-stack Developer", "Til It’s Done", ["ปรับปรุงหน้าจอระบบ HR จาก Version 1 เป็น Version 2", "พัฒนาระบบ Filter หลายระดับ Data Table และการทำงานผ่าน Modal ด้วย React และ TypeScript"]],
      ["ก.ค. 2564 — ต.ค. 2564", "Frontend Developer Intern", "Bitkub Blockchain Technology", ["พัฒนาแอปจัดการงานแบบลากและวางด้วย React พร้อมรองรับ Responsive", "ทำงานร่วมกับทีมตามกระบวนการพัฒนาผลิตภัณฑ์แบบเป็นรอบ"]],
      ["ก.ค. 2563 — ก.พ. 2564", "Software Developer · โครงการมหาวิทยาลัยร่วมกับบริษัท", "Bitkub Online", ["พัฒนา KYC แบบหลายขั้นตอนด้วย Laravel, Node.js และ Bootstrap", "สร้างขั้นตอนยืนยันตัวตนและปลดล็อกฟีเจอร์ในโครงการร่วมระหว่างมหาวิทยาลัยกับบริษัท"]],
    ],
    projectTitle: "ผลงานที่คัดเลือก", projectLead: "ตัวอย่างระบบที่ผมมีส่วนออกแบบ พัฒนา หรือดูแล",
    projects: [
      ["E-COMMERCE", "AR-KANG COLLECTION", "เว็บไซต์ลูกค้าและระบบจัดการคำสั่งซื้อสำหรับธุรกิจเครื่องประดับ ครอบคลุมการค้นหาสินค้า ระบบ Admin, SEO และ Deployment", ["Laravel", "Tailwind CSS", "MySQL", "Nginx"]],
      ["INTERNAL SYSTEMS", "ระบบการผลิตและคลังสินค้า", "ระบบงานรับ–จ่ายสต็อก การวางแผน BOM การติดตาม Job การอนุมัติ และการจัดการเหตุผิดปกติในกระบวนการโรงงาน", ["ASP Classic", "SQL Server", "Laravel", "JavaScript"]],
      ["AUTOMATION", "Telegram Bots และ Workflow Automation", "บอทสำหรับจัดการสิทธิ์ บันทึกข้อมูล สมาชิก การแจ้งเตือน รีเซ็ตรายวัน และคำนวณข้อมูลสำหรับงานจริง", ["Python", "Telegram API", "Google Sheets"]],
      ["OPERATIONS", "Deployment และ Production Support", "ตั้งค่า Server และบริการด้วย Docker, Nginx, PHP-FPM รวมถึงจัดการ Git วิเคราะห์ Incident และวางแผน Deployment", ["Docker", "Nginx", "Git", "Linux"]],
    ],
    contactEyebrow: "ร่วมงานกัน", contactTitle: "มีตำแหน่งงานหรือโปรเจกต์ที่เหมาะกับผมไหม?",
    contact: "ผมสนใจตำแหน่ง Software Developer และ Full-stack Developer ที่ได้แก้ปัญหาจริง พร้อมพัฒนาตัวเองไปกับทีมที่แข็งแรง",
    email: "ส่งอีเมล", github: "ดู GitHub", footer: "ออกแบบและพัฒนาโดย Wasin Chanchaisawat",
  },
};

const stack = [[<SiReact />, "React / Next.js"], [<SiLaravel />, "Laravel"], [<SiPhp />, "PHP / ASP Classic"], [<FaServer />, "Node.js"], [<FaDatabase />, "SQL Server / MySQL"], [<SiTailwindcss />, "Tailwind CSS"], [<SiDocker />, "Docker"], [<SiNginx />, "Nginx"]];
const ids = ["about", "experience", "projects", "contact"];

function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem("portfolio-language") || "en");
  const t = copy[language];
  useEffect(() => { localStorage.setItem("portfolio-language", language); document.documentElement.lang = language; }, [language]);
  return <div className="site-shell">
    <header className="nav-wrap">
      <a className="brand" href="#top">WC<span>.</span></a>
      <nav>{t.nav.map((item, i) => <a key={item} href={`#${ids[i]}`}>{item}</a>)}</nav>
      <div className="language-switch"><button className={language === "th" ? "active" : ""} onClick={() => setLanguage("th")}>TH</button><span>/</span><button className={language === "en" ? "active" : ""} onClick={() => setLanguage("en")}>EN</button></div>
    </header>
    <main id="top">
      <section className="hero section">
        <div className="hero-copy"><div className="availability"><span />{t.available}</div><p className="eyebrow">SOFTWARE DEVELOPER · FULL-STACK</p><h1>Wasin<br /><em>Chanchaisawat</em></h1><p className="hero-intro">{t.intro}</p>
          <div className="hero-actions"><a className="button primary" href="#projects">{t.view}<FaArrowRight /></a><a className="button secondary" href={`${import.meta.env.BASE_URL}CV-Wasin-Chanchaisawat-Thai.pdf`} download>{t.resume}</a></div><p className="location"><FaGlobe /> {t.location}</p></div>
        <div className="portrait-wrap"><div className="portrait-frame"><img src={profileImage} alt="Wasin Chanchaisawat" /></div><div className="code-card"><span>01</span><code>solve(problem)</code><span>→</span><strong>real impact</strong></div></div>
      </section>
      <section id="about" className="section about-grid"><div><p className="section-number">01 / {t.nav[0].toUpperCase()}</p><h2>{t.aboutTitle}</h2></div><div className="about-content"><p className="large-copy">{t.about}</p><div className="highlight-grid">{t.highlights.map(([title, body], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div></section>
      <section className="stack section"><p className="section-number">{t.stack.toUpperCase()}</p><div className="stack-grid">{stack.map(([icon, label]) => <div key={label}>{icon}<span>{label}</span></div>)}</div></section>
      <section id="experience" className="section"><div className="section-heading"><div><p className="section-number">02 / {t.nav[1].toUpperCase()}</p><h2>{t.expTitle}</h2></div><p>{t.expLead}</p></div><div className="timeline">{t.experiences.map(([period, role, company, points]) => <article className="timeline-item" key={company + period}><p className="period">{period}</p><div><h3>{role}</h3><p className="company">{company}</p></div><ul>{points.map(point => <li key={point}>{point}</li>)}</ul></article>)}</div></section>
      <section id="projects" className="section"><div className="section-heading"><div><p className="section-number">03 / {t.nav[2].toUpperCase()}</p><h2>{t.projectTitle}</h2></div><p>{t.projectLead}</p></div><div className="projects-grid">{t.projects.map(([type, title, body, tags], i) => <article className="project-card" key={title}><div className="project-top"><span>{type}</span><b>0{i + 1}</b></div><h3>{title}</h3><p>{body}</p><div className="tags">{tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div></section>
      <section id="contact" className="contact section"><p className="eyebrow">{t.contactEyebrow}</p><h2>{t.contactTitle}</h2><p>{t.contact}</p><div className="contact-actions"><a className="button light" href="mailto:chanchaisawat.wasin@hotmail.com"><FaEnvelope />{t.email}</a><a className="button outline-light" href="https://github.com/chanchaisawat-wasin" target="_blank" rel="noreferrer"><FaGithub />{t.github}</a></div></section>
    </main>
    <footer><p>© {new Date().getFullYear()} Wasin Chanchaisawat</p><p>{t.footer}</p></footer>
  </div>;
}
export default App;
