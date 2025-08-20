import React, { useEffect, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast';
import { set } from 'mongoose';
const LoginPage = () => {
    const [emailacc,setemailacc]=useState("");
    const [passwordacc,setpasswordacc]=useState("");
    const handleclick=async(e)=>{
        e.preventDefault();
        try {
             const res=await axios.post("http://localhost:5000/Login",{
            emailacc,
            passwordacc
        });
        localStorage.setItem("token",res.data.token)
            return(toast.success("login successfully"));
        } catch (error) {
            return(toast.error("login failed"));
            
        }
       ;
        
    }
  return (
     <div className='bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen flex items-center justify-center p-4'>
     <div class="w-full max-w-md"> 
        <div class="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 space-y-8 transition-all duration-500 hover:shadow-xl">
            <div class="text-center">
                <h2 class="text-3xl font-bold  bg-clip-text ">Welcome Back</h2>
                <p class="text-gray-500 mt-2">Please sign in to continue</p>
            </div>

            <form class="space-y-6" onSubmit={handleclick}>
                
                <div class="relative">
                    <label class="block text-gray-700 text-sm font-medium mb-2" for="email">
                        Email Address
                    </label>
                    <div class="relative">
                        <i data-lucide="mail" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"></i>
                        <input 
                            class="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
                            type="email" 
                            id="email" 
                            placeholder="Enter your email"
                            required
                            onChange={(e)=>{setemailacc(e.target.value)}}
                        />
                    </div>
                </div>

            
                <div class="relative">
                    <label class="block text-gray-700 text-sm font-medium mb-2" for="password">
                        Password
                    </label>
                    <div class="relative">
                        <i data-lucide="lock" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"></i>
                        <input 
                            class="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50"
                            type="password" 
                            id="password" 
                            placeholder="Enter your password"
                            required
                            onChange={(e)=>{setpasswordacc(e.target.value)}}
                        />
                    </div>
                </div>
                <button 
                    type="submit" 
                    class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl hover:opacity-90 transition duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                >
                    Sign In
                </button>
            </form>

           
            <p class="text-center text-sm text-gray-600">
                Don't have an account? 
                <a href="/Registration" class="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200">Sign up</a>
            </p>
        </div>
    </div>
    </div>
  )
}

export default LoginPage
