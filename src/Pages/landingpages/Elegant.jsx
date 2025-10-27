import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import React from 'react'


export const Elegant = () => {

    const navItemv = [
        {id:1,tab:"HOME"},
        {id:2,tab:"COLLECTION"},
        {id:3,tab:"catalog"},
        {id:4,tab:"delivery"}

    ]

   const panel = [
  {
    "id": 1,
    "img": "https://plus.unsplash.com/premium_photo-1707932500366-c0b1951ed1b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wzfHx8ZW58MHx8fHx8",
    "borderRadius": "50%"
  },
  {
    "id": 2,
    "img": "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",
    "borderRadius": "10%"
  },
  {
    "id": 3,
    "img": "https://plus.unsplash.com/premium_photo-1708110770188-3e4216b93119?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "borderRadius": "50%"
  },
  {
    "id": 4,
    "img": "https://images.unsplash.com/photo-1632149877166-f75d49000351?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "borderRadius": "10%"
  },
  {
    "id": 5,
    "img": "https://images.unsplash.com/photo-1606391901318-07003db08d63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",
    "borderRadius": "50%"
  }
];


  return (
<>
<div className='min-h-screen w-screen bg-black text-white'>
    <nav className='h-[100px] w-screen  flex justify-around items-center'><h1>logo</h1>
    <div className='h-full  flex justify-evenly w-[60%] items-center'>{navItemv.map(item=>(
        <a href="">{item.tab}</a>
    ))}</div>  <button><ShoppingCart /></button></nav>

    <div className='h-[60vh] w-screen flex justify-center items-end'><motion.img src="/images/logic.jpg" className='h-full w-full' initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
        whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
        viewport={{once:true}}
        transition={{ duration: 2, ease: "easeInOut" }} alt="" /></div>
    <div className='h-[70vh] w-screen flex px-2 gap-2'> {panel.map(item=>(
        <div className='h-[300px] w-[300px]  overflow-hidden' style={{borderRadius:item.borderRadius}}><motion.img src={item.img} className='h-full w-full object-cover object-center hover:scale-105 transition-all' style={{borderRadius:item.borderRadius}} initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
        whileInView={{ clipPath: 'inset(0% 0% 0% 0%)', }}
         viewport={{once:true}}
        transition={{ duration: 0.4, ease: "easeInOut", damping:30,stiffness:100,mass:50 }} alt="" /></div>
    ))}</div>
</div>



</>
  )
}
