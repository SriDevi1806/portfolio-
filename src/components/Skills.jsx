import React from "react";
import { motion } from "framer-motion";

const skills = [
  { 
    category: "Web Development", 
    skills: ["HTML", "CSS", "JavaScript", "React"],
    description: "Crafting digital experiences that blend design precision with seamless functionality. Turning code into creativity."
  },
  { 
    category: "Databases", 
    skills: ["SQL", "MongoDB"],
    description: "Designing intelligent data ecosystems — structured or unstructured — to ensure speed, integrity, and scalability."
  },
  { 
    category: "Full Stack Development", 
    skills: ["MongoDB", "Express.js", "React", "Node.js"],
    description: "Building complete ecosystems — from pixel to pipeline — that connect users, data, and innovation effortlessly."
  },
  { 
    category: "Programming Languages", 
    skills: ["Python", "JavaScript"],
    description: "Writing clean, purposeful code that bridges ideas and impact. Every line shaped by curiosity and clarity."
  },
  
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black via-[#020617] to-black text-white py-20 px-6"
    >
      {/* Title */}
      <motion.h2
        className="text-5xl font-extrabold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Skills
      </motion.h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full">
        {skills.map((section, index) => (
          <motion.div
            key={index}
            className="p-8 rounded-2xl bg-gradient-to-br from-black/60 via-[#0a0f1c]/80 to-black/60 backdrop-blur-md border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(0,149,255,0.3)]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-400 tracking-wide">
              {section.category}
            </h3>

            <ul className="flex flex-wrap gap-3 mb-5">
              {section.skills.map((skill, i) => (
                <motion.li
                  key={i}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-blue-500/10 text-blue-200 border border-blue-400/20 hover:bg-blue-500/20 hover:border-blue-300/40 hover:scale-105 transition-transform"
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>

            <p className="text-gray-300 text-sm leading-relaxed italic">
              {section.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
