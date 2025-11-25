import React from "react";
import { motion } from "framer-motion";
import GalaxyBackground from "../../components/GalaxyBackground";
import LightStripEffect from "../../components/LightStripEffect";
import { ArrowRight, Zap } from "lucide-react";

const MainHero = () => {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center text-white">
      {/* Background Effects */}
      <GalaxyBackground />
      <LightStripEffect />

      {/* Content Overlay */}
      <div className="relative z-20 container mx-auto px-4 text-center">


        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-[6vw] font-hero tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-400"
        >
          Architecting the <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-t from-5% from-[#160079] to-55% to-white">Future of Digital</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
        >
          Experience the power of seamless integration and scalable solutions.
          We build the infrastructure that powers tomorrow's enterprises.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-8 py-4 rounded-[50px] bg-gradient-to-br from-[#000325] to-[#161938] border border-white hover:bg-blue-500 text-white font-semibold transition-all flex items-center justify-center gap-2 group">
            See Components
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        
        </motion.div>
      </div>

      {/* Decorative Gradient Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none" />
    </div>
  );
};

export default MainHero;
