import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AOS from "aos";
import "aos/dist/aos.css";
const Users = () => {
    const [Usrs,setUsrs]=useState([]);
    useEffect(()=>{
        AOS.init({ duration: 800, once: true }); 
        async function fetchData(){
            const res= await axios.get('http://localhost:5000/Registration')
            setUsrs(res.data);
        }
        fetchData();
    },[]);
    
  return (
    <div>
        <table class="min-w-full divide-y divide-gray-200 overflow-x-auto">
    <thead class="bg-gray-50">
        <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                full Name
            </th>
          
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
               Email
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                phonenumber
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                birthdate
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                gendre
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
            </th>
        </tr>
    </thead>
    <tbody aos-data="fade-up" class="bg-white divide-y divide-gray-200">
        {Usrs.map((usr) => (
            <tr  key={usr._id}>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                        <img class="h-10 w-10 rounded-full" src="https://i.pravatar.cc/150?img=1" alt=""/>
                    </div>
                    <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                            {usr.firstname} {usr.lastname}
                        </div>
                    </div>
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{usr.email}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {usr.phonenumber}
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {usr.birthdate}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {usr.gendre}
            </td>
            
            <td class="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                <a href="#" class="ml-2 text-red-600 hover:text-red-900">Delete</a>
            </td>
        </tr>
        
        ))}
</tbody>
</table>
</div>
  )
}

export default Users