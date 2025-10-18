import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase } from "react-icons/fa";

const professionalExperiences = [
  {
    company: "JatayuvAi · Freelance",
    location: "Hyderabad, Telangana, India · Remote",
    position: "Frontend Developer",
    duration: "May 2025 - Aug 2025 · 4 mos",
    responsibilities: [
      "Crafted intelligent, intuitive user interfaces blending mythic inspiration with modern precision.",
      "Built responsive, AI-aligned designs for travel platforms and web apps with seamless user journeys.",
      "Focused on delivering handcrafted experiences where code meets creativity.",
    ],
  },
  {
    company: "CODEVERTEX · Internship",
    location: "Pune, Maharashtra, India · Remote",
    position: "Web Development Intern",
    duration: "Jul 2024 - Oct 2024 · 4 mos",
    responsibilities: [
      "Developed frontend features and optimized web applications.",
      "Collaborated with team members to implement responsive UI components.",
    ],
  },
  {
    company: "AIMER Society · Internship",
    location: "Vijayawada, Andhra Pradesh, India · Remote",
    position: "Machine Learning Engineer",
    duration: "May 2024 - Sep 2024 · 5 mos",
    responsibilities: [
      "Developed ML models for AI-based medical and engineering projects.",
      "Analyzed data sets to improve model performance and accuracy.",
    ],
  },
  {
    company: "Indian Servers · Internship",
    location: "Vijayawada, Andhra Pradesh, India · Hybrid",
    position: "Machine Learning Engineer",
    duration: "Jun 2023 - Aug 2023 · 3 mos",
    responsibilities: [
      "Implemented ML solutions for software applications.",
      "Collaborated on model training and data preprocessing tasks.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-black text-white py-20 px-6 flex flex-col items-center"
    >
      <motion.h2
        className="text-5xl font-extrabold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-400 to-white"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Internship & Experience
      </motion.h2>

      <div className="max-w-5xl w-full">
        <VerticalTimeline lineColor="#00ADB5">
          {professionalExperiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background: "rgba(0, 173, 181, 0.1)",
                backdropFilter: "blur(10px)",
                color: "#EEEEEE",
                border: "1px solid rgba(0, 173, 181, 0.3)",
              }}
              contentArrowStyle={{ borderRight: "7px solid #00ADB5" }}
              date={exp.duration}
              iconStyle={{ background: "#00ADB5", color: "#fff" }}
              icon={<FaBriefcase />}
            >
              <h3 className="text-2xl font-semibold text-white">{exp.company}</h3>
              <h4 className="text-blue-400 text-md">{exp.location}</h4>
              <h4 className="italic text-md text-gray-300 mb-3">{exp.position}</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                {exp.responsibilities.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
