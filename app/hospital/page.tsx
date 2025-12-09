"use client"

import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Package, BarChart3, Clock, AlertCircle } from "lucide-react"

export default function HospitalPortal() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Hospital Portal</h1>
            <p className="text-lg text-muted-foreground text-balance">
              Streamline your medical supply chain with MediDrone's hospital delivery system
            </p>
          </div>
        </section>

        {/* Dashboard Overview */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">Quick Stats</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Total Deliveries", value: "2,451", icon: Package },
                { label: "Avg Response Time", value: "8 min", icon: Clock },
                { label: "Success Rate", value: "99.8%", icon: BarChart3 },
                { label: "Active Alerts", value: "3", icon: AlertCircle },
              ].map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                        <p className="text-3xl font-bold text-primary">{stat.value}</p>
                      </div>
                      <Icon className="w-10 h-10 text-muted-foreground opacity-50" />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">Hospital Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Real-time Tracking",
                  description: "Monitor every delivery with live GPS tracking and status updates",
                },
                {
                  title: "Bulk Ordering",
                  description: "Schedule multiple deliveries across departments in one request",
                },
                {
                  title: "Temperature Control",
                  description: "Climate-controlled drone compartments for sensitive medications",
                },
                {
                  title: "Analytics Dashboard",
                  description: "Detailed reports on delivery patterns and cost optimization",
                },
                {
                  title: "Integration API",
                  description: "Connect with your hospital management system seamlessly",
                },
                {
                  title: "24/7 Support",
                  description: "Dedicated support team for hospital operations",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition-all"
                >
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Upgrade Your Supply Chain?</h2>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/register"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent transition-all hover:scale-105 hover:shadow-lg"
              >
                Request Demo
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
