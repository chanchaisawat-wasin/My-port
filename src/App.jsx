import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCode,
  FaDatabase,
  FaDownload,
  FaGithub,
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

const copyByLanguage = {
  th: {
    languageName: "ภาษาไทย",
    skip: "ข้ามไปยังเนื้อหาหลัก",
    homeLabel: "หน้าแรกของพอร์ตวศิน",
    navigationLabel: "เมนูหลัก",
    mobileNavigationLabel: "เมนูสำหรับมือถือ",
    menuLabel: "เปิดหรือปิดเมนู",
    nav: ["เกี่ยวกับ", "ทักษะ", "ผลงาน", "ติดต่อ"],
    available: "พร้อมร่วมงาน",
    hero: {
      eyebrow: "นักพัฒนา FULL-STACK // กรุงเทพฯ",
      lines: ["สร้างสรรค์", "ดิจิทัล", "ให้เป็นจริง"],
      intro:
        "ผม วศิน ชาญชัยสวัสดิ์ — นักพัฒนา Full-Stack ที่เปลี่ยนไอเดียให้กลายเป็นระบบที่ชัดเจน ใช้งานได้จริง และพร้อมเติบโต",
      explore: "ดูประสบการณ์",
      resume: "ดาวน์โหลดเรซูเม่",
      years: "ปีแห่ง\nการพัฒนา",
      systems: "ระบบ\nเทคโนโลยี",
      panda: "โหมด\nแพนด้า",
      imageAlt: "วศินในชุดไซเบอร์โทนเขียวแห่งอนาคต",
      subject: "บุคคล_001 // ยืนยันแล้ว",
      biometric: "การเชื่อมต่อไบโอเมตริกเสถียร",
      protocol: "โปรโตคอลส่วนตัว",
      pandaMode: "โหมดแพนด้า",
      active: "ทำงาน_",
      scroll: "เลื่อนเพื่อถอดรหัส",
    },
    about: {
      title: "ใครอยู่เบื้องหลังโค้ด?",
      caption: "นักพัฒนาที่ชอบระบบสะอาด โทนสีเย็น และพลังแพนด้าเล็กน้อย",
      photoAlt: "ภาพทางการของวศิน ชาญชัยสวัสดิ์",
      identity: "ตัวตน // ยืนยันแล้ว",
      base: "ที่ตั้ง",
      quoteStart: "“ผมเปลี่ยนปัญหาซับซ้อนให้เป็น",
      quoteEm: "ผลิตภัณฑ์ที่ชัดเจนและใช้งานได้จริง”",
      body:
        "ถนัดการพัฒนาเว็บและระบบอัตโนมัติตั้งแต่หน้าจอที่ผู้ใช้สัมผัส ไปจนถึง API, ฐานข้อมูล และ Workflow หลังบ้าน ผมชอบไล่ปัญหาให้ถึงต้นเหตุ แล้วออกแบบทางแก้ที่ทีมดูแลต่อได้จริง",
      traits: [
        ["นักแก้ปัญหา", "แก้บั๊กอย่างมีเป้าหมาย"],
        ["คิดเป็นระบบ", "มองเห็น Flow ทั้งหมด"],
        ["เรียนรู้เร็ว", "ปรับตัวกับเทคโนโลยีใหม่"],
        ["คนรักแพนด้า", "โทนเย็น หัวใจอบอุ่น"],
      ],
    },
    skills: {
      title: "คลังเทคโนโลยี",
      caption: "เครื่องมือและเทคโนโลยีที่ผมใช้พาไอเดียไปสู่ระบบ Production",
      groupTitles: ["หน้าบ้าน", "หลังบ้าน", "ฐานข้อมูล", "ระบบอัตโนมัติ", "เครื่องมือพัฒนา"],
    },
    experience: {
      title: "บันทึกประสบการณ์",
      caption: "เส้นทางการสร้างผลิตภัณฑ์ ระบบ และการแก้ปัญหาในโลกการทำงานจริง",
      verified: "ข้อมูลยืนยันแล้ว",
      items: [
        {
          role: "นักพัฒนา Full-Stack",
          period: "ตำแหน่งปัจจุบัน",
          details:
            "ปรับโฉมระบบ HR จาก Version 1 สู่ Version 2 และพัฒนาระบบกรองข้อมูลหลายระดับ, Data Table และ Modal ด้วย React + TypeScript",
        },
        {
          role: "นักพัฒนา",
          period: "1 ปี",
          details:
            "พัฒนาระบบยืนยันตัวตนด้วย Laravel ออกแบบระบบปลดล็อกฟีเจอร์ และปรับโครงสร้างโค้ดให้มีประสิทธิภาพและปลอดภัยยิ่งขึ้น",
        },
        {
          role: "นักพัฒนาฝึกงาน",
          period: "4 เดือน",
          details:
            "พัฒนาแอปจัดการงานแบบลากและวางด้วย React.js พร้อมออกแบบให้รองรับทุกขนาดหน้าจอ",
        },
      ],
    },
    projects: {
      title: "โปรเจกต์ที่เลือกมา",
      caption: "ผลงานที่เชื่อมต่อ Interface, Data และ Automation เข้าด้วยกัน",
      items: [
        {
          title: "ระบบ Front-End แบบ Responsive",
          type: "ฟรีแลนซ์ / 2 เดือน",
          text: "เว็บไซต์ส่วนหน้าที่รองรับทุกอุปกรณ์ พร้อมเชื่อมต่อ API จากระบบภายนอก",
        },
        {
          title: "จัดอันดับคริปโตแบบเรียลไทม์",
          type: "เว็บแอป / 2 สัปดาห์",
          text: "แพลตฟอร์มหลายหน้าสำหรับข้อมูลคริปโตแบบเรียลไทม์ ข่าวสาร และสื่อมัลติมีเดีย",
        },
        {
          title: "ระบบ Sales Page หน้าเดียว",
          type: "พัฒนาเร่งด่วน / 3 ชั่วโมง",
          text: "Sales Page แบบ Responsive เชื่อมต่อ Google Sheets เพื่อจัดการข้อมูลอย่างรวดเร็ว",
        },
        {
          title: "ระบบอัตโนมัติผ่าน Telegram",
          type: "ระบบอัตโนมัติ / 4 บอท",
          text: "บอทควบคุมสิทธิ์การใช้งานและระบบตอบกลับอัตโนมัติสำหรับ Workflow จริง",
        },
      ],
    },
    contact: {
      titleTop: "มาสร้าง",
      titleBottom: "สิ่งที่ใช้ได้จริง",
      body: "มีโปรเจกต์ ไอเดีย หรือระบบที่อยากทำให้ใช้งานได้จริง? ส่งรายละเอียดมา แล้วมาเริ่มวางแผนกัน",
      channel: "ช่องทาง",
      encrypted: "เข้ารหัส",
      response: "ตอบกลับ",
      asap: "เร็วที่สุด",
      status: "สถานะ",
      available: "พร้อมร่วมงาน",
      nameLabel: "ชื่อของคุณ",
      namePlaceholder: "ระบุชื่อ",
      emailLabel: "อีเมล",
      emailPlaceholder: "ระบุอีเมล",
      briefLabel: "รายละเอียดโปรเจกต์",
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
    languageName: "English",
    skip: "Skip to main content",
    homeLabel: "Wasin portfolio home",
    navigationLabel: "Main navigation",
    mobileNavigationLabel: "Mobile navigation",
    menuLabel: "Toggle navigation",
    nav: ["ABOUT", "SKILLS", "WORK", "CONTACT"],
    available: "AVAILABLE",
    hero: {
      eyebrow: "FULL-STACK DEVELOPER // BANGKOK",
      lines: ["BUILDING", "DIGITAL", "REALITIES"],
      intro:
        "I’m Wasin Chanchaisawat — a Full-Stack Developer turning ambitious ideas into clear, practical systems built to grow.",
      explore: "EXPLORE MY WORK",
      resume: "DOWNLOAD RESUME",
      years: "YEARS\nBUILDING",
      systems: "TECH\nSYSTEMS",
      panda: "PANDA\nMODE",
      imageAlt: "Wasin in a futuristic green cyber outfit",
      subject: "SUBJECT_001 // VERIFIED",
      biometric: "BIOMETRIC LINK STABLE",
      protocol: "PERSONAL PROTOCOL",
      pandaMode: "PANDA MODE",
      active: "ACTIVE_",
      scroll: "SCROLL TO DECRYPT",
    },
    about: {
      title: "WHO’S BEHIND THE CODE?",
      caption: "A developer who likes clean systems, cool palettes, and a little panda energy.",
      photoAlt: "Formal portrait of Wasin Chanchaisawat",
      identity: "IDENTITY // CONFIRMED",
      base: "BASE",
      quoteStart: "“I turn complex problems into",
      quoteEm: "clear, practical products.”",
      body:
        "I build web products and automation from the interfaces people touch to the APIs, databases, and workflows behind them. I like tracing problems to their root cause and designing solutions that teams can confidently maintain.",
      traits: [
        ["PROBLEM SOLVER", "Debug with intent"],
        ["SYSTEM THINKER", "See the full flow"],
        ["FAST LEARNER", "Adapt to new tech"],
        ["PANDA ENTHUSIAST", "Cold tone, warm heart"],
      ],
    },
    skills: {
      title: "TECH ARSENAL",
      caption: "Tools and technologies I use to move from idea to production.",
      groupTitles: ["Front-End", "Back-End", "Data Layer", "Automation", "Dev Tools"],
    },
    experience: {
      title: "EXPERIENCE LOG",
      caption: "A timeline of products, systems, and real-world problem solving.",
      verified: "LOG VERIFIED",
      items: [
        {
          role: "Full-Stack Developer",
          period: "CURRENT NODE",
          details:
            "Redesigned an HR platform from Version 1 to Version 2 and built multi-level filtering, data tables, and modal workflows with React and TypeScript.",
        },
        {
          role: "Developer",
          period: "01 YEAR",
          details:
            "Built identity verification with Laravel, designed feature-unlock flows, and improved the codebase for stronger performance and security.",
        },
        {
          role: "Developer Intern",
          period: "04 MONTHS",
          details:
            "Developed a drag-and-drop task management application with React.js and made the experience responsive across screen sizes.",
        },
      ],
    },
    projects: {
      title: "SELECTED PROJECTS",
      caption: "Focused builds that connect interfaces, data, and automation.",
      items: [
        {
          title: "Responsive Front-End",
          type: "FREELANCE / 2 MONTHS",
          text: "A responsive front-end experience connected to APIs from an external platform.",
        },
        {
          title: "Real-time Crypto Ranking",
          type: "WEB APP / 2 WEEKS",
          text: "A multi-page platform for live crypto rankings, news, and multimedia content.",
        },
        {
          title: "One-Page Sales System",
          type: "RAPID BUILD / 3 HOURS",
          text: "A responsive sales page connected to Google Sheets for streamlined data management.",
        },
        {
          title: "Telegram Automation",
          type: "AUTOMATION / 4 BOTS",
          text: "Access-control and automated response bots built for real operational workflows.",
        },
      ],
    },
    contact: {
      titleTop: "LET’S BUILD",
      titleBottom: "SOMETHING REAL.",
      body: "Have a project, idea, or system you want to make real? Send the details and let’s start mapping it out.",
      channel: "CHANNEL",
      encrypted: "ENCRYPTED",
      response: "RESPONSE",
      asap: "ASAP",
      status: "STATUS",
      available: "AVAILABLE",
      nameLabel: "YOUR NAME",
      namePlaceholder: "ENTER_IDENTITY",
      emailLabel: "EMAIL CHANNEL",
      emailPlaceholder: "ENTER_EMAIL",
      briefLabel: "PROJECT BRIEF",
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

const navTargets = ["about", "skills", "experience", "contact"];

const skillGroups = [
  {
    code: "SYS.01",
    icon: <FaCode />,
    items: ["React / Next.js", "TypeScript", "Tailwind CSS", "Responsive UI"],
  },
  {
    code: "SYS.02",
    icon: <FaServer />,
    items: ["Node / Express", "Laravel / PHP", "Spring Boot", "REST APIs"],
  },
  {
    code: "SYS.03",
    icon: <FaDatabase />,
    items: ["SQL / Prisma", "Oracle Database", "Google Sheets", "Data Tables"],
  },
  {
    code: "SYS.04",
    icon: <FaTerminal />,
    items: ["Python Scripts", "Telegram Bots", "Workflow Automation", "API Integration"],
  },
  {
    code: "SYS.05",
    icon: <FaTools />,
    items: ["Git / GitHub", "Docker", "Postman", "VS Code / IntelliJ"],
  },
];

const experienceBase = [
  {
    index: "01",
    company: "Til It’s Done",
    stack: ["React", "TypeScript", "UI Systems"],
  },
  {
    index: "02",
    company: "Bitkub Online Co., Ltd.",
    stack: ["Laravel", "Bootstrap", "Security"],
  },
  {
    index: "03",
    company: "Bitkub Blockchain Technology",
    stack: ["React", "Drag & Drop", "Responsive"],
  },
];

const projectBase = [
  { number: "P—01", tech: "REACT.JS + REST API", icon: <FaReact /> },
  { number: "P—02", tech: "ASP.NET + DATA API", icon: <FaDatabase /> },
  { number: "P—03", tech: "REACT + GOOGLE SHEETS", icon: <FaLayerGroup /> },
  { number: "P—04", tech: "PYTHON + TELEGRAM API", icon: <FaPython /> },
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
        ? "วศิน ชาญชัยสวัสดิ์ | นักพัฒนา Full-Stack"
        : "Wasin Chanchaisawat | Full-Stack Developer";
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
        <span>010101101001</span>
        <span>110010100110</span>
        <span>001101010011</span>
        <span>101100101101</span>
        <span>011010010110</span>
      </div>

      <header className="topbar">
        <a className="brand" href="#home" aria-label={copy.homeLabel}>
          <PandaNode compact />
          <span>WASIN<span className="brand-dot">_</span>DEV</span>
        </a>

        <nav className={`desktop-nav ${menuOpen ? "is-open" : ""}`} aria-label={copy.navigationLabel}>
          {navTargets.map((id, index) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              <span>0{index + 1}</span>
              {copy.nav[index]}
            </a>
          ))}
        </nav>

        <div className="topbar-actions">
          <div className="system-status">
            <i />
            {copy.available}
          </div>
          <LanguageToggle language={language} onChange={setLanguage} />
          <button
            className="menu-trigger"
            type="button"
            aria-label={copy.menuLabel}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="home">
          <div className="hero-copy">
            <motion.div
              className="eyebrow"
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
            >
              <span className="eyebrow-pulse" />
              {copy.hero.eyebrow}
            </motion.div>

            <motion.h1
              key={`headline-${language}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <span>{copy.hero.lines[0]}</span>
              <span className="outline-text">{copy.hero.lines[1]}</span>
              <span>{copy.hero.lines[2]}<span className="green-dot">.</span></span>
            </motion.h1>

            <motion.p
              className="hero-intro"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.22 }}
            >
              {copy.hero.intro}
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.34 }}
            >
              <a className="button button--primary" href="#experience">
                {copy.hero.explore}
                <FaArrowRight />
              </a>
              <a
                className="button button--ghost"
                href={publicAsset("Resume - Mr.Wasin Chanchaisawat.pdf")}
                download
              >
                <FaDownload />
                {copy.hero.resume}
              </a>
            </motion.div>

            <motion.div
              className="hero-readout"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {[["03+", copy.hero.years], ["10+", copy.hero.systems], ["24/7", copy.hero.panda]].map(([value, label]) => (
                <div key={value}><b>{value}</b><span>{label.split("\n").map((line) => <span key={line}>{line}</span>)}</span></div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="visual-frame">
              <img src={cyberPortrait} alt={copy.hero.imageAlt} />
              <div className="scan-line" />
              <span className="frame-corner frame-corner--tl" />
              <span className="frame-corner frame-corner--tr" />
              <span className="frame-corner frame-corner--bl" />
              <span className="frame-corner frame-corner--br" />
              <div className="image-label image-label--top">{copy.hero.subject}</div>
              <div className="image-label image-label--bottom">
                <i />
                {copy.hero.biometric}
              </div>
            </div>
            <div className="orbit orbit--one" />
            <div className="orbit orbit--two" />
            <div className="panda-mode">
              <PandaNode />
              <div>
                <span>{copy.hero.protocol}</span>
                <strong>{copy.hero.pandaMode}</strong>
                <em>{copy.hero.active}</em>
              </div>
            </div>
            <div className="coordinates">13.7563° N<br />100.5018° E</div>
          </motion.div>

          <div className="scroll-cue">
            <span>{copy.hero.scroll}</span>
            <i />
          </div>
        </section>

        <div className="tech-rail" aria-label="Technology stack">
          <div className="tech-rail__track">
            {[...stackIcons, ...stackIcons].map(([icon, name], index) => (
              <span key={`${name}-${index}`}>{icon}{name}<b>◆</b></span>
            ))}
          </div>
        </div>

        <section className="about section-wrap" id="about">
          <SectionTitle code="IDENTITY_01" title={copy.about.title} caption={copy.about.caption} />

          <div className="about-grid">
            <motion.div className="identity-card" {...reveal}>
              <div className="identity-photo">
                <img src={formalPortrait} alt={copy.about.photoAlt} />
                <span className="identity-scan" />
              </div>
              <div className="identity-meta">
                <span>{copy.about.identity}</span>
                <strong>WASIN<br />CHANCHAISAWAT</strong>
                <div>
                  <small>ID</small><b>WC-199X-DEV</b>
                  <small>{copy.about.base}</small><b>BANGKOK, TH</b>
                </div>
              </div>
            </motion.div>

            <motion.div className="about-copy" {...reveal} transition={{ ...reveal.transition, delay: 0.12 }}>
              <span className="mono-label">ABOUT_ME.TXT</span>
              <h3>{copy.about.quoteStart} <em>{copy.about.quoteEm}</em></h3>
              <p>{copy.about.body}</p>
              <div className="trait-grid">
                {copy.about.traits.map(([title, subtitle], index) => (
                  <div className={index === 3 ? "trait-panda" : ""} key={title}>
                    {index === 3 ? <PandaNode compact /> : <span>0{index + 1}</span>}
                    <b>{title}</b>
                    <small>{subtitle}</small>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="skills section-wrap" id="skills">
          <SectionTitle code="CAPABILITIES_02" title={copy.skills.title} caption={copy.skills.caption} />
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <motion.article
                className={`skill-card skill-card--${index + 1}`}
                key={group.code}
                {...reveal}
                transition={{ ...reveal.transition, delay: index * 0.06 }}
              >
                <div className="skill-card__top">
                  <span>{group.code}</span>
                  <i>{group.icon}</i>
                </div>
                <h3>{copy.skills.groupTitles[index]}</h3>
                <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
                <div className="skill-signal">
                  <span /><span /><span /><span /><span />
                </div>
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
                <motion.article
                  className="timeline-item"
                  key={item.company}
                  {...reveal}
                  transition={{ ...reveal.transition, delay: index * 0.08 }}
                >
                  <div className="timeline-index">{item.index}</div>
                  <div className="timeline-node"><i /></div>
                  <div className="timeline-content">
                    <div className="timeline-heading">
                      <div>
                        <span>{localized.period}</span>
                        <h3>{localized.role}</h3>
                        <h4>@ {item.company}</h4>
                      </div>
                      <div className="log-state"><i /> {copy.experience.verified}</div>
                    </div>
                    <p>{localized.details}</p>
                    <div className="tag-list">
                      {item.stack.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
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
                <motion.article
                  className="project-card"
                  key={project.number}
                  {...reveal}
                  transition={{ ...reveal.transition, delay: index * 0.07 }}
                >
                  <div className="project-card__head">
                    <span>{project.number}</span>
                    <i>{project.icon}</i>
                  </div>
                  <small>{localized.type}</small>
                  <h3>{localized.title}</h3>
                  <p>{localized.text}</p>
                  <div className="project-card__foot">
                    <b>{project.tech}</b>
                    <FaArrowRight />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="contact-panel">
            <motion.div className="contact-copy" {...reveal}>
              <span className="section-code">[ CONNECTION_05 ]</span>
              <h2>{copy.contact.titleTop}<br /><span>{copy.contact.titleBottom}</span></h2>
              <p>{copy.contact.body}</p>
              <div className="connection-readout">
                <div><i /><span>{copy.contact.channel}</span><b>{copy.contact.encrypted}</b></div>
                <div><i /><span>{copy.contact.response}</span><b>{copy.contact.asap}</b></div>
                <div><i /><span>{copy.contact.status}</span><b>{copy.contact.available}</b></div>
              </div>
            </motion.div>

            <motion.form className="contact-form" onSubmit={handleSubmit} {...reveal}>
              <label>
                <span>01 // {copy.contact.nameLabel}</span>
                <input
                  name="name"
                  value={formData.name}
                  onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                  placeholder={copy.contact.namePlaceholder}
                  required
                />
              </label>
              <label>
                <span>02 // {copy.contact.emailLabel}</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                  placeholder={copy.contact.emailPlaceholder}
                  required
                />
              </label>
              <label>
                <span>03 // {copy.contact.briefLabel}</span>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                  placeholder={copy.contact.briefPlaceholder}
                  required
                />
              </label>
              <button className="button button--primary" type="submit" disabled={formState === "sending"}>
                {formState === "sending" ? copy.contact.sending : copy.contact.send}
                <FaPaperPlane />
              </button>
              <div className={`form-message form-message--${formState}`} aria-live="polite">
                {formState === "success" && copy.contact.success}
                {formState === "error" && copy.contact.error}
              </div>
            </motion.form>
          </div>
        </section>
      </main>

      <footer>
        <div className="brand">
          <PandaNode compact />
          <span>WASIN_DEV</span>
        </div>
        <p>{copy.footer.line}</p>
        <a href="#home">{copy.footer.back}</a>
      </footer>

      <nav className="mobile-dock" aria-label={copy.mobileNavigationLabel}>
        {navTargets.map((id, index) => (
          <a key={id} href={`#${id}`}><span>0{index + 1}</span>{copy.nav[index]}</a>
        ))}
      </nav>
    </div>
  );
}

export default App;
