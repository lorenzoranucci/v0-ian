"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Bike, Users, Clock, Shield, Camera, Wine } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function ServicesSection() {
  const { t } = useLanguage()

  const services = [
    {
      icon: <Bike className="h-8 w-8 text-green-600" />,
      title: t("services.ebike.title"),
      description: t("services.ebike.description"),
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: t("services.guides.title"),
      description: t("services.guides.description"),
    },
    {
      icon: <Clock className="h-8 w-8 text-green-600" />,
      title: t("services.availability.title"),
      description: t("services.availability.description"),
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: t("services.safety.title"),
      description: t("services.safety.description"),
    },
    {
      icon: <Camera className="h-8 w-8 text-green-600" />,
      title: t("services.photos.title"),
      description: t("services.photos.description"),
    },
    {
      icon: <Wine className="h-8 w-8 text-green-600" />,
      title: t("services.tastings.title"),
      description: t("services.tastings.description"),
    },
  ]

  return (
    <section id="servizi" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">{t("services.title")}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("services.description")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src={`/placeholder.svg?height=200&width=400&text=${encodeURIComponent(service.title)}`}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-8 text-center">
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
