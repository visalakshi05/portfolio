'use client'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { BiUser } from 'react-icons/bi'

const Hero: React.FC = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-20 px-4 pb-5 sm:pb-0">

      <div className="max-w-7xl mx-auto">
        {/* Single bordered container with all content */}
        <div className="bg-gray-900/90 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-2xl p-6 sm:p-10 lg:p-16 border border-violet-500/20">
          <div className="w-full h-1 bg-gradient-to-r from-violet-500 to-purple-600 mb-6 sm:mb-8 rounded-full"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center mb-8 sm:mb-12">

            {/* Left - Main Content */}
            <div className="lg:col-span-2 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 sm:mb-8 lg:mb-10 leading-tight">
                Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-500">Visalakshi</span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-violet-300 mb-6 sm:mb-8 lg:mb-10 italic">
                BTech Artificial Intelligence and Data Science 3rd Year Student
              </p>

              <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto lg:mx-0">
                I'm a passionate technology enthusiast dedicated to crafting innovative solutions that
                enhance user experiences. With a strong foundation in AI/ML and a keen interest in solving
                complex problems through intelligent systems.
              </p>

              <blockquote className="bg-violet-900/30 border-l-4 border-violet-500 p-4 sm:p-6 lg:p-8 italic text-violet-200 backdrop-blur-sm rounded-r-lg text-base sm:text-lg lg:text-xl max-w-4xl mx-auto lg:mx-0">
                "Transforming ideas into intelligent solutions through technology and innovation."
              </blockquote>
            </div>

            {/* Right - Profile Image - Responsive sizing */}
            <div className="flex justify-center lg:justify-end order-first lg:order-last">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-violet-500 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                    <BiUser className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-violet-300" />
                  </div>
                </div>
                
                {/* Violet 'V' Overlay - Responsive sizing */}
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 lg:top-6 lg:right-6 xl:top-8 xl:right-8 text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-extrabold text-violet-400 opacity-30 select-none pointer-events-none z-10">
                  V
                </div>
              </div>
            </div>

          </div>

          {/* Social Links & Resume - Mobile-first responsive layout */}
          <div className="flex flex-col gap-4 sm:gap-6 pt-6 lg:pt-8 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-4 sm:gap-6">
              {/* Social Links - Centered on mobile */}
              <div className="flex gap-4 sm:gap-6 justify-center sm:justify-start">
                <a 
                  href="#"
                  className="p-3 sm:p-4 bg-violet-800/30 hover:bg-violet-700/50 rounded-full text-violet-300 hover:text-white transition-all duration-300 border border-violet-500/30"
                  title="GitHub"
                >
                  <FaGithub size={20} className="sm:w-7 sm:h-7" />
                </a>
                <a 
                  href="#"
                  className="p-3 sm:p-4 bg-violet-800/30 hover:bg-violet-700/50 rounded-full text-violet-300 hover:text-white transition-all duration-300 border border-violet-500/30"
                  title="LinkedIn"
                >
                  <FaLinkedin size={20} className="sm:w-7 sm:h-7" />
                </a>
              </div>
              
              {/* Resume Button - Full width on mobile, auto width on larger screens */}
              <button className="w-full sm:w-auto bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-700 hover:to-purple-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-violet-500/25 font-semibold text-sm sm:text-base">
                View Resume
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
