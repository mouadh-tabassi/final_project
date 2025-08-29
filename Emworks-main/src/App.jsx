import React from 'react'
import { Routes,Route } from 'react-router'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Registration from './pages/Registration'
import Errorpage from './pages/Errorpage'
import Users from './pages/Users'
import Modules from './pages/Modules'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/Login" element={<LoginPage/>}/>
        <Route path="/Registration" element={<Registration/>}/>
        <Route path="/Error" element={<Errorpage/>}/>
        <Route path='/Users' element={<Users/>}/>
        <Route path="/Modules" element={<Modules/>}/>
      </Routes>
    </div>
  )
}

export default App
