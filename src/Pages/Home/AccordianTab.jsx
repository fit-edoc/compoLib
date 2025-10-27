import React from 'react'
import { useNavigate } from 'react-router-dom';

export const AccordianTab = () => {

    const navigate = useNavigate()

    const card = [
        { id: 1, img: "/images/accord1.jpeg", title: "simple" },
        {
          id: 2,
          img: "/images/accord2.jpeg",
          title: "rounded tabs",
        },
        
      ];
  return (
    <div className='min-h-[calc(100vh-100px)] w-full  grid grid-cols-2 place-items-center '>
        {card.map((item)=>(
            <div className='h-[120px] bg-white/30 w-[500px] relative'><div className='w-full h-[100%]  rounded-md overflow-hidden ' onClick={()=> navigate(`/accordian/${item.id}`)} ><img src={item.img} className='rounded-md h-full object-contain w-full hover:scale-110 transition-all' alt="" /></div>
            <div className='h-[10%] w-full bg-white/50
            '><h1 className='text-[1.1vw] capitalize text-white rounded-sm px-2'>{item.title}</h1></div></div>
        ))}
    </div>
  )
}
