export const carouselTemplate = {
    
    1:()=> `
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
`,
2:()=> `
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Carousel2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // track slide direction

  const images = [
    "https://plus.unsplash.com/premium_photo-1680883415362-238794b19dde?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1175",
    "https://images.unsplash.com/photo-1530103043960-ef38714abb15?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1169",
    "https://images.unsplash.com/photo-1504253492562-cbc4dc540fcb?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170"
  ];

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  const prevClick = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextClick = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  return (
    <div className="h-[60vh] w-screen flex flex-col items-center justify-center">
  
      <div className="relative w-[80%] h-full overflow-hidden rounded-2xl shadow-lg">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.img
            key={images[activeIndex]}
            src={images[activeIndex]}
            alt="carousel slide"
            className="absolute w-full h-full object-cover"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
            }}
          />
        </AnimatePresence>

     
        <div className="absolute inset-0 flex justify-between items-center px-3">
          <button
            onClick={prevClick}
            className="bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={nextClick}
            className="bg-black/40 text-white p-2 rounded-full hover:bg-black/60"
          >
            <ArrowRight />
          </button>
        </div>
        
      <div className="absolute left-1/2  bottom-2 -translate-x-1/2 -translate-y-1/2 flex gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={\`h-3 w-3 rounded-full transition-all duration-300 \${
              index === activeIndex
                ? "bg-blue-600 scale-110 w-[20px]"
                : "bg-gray-400 hover:bg-gray-500"
            }\`}
          ></button>
        ))}
      </div>
      </div>

     
    </div>
  );
};

export default Carousel2;
`
}