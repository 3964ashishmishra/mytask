import React from 'react'
import Register from './components/Register'
import Signin from './components/Signin'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Main from './components/Main'


const App = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/signin" element={<Signin />}></Route>


      </Routes>
    </BrowserRouter>
  )
}

export default App