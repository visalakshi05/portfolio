'use client'
import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { BiUser } from 'react-icons/bi'

const Hero: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Single bordered container with all content */}
        <div className="bg-gray-900/90 backdrop-blur-lg rounded-2xl shadow-2xl p-16 border border-violet-500/20">
          <div className="w-full h-1 bg-gradient-to-r from-violet-500 to-purple-600 mb-8 rounded-full"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mb-12">

            {/* Left - Main Content */}
            <div className="lg:col-span-2">
              <h1 className="text-6xl font-extrabold text-white mb-10">
                Hello, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-500">Visalakshi</span>
              </h1>

              <p className="text-3xl text-violet-300 mb-10 italic">
                BTech Artificial Intelligence and Data Science 3rd Year Student
              </p>

              <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl">
                I'm a passionate technology enthusiast dedicated to crafting innovative solutions that
                enhance user experiences. With a strong foundation in AI/ML and a keen interest in solving
                complex problems through intelligent systems.
              </p>

              <blockquote className="bg-violet-900/30 border-l-4 border-violet-500 p-8 italic text-violet-200 backdrop-blur-sm rounded-r-lg text-xl max-w-4xl">
                "Transforming ideas into intelligent solutions through technology and innovation."
              </blockquote>
            </div>

            {/* Right - Profile Image with Increased Width */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-96 h-96">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-violet-500 to-purple-600 p-1">
                  <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                    <BiUser className="text-[7rem] text-violet-300" />
                  </div>
                </div>
                
                {/* Violet 'V' Overlay - Positioned in image region */}
                <div className="absolute top-8 right-8 text-[6rem] font-extrabold text-violet-400 opacity-30 select-none pointer-events-none z-10">
                  V
                </div>
              </div>
            </div>

          </div>

          {/* Social Links & Resume - Inline, balanced layout */}
          <div className="flex flex-col gap-6 pt-8 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-6">
              {/* Social Links */}
              <div className="flex gap-6">
                <a 
                  href="#"
                  className="p-4 bg-violet-800/30 hover:bg-violet-700/50 rounded-full text-violet-300 hover:text-white transition-all duration-300 border border-violet-500/30"
                  title="GitHub"
                >
                  <FaGithub size={28} />
                </a>
                <a 
                  href="#"
                  className="p-4 bg-violet-800/30 hover:bg-violet-700/50 rounded-full text-violet-300 hover:text-white transition-all duration-300 border border-violet-500/30"
                  title="LinkedIn"
                >
                  <FaLinkedin size={28} />
                </a>
                
              </div>
              {/* Resume Button - Inline, right-aligned */}
              <button className="bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-700 hover:to-purple-800 text-white px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-violet-500/25 font-semibold">
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
