import { motion } from 'framer-motion';
import { ArrowDown, MinusCircle, PlusCircle } from 'lucide-react';
import React, { useState } from 'react'

const Accordian2 = () => {


  const [click,setClick] = useState(false)

const accordionData = [
  {
    id: 1,
    question: "What is React?",
    answer:
      "React is an open-source JavaScript library developed by Facebook for building dynamic and interactive user interfaces, particularly single-page applications (SPAs). It allows developers to create reusable UI components that manage their own state, making code more modular and maintainable. React uses a declarative approach, meaning you describe what the UI should look like, and React takes care of efficiently updating and rendering the right components when data changes. Its component-based structure and virtual DOM implementation make it fast, scalable, and efficient for modern web development.",
  },
  {
    id: 2,
    question: "What are React Hooks?",
    answer:
      "React Hooks are special functions introduced in React 16.8 that let you use state and other React features without writing class components. Before hooks, managing component state, lifecycle methods, and context required using classes, which often made code harder to maintain. Hooks simplify that by allowing you to use functional components for everything. Common hooks include useState (for managing local state), useEffect (for handling side effects like API calls or DOM manipulation), useContext (for accessing global data), and custom hooks (for reusing logic across components). They make React development cleaner, easier to test, and more modular.",
  },
  {
    id: 3,
    question: "What is JSX?",
    answer:
      "JSX stands for JavaScript XML and is a syntax extension for JavaScript that looks very similar to HTML. It allows developers to write UI structure inside JavaScript code in a more intuitive way. Under the hood, JSX is compiled to React.createElement() calls, which create React elements representing the DOM structure. JSX supports embedding expressions using curly braces `{}` and makes component hierarchies easier to visualize. Although it’s not required to use React, JSX improves code readability, reduces verbosity, and enhances the developer experience when building component-based interfaces.",
  },
  {
    id: 4,
    question: "What is the Virtual DOM?",
    answer:
      "The Virtual DOM is a lightweight, in-memory representation of the real DOM in the browser. Whenever a component’s state or props change, React creates a new Virtual DOM tree and compares it with the previous one using a process called 'diffing'. Only the elements that have actually changed are then updated in the real DOM (a process called 'reconciliation'). This approach significantly improves performance because manipulating the real DOM is slow, while working with the Virtual DOM is much faster. By minimizing direct DOM updates, React ensures smoother UI rendering and better application performance, even for complex and data-heavy interfaces.",
  },
  {
    id: 5,
    question: "What are Props in React?",
    answer:
      "Props, short for 'properties', are read-only inputs passed from a parent component to a child component in React. They allow data and functions to be shared across components, enabling dynamic and reusable UIs. Props are immutable, meaning a child component cannot modify them directly—it can only use them to display or process information. For example, if you have a Button component that accepts a 'label' and an 'onClick' function as props, you can reuse it multiple times across your app with different text and actions. Props play a crucial role in maintaining a unidirectional data flow, which makes React applications predictable and easier to debug.",
  },
  {
    id: 6,
    question: "What is the difference between State and Props?",
    answer:
      "Both State and Props are used to manage data in React components, but they serve different purposes. Props are used to pass data from a parent to a child component and are read-only, meaning they cannot be modified by the child. State, on the other hand, is managed within a component itself and can change over time, usually due to user interactions or API responses. State changes cause React to re-render the component to reflect the new data. In short: Props = external and immutable, State = internal and mutable. Together, they help React build dynamic, data-driven UIs that respond to changes efficiently.",
  },
];


const toggleAccordian = (id)=>{


  setClick(click === id ? null : id)
}

  return (
    <div className='h-[50vh] w-[50vw]  mx-auto px-2 bg-red-700'>


      {accordionData.map((item,idx)=>(
        <>
        
        <div className='min-h-[50px]  w-full flex flex-col rounded-md' key={item.id}>
    <div className="h-[50px] w-full   bg-blue-50 px-2 flex  items-center justify-between" onClick={()=>toggleAccordian(item.id)}> <li>{item.id} {item.question}</li> <motion.i className=' text-white rounded-full' animate={{rotate:click === item.id ? 360:0 ,backgroundColor:click===item.id? "blue":"black"}}>{click === item.id ? <MinusCircle/> :<PlusCircle/>}</motion.i> </div>
{click === item.id &&   <motion.div
  layout
  className="w-full bg-gray-100 overflow-hidden rounded-b-md"
  
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

export default Accordian2
