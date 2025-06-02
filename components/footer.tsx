"use client"

import { Facebook, Instagram, Mail, Phone } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Bike Tour Bolsena Lake</h3>
            <p className="text-gray-300 mb-4">{t("footer.description")}</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.contacts")}</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+39 123 456 7890</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@biketourbolsenalake.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.links")}</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t("footer.privacy")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t("footer.terms")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t("footer.faq")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t("footer.reviews")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Bike Tour Bolsena Lake. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  )
}
