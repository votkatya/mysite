"use client"

import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"

export function Header() {
  const navigation = [
    { name: "Кто я", href: "#about" },
    { name: "Что могу", href: "#services" },
    { name: "Как поработать", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Name */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-purple-300 hover:to-pink-300 transition-all"
            >
              Катя Щербакова
            </a>
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Button
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/30"
              onClick={() => window.open('https://t.me/votkatya', '_blank')}
            >
              <Send className="w-4 h-4 mr-2" />
              Написать в Telegram
            </Button>

            {/* Mobile menu button - можно добавить позже */}
            {/* <button className="md:hidden text-white">
              <Menu className="w-6 h-6" />
            </button> */}
          </div>
        </div>
      </div>
    </header>
  )
}
