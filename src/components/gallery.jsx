// Gallery.jsx
import React, { useState } from "react";
import Modal from "react-modal";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

Modal.setAppElement("#root");

const images = [
  "/My-port/480865063_1802361093891350_790656756667980251_n.jpg",
  "/My-port/473179462_1769065723887554_8793699156138830219_n.jpg",
  "/My-port/84357135_626707338123404_9013917309441409024_n.jpg",
];

// คอมโพเนนต์ Gallery จะรับ props เพื่อจัดการ Modal
function Gallery({ isOpen, onClose }) {
  const [largeImageSrc, setLargeImageSrc] = useState(null);

  const openLargeImage = (src) => {
    setLargeImageSrc(src);
  };

  const closeLargeImage = () => {
    setLargeImageSrc(null);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Gallery Modal"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.95)",
          zIndex: 9999,
          // เพิ่ม display: 'flex' และ justify-content เพื่อจัดตำแหน่งเนื้อหา
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        content: {
          border: "none",
          background: "transparent",
          overflow: "auto",
          // ปรับค่าเหล่านี้ให้เนื้อหาอยู่กึ่งกลาง
          top: "auto",
          left: "auto",
          right: "auto",
          bottom: "auto",
          margin: 0,
          padding: "2rem",
          position: "relative", // เปลี่ยนเป็น relative เพื่อให้ Modal ไม่ติดขอบ
          zIndex: 9999,
          maxWidth: "100%",
          maxHeight: "100%",
        },
      }}
    >
      {/* ปุ่มปิด Modal ทั้งหมด */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 text-white text-4xl font-bold z-50"
      >
        &times;
      </button>

      {largeImageSrc ? (
        // ส่วนแสดงรูปภาพขนาดใหญ่
        <div
          onClick={closeLargeImage}
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-90 z-40"
        >
          {/* ปุ่มย้อนกลับไปหน้า Gallery */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeLargeImage();
            }}
            className="absolute top-4 left-4 text-white text-4xl font-bold p-2 z-50"
          >
            <FaArrowLeft />
          </button>

          <img
            src={largeImageSrc}
            alt="Enlarged"
            onClick={(e) => e.stopPropagation()}
            className="max-w-[90%] max-h-[90%] object-contain"
          />
        </div>
      ) : (
        // ส่วนแสดง Gallery รูปภาพเล็กๆ
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {images.map((src, index) => (
            <div
              key={index}
              onClick={() => openLargeImage(src)}
              className="cursor-pointer overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <img
                src={src}
                alt={`Gallery thumbnail ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </Modal>
  );
}

export default Gallery;
