import React,{useEffect} from 'react'
import { jwtDecode } from "jwt-decode";
import AOS from "aos";
import "aos/dist/aos.css";
const home = () => {
     useEffect(() => {
            AOS.init({ duration: 1000, once: true }); // once:true = animate only the first time
          }, []);
           const token =localStorage.getItem("token");
              let user=null;
              if(token){
                try {
                  user=jwtDecode(token)
                } catch (error) {
                  console.error("Invalid token",error);        
                }
              }
              const isloggedIn=!!user;
  return (
   <div className='flex items-center justify-center min-h-screen'
        data-aos="zoom-in-up">  
  <div class="max-w-5xl mx-auto mt-12 px-4 text-center">
    <div class="w-full max-w-3xl mx-auto">
      <h1 class="text-4xl font-bold mt-2 mb-6">
        Explore EMWorks Modules<br/>with clarity and simplicity.
      </h1>
      <p class="px-4 leading-relaxed">
        Our platform provides you with a fast and intuitive way to discover all 
        EMWorks modules in one place.<br/> 
        Save time, understand features, and focus on what really matters: 
        <span class="font-semibold">learning and engineering innovation.</span>
      </p>
      <p class="mb-8 mt-4 px-4 leading-relaxed">
        And the best part... 
        <span class="text-red-600 font-bold">it’s accessible to everyone!</span>
      </p>
      <div>
        {isloggedIn ? (<div><h1 className='inline-block py-4 px-8 leading-none text-white bg-slate-800 hover:bg-red-600 rounded shadow text-sm font-bold'>{user.firstname} you are welcome !</h1><br /><br />
        <h1> if you want to explore our Models <a href="/Modules" className='text-red-600 font-bold'>click here</a></h1>
        </div>):
        (<a class="inline-block py-4 px-8 leading-none text-white bg-slate-800 hover:bg-red-600 rounded shadow text-sm font-bold"
          href="/Registration">Get Started</a>)
        }
        
      </div>
    </div>
  </div>
</div>
  )
}

export default home
