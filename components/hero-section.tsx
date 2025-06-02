"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, Calendar, MapPin } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  const scrollToServices = () => {
    const element = document.getElementById("servizi")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById("contatti")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover" poster="/hero-bg.jpg">
          <source src="/hero.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <Image
            src="/images/hero-bg.jpg"
            alt="Bike tour through vineyards at Lake Bolsena"
            fill
            className="object-cover"
            priority
          />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">{t("hero.title")}</h1>
        <p className="text-xl md:text-2xl mb-8 font-light">{t("hero.subtitle")}</p>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-90">{t("hero.description")}</p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
            onClick={scrollToContact}
          >
            <Calendar className="mr-2 h-5 w-5" />
            {t("hero.bookNow")}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-green-600 bg-white hover:bg-green-600 hover:text-white px-8 py-4 text-lg"
            onClick={scrollToServices}
          >
            <MapPin className="mr-2 h-5 w-5" />
            {t("hero.discoverTours")}
          </Button>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToServices}
          className="animate-bounce hover:scale-110 transition-transform"
          aria-label="Scroll to services"
        >
          <ChevronDown className="h-8 w-8 text-white" />
        </button>
      </div>
    </section>
  )
}
