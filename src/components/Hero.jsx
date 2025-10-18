import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/Devi.jpg";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [wish, setWish] = useState("");
  const [emoji, setEmoji] = useState("😊");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);

    const hrs = new Date().getHours();
    let greeting = "Night", icon = "🌙";
    if (hrs >= 1 && hrs <= 11) { greeting = "Morning"; icon = "🌅"; }
    else if (hrs >= 12 && hrs <= 15) { greeting = "Afternoon"; icon = "☀️"; }
    else if (hrs >= 16 && hrs <= 19) { greeting = "Evening"; icon = "🌇"; }

    setWish(greeting);
    setEmoji(icon);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center min-h-[90vh] bg-[#222831]">
          <div className="loader"></div>
        </div>
      ) : (
        <section
          id="home"
          className="relative flex flex-col md:flex-row items-center justify-between min-h-[90vh] px-5 py-24 text-center md:text-left overflow-hidden"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 10%, #000 40%, #63e 100%)",
          }}
        >
          {/* Text Section */}
          <div className="flex-1 flex flex-col items-center justify-center text-center md:text-left px-4 md:px-8 py-4">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hi!! Good {wish} <span>{emoji}</span>
              <br />
              Welcome to My Portfolio
              <br />
              I’m <span className="text-blue-500">SriDevi Marlothu</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mt-2 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Web Developer & ML Enthusiast
            </motion.p>

            <motion.a
              href="#contact"
              className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              Hire Me
            </motion.a>
          </div>

          {/* Blob Image Section */}
          <motion.div
            className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <div className="relative w-[22rem] h-[22rem] md:w-[26rem] md:h-[26rem]">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-700 to-purple-500 blur-3xl opacity-60 animate-pulse rounded-full"></div>
              <motion.div
                className="absolute inset-0 bg-[#001133]/40 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] overflow-hidden border-4 border-blue-500 shadow-[0_0_40px_#3b82f6]"
                animate={{
                  borderRadius: [
                    "60% 40% 30% 70% / 60% 30% 70% 40%",
                    "30% 60% 70% 40% / 50% 60% 30% 60%",
                    "70% 40% 60% 30% / 40% 70% 50% 60%",
                    "60% 40% 30% 70% / 60% 30% 70% 40%",
                  ],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src={profileImg}
                  alt="SriDevi"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </section>
      )}
    </>
  );
};

export default Home;
