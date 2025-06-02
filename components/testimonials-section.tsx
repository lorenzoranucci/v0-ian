"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function TestimonialsSection() {
  const { t } = useLanguage()

  const testimonials = [
    {
      name: "Marco R.",
      location: "Roma",
      rating: 5,
      text: "Un'esperienza fantastica! Ian è una guida eccezionale che conosce ogni angolo del territorio. I paesaggi sono mozzafiato e le degustazioni nelle cantine locali sono state il tocco perfetto.",
      image: "/placeholder.svg?height=80&width=80&text=M",
    },
    {
      name: "Sarah M.",
      location: "London",
      rating: 5,
      text: "Amazing tour! The e-bikes made it easy to explore the beautiful vineyards around Lake Bolsena. Ian's knowledge of the area and passion for the region really made the experience special.",
      image: "/placeholder.svg?height=80&width=80&text=S",
    },
    {
      name: "Klaus W.",
      location: "München",
      rating: 5,
      text: "Eine wunderbare Tour durch die Weinberge! Die E-Bikes waren in perfektem Zustand und Ian hat uns die schönsten Aussichtspunkte gezeigt. Die Weinverkostung war das Highlight des Tages.",
      image: "/placeholder.svg?height=80&width=80&text=K",
    },
    {
      name: "Giulia T.",
      location: "Milano",
      rating: 5,
      text: "Consiglio vivamente questo tour! Perfetto per chi vuole scoprire il Lago di Bolsena in modo originale. Le foto che Ian ha scattato durante il tour sono bellissime ricordi della giornata.",
      image: "/placeholder.svg?height=80&width=80&text=G",
    },
    {
      name: "David L.",
      location: "Paris",
      rating: 5,
      text: "Une expérience inoubliable! Le tour au coucher du soleil était magique. Ian nous a fait découvrir des endroits secrets avec des vues spectaculaires sur le lac. Hautement recommandé!",
      image: "/placeholder.svg?height=80&width=80&text=D",
    },
    {
      name: "Anna S.",
      location: "Firenze",
      rating: 5,
      text: "Tour perfetto per tutta la famiglia! Anche i bambini si sono divertiti molto con le e-bike. Ian è stato paziente e attento alle esigenze di tutti. Torneremo sicuramente!",
      image: "/placeholder.svg?height=80&width=80&text=A",
    },
  ]

  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Cosa Dicono i Nostri Ospiti</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Le esperienze autentiche dei nostri ospiti raccontano meglio di qualsiasi parola la qualità dei nostri tour.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-green-600 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
