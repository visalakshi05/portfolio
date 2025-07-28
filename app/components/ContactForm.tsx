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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-violet-900 to-purple-900 flex items-center justify-center p-4">
      {/* Increased max-w-6xl for a wider card, px-2 for wider screens */}
      <div className="w-full max-w-6xl mx-auto">
        <div className="bg-gray-900/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-violet-500/20 p-0 sm:p-12">
          <div className="w-full h-1 bg-gradient-to-r from-violet-500 to-purple-600 mb-8 rounded-full"></div>
          {/* grid-cols-1 md:grid-cols-2 with larger min-w, smaller gap-0 keeps everything together */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Left - Info */}
            <aside className="flex flex-col justify-between py-8 px-10 border-b md:border-b-0 md:border-r border-violet-600/20">
              <div>
                <h2 className="text-2xl font-bold text-violet-300 mb-8">Contact Info</h2>
                <div className="flex items-center gap-3 mb-4">
                  <HiMail className="text-violet-400 w-6 h-6" />
                  <span className="text-white font-semibold">Email:</span>
                </div>
                <p className="text-violet-200 mb-7 ml-9">{email}</p>
                <div className="flex items-center gap-3 mb-4">
                  <HiLocationMarker className="text-violet-400 w-6 h-6" />
                  <span className="text-white font-semibold">Location:</span>
                </div>
                <p className="text-violet-200 ml-9 mb-7">{location}</p>
              </div>
              <div>
                <h3 className="text-md font-semibold text-violet-300 mb-4">Connect</h3>
                <div className="flex gap-4">
                  {socials.map((social, i) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={i}
                        href={social.href}
                        className="p-3 bg-violet-800/30 rounded-full text-violet-300 hover:text-white border border-violet-500/30 hover:bg-violet-700/50 transition"
                        title={social.name}
                      >
                        <Icon size={22} />
                      </a>
                    )
                  })}
                </div>
              </div>
            </aside>
            {/* Right - Form */}
            <div className="py-8 px-10 flex items-center">
              <form onSubmit={handleSubmit} className="w-full space-y-6">
                <div className="text-center mb-2">
                  <h1 className="text-3xl font-bold text-white mb-2">Get In Touch</h1>
                  <p className="text-violet-200 text-base">
                    Have a project in mind or want to contact me?
                  </p>
                </div>
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-semibold text-white">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiUser className="h-5 w-5 text-violet-400" />
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-violet-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 focus:bg-gray-700/50 transition-all duration-200 text-white placeholder:text-violet-300/70"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-white">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiMail className="h-5 w-5 text-violet-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-violet-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 focus:bg-gray-700/50 transition-all duration-200 text-white placeholder:text-violet-300/70"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-white">Your Message</label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <FiMessageSquare className="h-5 w-5 text-violet-400" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or idea..."
                      rows={5}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-violet-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 focus:bg-gray-700/50 transition-all duration-200 resize-none text-white placeholder:text-violet-300/70"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-700 hover:to-purple-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-violet-500/25 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-xl transform hover:scale-[1.02]'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span className="text-white">Sending...</span>
                    </>
                  ) : (
                    <>
                      <span className="text-white">Send Message</span>
                      <IoSend className="h-5 w-5 text-white" />
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
