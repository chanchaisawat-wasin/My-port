import React, { useState } from "react";
import { ReactTyped } from "react-typed";
import Gallery from "./gallery";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function AboutMe() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const images = [
    "/src/assets/480865063_1802361093891350_790656756667980251_n.jpg",
    "/src/assets/473179462_1769065723887554_8793699156138830219_n.jpg",
    "/src/assets/84357135_626707338123404_9013917309441409024_n.jpg",
  ];
  // ฟังก์ชันเปิดและปิด Modal
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // กำหนดดีเลย์ระหว่าง child item
      },
    },
  };

  // Variants สำหรับ child item (เช่น <li>)
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="p-10">
      <div className="flex max-w-[300px] mx-auto flex-col">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.8 }} // เมื่อเลื่อนผ่านไป 80% จะหายไป
          transition={{ duration: 0.8 }}
        >
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={false}
            allowTouchMove={false}
            className="mySwiper"
          >
            {images.map((src, index) => (
              <SwiperSlide key={index}>
                <div onClick={openModal} className="cursor-pointer">
                  <img
                    src={src}
                    className="rounded-xl w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    alt={`Carousel image ${index + 1}`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
        <div className="mt-4 text-white space-y-4">
          {/* ส่วน Hello! - Fade In + Move Down */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-2xl font-bold">👋 Hello!</div>
            <div>I'm Mr.Wasin Chanchaisawat</div>
          </motion.div>

          {/* ส่วน What I Do - Fade In + Move Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-8"
          >
            <div className="font-bold">💻 What I Do</div>
            {/* Bullet Points - Staggered Animation */}
            <motion.ul
              role="list"
              className="list-disc pl-5 mt-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
            >
              <motion.li className="list-item-hover" variants={itemVariants}>
                Full-Stack Developer
              </motion.li>
              <motion.li className="list-item-hover" variants={itemVariants}>
                Build websites and automation systems
              </motion.li>
              <motion.li className="list-item-hover" variants={itemVariants}>
                Develop Telegram Bots for workflow automation
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* ส่วน Interests - Fade In + Move Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }} // เพิ่ม delay เล็กน้อย
            className="mt-8"
          >
            <div className="font-bold">🎯 Interests</div>
            {/* Bullet Points - Staggered Animation */}
            <motion.ul
              role="list"
              className="list-disc pl-5 mt-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
            >
              <motion.li className="list-item-hover" variants={itemVariants}>
                Exploring new technologies
              </motion.li>
              <motion.li className="list-item-hover" variants={itemVariants}>
                Creative problem solving
              </motion.li>
              <motion.li className="list-item-hover" variants={itemVariants}>
                Building practical, real-world projects
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>
      </div>
      <Gallery isOpen={modalIsOpen} onClose={closeModal} />
    </div>
  );
}

export default AboutMe;
