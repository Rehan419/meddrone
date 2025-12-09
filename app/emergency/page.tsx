"use client"

import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AlertTriangle, Phone, MapPin, Zap, Shield } from "lucide-react"

export default function EmergencyPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Critical Alert Banner */}
        <section className="bg-gradient-to-r from-destructive/20 to-accent/20 border-b-2 border-destructive py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0" />
              <div>
                <h2 className="text-lg font-bold text-foreground">Emergency Response Service</h2>
                <p className="text-sm text-muted-foreground">Critical medical supplies delivered in minutes</p>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Features */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Emergency Delivery Service</h1>
            <p className="text-lg text-muted-foreground mb-12 text-balance">
              When seconds matter, MediDrone delivers critical supplies and life-saving medications directly to
              emergency locations
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  icon: Phone,
                  title: "One-Click Request",
                  description: "Emergency medical supplies delivered in 5-10 minutes from request",
                },
                {
                  icon: MapPin,
                  title: "Location-Based",
                  description: "Instant recognition of accident sites and emergency scenes",
                },
                {
                  icon: Zap,
                  title: "Instant Response",
                  description: "Automatic dispatch to nearest available drone fleet",
                },
                {
                  icon: Shield,
                  title: "Secure Delivery",
                  description: "Protected delivery containers for sensitive emergency supplies",
                },
              ].map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="group bg-card border-2 border-destructive/20 rounded-lg p-6 hover:border-destructive hover:shadow-lg transition-all"
                  >
                    <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-destructive group-hover:text-primary-foreground transition-colors">
                      <Icon className="w-6 h-6 text-destructive group-hover:text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                )
              })}
            </div>

            {/* Emergency Hotline */}
            <div className="bg-gradient-to-r from-destructive/10 to-accent/10 border-2 border-destructive rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">Emergency Hotline</h2>
              <p className="text-lg text-muted-foreground mb-6">Call for immediate emergency delivery assistance</p>
              <a
                href="tel:+1-800-MEDIDRONE"
                className="inline-flex items-center gap-2 px-8 py-3 bg-destructive text-white rounded-lg font-bold text-lg hover:opacity-90 transition-all hover:scale-105 hover:shadow-lg animate-pulse-glow"
              >
                <Phone className="w-6 h-6" />
                +1-800-MEDIDRONE
              </a>
            </div>
          </div>
        </section>

        {/* Coverage Stats */}
        <section className="py-16 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Emergency Response Stats</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { label: "Avg Response Time", value: "4.2 min", icon: Zap },
                { label: "Lives Saved", value: "1,247", icon: Shield },
                { label: "Coverage Area", value: "500+ sq mi", icon: MapPin },
              ].map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="text-center p-6 bg-background rounded-lg border border-border">
                    <Icon className="w-12 h-12 text-destructive mx-auto mb-4 opacity-50" />
                    <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
                    <p className="text-4xl font-bold text-primary">{stat.value}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Sign Up for Emergency Response</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Medical facilities, first responders, and emergency services can register for immediate access
            </p>
            <Link
              href="/register"
              className="px-8 py-3 bg-destructive text-white rounded-lg font-semibold hover:opacity-90 transition-all hover:scale-105 hover:shadow-lg inline-block"
            >
              Activate Emergency Service
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
