import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import{ Link, useNavigate} from 'react-router'
import User from '../../../backend/models/User';

const Registration = () => {
    const [firstname,setfisrtname]=useState("");
    const [lastname,setlastname]=useState("");
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const [confirmpass,setconfirmpass]=useState("");
    const [phonenumber,setphonenumber]=useState("");
    const [birthdate,setbirthdate]=useState("");
    const [gender,setgender]=useState("");
    const navigate=useNavigate();
    const handlechage= async (e)=>{
        e.preventDefault();
        const res=axios.get('http://localhost:5000/Registration')
        const users=(await res).data
        try {
            const emailexist=users.find((us)=>us.email===email)
            if(emailexist){
                toast.error("cet email est deja existant ");
            }else{
            if(password==confirmpass){
            await axios.post('http://localhost:5000/Registration',{
                firstname,
                lastname,
                email,
                password,
                phonenumber,
                birthdate,
                gender,
            })
            navigate("/Login")
            return(toast.success("your account has been created successfully"));
        }else{
            return(toast.error("your confirm paswword is invalid"));
        }
    }
}
        catch (error) {
            res.status(200).send(error)
        }
    }
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
    <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-gray-800">Create an Account</h1>
            <p className="text-gray-600 mt-2">Fill in your details to get started</p>
        </div>
        <form onSubmit={handlechage}>
            <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label for="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input id="firstName"  type="text" required 
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
                            placeholder="John"
                            onChange={(e)=>{setfisrtname(e.target.value)}}/>
                            
                    </div>
                    <div>
                        <label for="lastName"  className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input id="lastName"  type="text" required 
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
                            placeholder="Doe"
                            onChange={(e)=>{setlastname(e.target.value)}}/>
                    </div>
                </div>

                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                        </div>
                        <input id="email" type="email" autocomplete="email" required 
                            class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
                            placeholder="johndoe@example.com"
                            onChange={(e)=>{setemail(e.target.value)}}/>
                              
                    </div>
                </div>
                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <input id="password"  type="password" required 
                            class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
                            placeholder="••••••••"
                            onChange={(e)=>{setpassword(e.target.value)}}/>
                    </div>
                    
                </div>
                <div>
                    <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <input id="confirmPassword"  type="password" required 
                            class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
                            placeholder="••••••••"
                            onChange={(e)=>{setconfirmpass(e.target.value)
                            }}/>
                    </div>
                </div>
                <div>
                    <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                        </div>
                        <input id="phone" type="tel" 
                            class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
                            placeholder="(123) 456-7890"
                            onChange={(e)=>{setphonenumber(e.target.value)}}/>
                    </div>
                    <p class="mt-1 text-xs text-gray-500">Optional</p>
                </div>

                <div>
                    <label for="dob" class="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                    <input id="dob"  type="date" 
                        class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        onChange={(e)=>{setbirthdate(e.target.value)}}/>
                </div>               
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                    <div class="flex space-x-4">
                        <div class="flex items-center">
                            <input id="male" name="gender" type="radio" value="male" 
                                class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                                onChange={(e)=>{setgender(e.target.value)}}/>
                            <label for="male" class="ml-2 block text-sm text-gray-700">Male</label>
                        </div>
                        <div class="flex items-center">
                            <input id="female" name="gender" type="radio" value="female" 
                                class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                                 onChange={(e)=>{setgender(e.target.value)}}/>
                            <label for="female" class="ml-2 block text-sm text-gray-700">Female</label>
                        </div>
                    </div>
                </div>
                
                <div>
                    <button type="submit" 
                        class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Create Account
                    </button>
                </div>
            </div>
        </form>
        <div class="mt-6 text-center">
            <p class="text-sm text-gray-600">
                Already have an account? 
                <a href="/Login" class="font-medium text-indigo-600 hover:text-indigo-500">Sign in</a>
            </p>
        </div>
        
    </div>
</div>
  )
}

export default Registration