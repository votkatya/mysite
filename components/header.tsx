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
              className="text-xl font-bold text-[#8B9556] hover:text-[#a3ab6b] transition-all"
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
                className="text-gray-300 hover:text-[#8B9556] transition-colors text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Button
              className="bg-[#8B9556] hover:bg-[#a3ab6b] text-white transition-all duration-300 hover:scale-105"
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
