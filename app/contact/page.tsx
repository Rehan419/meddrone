"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Phone, Mail, MapPinIcon, Loader2 } from "lucide-react"

const locations = [
  {
    id: 1,
    city: "Lahore, NY",
    address: "123 Medical Plaza, Manhattan, NY 10001",
    phone: "+1 (212) 555-0101",
    email: "ny@medidrone.com",
    hours: "24/7 Operations",
    services: "All Services Available",
  },
  {
    id: 2,
    city: "Singhpura, CA",
    address: "456 Healthcare Dr, Downtown LA, CA 90001",
    phone: "+1 (213) 555-0202",
    email: "la@medidrone.com",
    hours: "24/7 Operations",
    services: "All Services Available",
  },
  {
    id: 3,
    city: "Karachi, IL",
    address: "789 Medical Center Blvd, Chicago, IL 60601",
    phone: "+1 (312) 555-0303",
    email: "chicago@medidrone.com",
    hours: "24/7 Operations",
    services: "All Services Available",
  },
  {
    id: 4,
    city: "Islamabad, TX",
    address: "321 Healthcare Way, Houston, TX 77001",
    phone: "+1 (713) 555-0404",
    email: "houston@medidrone.com",
    hours: "24/7 Operations",
    services: "All Services Available",
  },
  {
    id: 5,
    city: "Lahore Railway line , FL",
    address: "654 Medical Plaza, Miami, FL 33101",
    phone: "+1 (305) 555-0505",
    email: "miami@medidrone.com",
    hours: "24/7 Operations",
    services: "All Services Available",
  },
  {
    id: 6,
    city: "Sindh, WA",
    address: "987 Healthcare District, Seattle, WA 98101",
    phone: "+1 (206) 555-0606",
    email: "seattle@medidrone.com",
    hours: "24/7 Operations",
    services: "All Services Available",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
      alert("Message sent successfully! We'll contact you soon.")
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Page Header */}
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                Get in Touch with MediDrone
              </h1>
              <p className="text-lg text-muted-foreground text-balance">
                Have questions? Contact our team for support, partnerships, or inquiries.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Phone Contact */}
              <div className="bg-card p-8 rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px] animate-slide-in-left">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all">
                  <Phone className="w-6 h-6 text-primary animate-bounce-smooth" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-4">Available 24/7 for emergency support</p>
                <a
                  href="tel:+1-800-634-3476"
                  className="text-primary font-semibold hover:underline hover:text-accent transition-colors"
                >
                  +1 (800) 634-3476
                </a>
              </div>

              {/* Email Contact */}
              <div
                className="bg-card p-8 rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px] animate-fade-in"
                style={{ animationDelay: "100ms" }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all">
                  <Mail className="w-6 h-6 text-primary animate-bounce-smooth" style={{ animationDelay: "100ms" }} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-4">Response within 2 hours</p>
                <a
                  href="mailto:support@medidrone.com"
                  className="text-primary font-semibold hover:underline hover:text-accent transition-colors"
                >
                  support@medidrone.com
                </a>
              </div>

              {/* Headquarters */}
              <div
                className="bg-card p-8 rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px] animate-slide-in-right"
                style={{ animationDelay: "200ms" }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all">
                  <MapPinIcon
                    className="w-6 h-6 text-primary animate-bounce-smooth"
                    style={{ animationDelay: "200ms" }}
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Headquarters</h3>
                <p className="text-muted-foreground mb-4">Global operations center</p>
                <p className="text-primary font-semibold">Lahore Pakistan </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form and Map Grid */}
        <section className="py-16 bg-gradient-to-b from-background to-primary/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* Contact Form */}
              <div className="animate-slide-in-left">
                <h2 className="text-2xl font-bold text-foreground mb-8 group-hover:text-primary transition-colors">
                  Send us a Message
                </h2>
                <form
                  onSubmit={handleSubmit}
                  className="bg-card p-8 rounded-xl border border-border hover:border-primary transition-all duration-300"
                >
                  <div className="mb-6 animate-scale-in" style={{ animationDelay: "100ms" }}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 hover:border-primary/50"
                    />
                  </div>
                  <div className="mb-6 animate-scale-in" style={{ animationDelay: "150ms" }}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 hover:border-primary/50"
                    />
                  </div>
                  <div className="mb-6 animate-scale-in" style={{ animationDelay: "200ms" }}>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 hover:border-primary/50"
                    />
                  </div>
                  <div className="mb-8 animate-scale-in" style={{ animationDelay: "250ms" }}>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 hover:border-primary/50 resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent transition-all duration-200 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group animate-fade-in"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              </div>

              {/* Map and Locations */}
              <div className="animate-slide-in-right">
                <h2 className="text-2xl font-bold text-foreground mb-8">Our Locations</h2>
                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-4">
                  {locations.map((location, index) => (
                    <div
                      key={location.id}
                      className="bg-card p-6 rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] animate-scale-in"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {location.city}
                      </h3>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p className="flex items-start gap-2 hover:text-foreground transition-colors">
                          <MapPinIcon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{location.address}</span>
                        </p>
                        <p className="flex items-center gap-2 hover:text-foreground transition-colors">
                          <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                          <a href={`tel:${location.phone}`} className="hover:text-primary transition-colors">
                            {location.phone}
                          </a>
                        </p>
                        <p className="flex items-center gap-2 hover:text-foreground transition-colors">
                          <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                          <a href={`mailto:${location.email}`} className="hover:text-primary transition-colors">
                            {location.email}
                          </a>
                        </p>
                        <p className="text-primary font-semibold group-hover:text-accent transition-colors">
                          {location.hours}
                        </p>
                        <p className="text-foreground group-hover:text-primary transition-colors">
                          {location.services}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
