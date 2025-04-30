import React from 'react'
import { useNavigate } from 'react-router-dom';

export const HeroTab = () => {

    const navigate = useNavigate()

    const card = [
        { id: 1, img: "/images/hero1.png", title: "simple" },
        {
          id: 2,
          img: "/images/hero2.png",
          title: "gradienttouch",
        },
        {
            id:3,
            img:"/images/hero3.png",
            title:"stylish"
        }
      ];
  return (
    <div className='min-h-[calc(100vh-100px)] w-full  grid grid-cols-2 place-items-center '>
        {card.map((item)=>(
            <div className='h-[250px] w-[450px] relative' key={item.id}><div className='w-full h-[90%]  rounded-md overflow-hidden ' onClick={()=> navigate(`/hero/${item.id}`)} ><img src={item.img} className='rounded-md h-full w-full hover:scale-110 transition-all' alt="" /></div>
            <div className='h-[10%] w-full bg-white/50
            '><h1 className='text-[1.1vw] capitalize text-white rounded-sm px-2'>{item.title}</h1></div></div>
        ))}
    </div>
  )
}
