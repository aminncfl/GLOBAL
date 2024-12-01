import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Basket from '../pages/Basket/Basket'
import Wish from '../pages/Wish/Wish'

const Router = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/basket' element={<Basket/>}/>
            <Route path='/wishlist' element={<Wish/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router