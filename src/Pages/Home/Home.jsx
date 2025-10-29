import React from 'react'
import { Nav } from './Nav'
import MainHero  from './MainHero'

import { Show } from './Show'
import Carosel1 from '../Carousel/Carosel1'
import Carousel2 from '../Carousel/Carousel2'




export const Home = () => {
  return (
    <div className='min-h-[100vh] w-screen  bg-black flex-1'>

        <div> <Nav/></div>
        <div><MainHero/></div>
       <div> <Show/></div>
       <Carousel2/>
       <Carosel1/>
      
    </div>
  )
}
