import React, { useEffect } from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import HomeContent from '../components/HomeContent'
import HeaderSec from '../components/HeaderSec'
import CardModule from '../components/CardModule'
import Internship from '../components/Intership'
import axios from 'axios'
const HomePage = () => {
   useEffect (()=>{
    const isloggedin=localStorage.getItem("token");
    if(isloggedin){
      console.log("connected");
    }else{
      console.log("disconnecetd");
    }
  },[])
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
