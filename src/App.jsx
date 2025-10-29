import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Route,Routes} from 'react-router-dom'
import { Home } from './Pages/Home/Home'

import HeroPreview from './Pages/Home/HeroPreview'
import FooterPreview from './Pages/Home/FooterPreview'
import { NotFound } from './Pages/Home/NotFound'
import AccordianPreview from './Pages/Home/AccordianPreview'
import CarouselPreview from './Pages/Home/CarouselPreview'


function App() {
  

  return (
   <>
  
   <Routes>
 <Route path='/'  element={ <Home/>}/>
 <Route  path="/hero/:id" element={<HeroPreview/>}/>
 <Route  path='/footer/:id' element={<FooterPreview/>}/>
  <Route  path='/accordian/:id' element={<AccordianPreview/>}/>
  <Route path='/carousel/:id' element={<CarouselPreview/>}/>
 <Route path='*' element={<NotFound/>}/>
 

   </Routes>
   </>
  )
}

export default App
