"use client"

import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Carousel } from "@/components/carousel"
import { Heart, Zap, Shield, Leaf, Clock, MapPin } from "lucide-react"

const carouselSlides = [
  {
    image: "/medical-drone-delivery-hospital.jpg",
    title: "Hospital-to-Hospital Delivery",
    description: "Rapid and safe transport of medical supplies between healthcare facilities",
  },
  {
    image: "/pharmacy-drone-delivery-medicine.jpg",
    title: "Pharmacy Direct Delivery",
    description: "Medicines and prescriptions delivered directly to patients' homes",
  },
  {
    image: "/emergency-medical-drone-response.jpg",
    title: "Emergency Response Ready",
    description: "Critical supplies and emergency medications within minutes",
  },
  {
    image: "/eco-friendly-green-medical-delivery.jpg",
    title: "Eco-Friendly Operations",
    description: "Zero-emission drone technology protecting our environment",
  },
]

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Deliveries in minutes, not hours. Emergency response in critical situations.",
  },
  {
    icon: Heart,
    title: "Safe & Secure",
    description: "Temperature-controlled containers and GPS tracking for all shipments.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Zero-emission electric drones reducing healthcare's carbon footprint.",
  },
  {
    icon: Shield,
    title: "Reliable",
    description: "Military-grade encryption and fail-safe mechanisms for peace of mind.",
  },
  {
    icon: Clock,
    title: "24/7 Available",
    description: "Round-the-clock delivery service for urgent medical needs.",
  },
  {
    icon: MapPin,
    title: "Wide Coverage",
    description: "Serving hospitals, pharmacies, and patients across multiple regions.",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col animate-page-enter">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-10 bg-gradient-to-b from-primary/5 to-secondary/5 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-0 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
                  The Future of Medical Delivery is Here
                </h1>
                <p className="text-lg text-muted-foreground mb-8 text-balance">
                  MediDrone delivers critical medical supplies, medicines, and emergency response services using
                  eco-friendly drone technology. Fast, safe, and sustainable.
                </p>
                <div className="flex gap-4 flex-wrap animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <Link
                    href="/hospital"
                    className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent transition-all duration-200 hover:scale-105 hover:shadow-lg"
                  >
                    Hospital Portal
                  </Link>
                  <Link
                    href="/pharmacy"
                    className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:opacity-90 transition-all duration-200 hover:scale-105 hover:shadow-lg"
                  >
                    Pharmacy Portal
                  </Link>
                  <Link
                    href="/emergency"
                    className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-105"
                  >
                    Emergency Service
                  </Link>
                </div>
              </div>

              <div className="relative h-[500px] flex items-center justify-center animate-slide-in-right">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl animate-float"></div>
                <div className="relative animate-scale-in">
                  <img
                    src="/images/control-center.png"
                    alt="MediDrone Medical Delivery Drone"
                    className="   w-[700px]
                                  h-[1300px]
                                  object-contain
                                  transition-all
                                  duration-300
                                  hover:scale-110
                                  border-none
                                  outline-none
                                  ring-0
                                  shadow-none"
                    style={{
                      backgroundColor: "transparent",
                      backgroundImage: "none",
                      border: "none",
                      outline: "none",
                      boxShadow: "none",
                    }}
                  />
                  <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-secondary/30 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-bounce-smooth"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Carousel Section */}
        <section className="py-16 bg-card animate-blur-in" style={{ animationDelay: "0.2s" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground animate-fade-in">
              Our Delivery Network
            </h2>
            <Carousel slides={carouselSlides} autoPlay={true} interval={5000} />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                Why Choose MediDrone?
              </h2>
              <p className="text-lg text-muted-foreground text-balance">
                Revolutionizing healthcare delivery with speed, safety, and sustainability
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="group bg-card p-8 rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px] animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                      {feature.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10 border-t border-b border-border animate-page-enter"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Ready to Experience Future Delivery?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              Join hospitals, pharmacies, and patients using MediDrone for faster, safer medical delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                Get Started
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
