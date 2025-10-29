import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Carousel1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "https://plus.unsplash.com/premium_photo-1680883415362-238794b19dde?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1175",
    "https://images.unsplash.com/photo-1530103043960-ef38714abb15?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1169",
    "https://images.unsplash.com/photo-1504253492562-cbc4dc540fcb?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170"
  ];

  const prevClick = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextClick = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="h-[60vh] w-screen flex flex-col items-center justify-center">
      <div className="relative w-[80%] h-full overflow-hidden rounded-2xl shadow-lg">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[activeIndex]} // 👈 important for animation
            src={images[activeIndex]}
            alt="carousel slide"
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0.5}}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-3 mt-4">
        <button
          onClick={prevClick}
          className="px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded-xl text-black flex items-center gap-1"
        >
          <ArrowLeft /> 
        </button>
        <button
          onClick={nextClick}
          className="px-3 py-1 bg-gray-300 hover:bg-gray-400 rounded-xl text-black flex items-center gap-1"
        >
           <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel1;
