"use client"

import { Button } from "@/components/ui/button"
import { Send, Mail, MessageCircle } from "lucide-react"

export function ContactSection() {
  const contactMethods = [
    {
      icon: Send,
      title: "Telegram",
      description: "Быстрая связь в мессенджере",
      action: "Написать",
      link: "https://t.me/votkatya",
    },
    {
      icon: Mail,
      title: "Email",
      description: "Для официальных запросов",
      action: "Отправить письмо",
      link: "mailto:hello@example.com",
    },
    {
      icon: MessageCircle,
      title: "Консультация",
      description: "Бесплатная 30-минутная встреча",
      action: "Записаться",
      link: "#",
    },
  ]

  return (
    <section id="contact" className="relative py-24 bg-gray-900">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Как <span className="text-[#8B9556]">поработать</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Выберите удобный способ связи, и мы обсудим ваш проект
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method) => (
            <div
              key={method.title}
              className="bg-gray-800/50 border border-white/10 rounded-xl p-8 hover:bg-gray-800 transition-all duration-300 hover:border-[#8B9556]/50"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-[#8B9556]/10 rounded-lg">
                  <method.icon className="w-8 h-8 text-[#8B9556]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {method.title}
                </h3>
                <p className="text-gray-400 mb-6">{method.description}</p>
                <Button
                  className="bg-[#8B9556] hover:bg-[#a3ab6b] text-white transition-all duration-300 w-full"
                  onClick={() => window.open(method.link, "_blank")}
                >
                  {method.action}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-gray-800/30 border border-white/10 rounded-xl p-12">
          <h3 className="text-2xl font-bold text-white mb-4">
            Готовы начать?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Свяжитесь со мной в Telegram, и мы обсудим, как я могу помочь
            вашему бизнесу достичь новых высот
          </p>
          <Button
            size="lg"
            className="bg-[#8B9556] hover:bg-[#a3ab6b] text-white text-lg px-8 py-6 h-auto transition-all duration-300 hover:scale-105"
            onClick={() => window.open("https://t.me/votkatya", "_blank")}
          >
            <Send className="w-5 h-5 mr-2" />
            Написать в Telegram
          </Button>
        </div>
      </div>
    </section>
  )
}
