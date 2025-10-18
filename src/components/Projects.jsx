import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Notes App",
    description:
      "A sleek, minimalist Notes App built with React and localStorage, featuring dynamic note creation, editing, and deletion with a dark blue neon theme.",
    link: "https://notes00.netlify.app/",
    github: "https://github.com/SriDevi1806/Notes-",
  },
  {
    title: "E-Commerce Website",
    description:
      "A full-stack MERN-based E-Commerce platform with product listing, cart management, and secure checkout — optimized for modern UI with a black and electric-blue aesthetic.",
    link: "https://grabzio.netlify.app/",
    github: "https://github.com/SriDevi1806/Grabzio",
  },
  {
    title: "Quiz App",
    description:
      "An interactive Quiz App powered by React that tracks score, shuffles questions, and provides instant feedback — designed with a glowing blue cyber interface.",
    link: "https://quizapplication11.netlify.app/",
    github: "https://github.com/SriDevi1806/React-QUIZ-",
  },
  {
    title: "To-Do App",
    description:
      "A productivity-driven To-Do App built with React and Tailwind, offering emoji tagging, dark/light mode, and motivational quotes — styled in deep black and neon-blue gradients.",
    link: "https://reactreduxtodolistapp.netlify.app/",
    github: "https://github.com/SriDevi1806/React-Todo",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-black via-[#001933] to-[#003366] text-blue-200 py-16 px-6"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-white drop-shadow-lg">
        🚀 My Projects
      </h2>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#001122]/80 border border-blue-800 rounded-2xl p-6 shadow-lg hover:shadow-blue-600/70 transition-transform transform hover:-translate-y-2 hover:scale-105 duration-300"
          >
            <h3 className="text-2xl font-semibold mb-3 text-white">
              {project.title}
            </h3>
            <p className="text-blue-300 mb-5 text-sm leading-relaxed">
              {project.description}
            </p>

            <div className="flex justify-between items-center">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-blue-400 transition"
              >
                <FaExternalLinkAlt className="text-blue-500" /> Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-blue-400 transition"
              >
                <FaGithub className="text-blue-500" /> GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

      
    </section>
  );
};

export default Projects;
