import React from 'react'
import { useNavigate } from 'react-router-dom';

export const CarouselTab = () => {

    const navigate = useNavigate()

    const card = [
        { id: 1, img: "/videos/2.mp4", title: "simple" },
        {
          id: 2,
          img: "/videos/1.mp4",
          title: "rounded tabs",
        },
        
      ];
  return (
    <div className='min-h-[calc(100vh-100px)] w-full  grid grid-cols-2 place-items-center '>
        {card.map((item)=>(
            <div className='h-[220px] bg-white/30 w-[500px] relative'><div className='w-full h-[100%]  rounded-md overflow-hidden ' onClick={()=> navigate(`/carousel/${item.id}`)} ><video
  src={item.img}
  autoPlay
  loop
  muted
  playsInline
  className="rounded-md h-full w-full object-contain hover:scale-110 transition-transform duration-300"
>
  
</video>
</div>
            <div className='h-[10%] w-full bg-white/50
            '><h1 className='text-[1.1vw] capitalize text-white rounded-sm px-2'>{item.title}</h1></div></div>
        ))}
    </div>
  )
}
