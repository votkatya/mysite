"use client"

import { Send, Mail, Linkedin } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { icon: Send, href: "https://t.me/votkatya", label: "Telegram" },
    { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  return (
    <footer className="relative bg-gray-950 border-t border-white/10">
      <div className="container mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-[#8B9556] mb-2">
              Катя Щербакова
            </h3>
            <p className="text-gray-400 text-sm">
              Автоматизация и оптимизация бизнеса
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900 hover:bg-[#8B9556]/20 border border-white/10 hover:border-[#8B9556]/50 rounded-lg transition-all duration-300"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 text-gray-400 hover:text-[#8B9556]" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Катя Щербакова
            </p>
            <p className="text-gray-600 text-xs mt-1">Все права защищены</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
