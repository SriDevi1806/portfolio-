import React, { useState } from "react";

// Local certificate images
import Python from "../assets/Certificates/Python.png";

import AIMERS from "../assets/Certificates/AIMERS.png";

const certificates = [
  { src: Python },
  { src: AIMERS },
];

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % certificates.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);

  return (
    <section className="bg-black text-white py-16 min-h-screen flex items-center justify-center px-5">
      <div className="relative w-full max-w-6xl h-[80vh] rounded-2xl overflow-hidden border border-blue-700">
        {/* Title */}
        <h2 className="absolute top-6 left-1/2 transform -translate-x-1/2 text-3xl md:text-4xl font-bold text-white z-20">
          🏆 Certificates
        </h2>

        {/* Slider */}
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-full flex items-center justify-center bg-black"
            >
              <img
                src={cert.src}
                alt={`Certificate ${index}`}
                className="w-[90%] h-[80%] object-contain rounded-xl shadow-[0_0_20px_#0077ff50] border border-blue-700"
              />
            </div>
          ))}
        </div>

        {/* Navigation */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-blue-900/40 hover:bg-blue-800/70 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-20"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-blue-900/40 hover:bg-blue-800/70 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-20"
        >
          &#10095;
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {certificates.map((_, idx) => (
            <div
              key={idx}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "bg-blue-400 shadow-[0_0_10px_#0077ff]" : "bg-blue-700"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
