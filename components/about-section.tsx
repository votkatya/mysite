"use client"

import { User, Award, Target } from "lucide-react"

export function AboutSection() {
  const highlights = [
    {
      icon: User,
      title: "Опыт",
      description: "Более 5 лет в digital-маркетинге и автоматизации бизнеса",
    },
    {
      icon: Award,
      title: "Результаты",
      description: "Помогла 50+ компаниям оптимизировать процессы и увеличить прибыль",
    },
    {
      icon: Target,
      title: "Подход",
      description: "Индивидуальные решения под конкретные задачи вашего бизнеса",
    },
  ]

  return (
    <section id="about" className="relative py-24 bg-gray-900">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Кто <span className="text-[#8B9556]">я</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Меня зовут Катя Щербакова. Я помогаю предпринимателям и компаниям
            автоматизировать рутинные процессы, выстраивать эффективные системы
            и масштабировать бизнес.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="bg-gray-800/50 border border-white/10 rounded-xl p-8 hover:bg-gray-800 transition-all duration-300 hover:border-[#8B9556]/50"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-[#8B9556]/10 rounded-lg">
                  <item.icon className="w-8 h-8 text-[#8B9556]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
