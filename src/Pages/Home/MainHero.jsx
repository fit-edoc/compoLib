import React from "react";
import { motion } from "framer-motion";
import img1 from '../../assets/images/ptt.png'

const MainHero = () => {


  return (
    <div className="mainhero min-h-screen w-screen  relative ">
      <div className="h-[50vh]  w-screen relative overflow-hidden  ">
      <div className="h-[40vh] w-[50vw] absolute  left-[50%] top-16"> <motion.img
        src={img1}
        alt="Brush Reveal"
        className="md:w-full md:h-full  object-contain"
        initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
        animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
        transition={{ duration: 2, ease: "easeInOut" }}
      /></div>
        <motion.div className="min-h-[20px] w-[200px]  absolute flex justify-center items-center  overflow-hidden left-[45%] translate-x-[-50%] translate-y-[-50%] md:h-[18vh] md:w-[40vw]"
        initial={{top:"120%" ,filter:"blur(50px)"}} animate={{top:"94%",filter:"blur(0px)"}}   transition={{
          type: "spring",
          stiffness: 200,   // speed / tension
          damping: 10   ,
              // resistance to bounce
        }}>
          <motion.h1 className="text-[20px]  font-logo mx-auto text-black  cursor-pointer md:text-[4vw]" initial="initial" whileHover="hovered">COMPO<motion.span variants={{initial:{y:0},hovered:{y:"-100%"}}} transition={{duration:0.3}} className="absolute text-blue-400">LIB</motion.span>
          <motion.span variants={{initial:{y:"100%"},hovered:{y:0}}} transition={{duration:0.3}} className="absolute text-white">LIB</motion.span></motion.h1>
        </motion.div>
      </div>
      <div className="h-[50vh]  w-screen overflow-hidden relative">
        <motion.h1
          className="absolute -translate-x-1/2 -translate-y-1/2 text-[2vw] left-1/2 top-[-25%] overflow-hidden font-extralight capitalize   px-4 text-white"
          initial={{ opacity: 0, top: "-25%",filter:"blur(90px)" }}
          animate={{ opacity: 1, top: "9%",filter:"blur(0px)" ,backgroundColor:"#3ac3ea", color:"black" ,borderRadius:"30px" }}
          transition={{
            type: "spring",
            stiffness: 100,   
            damping: 10,   
            delay:1,    
          }}
        >
          <motion.span  >Your</motion.span> <span>components,</span> <span> your way</span>
        </motion.h1>
        <div className="h-[40vh] w-[50vw]"> <motion.img
        src={img1}
        alt="Brush Reveal"
        className="w-full h-full object-contain"
        initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
        animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
        transition={{ duration: 2, ease: "easeInOut" }}
      /></div>
      </div>
    </div>
  );
};

export default MainHero;
