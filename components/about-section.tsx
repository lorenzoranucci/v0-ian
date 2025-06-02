"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Award, Heart, Leaf } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="chi-sono" className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">{t("about.title")}</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">{t("about.intro")}</p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">{t("about.mission")}</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-800">{t("about.certified")}</h3>
                <p className="text-sm text-gray-600">{t("about.certified.desc")}</p>
              </div>
              <div className="text-center">
                <Heart className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-800">{t("about.passion")}</h3>
                <p className="text-sm text-gray-600">{t("about.passion.desc")}</p>
              </div>
              <div className="text-center">
                <Leaf className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h3 className="font-semibold text-gray-800">{t("about.sustainable")}</h3>
                <p className="text-sm text-gray-600">{t("about.sustainable.desc")}</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Guide Photo */}
            <div className="text-center mb-8">
              <div className="relative w-64 h-64 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                <img
                  src="/placeholder.svg?height=300&width=300&text=Ian+Guide"
                  alt="Ian - Tour Guide"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-lg font-semibold text-gray-800">Ian</p>
              <p className="text-gray-600">Guida Turistica Certificata</p>
            </div>

            <Card className="border-l-4 border-l-green-600">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-800 mb-2">{t("about.philosophy.title")}</h3>
                <p className="text-gray-600">{t("about.philosophy.desc")}</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-600">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-800 mb-2">{t("about.ebike.title")}</h3>
                <p className="text-gray-600">{t("about.ebike.desc")}</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-600">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-800 mb-2">{t("about.territory.title")}</h3>
                <p className="text-gray-600">{t("about.territory.desc")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
