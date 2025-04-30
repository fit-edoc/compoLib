import React, { useState } from "react";
import { LinkIcon ,FacebookIcon,Instagram,TwitterIcon } from "lucide-react";
import { ColorPalleteTab } from "../../components/CodeGenerator/ColorPalleteTab";

export const Footer2 = () => {


 const [colors ,setColors] = useState("")
  return (
   <>
    <div className="h-[50vh] w-screen">
      <div className="h-[110px] w-screen bg-cyan-950" style={{backgroundColor:colors.primary}}>
        <div className="h-full w-[50%] mx-auto flex justify-center items-center relative">
          <input
            type="text"
            className="h-[50px] w-[60%] rounded-xl px-2"
            name=""
            placeholder="what are looking for"
            id=""
          />{" "}
          <button className="bg-cyan-950 px-3 py-2 absolute left-[70%] text-white rounded-xl" style={{backgroundColor:colors.primary}}>
            search
          </button>
        </div>
      </div>
      <div className="h-[calc(50vh-110px)] bg-cyan-50 w-screen flex" style={{backgroundColor:colors.secondary}}>
        <div className="h-full w-[30%]  relative"><div className="h-full w-[60px] bg-black/10 justify-center gap-2  flex-col  py-8 flex  items-center absolute bottom-1">
          <a href=""><LinkIcon/></a>
          <a href=""><FacebookIcon/></a>
          <a href=""><Instagram/></a>
          <a href=""><TwitterIcon/></a>
          
          
          
          </div></div>
        <div className="h-full w-[40%]  flex items-center justify-center"><h1 className="text-[2vw] capitalize bg-black/10 px-4 py-4 rounded-blob">Company name</h1></div>
        <div className="h-full w-[30%]  flex justify-center items-center"> <ul className="text-black underline">
          <h1>Quick links</h1>
          <li>Home</li>
          <li>about</li>
          <li>contact us</li>
        </ul></div>
      </div>
    </div>
    <ColorPalleteTab setColors={setColors}/>
    </>
  );
};
