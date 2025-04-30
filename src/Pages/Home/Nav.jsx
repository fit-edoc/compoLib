import React from "react";
import{ Github,EqualApproximately} from "lucide-react"
import {motion} from 'framer-motion'


export const Nav = () => {
  return (
    <motion.div  initial={{height:"100vh"}} animate={{height:"50px"}} transition={{duration:0.5,ease:"easeInOut"}} className="nav h-[50px] fixed bg-white/20 backdrop-blur-2xl z-40   flex w-screen text-white"  >
      <div className="h-full w-[50%]  flex items-center justify-center font-extralight uppercase">Compolib</div>
      <div className="h-full w-[50%] flex items-center justify-center gap-4"><a href=""><Github /></a> <a href=""><EqualApproximately /></a></div>
    </motion.div>
  );
};
