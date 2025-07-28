'use client'
import React, { useState } from 'react'
import { IoSend } from 'react-icons/io5'
import { FiUser, FiMail, FiMessageSquare } from 'react-icons/fi'
import { HiLocationMarker, HiMail } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

interface FormData {
  fullName: string
  email: string
  message: string
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setFormData({ fullName: '', email: '', message: '' })
      alert('Message sent successfully!')
    } catch (error) {
      alert('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const email = "visalakshivr05@gmail.com"
  const location = "Chennai, Tamil Nadu"
  const socials = [
    { icon: FaGithub, name: "GitHub", href: "#" },
    { icon: FaLinkedin, name: "LinkedIn", href: "#" },
    { icon: FaTwitter, name: "Twitter", href: "#" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-violet-900 to-purple-900 flex items-center justify-center p-4 pb-5 sm:pb-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="bg-gray-900/90 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-2xl border border-violet-500/20 p-4 sm:p-8 lg:p-12">
          <div className="w-full h-1 bg-gradient-to-r from-violet-500 to-purple-600 mb-6 sm:mb-8 rounded-full"></div>
          
          {/* Mobile-first grid layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            
            {/* Contact Info Section */}
            <aside className="flex flex-col justify-between py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-10 border-b lg:border-b-0 lg:border-r border-violet-600/20 order-2 lg:order-1">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-violet-300 mb-6 sm:mb-8 text-center lg:text-left">Contact Info</h2>
                
                {/* Email */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <HiMail className="text-violet-400 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                    <span className="text-white font-semibold text-sm sm:text-base">Email:</span>
                  </div>
                </div>
                <p className="text-violet-200 mb-5 sm:mb-7 ml-7 sm:ml-9 text-sm sm:text-base break-all">{email}</p>
                
                {/* Location */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <HiLocationMarker className="text-violet-400 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                    <span className="text-white font-semibold text-sm sm:text-base">Location:</span>
                  </div>
                </div>
                <p className="text-violet-200 ml-7 sm:ml-9 mb-5 sm:mb-7 text-sm sm:text-base">{location}</p>
              </div>
              
              {/* Social Links */}
              <div className="text-center lg:text-left">
                <h3 className="text-sm sm:text-base font-semibold text-violet-300 mb-3 sm:mb-4">Connect</h3>
                <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start">
                  {socials.map((social, i) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={i}
                        href={social.href}
                        className="p-2.5 sm:p-3 bg-violet-800/30 rounded-full text-violet-300 hover:text-white border border-violet-500/30 hover:bg-violet-700/50 transition-all duration-300"
                        title={social.name}
                      >
                        <Icon size={18} className="sm:w-6 sm:h-6" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </aside>
            
            {/* Form Section */}
            <div className="py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-10 flex items-center order-1 lg:order-2">
              <form onSubmit={handleSubmit} className="w-full space-y-4 sm:space-y-6">
                
                {/* Form Header */}
                <div className="text-center mb-4 sm:mb-6">
                  <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Get In Touch</h1>
                  <p className="text-violet-200 text-sm sm:text-base px-2">
                    Have a project in mind or want to contact me?
                  </p>
                </div>
                
                {/* Full Name Field */}
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-semibold text-white">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiUser className="h-4 w-4 sm:h-5 sm:w-5 text-violet-400" />
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-gray-800/50 border border-violet-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 focus:bg-gray-700/50 transition-all duration-200 text-white placeholder:text-violet-300/70 text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>
                
                {/* Email Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-white">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiMail className="h-4 w-4 sm:h-5 sm:w-5 text-violet-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-gray-800/50 border border-violet-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 focus:bg-gray-700/50 transition-all duration-200 text-white placeholder:text-violet-300/70 text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>
                
                {/* Message Field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-white">Your Message</label>
                  <div className="relative">
                    <div className="absolute top-2.5 sm:top-3 left-3 pointer-events-none">
                      <FiMessageSquare className="h-4 w-4 sm:h-5 sm:w-5 text-violet-400" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or idea..."
                      rows={4}
                      className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-gray-800/50 border border-violet-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 focus:bg-gray-700/50 transition-all duration-200 resize-none text-white placeholder:text-violet-300/70 text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-700 hover:to-purple-800 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-violet-500/25 text-sm sm:text-base ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-xl transform hover:scale-[1.02]'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white"></div>
                      <span className="text-white">Sending...</span>
                    </>
                  ) : (
                    <>
                      <span className="text-white">Send Message</span>
                      <IoSend className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
