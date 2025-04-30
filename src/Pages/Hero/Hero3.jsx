import React from 'react'
import build from '../../assets/images/build.png'

export const Hero3 = () => {
  return (
    <div className='min-h-screen w-screen'>
        <div className='top h-[60vh] w-screen bg-black relative'><div className='top1 w-full h-full bg-gradient-to-l from-[#05051568] to-[#ede6e6a5]  backdrop-blur-xl flex justify-center items-center'>
          <h1 className='text-[5vw] font-light capitalize text-white'>we build beautifull desing <br /><span><h4>content and technology</h4></span></h1></div></div>
        <div className='h-[50vh] bg-black w-screen    flex'> <div className='h-full w-[50%]'> <img src={build} className='h-full w-full object-contain' alt="" /></div>
        <div className='h-full w-[50%]'><img src={build} className='h-full w-full object-contain' alt="" /></div></div>
    </div>
  )
}
