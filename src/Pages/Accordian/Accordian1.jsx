import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import React, { useState } from 'react'

const Accordian1 = () => {


  const [click,setClick] = useState(false)

   const accordionData = [
  {
    id: 1,
    question: "What is React?",
    answer:
      "React is an open-source JavaScript library used for building user interfaces, especially single-page applications. It helps create reusable UI components.",
  },
  {
    id: 2,
    question: "What are React Hooks?",
    answer:
      "Hooks are special functions in React that let you use state and other React features in functional components, such as useState, useEffect, and useContext.",
  },
  {
    id: 3,
    question: "What is JSX?",
    answer:
      "JSX stands for JavaScript XML. It allows you to write HTML-like syntax inside JavaScript, which React converts into real DOM elements.",
  },
  {
    id: 4,
    question: "What is the Virtual DOM?",
    answer:
      "The Virtual DOM is a lightweight copy of the real DOM. React uses it to detect changes efficiently and update only the necessary parts of the UI.",
  },
];





const toggleAccordian = (id)=>{


  setClick(click === id ? null : id)
}

  return (
    <div className='h-[50vh] w-[80vw] mx-auto rounded-md'>


      {accordionData.map((item,idx)=>(
        <>
        
        <div className='min-h-[50px]  w-full flex flex-col' key={item.id}>
    <div className={`h-[50px] w-full   bg-blue-50 px-2 flex  items-center justify-between ${click === item.id ? "rounded-t-md":""} `} onClick={()=>toggleAccordian(item.id)}> <li>{item.id}. {item.question}</li> <motion.i animate={{rotate:click === item.id ? 270:0}}><ArrowDown  /></motion.i> </div>
{click === item.id &&   <motion.div
  layout
  className={`w-full bg-gray-300 overflow-hidden ${click === item.id ? "rounded-b-md border-black border-[0.5px]":""}`}
  
  animate={{ height: click === item.id ? "10x" : "0px" }}
  transition={{ duration: 0.4, ease: "easeInOut" }}
>
  {click === item.id && <p className="p-2">{item.answer}</p>}
</motion.div>
}
   

        </div>
        </>
      ))}
      
    </div>
  )
}

export default Accordian1
