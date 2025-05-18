'use client'

import { Instagram, Github, Twitter, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative z-10 mt-32 px-6 py-16 bg-gradient-to-tr from-pink-100 via-blue-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-black text-center border-t border-border">
      {/* Sparkle icon accent */}
      <Sparkles className="absolute -top-4 left-6 text-pink-300 w-6 h-6 animate-pulse opacity-60" />
      <Sparkles className="absolute bottom-8 right-6 text-blue-300 w-5 h-5 animate-bounce opacity-50" />

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl md:text-4xl font-extrabold mb-6 text-pink-500"
      >
        blinklyy
      </motion.h2>

      <nav className="flex flex-wrap justify-center gap-6 text-sm md:text-base text-muted-foreground mb-6">
        <Link href="#features" className="hover:text-pink-500 transition">Features</Link>
        <Link href="#pricing" className="hover:text-pink-500 transition">Pricing</Link>
        <Link href="#faq" className="hover:text-pink-500 transition">FAQ</Link>
        <Link href="#showcase" className="hover:text-pink-500 transition">Showcase</Link>
      </nav>

      <div className="flex justify-center gap-6 mb-4">
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <Instagram className="text-muted-foreground hover:text-pink-500 transition h-5 w-5" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <Twitter className="text-muted-foreground hover:text-pink-500 transition h-5 w-5" />
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <Github className="text-muted-foreground hover:text-pink-500 transition h-5 w-5" />
        </a>
      </div>

      <p className="text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} blinklyy. All rights reserved.
      </p>
    </footer>
  )
}
