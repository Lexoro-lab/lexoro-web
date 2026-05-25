'use client'
import { useEffect, useRef } from 'react'

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let W = 0, H = 0
    const mouse = { x: -999, y: -999 }
    let animId: number

    class Particle {
      x = 0; y = 0; r = 0; vx = 0; vy = 0; a = 0; blue = false
      constructor() { this.reset() }
      reset() {
        this.x = Math.random() * W
        this.y = Math.random() * H
        this.r = Math.random() * 1.2 + 0.3
        this.vx = (Math.random() - 0.5) * 0.25
        this.vy = (Math.random() - 0.5) * 0.25
        this.a = Math.random() * 0.3 + 0.05
        this.blue = Math.random() > 0.82
      }
      update() {
        this.x += this.vx; this.y += this.vy
        const dx = this.x - mouse.x, dy = this.y - mouse.y
        const d = Math.sqrt(dx * dx + dy * dy)
        if (d < 100) { this.x += dx / d * 0.6; this.y += dy / d * 0.6 }
        if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset()
      }
      draw() {
        ctx!.beginPath()
        ctx!.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        ctx!.fillStyle = this.blue ? '#004aad' : '#ffffff'
        ctx!.globalAlpha = this.a
        ctx!.fill()
        ctx!.globalAlpha = 1
      }
    }

    let pts: Particle[] = []

    function resize() {
      W = canvas!.width = window.innerWidth
      H = canvas!.height = window.innerHeight
      pts = Array.from({ length: 100 }, () => new Particle())
    }

    function loop() {
      ctx!.clearRect(0, 0, W, H)
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 80) {
            ctx!.beginPath()
            ctx!.moveTo(pts[i].x, pts[i].y)
            ctx!.lineTo(pts[j].x, pts[j].y)
            ctx!.strokeStyle = `rgba(255,255,255,${0.03 * (1 - d / 80)})`
            ctx!.lineWidth = 0.4
            ctx!.stroke()
          }
        }
      }
      pts.forEach(p => { p.update(); p.draw() })
      animId = requestAnimationFrame(loop)
    }

    const handleMouse = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY }
    window.addEventListener('mousemove', handleMouse)
    window.addEventListener('resize', resize)
    resize()
    loop()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', handleMouse)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  )
}