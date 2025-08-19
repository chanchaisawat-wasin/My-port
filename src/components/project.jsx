import { FaReact, FaLaravel, FaPython, FaDatabase } from "react-icons/fa";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

function Project() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Til It's Done",
      duration: "",
      details: [
        "เปลี่ยน UI ของระบบ HR จาก Version 1 ให้เป็น Version 2 เพื่อแสดงข้อมูลที่เหมาะสมมากขึ้น",
        "พัฒนาฟีเจอร์เพิ่มเติมในอีกระบบ โดยใช้ React Typescript ในการสร้างระบบ filter ข้อมูลหลายระดับ, แสดงข้อมูลแบบ Data table, และเพิ่มข้อมูลผ่าน modal",
      ],
      icon: <FaReact className="text-blue-400" />,
    },
    {
      title: "Developer",
      company: "บริษัท บิทคับ ออนไลน์ จำกัด",
      duration: "1 ปี",
      details: [
        "พัฒนาระบบยืนยันตัวตนผู้ใช้ด้วย Laravel",
        "ออกแบบและพัฒนาระบบปลดล็อกฟีเจอร์ด้วย Bootstrap",
        "ปรับปรุงโค้ดและโครงสร้างระบบให้มีประสิทธิภาพและปลอดภัยยิ่งขึ้น",
      ],
      icon: <FaLaravel className="text-red-500" />,
    },
    {
      title: "Developer (Intern)",
      company: "บริษัท บิทคับ บล็อกเชน เทคโนโลยี จำกัด",
      duration: "4 เดือน",
      details: [
        "พัฒนาแอปพลิเคชันจัดการงานแบบลากและวางด้วย React.js",
        "เขียนโค้ดให้รองรับการทำงานแบบ Responsive",
      ],
      icon: <FaReact className="text-blue-400" />,
    },
  ];

  const projects = [
    {
      title: "Front-End Developer (Freelance)",
      duration: "2 เดือน",
      details: [
        "พัฒนาเว็บไซต์ส่วนหน้าที่รองรับการใช้งานทุกอุปกรณ์ด้วย React.js",
        "เชื่อมต่อและใช้งาน API จากระบบภายนอก",
      ],
      icon: <FaReact className="text-blue-400" />,
    },
    {
      title: "Real-time Crypto Ranking Website",
      duration: "2 สัปดาห์",
      details: [
        "สร้างเว็บไซต์หลายหน้าที่แสดงข้อมูลคริปโตแบบเรียลไทม์, ข่าวสาร และสื่อมัลติมีเดีย",
        "ใช้ ASP.NET ในการพัฒนา",
      ],
      icon: <FaDatabase className="text-yellow-400" />,
    },
    {
      title: "One-Page Sales Page",
      duration: "3 ชั่วโมง",
      details: [
        "พัฒนาเว็บไซต์หน้าเดียวแบบ Responsive",
        "เชื่อมต่อกับ Google Sheets เพื่อจัดการข้อมูล",
      ],
      icon: <FaReact className="text-blue-400" />,
    },
    {
      title: "Telegram Bots (4 โปรเจกต์)",
      duration: "",
      details: [
        "สร้างบอทสำหรับควบคุมสิทธิ์การใช้งานและระบบตอบกลับอัตโนมัติด้วย Python และ Telegram API",
      ],
      icon: <FaPython className="text-green-400" />,
    },
  ];

  return (
    <div className="bg-black text-white py-16 px-6 md:px-16">
      <h2 className="text-3xl font-bold mb-10 text-center text-green-400">
        Experience & Projects
      </h2>

      {/* Experiences */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {experiences.map((exp, idx) => (
          <Tilt key={idx}>
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-[0_0_20px_#39FF14] transition-shadow duration-300 border border-green-400/30"
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4 text-green-400">{exp.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-green-400">
                    {exp.title}
                  </h3>
                  <p className="text-gray-400">
                    {exp.company} {exp.duration && `| ${exp.duration}`}
                  </p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-200">
                {exp.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </motion.div>
          </Tilt>
        ))}
      </div>

      {/* Projects */}
      <h3 className="text-2xl font-semibold mb-6 text-green-400">Projects</h3>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj, idx) => (
          <Tilt key={idx}>
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-[0_0_20px_#39FF14] transition-shadow duration-300 border border-green-400/30"
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4 text-green-400">{proj.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold text-green-400">
                    {proj.title}
                  </h4>
                  {proj.duration && (
                    <p className="text-gray-400">{proj.duration}</p>
                  )}
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-200">
                {proj.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </div>
  );
}

export default Project;
