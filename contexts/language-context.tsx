"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export type Language = "it" | "en" | "de"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  it: {
    // Header
    "header.services": "Servizi",
    "header.tours": "Tours",
    "header.about": "Chi Sono",
    "header.contact": "Contatti",

    // Hero Section
    "hero.title": "Bike Tour Bolsena Lake",
    "hero.subtitle": "E-BIKE Tour Guidati sempre prenotabili!",
    "hero.description":
      "Scopri la bellezza del Lago di Bolsena e dei suoi vigneti con i nostri tour guidati in e-bike. Un'esperienza unica tra natura, storia e tradizioni locali.",
    "hero.bookNow": "Prenota Ora",
    "hero.discoverTours": "Scopri i Tour",

    // Services Section
    "services.title": "I Nostri Servizi",
    "services.description":
      "Offriamo un'esperienza completa e professionale per scoprire le meraviglie del Lago di Bolsena in totale sicurezza e comfort.",
    "services.ebike.title": "E-Bike di Qualità",
    "services.ebike.description": "Biciclette elettriche moderne e sicure per un'esperienza confortevole",
    "services.guides.title": "Guide Esperte",
    "services.guides.description": "Guide locali qualificate che conoscono ogni segreto del territorio",
    "services.availability.title": "Sempre Disponibili",
    "services.availability.description": "Tour prenotabili tutti i giorni, con orari flessibili",
    "services.safety.title": "Sicurezza Garantita",
    "services.safety.description": "Equipaggiamento di sicurezza incluso e percorsi testati",
    "services.photos.title": "Foto Ricordo",
    "services.photos.description": "Servizio fotografico incluso per immortalare i momenti migliori",
    "services.tastings.title": "Degustazioni",
    "services.tastings.description": "Soste nelle migliori cantine locali per degustazioni autentiche",

    // Tours Section
    "tours.title": "I Nostri Tour",
    "tours.description":
      "Scegli l'esperienza che fa per te tra i nostri tour guidati, ognuno pensato per offrirti il meglio del territorio.",
    "tours.classic.title": "Tour Classico del Lago",
    "tours.classic.description":
      "Il tour perfetto per scoprire i punti panoramici più belli del Lago di Bolsena, attraversando vigneti e borghi storici.",
    "tours.vineyards.title": "Tour dei Vigneti",
    "tours.vineyards.description":
      "Un'immersione completa nella tradizione vinicola locale con visite alle cantine e degustazioni guidate.",
    "tours.sunset.title": "Tour Sunset",
    "tours.sunset.description": "Un'esperienza romantica al tramonto con aperitivo vista lago e atmosfera magica.",
    "tours.duration": "ore",
    "tours.difficulty.easy": "Facile",
    "tours.difficulty.medium": "Medio",
    "tours.participants": "persone",
    "tours.highlights": "Highlights:",
    "tours.book": "Prenota",
    "tours.perPerson": "/persona",

    // About Section
    "about.title": "Chi Sono",
    "about.intro":
      "Sono Ian, guida turistica certificata e appassionato del territorio del Lago di Bolsena. Da oltre 10 anni accompagno visitatori alla scoperta delle bellezze naturali e culturali di questa zona unica del Lazio.",
    "about.mission":
      "La mia missione è condividere l'amore per questo territorio attraverso esperienze autentiche e sostenibili, rispettando l'ambiente e valorizzando le tradizioni locali.",
    "about.certified": "Certificato",
    "about.certified.desc": "Guida turistica abilitata",
    "about.passion": "Passione",
    "about.passion.desc": "10+ anni di esperienza",
    "about.sustainable": "Sostenibile",
    "about.sustainable.desc": "Turismo responsabile",
    "about.philosophy.title": "La Mia Filosofia",
    "about.philosophy.desc":
      "Credo che ogni tour debba essere un'esperienza unica e personalizzata. Non solo mostrare i luoghi, ma raccontare le storie che li rendono speciali.",
    "about.ebike.title": "Perché l'E-Bike",
    "about.ebike.desc":
      "L'e-bike permette di esplorare il territorio in modo sostenibile, raggiungendo luoghi altrimenti inaccessibili e godendo appieno del paesaggio.",
    "about.territory.title": "Territorio del Cuore",
    "about.territory.desc":
      "Il Lago di Bolsena è il mio territorio del cuore. Ogni angolo nasconde una storia, ogni panorama regala emozioni uniche.",

    // Contact Section
    "contact.title": "Contatti",
    "contact.description":
      "Pronto a vivere un'esperienza indimenticabile? Contattami per prenotare il tuo tour o per qualsiasi informazione.",
    "contact.phone": "Telefono",
    "contact.phone.hours": "Disponibile tutti i giorni 8:00-20:00",
    "contact.email": "Email",
    "contact.email.response": "Risposta entro 24 ore",
    "contact.meeting": "Punto di Ritrovo",
    "contact.meeting.parking": "Parcheggio gratuito disponibile",
    "contact.hours": "Orari",
    "contact.hours.desc": "Tutti i giorni 8:00-19:00",
    "contact.hours.booking": "Tour su prenotazione",
    "contact.form.title": "Richiedi Informazioni",
    "contact.form.name": "Nome",
    "contact.form.phone": "Telefono",
    "contact.form.email": "Email",
    "contact.form.message": "Messaggio",
    "contact.form.placeholder": "Raccontaci cosa ti interessa...",
    "contact.form.submit": "Invia Richiesta",
    "contact.form.required": "*",

    // Footer
    "footer.description":
      "Scopri la bellezza del Lago di Bolsena con i nostri tour guidati in e-bike. Un'esperienza autentica nel cuore della Tuscia.",
    "footer.contacts": "Contatti",
    "footer.links": "Link Utili",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Termini e Condizioni",
    "footer.faq": "FAQ",
    "footer.reviews": "Recensioni",
    "footer.rights": "Tutti i diritti riservati",
  },
  en: {
    // Header
    "header.services": "Services",
    "header.tours": "Tours",
    "header.about": "About Me",
    "header.contact": "Contact",

    // Hero Section
    "hero.title": "Bike Tour Bolsena Lake",
    "hero.subtitle": "Guided E-BIKE Tours always bookable!",
    "hero.description":
      "Discover the beauty of Lake Bolsena and its vineyards with our guided e-bike tours. A unique experience among nature, history and local traditions.",
    "hero.bookNow": "Book Now",
    "hero.discoverTours": "Discover Tours",

    // Services Section
    "services.title": "Our Services",
    "services.description":
      "We offer a complete and professional experience to discover the wonders of Lake Bolsena in total safety and comfort.",
    "services.ebike.title": "Quality E-Bikes",
    "services.ebike.description": "Modern and safe electric bikes for a comfortable experience",
    "services.guides.title": "Expert Guides",
    "services.guides.description": "Qualified local guides who know every secret of the territory",
    "services.availability.title": "Always Available",
    "services.availability.description": "Tours bookable every day, with flexible schedules",
    "services.safety.title": "Safety Guaranteed",
    "services.safety.description": "Safety equipment included and tested routes",
    "services.photos.title": "Souvenir Photos",
    "services.photos.description": "Photography service included to capture the best moments",
    "services.tastings.title": "Tastings",
    "services.tastings.description": "Stops at the best local wineries for authentic tastings",

    // Tours Section
    "tours.title": "Our Tours",
    "tours.description":
      "Choose the experience that suits you from our guided tours, each designed to offer you the best of the territory.",
    "tours.classic.title": "Classic Lake Tour",
    "tours.classic.description":
      "The perfect tour to discover the most beautiful panoramic points of Lake Bolsena, crossing vineyards and historic villages.",
    "tours.vineyards.title": "Vineyards Tour",
    "tours.vineyards.description":
      "A complete immersion in the local wine tradition with visits to wineries and guided tastings.",
    "tours.sunset.title": "Sunset Tour",
    "tours.sunset.description":
      "A romantic sunset experience with aperitif overlooking the lake and magical atmosphere.",
    "tours.duration": "hours",
    "tours.difficulty.easy": "Easy",
    "tours.difficulty.medium": "Medium",
    "tours.participants": "people",
    "tours.highlights": "Highlights:",
    "tours.book": "Book",
    "tours.perPerson": "/person",

    // About Section
    "about.title": "About Me",
    "about.intro":
      "I'm Ian, a certified tour guide and passionate about the Lake Bolsena territory. For over 10 years I have been accompanying visitors to discover the natural and cultural beauties of this unique area of Lazio.",
    "about.mission":
      "My mission is to share the love for this territory through authentic and sustainable experiences, respecting the environment and enhancing local traditions.",
    "about.certified": "Certified",
    "about.certified.desc": "Licensed tour guide",
    "about.passion": "Passion",
    "about.passion.desc": "10+ years of experience",
    "about.sustainable": "Sustainable",
    "about.sustainable.desc": "Responsible tourism",
    "about.philosophy.title": "My Philosophy",
    "about.philosophy.desc":
      "I believe that every tour should be a unique and personalized experience. Not just showing places, but telling the stories that make them special.",
    "about.ebike.title": "Why E-Bike",
    "about.ebike.desc":
      "The e-bike allows you to explore the territory sustainably, reaching otherwise inaccessible places and fully enjoying the landscape.",
    "about.territory.title": "Territory of the Heart",
    "about.territory.desc":
      "Lake Bolsena is my territory of the heart. Every corner hides a story, every panorama gives unique emotions.",

    // Contact Section
    "contact.title": "Contact",
    "contact.description":
      "Ready to live an unforgettable experience? Contact me to book your tour or for any information.",
    "contact.phone": "Phone",
    "contact.phone.hours": "Available every day 8:00-20:00",
    "contact.email": "Email",
    "contact.email.response": "Response within 24 hours",
    "contact.meeting": "Meeting Point",
    "contact.meeting.parking": "Free parking available",
    "contact.hours": "Hours",
    "contact.hours.desc": "Every day 8:00-19:00",
    "contact.hours.booking": "Tours by reservation",
    "contact.form.title": "Request Information",
    "contact.form.name": "Name",
    "contact.form.phone": "Phone",
    "contact.form.email": "Email",
    "contact.form.message": "Message",
    "contact.form.placeholder": "Tell us what interests you...",
    "contact.form.submit": "Send Request",
    "contact.form.required": "*",

    // Footer
    "footer.description":
      "Discover the beauty of Lake Bolsena with our guided e-bike tours. An authentic experience in the heart of Tuscia.",
    "footer.contacts": "Contacts",
    "footer.links": "Useful Links",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms and Conditions",
    "footer.faq": "FAQ",
    "footer.reviews": "Reviews",
    "footer.rights": "All rights reserved",
  },
  de: {
    // Header
    "header.services": "Dienstleistungen",
    "header.tours": "Touren",
    "header.about": "Über mich",
    "header.contact": "Kontakt",

    // Hero Section
    "hero.title": "Bike Tour Bolsena Lake",
    "hero.subtitle": "Geführte E-BIKE Touren immer buchbar!",
    "hero.description":
      "Entdecken Sie die Schönheit des Bolsena-Sees und seiner Weinberge mit unseren geführten E-Bike-Touren. Ein einzigartiges Erlebnis zwischen Natur, Geschichte und lokalen Traditionen.",
    "hero.bookNow": "Jetzt buchen",
    "hero.discoverTours": "Touren entdecken",

    // Services Section
    "services.title": "Unsere Dienstleistungen",
    "services.description":
      "Wir bieten ein komplettes und professionelles Erlebnis, um die Wunder des Bolsena-Sees in völliger Sicherheit und Komfort zu entdecken.",
    "services.ebike.title": "Qualitäts E-Bikes",
    "services.ebike.description": "Moderne und sichere Elektrofahrräder für ein komfortables Erlebnis",
    "services.guides.title": "Erfahrene Guides",
    "services.guides.description": "Qualifizierte lokale Guides, die jedes Geheimnis des Gebiets kennen",
    "services.availability.title": "Immer verfügbar",
    "services.availability.description": "Touren täglich buchbar, mit flexiblen Zeiten",
    "services.safety.title": "Sicherheit garantiert",
    "services.safety.description": "Sicherheitsausrüstung inklusive und getestete Routen",
    "services.photos.title": "Erinnerungsfotos",
    "services.photos.description": "Fotografie-Service inklusive, um die besten Momente festzuhalten",
    "services.tastings.title": "Verkostungen",
    "services.tastings.description": "Stopps in den besten lokalen Weingütern für authentische Verkostungen",

    // Tours Section
    "tours.title": "Unsere Touren",
    "tours.description":
      "Wählen Sie das Erlebnis, das zu Ihnen passt, aus unseren geführten Touren, jede darauf ausgelegt, Ihnen das Beste des Gebiets zu bieten.",
    "tours.classic.title": "Klassische See-Tour",
    "tours.classic.description":
      "Die perfekte Tour, um die schönsten Panoramapunkte des Bolsena-Sees zu entdecken, durch Weinberge und historische Dörfer.",
    "tours.vineyards.title": "Weinberg-Tour",
    "tours.vineyards.description":
      "Ein komplettes Eintauchen in die lokale Weintradition mit Besuchen in Weingütern und geführten Verkostungen.",
    "tours.sunset.title": "Sonnenuntergangs-Tour",
    "tours.sunset.description":
      "Ein romantisches Sonnenuntergangserlebnis mit Aperitif mit Blick auf den See und magischer Atmosphäre.",
    "tours.duration": "Stunden",
    "tours.difficulty.easy": "Einfach",
    "tours.difficulty.medium": "Mittel",
    "tours.participants": "Personen",
    "tours.highlights": "Highlights:",
    "tours.book": "Buchen",
    "tours.perPerson": "/Person",

    // About Section
    "about.title": "Über mich",
    "about.intro":
      "Ich bin Ian, ein zertifizierter Reiseführer und leidenschaftlich für das Gebiet des Bolsena-Sees. Seit über 10 Jahren begleite ich Besucher bei der Entdeckung der natürlichen und kulturellen Schönheiten dieser einzigartigen Gegend von Latium.",
    "about.mission":
      "Meine Mission ist es, die Liebe zu diesem Gebiet durch authentische und nachhaltige Erfahrungen zu teilen, die Umwelt zu respektieren und lokale Traditionen zu fördern.",
    "about.certified": "Zertifiziert",
    "about.certified.desc": "Lizenzierter Reiseführer",
    "about.passion": "Leidenschaft",
    "about.passion.desc": "10+ Jahre Erfahrung",
    "about.sustainable": "Nachhaltig",
    "about.sustainable.desc": "Verantwortlicher Tourismus",
    "about.philosophy.title": "Meine Philosophie",
    "about.philosophy.desc":
      "Ich glaube, dass jede Tour ein einzigartiges und personalisiertes Erlebnis sein sollte. Nicht nur Orte zeigen, sondern die Geschichten erzählen, die sie besonders machen.",
    "about.ebike.title": "Warum E-Bike",
    "about.ebike.desc":
      "Das E-Bike ermöglicht es, das Gebiet nachhaltig zu erkunden, sonst unzugängliche Orte zu erreichen und die Landschaft voll zu genießen.",
    "about.territory.title": "Gebiet des Herzens",
    "about.territory.desc":
      "Der Bolsena-See ist mein Herzensgebiet. Jede Ecke verbirgt eine Geschichte, jedes Panorama schenkt einzigartige Emotionen.",

    // Contact Section
    "contact.title": "Kontakt",
    "contact.description":
      "Bereit für ein unvergessliches Erlebnis? Kontaktieren Sie mich, um Ihre Tour zu buchen oder für weitere Informationen.",
    "contact.phone": "Telefon",
    "contact.phone.hours": "Täglich verfügbar 8:00-20:00",
    "contact.email": "E-Mail",
    "contact.email.response": "Antwort innerhalb von 24 Stunden",
    "contact.meeting": "Treffpunkt",
    "contact.meeting.parking": "Kostenlose Parkplätze verfügbar",
    "contact.hours": "Öffnungszeiten",
    "contact.hours.desc": "Täglich 8:00-19:00",
    "contact.hours.booking": "Touren nach Vereinbarung",
    "contact.form.title": "Informationen anfordern",
    "contact.form.name": "Name",
    "contact.form.phone": "Telefon",
    "contact.form.email": "E-Mail",
    "contact.form.message": "Nachricht",
    "contact.form.placeholder": "Erzählen Sie uns, was Sie interessiert...",
    "contact.form.submit": "Anfrage senden",
    "contact.form.required": "*",

    // Footer
    "footer.description":
      "Entdecken Sie die Schönheit des Bolsena-Sees mit unseren geführten E-Bike-Touren. Ein authentisches Erlebnis im Herzen der Tuscia.",
    "footer.contacts": "Kontakte",
    "footer.links": "Nützliche Links",
    "footer.privacy": "Datenschutzrichtlinie",
    "footer.terms": "Allgemeine Geschäftsbedingungen",
    "footer.faq": "FAQ",
    "footer.reviews": "Bewertungen",
    "footer.rights": "Alle Rechte vorbehalten",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("it")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
