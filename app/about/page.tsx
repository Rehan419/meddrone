"use client"

import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Heart, Leaf, Zap, Users, Target, Award } from "lucide-react"

const teamMembers = [
  { name: "Muhammad Rehan", role: "Founder & CEO", bio: "Medical technology innovator with 15+ years in healthcare" ,image: "/team/rehan.jpg"},
  { name: "Muhammad Saqlain", role: "Chief Technology Officer", bio: "Drone engineer and autonomous systems expert",image: "/team/saqlain.jpg" },
  { name: "Muhmmad Burhan", role: "Chief Medical Officer", bio: "Physician and healthcare logistics specialist",image: "/team/burhan.jpg" },
  {
    name: "Muhammad Abu Hurairah",
    role: "Chief Operations Officer",
    bio: "Supply chain and logistics management professional",
    image: "/team/hurairah.jpg"
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-border py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">About MediDrone</h1>
            <p className="text-lg text-muted-foreground text-balance max-w-2xl">
              Revolutionizing healthcare delivery through cutting-edge drone technology, environmental sustainability,
              and a commitment to saving lives
            </p>
          </div>
        </section>

        {/* Mission Vision Values */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Target,
                  title: "Our Mission",
                  description:
                    "To revolutionize medical supply delivery by making critical healthcare resources accessible, fast, and sustainable for everyone",
                },
                {
                  icon: Zap,
                  title: "Our Vision",
                  description:
                    "A world where emergency medical supplies and medicines reach patients within minutes, saving countless lives every day",
                },
                {
                  icon: Leaf,
                  title: "Our Commitment",
                  description:
                    "To operate with zero-emission technology and environmental responsibility while advancing healthcare innovation",
                },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="bg-card border border-border rounded-xl p-8">
                    <Icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12">Our Story</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-muted-foreground">
                <p>
                  MediDrone was founded in 2021 by a team of medical professionals, engineers, and environmental
                  advocates who witnessed the critical need for faster, more sustainable medical delivery.
                </p>
                <p>
                  During a medical emergency, our founder Dr. Sarah Chen's colleague couldn't receive critical blood
                  samples for 3 hours. This experience sparked the idea: what if we could deliver life-saving supplies
                  in minutes using clean drone technology?
                </p>
                <p>
                  Today, we've delivered over 50,000 emergency medical supplies and medications, saved 1,247 lives, and
                  eliminated over 500 tons of carbon emissions compared to traditional delivery methods.
                </p>
                <p>
                  Our mission extends beyond business—we're committed to democratizing access to emergency medical care,
                  one delivery at a time.
                </p>
              </div>
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-12 flex items-center justify-center h-96">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Company illustration"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Heart, title: "Patient-First", desc: "Every decision prioritizes patient safety and outcomes" },
                { icon: Leaf, title: "Sustainability", desc: "Zero-emission operations protecting our planet" },
                { icon: Zap, title: "Innovation", desc: "Continuous improvement through cutting-edge technology" },
                { icon: Users, title: "Collaboration", desc: "Partnership with healthcare providers and communities" },
                { icon: Award, title: "Excellence", desc: "Highest standards in service quality and reliability" },
                { icon: Target, title: "Accessibility", desc: "Making emergency care available to everyone" },
              ].map((value, index) => {
                const Icon = value.icon
                return (
                  <div
                    key={index}
                    className="group bg-card border border-border rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all"
                  >
                    <Icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-card border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Leadership Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-background border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all"
                >
                   <div className="h-63 w-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover  object-[50%_16%]"
                       />
                        </div>
                  <div className="p-6 ">
                    <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
                    <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">By The Numbers</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: "50K+", label: "Deliveries Completed" },
                { number: "1,247", label: "Lives Saved" },
                { number: "500+", label: "Tons of CO₂ Prevented" },
                { number: "4.2 min", label: "Average Response Time" },
              ].map((stat, index) => (
                <div key={index} className="text-center p-8 bg-card border border-border rounded-lg">
                  <p className="text-4xl font-bold text-primary mb-2">{stat.number}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10 border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-balance">
              Join the Medical Delivery Revolution
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              Be part of a movement transforming healthcare delivery and saving lives
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/register"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent transition-all hover:scale-105 hover:shadow-lg"
              >
                Get Started
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
