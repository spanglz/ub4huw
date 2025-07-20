"use client"

import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Получаем сохраненную тему из localStorage
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle("dark", savedTheme === "dark")
    } else {
      // По умолчанию темная тема
      setTheme("dark")
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="sm"
        className="border-amber-600 text-amber-400 hover:bg-amber-600 hover:text-white font-mono bg-transparent"
      >
        <Sun className="h-4 w-4" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="border-amber-600 text-amber-400 hover:bg-amber-600 hover:text-white font-mono bg-transparent"
    >
      <Sun className={`h-4 w-4 transition-all ${theme === "dark" ? "-rotate-90 scale-0" : "rotate-0 scale-100"}`} />
      <Moon
        className={`absolute h-4 w-4 transition-all ${theme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0"}`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
