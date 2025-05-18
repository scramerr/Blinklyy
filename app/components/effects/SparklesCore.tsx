'use client'

import { useEffect, useRef } from 'react'

export function SparklesCore({
  className,
  particleDensity = 80,
  particleColor = '#ec4899',
  minSize = 1,
  maxSize = 3,
  background = 'transparent',
}: {
  className?: string
  particleDensity?: number
  particleColor?: string
  minSize?: number
  maxSize?: number
  background?: string
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = canvas.width = window.innerWidth
    let height = canvas.height = window.innerHeight

    const resize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: particleDensity }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * (maxSize - minSize) + minSize,
      speed: Math.random() * 0.3 + 0.2,
      opacity: Math.random() * 0.3 + 0.2,
    }))

    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${hexToRgb(particleColor)}, ${p.opacity})`
        ctx.fill()
        p.y += p.speed
        if (p.y > height) {
          p.y = 0
          p.x = Math.random() * width
        }
      }
      requestAnimationFrame(animate)
    }

    animate()
    return () => window.removeEventListener('resize', resize)
  }, [])

  const hexToRgb = (hex: string) => {
    const bigint = parseInt(hex.replace('#', ''), 16)
    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255
    return `${r}, ${g}, ${b}`
  }

  return (
    <canvas
      ref={canvasRef}
      className={`absolute top-0 left-0 w-full h-full ${className}`}
      style={{ background }}
    />
  )
}
