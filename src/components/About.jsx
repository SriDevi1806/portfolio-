import React from 'react'
import ThreeDModels from '../components/ThreeDModel.jsx';
import { motion } from "framer-motion"; 
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const About = () => {
  return (
   <section
      id="about"
      className="relative flex flex-col md:flex-row items-center justify-between min-h-[90vh] px-5 py-24 text-center md:text-left"
      style={{ background: "radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)" }}
    >
      {/* Left Side: Text */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 md:px-8 py-4">
  <motion.h2
    className="text-4xl md:text-5xl font-bold text-white mb-6"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
  >
    About Me
  </motion.h2>

  <motion.p
    className="text-lg md:text-xl text-white max-w-xl"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3, duration: 1 }}
  >
    I'm a passionate and driven web developer & I've completed my B.Tech in Computer Science at <span className="font-semibold">Avanthi Institute of Engineering and Technology</span>. 
  </motion.p>

  <motion.p
    className="text-lg md:text-xl text-white mt-4 max-w-xl"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5, duration: 1 }}
  >
    With a strong foundation in crafting engaging digital solutions, I specialize in front-end and back-end development, leveraging modern technologies to build user-centric applications.
  </motion.p>

  <motion.p
    className="text-lg md:text-xl text-white mt-4 max-w-xl"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.7, duration: 1 }}
  >
    My academic journey has fueled my interest in machine learning and artificial intelligence, where I am actively exploring innovative ways to integrate AI into web development to create intelligent, scalable, and impactful solutions.
  </motion.p>

  <motion.p
    className="text-lg md:text-xl text-white mt-4 max-w-xl"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.9, duration: 1 }}
  >
    Let’s connect and create something remarkable together <span>😊</span>
  </motion.p>
</div>


      {/* Right Side: 3D Models */}
      <div className="flex-1 mt-10 md:mt-0 h-[500px] w-full">
        <ThreeDModels />
      </div>
    </section>
  )
}

export default About
