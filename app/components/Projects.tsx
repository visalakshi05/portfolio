'use client'
import React from 'react'
import { FaGithub, FaExternalLinkAlt, FaEye } from 'react-icons/fa'
import { BiTime } from 'react-icons/bi'

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  category: string
  status?: 'Completed' | 'In Progress' | 'Planned'
  githubUrl?: string
  demoUrl?: string
  year?: string
}


const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Speech to Speech Converter",
      description: "AI-powered real-time voice conversion system with Whisper speech recognition and LLM response generation",
      technologies: ["Python", "FastAPI", "ReactJS", "Whisper", "gtts"],
      category: "AI/ML",
      status: "Completed",
      year: "2024",
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      id: 2,
      title: "Hand Gesture Virtual Mouse",
      description: "Computer vision application that controls cursor movements through real-time hand gesture detection",
      technologies: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI"],
      category: "Computer Vision",
      status: "Completed",
      year: "2024",
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      id: 3,
      title: "AI Chatbot",
      description: "Dynamic conversational interface with real-time messaging, auto-scrolling, and smart prompt suggestions",
      technologies: ["ReactJS", "JavaScript"],
      category: "NLP",
      status: "Completed",
      year: "2024",
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      id: 4,
      title: "Multi-threaded Chat Application",
      description: "Concurrent messaging platform with Swing GUI and persistent chat history storage",
      technologies: ["Java", "Swing"],
      category: "Application",
      status: "Completed",
      year: "2023",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Bilateral Image Filtering",
      description: "Custom edge-preserving denoising algorithm for medical imaging and artistic image processing",
      technologies: ["Python", "OpenCV"],
      category: "Computer Vision",
      status: "Completed",
      year: "2023",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Cache Memory Simulation",
      description: "Multi-level cache hierarchy simulator with Direct-mapped, Fully Associative, and Set Associative caches",
      technologies: ["Python"],
      category: "System Design",
      status: "Completed",
      year: "2023",
      githubUrl: "#"
    },
    {
      id: 7,
      title: "Customer Feedback Management System",
      description: "Full-stack feedback platform with admin dashboard and real-time analytics visualization",
      technologies: ["JavaScript", "NodeJS", "MySQL"],
      category: "Web Development",
      status: "Completed",
      year: "2023",
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      id: 8,
      title: "Car Price Prediction",
      description: "Machine learning model for accurate second-hand car valuation using regression algorithms",
      technologies: ["Python", "Scikit-Learn"],
      category: "Machine Learning",
      status: "Completed",
      year: "2023",
      githubUrl: "#"
    },
    {
      id: 9,
      title: "Hall Effect Door Bell",
      description: "Touchless doorbell system using magnetic field detection for reliable activation",
      technologies: ["Hall Effect", "Microcontroller"],
      category: "Embedded Systems",
      status: "Completed",
      year: "2023",
      githubUrl: "#"
    },
    {
      id: 10,
      title: "Online Shopping Website",
      description: "Static e-commerce platform with product listing and client-side cart management",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Web Development",
      status: "Completed",
      year: "2022",
      githubUrl: "#",
      demoUrl: "#"
    }
  ];

  const getCategoryBadgeClasses = (category: string): string => {
    const badgeClasses = {
      'AI/ML': 'bg-gradient-to-r from-violet-600 to-purple-700 text-white shadow-violet-400/70',
      'Computer Vision': 'bg-gradient-to-r from-indigo-600 to-blue-800 text-white shadow-indigo-400/70',
      NLP: 'bg-gradient-to-r from-green-600 to-teal-700 text-white shadow-green-400/70',
      Application: 'bg-gradient-to-r from-orange-600 to-yellow-700 text-white shadow-orange-400/70',
      'System Design': 'bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-gray-400/70',
      'Web Development': 'bg-gradient-to-r from-cyan-700 to-blue-900 text-white shadow-cyan-400/70',
      'Machine Learning': 'bg-gradient-to-r from-pink-600 to-fuchsia-700 text-white shadow-pink-400/60',
      'Embedded Systems': 'bg-gradient-to-r from-yellow-500 to-amber-600 text-white shadow-yellow-400/60'
    }
    return badgeClasses[category as keyof typeof badgeClasses] ?? 'bg-gray-800 text-white shadow-gray-400/60'
  }

  const handleViewDetails = (project: Project): void => {
    // Custom detail logic
  }
  const handleSourceCode = (githubUrl?: string): void => {
    if (githubUrl && githubUrl !== '#') window.open(githubUrl, '_blank')
  }
  const handleDemo = (demoUrl?: string): void => {
    if (demoUrl && demoUrl !== '#') window.open(demoUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-violet-950 to-purple-900 py-12 px-4">
      <div className="text-center mb-16 max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
          My Projects
        </h1>
        <p className="text-lg text-violet-300 mb-10 leading-relaxed">Innovative solutions showcasing my technical expertise</p>
        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-16">
          <div className="text-center">
            <span className="block text-4xl font-extrabold text-violet-400 mb-1">{projects.length}</span>
            <span className="text-sm uppercase tracking-wider text-violet-500">Total Projects</span>
          </div>
          <div className="text-center">
            <span className="block text-4xl font-extrabold text-violet-400 mb-1">
              {new Set(projects.map((p) => p.category)).size}
            </span>
            <span className="text-sm uppercase tracking-wider text-violet-500">Categories</span>
          </div>
          <div className="text-center">
            <span className="block text-4xl font-extrabold text-violet-400 mb-1">
              {projects.filter((p) => p.status === 'Completed').length}
            </span>
            <span className="text-sm uppercase tracking-wider text-violet-500">Completed</span>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto px-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-gray-900/90 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-violet-800"
          >
            {/* Category Badge - hidden until hover */}
            <div
              className={`
                absolute top-4 right-4 px-4 py-2 rounded-2xl text-xs font-bold uppercase tracking-wider
                z-50 transform transition-all duration-500
                opacity-0 scale-75 translate-y-2
                group-hover:opacity-100 group-hover:scale-110 group-hover:translate-y-0
                shadow-lg backdrop-blur-sm border-2 border-white/10
                ${getCategoryBadgeClasses(project.category)}
                group-hover:shadow-xl
              `}
            >
              {project.category}
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div>
                {/* Project Header */}
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-white leading-tight flex-grow">
                    {project.title}
                  </h2>
                  {project.year && (
                    <div className="flex items-center gap-1 text-violet-500 text-sm whitespace-nowrap">
                      <BiTime className="w-4 h-4" />
                      <span>{project.year}</span>
                    </div>
                  )}
                </div>
                <p className="text-violet-300 text-base leading-relaxed mb-7">
                  {project.description}
                </p>
                {/* Technologies */}
                <div className="">
                  <h3 className="text-xs font-bold text-violet-400 uppercase tracking-wider mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-sm transition-transform hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Footer */}
              <div className="flex items-center justify-between gap-x-3 gap-y-2 mt-8 flex-wrap">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-3 h-3 rounded-full animate-pulse ${
                      project.status === 'Completed' ? 'bg-green-500' : 'bg-yellow-500'
                    }`}
                  ></div>
                  <span className="text-xs text-violet-400 font-medium">
                    {project.status || 'Completed'}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleViewDetails(project)}
                    className="flex items-center gap-2 px-4 py-1.5 bg-violet-700 hover:bg-violet-600 text-white rounded-lg text-xs font-medium transition-all hover:-translate-y-0.5"
                    title="View Details"
                  >
                    <FaEye className="w-4 h-4" />
                    Details
                  </button>
                  <button
                    onClick={() => handleSourceCode(project.githubUrl)}
                    className="flex items-center gap-2 px-4 py-1.5 bg-violet-900 hover:bg-violet-800 text-white rounded-lg text-xs font-medium transition-all hover:-translate-y-0.5"
                    title="View Source Code"
                  >
                    <FaGithub className="w-4 h-4" />
                    Code
                  </button>
                  <button
                    onClick={() => handleDemo(project.demoUrl)}
                    className="flex items-center gap-2 px-4 py-1.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-xs font-medium transition-all hover:-translate-y-0.5"
                    title="View Live Demo"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    Demo
                  </button>
                </div>
              </div>
            </div>
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-800/30 to-purple-800/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0 rounded-2xl" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
