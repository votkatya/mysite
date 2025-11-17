"use client"

import { Zap, BarChart, Settings, Lightbulb } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Zap,
      title: "Автоматизация процессов",
      description:
        "Настройка CRM, интеграции сервисов, автоматические воронки продаж",
      features: [
        "Настройка CRM-систем",
        "Автоматизация email-маркетинга",
        "Интеграция сервисов через API",
      ],
    },
    {
      icon: BarChart,
      title: "Аналитика и отчетность",
      description:
        "Сквозная аналитика, дашборды, отслеживание ключевых метрик",
      features: [
        "Настройка систем аналитики",
        "Создание дашбордов",
        "Отчеты по KPI",
      ],
    },
    {
      icon: Settings,
      title: "Оптимизация бизнес-процессов",
      description:
        "Аудит текущих процессов, выявление узких мест, внедрение улучшений",
      features: [
        "Аудит процессов",
        "Карта путей клиента",
        "Внедрение улучшений",
      ],
    },
    {
      icon: Lightbulb,
      title: "Консультации и стратегия",
      description:
        "Разработка стратегии роста, подбор инструментов, обучение команды",
      features: [
        "Стратегические сессии",
        "Подбор инструментов",
        "Обучение команды",
      ],
    },
  ]

  return (
    <section id="services" className="relative py-24 bg-gray-950">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Что <span className="text-[#8B9556]">могу</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Комплексные решения для развития и автоматизации вашего бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-gray-900/50 border border-white/10 rounded-xl p-8 hover:bg-gray-900 transition-all duration-300 hover:border-[#8B9556]/50 group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 p-3 bg-[#8B9556]/10 rounded-lg group-hover:bg-[#8B9556]/20 transition-colors">
                  <service.icon className="w-6 h-6 text-[#8B9556]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </div>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center text-gray-300 text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-[#8B9556] rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
