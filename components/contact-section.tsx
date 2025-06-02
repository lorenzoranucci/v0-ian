"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function ContactSection() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contatti" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">{t("contact.title")}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("contact.description")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <Phone className="h-5 w-5 mr-2" />
                  {t("contact.phone")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">+39 123 456 7890</p>
                <p className="text-gray-600">{t("contact.phone.hours")}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <Mail className="h-5 w-5 mr-2" />
                  {t("contact.email")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">info@biketourbolsenalake.com</p>
                <p className="text-gray-600">{t("contact.email.response")}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  {t("contact.meeting")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">Via Laertina 140, Marta (VT)</p>
                <p className="text-gray-600">{t("contact.meeting.parking")}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <Clock className="h-5 w-5 mr-2" />
                  {t("contact.hours")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">{t("contact.hours.desc")}</p>
                <p className="text-gray-600">{t("contact.hours.booking")}</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>{t("contact.form.title")}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {t("contact.form.name")} {t("contact.form.required")}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t("contact.form.name")}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      {t("contact.form.phone")}
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t("contact.form.phone")}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t("contact.form.email")} {t("contact.form.required")}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("contact.form.email")}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t("contact.form.message")} {t("contact.form.required")}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t("contact.form.placeholder")}
                    rows={5}
                  />
                </div>

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                  {t("contact.form.submit")}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
