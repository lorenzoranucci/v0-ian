"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/contexts/language-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const languageOptions = [
    { code: "it", label: "🇮🇹 Italiano", flag: "🇮🇹" },
    { code: "en", label: "🇬🇧 English", flag: "🇬🇧" },
    { code: "de", label: "🇩🇪 Deutsch", flag: "🇩🇪" },
  ]

  const currentLanguage = languageOptions.find((lang) => lang.code === language)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-green-700">Bike Tour Bolsena Lake</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("servizi")}
            className="text-gray-700 hover:text-green-600 transition-colors"
          >
            {t("header.services")}
          </button>
          <button
            onClick={() => scrollToSection("tours")}
            className="text-gray-700 hover:text-green-600 transition-colors"
          >
            {t("header.tours")}
          </button>
          <button
            onClick={() => scrollToSection("chi-sono")}
            className="text-gray-700 hover:text-green-600 transition-colors"
          >
            {t("header.about")}
          </button>
          <button
            onClick={() => scrollToSection("contatti")}
            className="text-gray-700 hover:text-green-600 transition-colors"
          >
            {t("header.contact")}
          </button>
        </nav>

        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                <Globe className="h-4 w-4" />
                <span>{currentLanguage?.flag}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {languageOptions.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setLanguage(lang.code as any)}
                  className={language === lang.code ? "bg-green-50" : ""}
                >
                  {lang.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <button
              onClick={() => scrollToSection("servizi")}
              className="block w-full text-left text-gray-700 hover:text-green-600 transition-colors"
            >
              {t("header.services")}
            </button>
            <button
              onClick={() => scrollToSection("tours")}
              className="block w-full text-left text-gray-700 hover:text-green-600 transition-colors"
            >
              {t("header.tours")}
            </button>
            <button
              onClick={() => scrollToSection("chi-sono")}
              className="block w-full text-left text-gray-700 hover:text-green-600 transition-colors"
            >
              {t("header.about")}
            </button>
            <button
              onClick={() => scrollToSection("contatti")}
              className="block w-full text-left text-gray-700 hover:text-green-600 transition-colors"
            >
              {t("header.contact")}
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
