"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function GallerySection() {
  const { t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    {
      src: "/placeholder.svg?height=400&width=600&text=Lake+Bolsena+Panorama",
      alt: "Panorama del Lago di Bolsena",
      title: "Vista panoramica del lago",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Vineyard+Cycling",
      alt: "Ciclismo tra i vigneti",
      title: "Pedalando tra i vigneti",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Historic+Village",
      alt: "Borgo storico",
      title: "Borghi medievali",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Wine+Tasting",
      alt: "Degustazione vini",
      title: "Degustazioni locali",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=E-Bike+Group",
      alt: "Gruppo in e-bike",
      title: "Tour di gruppo",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Sunset+Lake",
      alt: "Tramonto sul lago",
      title: "Tramonti magici",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Local+Food",
      alt: "Cucina locale",
      title: "Sapori autentici",
    },
    {
      src: "/placeholder.svg?height=400&width=600&text=Nature+Path",
      alt: "Sentieri naturali",
      title: "Percorsi nella natura",
    },
  ]

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1)
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Galleria Fotografica</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Scopri attraverso le immagini la bellezza dei nostri tour e dei paesaggi che potrai ammirare durante
            l'esperienza.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              onClick={() => openLightbox(index)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <p className="text-white font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                    {image.title}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <img
                src={images[selectedImage].src || "/placeholder.svg"}
                alt={images[selectedImage].alt}
                className="max-w-full max-h-full object-contain"
              />
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 text-white hover:bg-white hover:text-black"
                onClick={closeLightbox}
              >
                <X className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white hover:text-black"
                onClick={prevImage}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white hover:text-black"
                onClick={nextImage}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
                <p className="text-lg font-semibold">{images[selectedImage].title}</p>
                <p className="text-sm opacity-75">
                  {selectedImage + 1} di {images.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
