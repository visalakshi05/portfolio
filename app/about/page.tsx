'use client'
import About from '../components/About'
import Navigation from '../components/Navigation'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-violet-900 to-purple-900">
        <About />
        <Navigation />
    </main>
  )
}
