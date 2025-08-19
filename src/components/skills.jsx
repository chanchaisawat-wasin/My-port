import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Skills() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const hardSkills = [
    {
      title: "Front-End",
      items: [
        "React.js / Next.js",
        "Tailwind CSS",
        "JavaScript / TypeScript",
        "HTML5 / CSS3",
        "Responsive Design",
      ],
    },
    {
      title: "Back-End",
      items: ["Node.js / Express.js", "Laravel (PHP)", "Spring Boot (Java)"],
    },
    {
      title: "Database / Data",
      items: ["SQL / Prisma", "Oracle Database", "Google Sheets Integration"],
    },
    {
      title: "Automation / Scripting",
      items: ["Python (Telegram Bot, Automation Script)"],
    },
    {
      title: "Tools / Version Control",
      items: [
        "Git / GitHub / GitLab",
        "Postman",
        "VS Code / IntelliJ IDEA",
        "Docker",
      ],
    },
  ];

  const softSkills = [
    {
      title: "Problem Solving / Debugging",
      items: ["แก้ bug / วิเคราะห์ปัญหา", "UI validation / API debug"],
    },
    {
      title: "Communication / Collaboration",
      items: ["อธิบาย flow โปรเจกต์", "ประสานงานกับ designer และ backend"],
    },
    {
      title: "Time Management / Self-Discipline",
      items: ["ทำ daily task list และทำตาม timeline"],
    },
    {
      title: "UI/UX Awareness / Design Thinking",
      items: [
        "ปรับ layout Hero Section ให้อ่านง่าย",
        "ออกแบบปุ่ม CTA ให้โดดเด่น",
      ],
    },
  ];

  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <Tilt className="w-full max-w-4xl mx-auto p-1">
        <div className="bg-gradient-to-br from-green-400 to-blue-900 p-0.5 rounded-lg shadow-lg w-full">
          <div className="bg-black flex md:flex-row flex-col rounded-lg p-6">
            {/* Hard Skills Section */}
            <section className="mb-6 border-b md:border-b-0 md:border-r pb-4 md:pb-0 pr-0 md:pr-4 border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-white">Hard Skills</h2>
              {hardSkills.map((skill, idx) => (
                <div key={idx} className="mb-3">
                  <h3 className="text-xl font-semibold text-green-300">{skill.title}</h3>
                  <ul className="list-disc pl-5 text-gray-300">
                    {skill.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Soft Skills Section */}
            <section className="md:pl-4">
              <h2 className="text-2xl font-bold mb-4 text-white">Soft Skills</h2>
              {softSkills.map((skill, idx) => (
                <div key={idx} className="mb-3">
                  <h3 className="text-xl font-semibold text-green-300">{skill.title}</h3>
                  <ul className="list-disc pl-5 text-gray-300">
                    {skill.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
}

export default Skills;
