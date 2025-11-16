'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const isDarkMode = document.documentElement.classList.contains('dark')
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    if (!mounted) return
    
    const newIsDark = !isDark
    setIsDark(newIsDark)
    
    if (newIsDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  if (!mounted) return null

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors focus-visible:outline-offset-2 focus-visible:outline-2 focus-visible:outline-ring"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun size={20} className="text-primary" />
      ) : (
        <Moon size={20} className="text-secondary" />
      )}
    </button>
  )
}
