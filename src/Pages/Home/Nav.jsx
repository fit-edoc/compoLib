import React from "react";
import{ Github,EqualApproximately} from "lucide-react"
import {motion} from 'framer-motion'


export const Nav = () => {
  return (
    <motion.div  className="nav h-[50px] fixed bg-neutral-900 border-white/30 border-[1px] backdrop-blur-2xl z-40 mt-2   flex w-[30%] rounded-full mx-auto text-white"  >
      <div className="h-full w-[50%]  flex items-center justify-start px-3  uppercase"><h1>ReusableUi</h1></div>
      <div className="h-full w-[50%] flex items-center justify-end px-4 gap-4"><a href="https://github.com/fit-edoc/compoLib"><Github /></a> <a href=""><EqualApproximately /></a></div>
    </motion.div>
  );
};
