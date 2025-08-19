import React, { useState } from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

function Hero() {
  const [showReactTypedOne, setShowReactTypedOne] = useState(false);
  const [showReactTypedTwo, setShowReactTypedTwo] = useState(false);

  // Motion variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-xl mx-auto bg-black/80 border-2 border-green-400 rounded-2xl shadow-[0_0_20px_#39FF14] overflow-hidden p-6 flex flex-col">
      {/* Content */}
      <div className="flex md:flex-row flex-col items-center gap-6">
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src="/src/assets/ff33e1e4-feb3-41cf-8441-83cb51906942.png"
            alt="Profile"
            className="w-32 h-32 md:w-36 md:h-36 rounded-full border-4 border-green-400 shadow-[0_0_20px_#39FF14] object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex-1 space-y-4">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="text-3xl md:text-4xl font-extrabold text-green-400"
          >
            <motion.div variants={item}>Wasin</motion.div>
            <motion.div
              variants={item}
              onAnimationComplete={() => setShowReactTypedOne(true)}
            >
              Chanchaisawat
            </motion.div>
          </motion.div>

          <div className="text-xl md:text-2xl font-semibold text-green-300">
            {showReactTypedOne && (
              <ReactTyped
                strings={["Full-Stack Developer"]}
                typeSpeed={40}
                onComplete={(self) => {
                  self.cursor.remove();
                  setShowReactTypedTwo(true);
                }}
              />
            )}
          </div>

          <div className="text-md md:text-lg text-gray-400">
            {showReactTypedTwo && (
              <ReactTyped
                strings={[
                  "Turning big ideas into clear, step-by-step plans — from first spark to final result.",
                ]}
                typeSpeed={30}
                backSpeed={20}
                loop={false}
                onComplete={(self) =>
                  setTimeout(() => self.cursor.remove(), 3000)
                }
              />
            )}
          </div>
        </div>
      </div>

      {/* Buttons fixed bottom */}
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        {[
          { name: "Resume 1", file: "/Resume - Mr.Wasin Chanchaisawat.pdf" },
          { name: "Resume 2", file: "/วศิน ชาญชัยสวัสดิ์.pdf" },
          { name: "CV", file: "/CV-Wasin Chanchaisawat (Eng ver.).pdf" },
        ].map((btn, index) => (
          <motion.a
            key={btn.name}
            href={btn.file}
            download
            className="px-5 py-2 bg-green-600 bg-opacity-80 text-black rounded-xl shadow-[0_0_10px_#39FF14] hover:scale-105 hover:shadow-[0_0_20px_#39FF14] transition-all duration-300 font-medium text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 2 + index * 0.3,
              type: "spring",
              stiffness: 100,
            }}
          >
            Download {btn.name}
          </motion.a>
        ))}
      </div>
    </div>
  );
}

export default Hero;
