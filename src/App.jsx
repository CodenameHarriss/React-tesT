import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//import component
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Login from './Page/Login'
import Register from './Page/Register'
import ListData from './crudapi/ListData'
import Adddata from './crudapi/Adddata'
import UpdateData from './crudapi/UpdateData'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='Register' element={<Register />}></Route>
        <Route path='Home' element={<Home />}></Route>
        <Route path='About' element={<About />}></Route>
        <Route path='ListData' element={<ListData />}></Route>
        <Route path='AddData' element={<Adddata />}></Route>
        <Route path='UpdateData/:id' element={<UpdateData />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App