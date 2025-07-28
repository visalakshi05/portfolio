import Hero from './components/Hero'
import Navigation from './components/Navigation'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-violet-900 to-purple-900">
      <Hero />
      <Navigation />
    </main>
  )
}
