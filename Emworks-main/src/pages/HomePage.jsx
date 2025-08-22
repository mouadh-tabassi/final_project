import React, { useEffect } from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import HomeContent from '../components/HomeContent'
import HeaderSec from '../components/HeaderSec'
import CardModule from '../components/CardModule'
import Internship from '../components/Intership'
import axios from 'axios'
import {jwtDecode} from "jwt-decode";

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <HeaderSec/>
      <Internship/>
      <CardModule />
      <Footer
      item1="About us"
      item2="Conatct"
      item3="Products"
      item4="Services"/>
    </div>
  )
}

export default HomePage
