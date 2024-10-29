import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sample from './components/Sample'
import Basics from './components/Basics'
import { Route, Routes } from 'react-router-dom'

import Counter from './components/Counter'
import Usestate from './components/Usestate'

function App() {
 
  return (
    <>
    <Routes>
      <Route path='/navbar' element={<Sample/>}/>
      <Route path='/basics' element={<Basics/>}/>
      <Route path='/counter' element={<Counter/>}/>
      <Route path='/usestate' element={<Usestate/>}/>
   </Routes>
   
    </>
  )
}

export default App
