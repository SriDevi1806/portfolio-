import React from "react";
import { FaGithub, FaLinkedin,  FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-gradient-to-b from-black to-blue-900 text-white py-16 flex flex-col items-center" id="contact">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Contact Me
      </h2>
      

      <div className="flex gap-8 mb-8">
        <a
          href="https://github.com/SriDevi1806"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-white transition-colors text-3xl"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/sri-devi-marlothu/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-white transition-colors text-3xl"
        >
          <FaLinkedin />
        </a>

        

        <a
          href="mailto:uniquesridevi0629@gmail.com"
          className="text-white hover:text-white transition-colors text-3xl"
        >
          <FaEnvelope />
        </a>
      </div>

      <p className="text-white text-sm">
        © 2025 SriDevi Marlothu. All rights reserved.
      </p>
    </section>
  );
};

export default Contact;
