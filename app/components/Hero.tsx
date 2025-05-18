'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { SparklesCore } from './effects/SparklesCore'
import { StarsField } from './effects/StarField'

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 text-center overflow-hidden bg-gradient-to-br from-pink-100 via-blue-100 to-white dark:from-gray-900 dark:to-black">
      {/* Sparkling animated background effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <SparklesCore
          background="transparent"
          minSize={8}
          maxSize={12}
          particleDensity={50}
          particleColor="#ec4899"
          className="w-full h-full"
        />
      </div>

      {/* Decorative Sparkle Stars */}
      <Star className="absolute top-10 left-10 text-pink-300 w-6 h-6 animate-pulse opacity-70" />
      <Star className="absolute top-20 right-16 text-blue-300 w-5 h-5 animate-ping opacity-60" />
      <Star className="absolute bottom-16 left-20 text-yellow-300 w-6 h-6 animate-bounce opacity-50" />
      <Star className="absolute bottom-10 right-10 text-violet-300 w-8 h-8 animate-spin-slow opacity-40" />

      {/* Abstract Blob Corners */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" />
      <div className="absolute -bottom-32 -right-24 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-float-slower" />

      {/* Hero content */}
      <motion.h1
        className="relative z-10 lg:text-8xl text-5xl md:text-6xl font-extrabold leading-tight mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Make Your <span className="text-pink-500">Bio Blink!</span>
      </motion.h1>
      <motion.p
        className="relative z-10 text-2xl font-bold md:text-xl text-gray-500 dark:text-gray-300 mb-8 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        ✨The cutest, sleekest way to link your world ✨
      </motion.p>
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
      >
        <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-5 rounded-full text-4xl font-extrabold shadow-lg transition-all duration-200 mt-10">
          Create Your Page
        </button>
      </motion.div>
    </section>
  )
}
