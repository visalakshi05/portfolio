'use client'
import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'

export default function Navigation() {
  const router = useRouter()
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState('home')

  const navItems = [
    { id: 'home', icon: AiOutlineHome, label: 'Home', path: '/' },
    { id: 'about', icon: AiOutlineUser, label: 'About', path: '/about' },
    { id: 'projects', icon: BiBook, label: 'Projects', path: '/projects' },
    { id: 'contact', icon: BiMessageSquareDetail, label: 'Contact', path: '/contact' }
  ]

  useEffect(() => {
    const currentNav = navItems.find(item => item.path === pathname)
    if (currentNav) {
      setActiveTab(currentNav.id)
    }
  }, [pathname])

  const handleNavigation = (path: string, id: string) => {
    setActiveTab(id)
    router.push(path)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-[9999]">
      <div className="bg-gray-900/80 backdrop-blur-xl rounded-full px-6 py-4 shadow-2xl border border-violet-500/30">
        <div className="flex gap-4">
          {navItems.map((item) => {
            const IconComponent = item.icon
            return (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.path, item.id)}
                className={`p-3 rounded-full transition-all duration-300 relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 ${
                  activeTab === item.id
                    ? 'bg-gradient-to-r from-violet-600 to-purple-700 text-white shadow-lg shadow-violet-500/40 scale-110'
                    : 'text-violet-300 hover:text-white hover:bg-violet-800/30 hover:scale-105'
                }`}
                title={item.label}
                aria-current={activeTab === item.id ? 'page' : undefined}
              >
                <IconComponent className="text-xl transition-colors duration-300" />

                {activeTab === item.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full blur-lg opacity-40 -z-10 scale-150"></div>
                )}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
