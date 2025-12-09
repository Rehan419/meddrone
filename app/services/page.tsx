"use client"

import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Hospital, Pill, AlertCircle, Package, Zap, Shield } from "lucide-react"

const services = [
  {
    icon: Hospital,
    title: "Hospital-to-Hospital Transfer",
    description:
      "Rapid transfer of organs, blood samples, surgical supplies, and medications between medical facilities",
    features: ["Real-time tracking", "Temperature control", "Secure containers", "On-demand scheduling"],
  },
  {
    icon: Pill,
    title: "Pharmacy Delivery",
    description: "Direct medication delivery to patients from partner pharmacies with prescription verification",
    features: ["Same-day delivery", "Wide coverage", "HIPAA compliant", "Patient notifications"],
  },
  {
    icon: AlertCircle,
    title: "Emergency Response",
    description: "Critical supplies and life-saving medications delivered within minutes to emergency locations",
    features: ["5-minute response", "GPS location tracking", "Priority dispatch", "24/7 available"],
  },
  {
    icon: Package,
    title: "Medical Supply Transport",
    description: "Bulk transportation of sterile instruments, surgical kits, and medical equipment",
    features: ["Sterile packaging", "Route optimization", "Bulk discounts", "Scheduled deliveries"],
  },
  {
    icon: Zap,
    title: "Express Vaccination Program",
    description: "Rapid distribution of vaccines and immunizations to remote and underserved areas",
    features: ["Cold chain maintained", "Wide reach", "Community support", "Tracking system"],
  },
  {
    icon: Shield,
    title: "Secure Medical Records Transfer",
    description: "Encrypted transport of sensitive medical documents and samples between facilities",
    features: ["End-to-end encryption", "Audit trails", "Compliance certified", "Secure handoff"],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-border py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Our Services</h1>
            <p className="text-lg text-muted-foreground text-balance">
              Comprehensive drone delivery solutions for the entire healthcare ecosystem
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <div
                    key={index}
                    className="group bg-card border border-border rounded-xl p-8 hover:shadow-lg hover:border-primary transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 text-sm">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Service Tiers */}
        <section className="py-20 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Service Tiers</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Standard",
                  icon: Package,
                  description: "Regular delivery with 15-30 min response",
                  price: "$5-15",
                  color: "primary",
                },
                {
                  name: "Priority",
                  icon: Zap,
                  description: "Expedited delivery with 5-10 min response",
                  price: "$15-30",
                  color: "secondary",
                },
                {
                  name: "Emergency",
                  icon: AlertCircle,
                  description: "Critical delivery with <5 min response",
                  price: "Premium",
                  color: "destructive",
                },
              ].map((tier, index) => {
                const Icon = tier.icon
                return (
                  <div
                    key={index}
                    className={`rounded-xl p-8 border-2 ${
                      tier.color === "primary"
                        ? "border-primary/30 bg-background"
                        : tier.color === "secondary"
                          ? "border-secondary/30 bg-background"
                          : "border-destructive/30 bg-background"
                    }`}
                  >
                    <Icon
                      className={`w-10 h-10 mb-4 ${
                        tier.color === "primary"
                          ? "text-primary"
                          : tier.color === "secondary"
                            ? "text-secondary"
                            : "text-destructive"
                      }`}
                    />
                    <h3 className="text-xl font-semibold text-foreground mb-2">{tier.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{tier.description}</p>
                    <p className="text-2xl font-bold text-foreground">{tier.price}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Our Services */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Why Choose MediDrone Services?</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                {[
                  { title: "Lightning-Fast", desc: "Medications and supplies reach patients in minutes, not hours" },
                  { title: "Cost-Effective", desc: "Reduce operational costs while improving delivery efficiency" },
                  { title: "Eco-Friendly", desc: "Zero-emission technology supporting environmental sustainability" },
                  { title: "Highly Secure", desc: "Advanced encryption and tracking for complete transparency" },
                  { title: "HIPAA Compliant", desc: "Full medical privacy and security standards adherence" },
                  { title: "Scalable", desc: "Grows with your organization from small to enterprise needs" },
                ].map((item, index) => (
                  <div key={index}>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-12 flex items-center justify-center h-96">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP3xuTQZieHkqct20ImxVnXN3Bk55BHpp5gw&s"
                  alt="Service illustration"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10 border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-balance">
              Choose the Service That Fits Your Needs
            </h2>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/hospital"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent transition-all hover:scale-105 hover:shadow-lg"
              >
                Hospital Services
              </Link>
              <Link
                href="/pharmacy"
                className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:opacity-90 transition-all hover:scale-105 hover:shadow-lg"
              >
                Pharmacy Services
              </Link>
              <Link
                href="/emergency"
                className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Emergency Services
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
