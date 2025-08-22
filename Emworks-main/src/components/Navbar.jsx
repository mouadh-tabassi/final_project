import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router";
export default function Navbar(props) {
  const [isliggedIn,setisloggedIn]=useState("");
  // Mobile menu toggle
  React.useEffect(() => {
    const button = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");
    

    const toggleMenu = () => {
      const isExpanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", !isExpanded);
      mobileMenu.classList.toggle("hidden");
    };

    button?.addEventListener("click", toggleMenu);

    document.querySelectorAll(".mobile-dropdown-trigger").forEach(trigger => {
      trigger.addEventListener("click", function () {
        const content = this.nextElementSibling;
        content.classList.toggle("hidden");
      });
    });

    return () => {
      button?.removeEventListener("click", toggleMenu);
    };
  }, []);
    const token =localStorage.getItem("token");
    let user=null;
    if(token){
      try {
        user=jwtDecode(token)
      } catch (error) {
        console.error("Invalid token",err);        
      }
    }
    const isloggedIn=!!user
    const navigate=useNavigate();
  return (
    <div>
      {/* Navbar with Mega Menu */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block h-8 w-auto"
                  src="./public/emw.png"
                  alt="Logo"
                />
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <a
                    href="/"
                    className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </a>

                  {/* Products Dropdown Trigger */}
                  <div className="relative group">
                    <button className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                      Products

                    </button>
                  </div>

                  <a
                    href="#"
                    className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Services
                  </a>
                  <a
                    href="#"
                    className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="hidden sm:flex sm:items-center">
                {isloggedIn ?(
                <div>
                    <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
              <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><a onClick={()=>{localStorage.removeItem("token");
                                    navigate("/Login");
                                             
              }}>Logout</a></li>
              </ul>
                </div>
                </div>
                ):(
                   <div>
                  <a
                  href="/Login"
                  className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
                >
                Login
                </a>
                <a
                  href="/Registration"
                  className="ml-4 bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700"
                >
                Sign in
                </a>
                </div>
                )}

                </div>
              {/* Mobile menu button */}
              <div className="sm:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  aria-expanded="false"
                  id="mobile-menu-button"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="sm:hidden hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="bg-gray-100 text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>

            <div className="relative">
              <button className="w-full text-left text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium flex items-center justify-between mobile-dropdown-trigger">
                Products
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className="hidden px-4 py-2 mobile-dropdown-content">
                <div className="border-l-2 border-indigo-500 pl-2 mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Software</h4>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-indigo-600 block"
                      >
                        Web Development
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-indigo-600 block"
                      >
                        Mobile Apps
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-indigo-600 block"
                      >
                        Desktop Software
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="border-l-2 border-indigo-500 pl-2">
                  <h4 className="font-medium text-gray-900 mb-2">Hardware</h4>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-indigo-600 block"
                      >
                        Laptops
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-indigo-600 block"
                      >
                        Desktops
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-indigo-600 block"
                      >
                        Accessories
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <a
              href="#"
              className="text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>

            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-3 space-y-2 flex-col">
                {isloggedIn ?(
                <div>
                    <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
              <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><a onClick={()=>{localStorage.removeItem("token");
                                    navigate("/Login");
                                             
              }}>Logout</a></li>
              </ul>
                </div>
                </div>
                ):(
                   <div>
                  <a
                  href="/Login"
                  className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
                >
                Login
                </a>
                <a
                  href="/Registration"
                  className="ml-4 bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700"
                >
                Sign in
                </a>
                </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

     
      
    </div>
  );
}
