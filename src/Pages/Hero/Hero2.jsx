import React from 'react'
import wat from '../../assets/images/watch.png'
import {motion} from 'framer-motion'

export const Hero2 = () => {

const cards = 
[{id:1},
    {id:1},
    {id:1},
    {id:1},
    {id:1},

    

]

  return (
    <div className='min-h-[120vh] relative  w-screen bg-gradient-to-br from-[#7cc92f] via-[#042d0f71]  to-[#0e1802] flex justify-center items-center '>
        <div className='h-[100vh] w-[90%] bg-[#ffffff1f] absolute rounded-lg  backdrop-blur-lg px-4'>
       <div className='h-[70%] w-full  flex bg-[#ffffff4b]  rounded-xl '>

        <div className='h-full w-[50%]  text-white flex flex-col items-start  justify-center text-start px-5'><h1 className='text-[5vw] text-white'>Brand Name </h1> <h4>text your tagline </h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis vitae consectetur eveniet doloremque ratione id, quod officia tempora fuga dolorem nam quae totam ullam adipisci repellat unde voluptatem eos.</p></div>
        <div className='h-full w-[50%]   relative overflow-hidden flex justify-end '><motion.img src={wat} className='h-[80%]  w-[80%] absolute object-contain' initial={{bottom:"-50%"}}animate={{bottom:"15%"}}  alt="" /></div>
       </div>
       <div className='h-[30%] w-full flex gap-20 items-center justify-center'>
        {cards.map((item)=>(
            <div className='h-[200px] w-[200px] bg-[#ffffff69] rounded-xl flex justify-center '>your card</div>
        ))}
       </div>
        </div>
    </div>
  )
}
