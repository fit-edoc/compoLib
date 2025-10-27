export const heroTemplates = {
    1: ({ text, imageUrl }) => `
  import React from 'react';
  
  export const Hero1 = () => {
    return (
      <>
        <div className='min-h-screen w-screen bg-gradient-to-l from-[#646deb] to-[#0f053a] flex'>
          <div className='w-[50%] min-h-screen relative flex items-center justify-center'>
            <div className='h-[70vh] w-[40vw] rounded-lg bg-black/50 text-white px-5 text-start flex flex-col justify-evenly'>
              <h1 className='text-[6vw] font-medium'>${text}</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, consectetur modi! Totam, culpa officiis necessitatibus exercitationem a adipisci vitae omnis aliquid vero, quas laudantium earum. Optio nisi adipisci amet possimus!
              </p>
            </div>
          </div>
          <div className='w-[50%] min-h-screen relative flex items-center justify-center'>
            <div className='h-[70vh] w-[30vw] overflow-hidden absolute bg-gradient-to-tr from-[#3a78c0] to-[#081938] rounded-blob'>
              <img src="${imageUrl}" className='h-full w-full object-contain' alt="Hero" />
            </div>
          </div>
        </div>
      </>
    );
  };
  `,
  
  2:({text,imageUrl}) => `
    import React from 'react';
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

        <div className='h-full w-[50%]  text-white flex flex-col items-start  justify-center text-start px-5'><h1 className='text-[5vw] text-white'>${text}</h1> <h4>text your tagline </h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nobis vitae consectetur eveniet doloremque ratione id, quod officia tempora fuga dolorem nam quae totam ullam adipisci repellat unde voluptatem eos.</p></div>
        <div className='h-full w-[50%]   relative overflow-hidden flex justify-end '><motion.img src="${imageUrl}" className='h-[80%]  w-[80%] absolute object-contain' initial={{bottom:"-50%"}}animate={{bottom:"15%"}}  alt="" /></div>
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

  `

  };
  