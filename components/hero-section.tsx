"use client"

import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const ratings = [
    { platform: "G2", rating: 4.8, reviews: "1.2k" },
    { platform: "Capterra", rating: 4.9, reviews: "850" },
    { platform: "Product Hunt", rating: 4.7, reviews: "2.1k" },
    { platform: "Trustpilot", rating: 4.8, reviews: "3.5k" },
  ]

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-purple-950 overflow-hidden pt-20">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-pink-900/20 via-transparent to-transparent" />

      <div className="container relative mx-auto max-w-6xl px-6 py-20 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content Section */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              <span className="text-white">Управляйте </span>
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                бизнесом
              </span>
              <br />
              <span className="text-white">на новом </span>
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-600 bg-clip-text text-transparent">
                уровне
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Платформа для автоматизации процессов, аналитики в реальном времени и роста вашего бизнеса.
              Всё в одном месте.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg px-8 py-6 h-auto transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/50"
              >
                Начать бесплатно
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-600 text-white hover:bg-white/10 text-lg px-8 py-6 h-auto transition-all duration-300"
              >
                Посмотреть демо
              </Button>
            </div>

            {/* Ratings */}
            <div className="pt-8">
              <p className="text-sm text-gray-400 mb-4 uppercase tracking-wider font-medium">
                Нам доверяют тысячи компаний
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {ratings.map((item) => (
                  <div
                    key={item.platform}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center gap-1 mb-2">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < Math.floor(item.rating)
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-semibold text-white ml-1">
                        {item.rating}
                      </span>
                    </div>
                    <p className="text-xs font-medium text-gray-400">
                      {item.platform}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {item.reviews} отзывов
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative order-first lg:order-last">
            <div className="relative aspect-square lg:aspect-auto lg:h-[600px]">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl blur-3xl" />

              {/* Image placeholder */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 w-full h-full rounded-xl border border-white/10 shadow-2xl overflow-hidden">
                {/* Decorative grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

                {/* Decorative elements */}
                <div className="absolute top-8 left-8 w-32 h-32 bg-purple-600/30 rounded-full blur-3xl" />
                <div className="absolute bottom-8 right-8 w-40 h-40 bg-pink-600/30 rounded-full blur-3xl" />

                {/* Center decoration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl opacity-20 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
