export const accordianTemplates = {
  1: () => `
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import React, { useState } from 'react';

const Accordian1 = () => {
  const [click, setClick] = useState(false);
  const accordionData = [
    { id: 1, question: "What is React?", answer: "React is an open-source JavaScript library..." },
    { id: 2, question: "What are React Hooks?", answer: "Hooks are special functions in React..." },
    { id: 3, question: "What is JSX?", answer: "JSX stands for JavaScript XML..." },
    { id: 4, question: "What is the Virtual DOM?", answer: "The Virtual DOM is a lightweight copy..." },
  ];
  const toggleAccordian = (id) => setClick(click === id ? null : id);
  return (
    <div className='h-[50vh] w-[80vw] mx-auto rounded-md'>
      {accordionData.map((item) => (
        <div className='min-h-[50px] w-full flex flex-col' key={item.id}>
          <div
            className={\`h-[50px] w-full bg-blue-50 px-2 flex items-center justify-between \${click === item.id ? "rounded-t-md" : ""}\`}
            onClick={() => toggleAccordian(item.id)}
          >
            <li>{item.id}. {item.question}</li>
            <motion.i animate={{ rotate: click === item.id ? 270 : 0 }}>
              <ArrowDown />
            </motion.i>
          </div>
          {click === item.id && (
            <motion.div
              layout
              className={\`w-full bg-gray-300 overflow-hidden \${click === item.id ? "rounded-b-md border-black border-[0.5px]" : ""}\`}
              animate={{ height: click === item.id ? "auto" : "0px" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <p className="p-2">{item.answer}</p>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordian1;
`,
  2: () => `
import { motion } from 'framer-motion';
import { MinusCircle, PlusCircle } from 'lucide-react';
import React, { useState } from 'react';

const Accordian2 = () => {
  const [click, setClick] = useState(false);
  const accordionData = [
    { id: 1, question: "What is React?", answer: "React is an open-source JavaScript library developed by Facebook..." },
    { id: 2, question: "What are React Hooks?", answer: "React Hooks are special functions introduced in React 16.8..." },
    { id: 3, question: "What is JSX?", answer: "JSX stands for JavaScript XML..." },
  ];
  const toggleAccordian = (id) => setClick(click === id ? null : id);
  return (
    <div className='h-[50vh] w-[50vw] mx-auto px-2 bg-red-700'>
      {accordionData.map((item) => (
        <div className='min-h-[50px] w-full flex flex-col rounded-md' key={item.id}>
          <div
            className="h-[50px] w-full bg-blue-50 px-2 flex items-center justify-between"
            onClick={() => toggleAccordian(item.id)}
          >
            <li>{item.id} {item.question}</li>
            <motion.i
              className='text-white rounded-full'
              animate={{
                rotate: click === item.id ? 360 : 0,
                backgroundColor: click === item.id ? "blue" : "black"
              }}
            >
              {click === item.id ? <MinusCircle /> : <PlusCircle />}
            </motion.i>
          </div>
          {click === item.id && (
            <motion.div
              layout
              className="w-full bg-gray-100 overflow-hidden rounded-b-md"
              animate={{ height: click === item.id ? "auto" : "0px" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <p className="p-2">{item.answer}</p>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordian2;
`,
};
