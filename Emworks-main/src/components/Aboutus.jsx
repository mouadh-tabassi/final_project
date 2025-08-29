import React from 'react'

const Aboutus = () => {
  return (
    <div>
        <section class="relative bg-gradient-to-r from-slate-100 to-gray-100 py-16 px-8 overflow-hidden">
  <div class="absolute inset-0 w-full h-full -z-10">
    <svg class="w-full h-full" viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <defs>
        <pattern id="dots" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="rotate(45)">
          <circle cx="10" cy="10" r="2" fill="#3B82F6" opacity="0.1" />
        </pattern>
      </defs>
      <rect width="1440" height="800" fill="url(#dots)" />
    </svg>
  </div>

  <div class="max-w-7xl mx-auto relative z-20 grid md:grid-cols-2 gap-12 items-center">
    <div class="p-8 bg-white bg-opacity-90 rounded-xl shadow-lg backdrop-blur-lg hover:scale-105 transform transition duration-300 ease-in-out">
      <h2 class="text-4xl font-extrabold text-gray-800 mb-4">About EMWorks</h2>
      <p class="text-gray-600 mb-6 text-lg">
        Welcome to EMWorks, a pioneer in accessible electromagnetic simulation software. Our flagship product, EMWORKS , is an all-in-one simulation solution designed to meet a broad range of requirements, from DC to mmWave, empowering engineers and researchers in electrical and electronics design across a wide range of industries.
      </p>
      <div class="space-y-6">
        <div class="flex items-center space-x-4 p-4 bg-gradient-to-tr from-blue-400 to-red-400 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <div class="p-3 bg-white rounded-full shadow-lg hover:scale-110 transform transition duration-300">
            <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17 20v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2H17z" />
              <circle cx="12" cy="8" r="4" />
            </svg>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-gray-700">Easy to Use</h3>
            <p class="text-white text-sm">Simplified interfaces, intuitive workflows, and user-friendly features make EMWORKS approachable for both experienced engineers and beginners.</p>
          </div>
        </div>

        <div class="flex items-center space-x-4 p-4 bg-gradient-to-tr from-blue-400 to-red-400 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <div class="p-3 bg-white rounded-full shadow-lg hover:scale-110 transform transition duration-300">
            <svg class="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 21h6v-1H9v1zm3-18a4 4 0 00-4 4c0 1.38.56 2.63 1.46 3.54A5.978 5.978 0 009 12h6a5.978 5.978 0 00-1.46-3.46A4 4 0 0015 7a4 4 0 00-4-4z" />
            </svg>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-gray-700">For Designers and CAE Experts</h3>
            <p class="text-white text-sm">Whether transitioning from a CAD background to simulation or as a seasoned CAE expert, EMWORKS caters to users across all levels of expertise.</p>
          </div>
        </div>

        <div class="flex items-center space-x-4 p-4 bg-gradient-to-tr from-blue-400 to-red-400 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
          <div class="p-3 bg-white rounded-full shadow-lg hover:scale-110 transform transition duration-300">
            <svg class="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 14c-1.33 0-2.53.53-3.41 1.39A4.993 4.993 0 0012 20c1.33 0 2.53-.53 3.41-1.39A4.993 4.993 0 0016 14zM8 14c-1.33 0-2.53.53-3.41 1.39A4.993 4.993 0 004 20c1.33 0 2.53-.53 3.41-1.39A4.993 4.993 0 008 14zM12 4c-2.21 0-4 1.79-4 4 0 1.66 1.34 3 3 3h2c1.66 0 3-1.34 3-3 0-2.21-1.79-4-4-4z" />
            </svg>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-gray-700">Multiphysics Capabilities</h3>
            <p class="text-white text-sm">Integrated circuit, thermal, structural, and motion analysis are at your fingertips, providing exceptional versatility, precision, and ease of use for tackling complex engineering challenges.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="relative p-4">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-400 to-red-400 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"></div>
      <img src='https://www.emworks.com/images/home/product.jpeg' alt="About Us" class="relative rounded-xl  object-cover w-full h-full hover:opacity-90 transition-opacity duration-300 animate-spin-slow" />
    </div>
  </div>
</section>
      
    </div>
  )
}

export default Aboutus
