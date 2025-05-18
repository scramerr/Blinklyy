'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {LogIn, Rocket} from "lucide-react"


export default function Navbar() {
  const navLinks = ['Features', 'Testimonials', 'Pricing', 'Faq']

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-white/60 dark:bg-black/30 border-b border-white/20 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-4xl font-extrabold text-pink-500 tracking-tight">
          blinklyy
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={`#${link.toLowerCase()}`}
              whileHover={{ scale: 1.05 }}
              className="text-gray-700 dark:text-gray-200 text-[18px] font-bold relative group transition"
            >
              {link}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-pink-400 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </nav>

        {/* CTA */}

        <div className="flex items-center gap-3">
          {/* Login - secondary button */}
          <Button
            variant="ghost"
            className="text-sm text-white bg-gray-900 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full px-8 py-2"
          >
            <LogIn className="w-4 h-4 mr-2" />
            Login
          </Button>

          {/* Get Started - primary button */}
          <Button
            variant="default"
            className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-5 py-2 text-sm font-semibold shadow flex items-center"
          >
            <Rocket className="w-4 h-4 mr-2" />
            Get Started
          </Button>
        </div>


      </div>
    </header>
  )
}
