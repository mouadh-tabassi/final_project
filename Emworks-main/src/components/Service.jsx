import React,{useEffect}from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
const Service = () => {
    useEffect(() => {
        AOS.init({ duration: 800, once: true }); // once:true = animate only the first time
      }, []);
  return (
    <div data-aos="fade-up">
        <h1 className='text-4xl font-bold mt-2 mb-6 text-center'>Why Choose EMWorks Services?</h1>
        <p className='text-center px-4 leading-relaxed'>Discover why EMWorks is your trusted partner for accessible, innovative, and optimized solutions.</p>
       <div class="max-w-6xl mx-auto py-20 px-4">
        <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                <h3 class="text-xl font-bold mb-4">Proven Results & Expertise</h3>
                <p class="text-gray-600">Our seasoned engineers deliver consistent, high-quality results.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                <h3 class="text-xl font-bold mb-4">Optimize Designs & Save Time</h3>
                <p class="text-gray-600">We refine designs, streamline workflows, and accelerate product launches.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                <h3 class="text-xl font-bold mb-4">Data-Driven Insights</h3>
                <p class="text-gray-600">Real-world simulation data to guide confident decisions.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                <h3 class="text-xl font-bold mb-4">Data-Driven Insights</h3>
                <p class="text-gray-600">Tailored solutions designed specifically for your needs.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                <h3 class="text-xl font-bold mb-4">Innovation Unleashed</h3>
                <p class="text-gray-600">We push boundaries to deliver groundbreaking solutions.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                <h3 class="text-xl font-bold mb-4">Seamless Integration</h3>
                <p class="text-gray-600">Smooth adoption into your existing tools and workflows.</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                <h3 class="text-xl font-bold mb-4">Global Accessibility</h3>
                <p class="text-gray-600">Worldwide service ensures innovation without limits.</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Service
