"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Star } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function ToursSection() {
  const { t } = useLanguage()

  const scrollToContact = () => {
    const element = document.getElementById("contatti")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const tours = [
    {
      title: t("tours.classic.title"),
      duration: `3 ${t("tours.duration")}`,
      difficulty: t("tours.difficulty.easy"),
      participants: `2-8 ${t("tours.participants")}`,
      price: "€45",
      description: t("tours.classic.description"),
      highlights: ["Panorami mozzafiato", "Visita borgo medievale", "Degustazione vini"],
    },
    {
      title: t("tours.vineyards.title"),
      duration: `4 ${t("tours.duration")}`,
      difficulty: t("tours.difficulty.medium"),
      participants: `2-6 ${t("tours.participants")}`,
      price: "€65",
      description: t("tours.vineyards.description"),
      highlights: ["3 cantine storiche", "Degustazione guidata", "Pranzo tipico"],
    },
    {
      title: t("tours.sunset.title"),
      duration: `2.5 ${t("tours.duration")}`,
      difficulty: t("tours.difficulty.easy"),
      participants: `2-10 ${t("tours.participants")}`,
      price: "€55",
      description: t("tours.sunset.description"),
      highlights: ["Tramonto sul lago", "Aperitivo incluso", "Foto professionali"],
    },
  ]

  return (
    <section id="tours" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">{t("tours.title")}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("tours.description")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={`/placeholder.svg?height=250&width=400&text=${encodeURIComponent(tour.title)}`}
                  alt={tour.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-bold text-gray-800">{tour.title}</CardTitle>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    {tour.difficulty}
                  </Badge>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {tour.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {tour.participants}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">{tour.description}</p>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">{t("tours.highlights")}</h4>
                  <ul className="space-y-1">
                    {tour.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <Star className="h-3 w-3 mr-2 text-yellow-500" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center pt-4 border-t">
                  <div className="text-2xl font-bold text-green-600">
                    {tour.price}
                    <span className="text-sm text-gray-500 font-normal">{t("tours.perPerson")}</span>
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700" onClick={scrollToContact}>
                    {t("tours.book")}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
