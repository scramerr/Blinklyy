'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

type Star = {
  id: number
  x: number
  y: number
  size: number
  delay: number
}

export function StarsField() {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    const newStars: Star[] = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 4,
      delay: Math.random() * 5,
    }))
    setStars(newStars)
  }, [])

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-purple-500 opacity-80 shadow-md"
          style={{
            top: `${star.y}%`,
            left: `${star.x}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{ opacity: [0.3, 1, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
            delay: star.delay,
          }}
        />
      ))}
    </div>
  )
}
