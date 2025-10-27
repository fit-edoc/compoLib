import React from 'react'
import { Nav } from './Nav'
import MainHero  from './MainHero'

import { Show } from './Show'
import { Elegant } from '../landingpages/Elegant'
import { Classy } from '../landingpages/Classy'
import Accordian1 from '../Accordian/Accordian1'
import Accordian2 from '../Accordian/Accordian2'



export const Home = () => {
  return (
    <div className='min-h-[100vh] w-screen  bg-black flex-1'>

        <div> <Nav/></div>
        <div><MainHero/></div>
       <div> <Show/></div>
       <Accordian1/>
       <Accordian2/>
    </div>
  )
}
