import React from 'react'
import { Nav } from './Nav'
import MainHero  from './MainHero'

import { Show } from './Show'





export const Home = () => {
  return (
    <div className='min-h-[100vh] w-screen  bg-black flex-1'>

        <div className='w-screen flex justify-center'> <Nav/></div>
        <div><MainHero/></div>
       <div> <Show/></div>
      
      
    </div>
  )
}
