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

const navItems = [
  ["01", "ABOUT", "about"],
  ["02", "SKILLS", "skills"],
  ["03", "WORK", "experience"],
  ["04", "CONTACT", "contact"],
];

const skillGroups = [
  {
    code: "SYS.01",
    title: "Front-End",
    icon: <FaCode />,
    items: ["React / Next.js", "TypeScript", "Tailwind CSS", "Responsive UI"],
  },
  {
    code: "SYS.02",
    title: "Back-End",
    icon: <FaServer />,
    items: ["Node / Express", "Laravel / PHP", "Spring Boot", "REST APIs"],
  },
  {
    code: "SYS.03",
    title: "Data Layer",
    icon: <FaDatabase />,
    items: ["SQL / Prisma", "Oracle Database", "Google Sheets", "Data Tables"],
  },
  {
    code: "SYS.04",
    title: "Automation",
    icon: <FaTerminal />,
    items: ["Python Scripts", "Telegram Bots", "Workflow Automation", "API Integration"],
  },
  {
    code: "SYS.05",
    title: "Dev Tools",
    icon: <FaTools />,
    items: ["Git / GitHub", "Docker", "Postman", "VS Code / IntelliJ"],
  },
];

const experiences = [
  {
    index: "01",
    role: "Full-Stack Developer",
    company: "Til It’s Done",
    period: "CURRENT NODE",
    details:
      "ปรับโฉมระบบ HR จาก Version 1 สู่ Version 2 และพัฒนาระบบกรองข้อมูลหลายระดับ, Data Table และ Modal ด้วย React + TypeScript",
    stack: ["React", "TypeScript", "UI Systems"],
  },
  {
    index: "02",
    role: "Developer",
    company: "Bitkub Online Co., Ltd.",
    period: "01 YEAR",
    details:
      "พัฒนาระบบยืนยันตัวตนด้วย Laravel ออกแบบระบบปลดล็อกฟีเจอร์ และปรับโครงสร้างโค้ดให้มีประสิทธิภาพและปลอดภัยยิ่งขึ้น",
    stack: ["Laravel", "Bootstrap", "Security"],
  },
  {
    index: "03",
    role: "Developer Intern",
    company: "Bitkub Blockchain Technology",
    period: "04 MONTHS",
    details:
      "พัฒนาแอปจัดการงานแบบลากและวางด้วย React.js พร้อมออกแบบให้รองรับทุกขนาดหน้าจอ",
    stack: ["React", "Drag & Drop", "Responsive"],
  },
];

const projects = [
  {
    number: "P—01",
    title: "Responsive Front-End",
    type: "FREELANCE / 2 MONTHS",
    text: "เว็บไซต์ส่วนหน้าที่รองรับทุกอุปกรณ์ พร้อมเชื่อมต่อ API จากระบบภายนอก",
    tech: "REACT.JS + REST API",
    icon: <FaReact />,
  },
  {
    number: "P—02",
    title: "Real-time Crypto Ranking",
    type: "WEB APP / 2 WEEKS",
    text: "แพลตฟอร์มหลายหน้าสำหรับข้อมูลคริปโตแบบเรียลไทม์ ข่าวสาร และสื่อมัลติมีเดีย",
    tech: "ASP.NET + DATA API",
    icon: <FaDatabase />,
  },
  {
    number: "P—03",
    title: "One-Page Sales System",
    type: "RAPID BUILD / 3 HOURS",
    text: "Sales Page แบบ Responsive เชื่อมต่อ Google Sheets เพื่อจัดการข้อมูลอย่างรวดเร็ว",
    tech: "REACT + GOOGLE SHEETS",
    icon: <FaLayerGroup />,
  },
  {
    number: "P—04",
    title: "Telegram Automation",
    type: "AUTOMATION / 4 BOTS",
    text: "บอทควบคุมสิทธิ์การใช้งานและระบบตอบกลับอัตโนมัติสำหรับ Workflow จริง",
    tech: "PYTHON + TELEGRAM API",
    icon: <FaPython />,
  },
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

function App() {
  const glowRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formState, setFormState] = useState("idle");

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
    <div className="site-shell" ref={glowRef}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

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
        <a className="brand" href="#home" aria-label="Wasin portfolio home">
          <PandaNode compact />
          <span>WASIN<span className="brand-dot">_</span>DEV</span>
        </a>

        <nav className={`desktop-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          {navItems.map(([number, label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              <span>{number}</span>
              {label}
            </a>
          ))}
        </nav>

        <div className="system-status">
          <i />
          AVAILABLE
        </div>

        <button
          className="menu-trigger"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
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
              FULL-STACK DEVELOPER // BANGKOK
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08 }}
            >
              <span>BUILDING</span>
              <span className="outline-text">DIGITAL</span>
              <span>REALITIES<span className="green-dot">.</span></span>
            </motion.h1>

            <motion.p
              className="hero-intro"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.32 }}
            >
              ผม วศิน ชาญชัยสวัสดิ์ — นักพัฒนา Full-Stack ที่เปลี่ยนไอเดีย
              ให้กลายเป็นระบบที่ชัดเจน ใช้งานได้จริง และพร้อมเติบโต
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.46 }}
            >
              <a className="button button--primary" href="#experience">
                EXPLORE MY WORK
                <FaArrowRight />
              </a>
              <a
                className="button button--ghost"
                href={publicAsset("Resume - Mr.Wasin Chanchaisawat.pdf")}
                download
              >
                <FaDownload />
                DOWNLOAD RESUME
              </a>
            </motion.div>

            <motion.div
              className="hero-readout"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.72 }}
            >
              <div><b>03+</b><span>YEARS<br />BUILDING</span></div>
              <div><b>10+</b><span>TECH<br />SYSTEMS</span></div>
              <div><b>24/7</b><span>PANDA<br />MODE</span></div>
            </motion.div>
          </div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="visual-frame">
              <img src={cyberPortrait} alt="Wasin in a futuristic green cyber outfit" />
              <div className="scan-line" />
              <span className="frame-corner frame-corner--tl" />
              <span className="frame-corner frame-corner--tr" />
              <span className="frame-corner frame-corner--bl" />
              <span className="frame-corner frame-corner--br" />
              <div className="image-label image-label--top">SUBJECT_001 // VERIFIED</div>
              <div className="image-label image-label--bottom">
                <i />
                BIOMETRIC LINK STABLE
              </div>
            </div>
            <div className="orbit orbit--one" />
            <div className="orbit orbit--two" />
            <div className="panda-mode">
              <PandaNode />
              <div>
                <span>PERSONAL PROTOCOL</span>
                <strong>PANDA MODE</strong>
                <em>ACTIVE_</em>
              </div>
            </div>
            <div className="coordinates">13.7563° N<br />100.5018° E</div>
          </motion.div>

          <div className="scroll-cue">
            <span>SCROLL TO DECRYPT</span>
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
          <SectionTitle
            code="IDENTITY_01"
            title="WHO’S BEHIND THE CODE?"
            caption="A developer who likes clean systems, cool palettes, and a little panda energy."
          />

          <div className="about-grid">
            <motion.div className="identity-card" {...reveal}>
              <div className="identity-photo">
                <img src={formalPortrait} alt="Formal portrait of Wasin Chanchaisawat" />
                <span className="identity-scan" />
              </div>
              <div className="identity-meta">
                <span>IDENTITY // CONFIRMED</span>
                <strong>WASIN<br />CHANCHAISAWAT</strong>
                <div>
                  <small>ID</small><b>WC-199X-DEV</b>
                  <small>BASE</small><b>BANGKOK, TH</b>
                </div>
              </div>
            </motion.div>

            <motion.div className="about-copy" {...reveal} transition={{ ...reveal.transition, delay: 0.12 }}>
              <span className="mono-label">ABOUT_ME.TXT</span>
              <h3>“I turn complex problems into <em>clear, practical products.</em>”</h3>
              <p>
                ถนัดการพัฒนาเว็บและระบบอัตโนมัติตั้งแต่หน้าจอที่ผู้ใช้สัมผัส
                ไปจนถึง API, ฐานข้อมูล และ Workflow หลังบ้าน
                ผมชอบไล่ปัญหาให้ถึงต้นเหตุ แล้วออกแบบทางแก้ที่ทีมดูแลต่อได้จริง
              </p>
              <div className="trait-grid">
                <div><span>01</span><b>PROBLEM SOLVER</b><small>Debug with intent</small></div>
                <div><span>02</span><b>SYSTEM THINKER</b><small>See the full flow</small></div>
                <div><span>03</span><b>FAST LEARNER</b><small>Adapt to new tech</small></div>
                <div className="trait-panda"><PandaNode compact /><b>PANDA ENTHUSIAST</b><small>Cold tone, warm heart</small></div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="skills section-wrap" id="skills">
          <SectionTitle
            code="CAPABILITIES_02"
            title="TECH ARSENAL"
            caption="Tools and technologies I use to move from idea to production."
          />
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
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                <div className="skill-signal">
                  <span /><span /><span /><span /><span />
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="experience section-wrap" id="experience">
          <SectionTitle
            code="LOG_03"
            title="EXPERIENCE LOG"
            caption="A timeline of products, systems, and real-world problem solving."
          />
          <div className="timeline">
            {experiences.map((item, index) => (
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
                      <span>{item.period}</span>
                      <h3>{item.role}</h3>
                      <h4>@ {item.company}</h4>
                    </div>
                    <div className="log-state"><i /> LOG VERIFIED</div>
                  </div>
                  <p>{item.details}</p>
                  <div className="tag-list">
                    {item.stack.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="projects section-wrap" id="projects">
          <SectionTitle
            code="DEPLOYMENTS_04"
            title="SELECTED PROJECTS"
            caption="Focused builds that connect interfaces, data, and automation."
          />
          <div className="project-grid">
            {projects.map((project, index) => (
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
                <small>{project.type}</small>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <div className="project-card__foot">
                  <b>{project.tech}</b>
                  <FaArrowRight />
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="contact-panel">
            <motion.div className="contact-copy" {...reveal}>
              <span className="section-code">[ CONNECTION_05 ]</span>
              <h2>LET’S BUILD<br /><span>SOMETHING REAL.</span></h2>
              <p>
                มีโปรเจกต์ ไอเดีย หรือระบบที่อยากทำให้ใช้งานได้จริง?
                ส่งรายละเอียดมา แล้วมาเริ่มวางแผนกัน
              </p>
              <div className="connection-readout">
                <div><i /><span>CHANNEL</span><b>ENCRYPTED</b></div>
                <div><i /><span>RESPONSE</span><b>ASAP</b></div>
                <div><i /><span>STATUS</span><b>AVAILABLE</b></div>
              </div>
            </motion.div>

            <motion.form className="contact-form" onSubmit={handleSubmit} {...reveal}>
              <label>
                <span>01 // YOUR NAME</span>
                <input
                  name="name"
                  value={formData.name}
                  onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                  placeholder="ENTER_IDENTITY"
                  required
                />
              </label>
              <label>
                <span>02 // EMAIL CHANNEL</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                  placeholder="ENTER_EMAIL"
                  required
                />
              </label>
              <label>
                <span>03 // PROJECT BRIEF</span>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                  placeholder="TRANSMIT_MESSAGE..."
                  required
                />
              </label>
              <button className="button button--primary" type="submit" disabled={formState === "sending"}>
                {formState === "sending" ? "TRANSMITTING..." : "SEND TRANSMISSION"}
                <FaPaperPlane />
              </button>
              <div className={`form-message form-message--${formState}`} aria-live="polite">
                {formState === "success" && "✓ TRANSMISSION RECEIVED"}
                {formState === "error" && "CONNECTION ERROR — PLEASE TRY AGAIN"}
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
        <p>DESIGNED WITH CODE, CURIOSITY & PANDA ENERGY.</p>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>

      <nav className="mobile-dock" aria-label="Mobile navigation">
        {navItems.map(([number, label, id]) => (
          <a key={id} href={`#${id}`}><span>{number}</span>{label}</a>
        ))}
      </nav>
    </div>
  );
}

export default App;
