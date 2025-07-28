import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import LayoutWrapper from './components/LayoutWrapper' // Update this path if necessary

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Visalakshi VR - Portfolio',
  description: 'BTech Artificial Intelligence and Data Science 3rd Year Student Portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.className}`}>
        <LayoutWrapper>
          {children}
          </LayoutWrapper>
      </body>
    </html>
  )
}
