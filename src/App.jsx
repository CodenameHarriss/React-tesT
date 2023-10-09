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
import HomeUser from './user-page/HomeUser'
import ProfileUser from './user-page/ProfileUser'
import Follow from './user-page/Follow'
import History from './user-page/History'
import UpdateProfile from './user-page/UpdateProfile'
import MyComponent from './test/MyComponent'
import MyForm from './test/MyForm'
import Detail from './user-page/Detail'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        //admin
        <Route path='/' element={<Login />}></Route>
        <Route path='Register' element={<Register />}></Route>
        <Route path='Home' element={<Home />}></Route>
        <Route path='About' element={<About />}></Route>
        <Route path='ListData' element={<ListData />}></Route>
        <Route path='AddData' element={<Adddata />}></Route>
        <Route path='UpdateData/:id' element={<UpdateData />}></Route>
        //user
        <Route path='HomeUser' element={<HomeUser />}></Route>
        <Route path='ProfileUser' element={<ProfileUser />}></Route>
        <Route path='UpdateProfile/:id' element={<UpdateProfile />}></Route>
        <Route path='Follow' element={<Follow />}></Route>
        <Route path='Detail' element={<Detail />}></Route>
        <Route path='History' element={<History />}></Route>
        //test
        <Route path='MyComponent' element={<MyComponent />}></Route>
        <Route path='MyForm' element={<MyForm />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App