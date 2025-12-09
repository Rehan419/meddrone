"use client"

import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Pill, MapPin, Users, TrendingUp, Lock, Zap } from "lucide-react"

export default function PharmacyPortal() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-r from-secondary/10 to-accent/10 border-b border-border py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Pharmacy Portal</h1>
            <p className="text-lg text-muted-foreground text-balance">
              Direct medication delivery to patients with reliability and safety
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">Pharmacy Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Pill, title: "Prescription Delivery", desc: "Fast delivery of prescribed medications" },
                { icon: MapPin, title: "Wide Coverage", desc: "Serving multiple pharmacy locations" },
                { icon: Users, title: "Patient Tracking", desc: "Patients track their medication delivery" },
                { icon: TrendingUp, title: "Growth Analytics", desc: "Boost sales with delivery options" },
                { icon: Lock, title: "Secure Packaging", desc: "HIPAA-compliant secure containers" },
                { icon: Zap, title: "Fast Processing", desc: "Same-day delivery available" },
              ].map((service, index) => {
                const Icon = service.icon
                return (
                  <div
                    key={index}
                    className="group bg-card border border-border rounded-lg p-6 hover:border-secondary hover:shadow-lg transition-all"
                  >
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                      <Icon className="w-6 h-6 text-secondary group-hover:text-secondary-foreground" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Simple Pricing</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Starter",
                  price: "$99",
                  features: ["Up to 50 deliveries/month", "Basic analytics", "Email support"],
                },
                {
                  name: "Professional",
                  price: "$299",
                  features: ["Up to 500 deliveries/month", "Advanced analytics", "Priority support", "API access"],
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  features: ["Unlimited deliveries", "Custom integration", "24/7 dedicated support", "SLA guarantee"],
                },
              ].map((plan, index) => (
                <div
                  key={index}
                  className={`rounded-lg p-6 border-2 ${index === 1 ? "border-secondary bg-secondary/5" : "border-border"}`}
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-3xl font-bold text-secondary mb-6">{plan.price}</p>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-secondary">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-2 rounded-lg font-semibold transition-all ${
                      index === 1
                        ? "bg-secondary text-secondary-foreground hover:bg-accent"
                        : "border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Start Delivering Today</h2>
            <Link
              href="/register"
              className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:opacity-90 transition-all hover:scale-105 hover:shadow-lg inline-block"
            >
              Register Your Pharmacy
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
