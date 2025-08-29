import React, { useEffect } from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import HomeContent from '../components/HomeContent'
import HeaderSec from '../components/HeaderSec'
import CardModule from '../components/CardModule'
import Internship from '../components/Intership'
import Home from '../components/home'
import Contactus from '../components/Contactus'
import Aboutus from '../components/Aboutus'
import Service from '../components/Service'

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Aboutus/>
      <Service/>
      <Contactus/>
      <Footer
      item1="About us"
      item2="Conatct"
      item3="Services"
      />
    </div>
  )
}

export default HomePage
