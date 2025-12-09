"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useState } from "react"

const locations = [
  {
    id: 1,
    name: "Lahore Hub",
    address: "123 Railway line, Lahore , NY 10001",
    phone: "+1 (212) 555-0100",
    email: "newlahorek@medidrone.com",
    hours: "24/7 Operations",
    lat: 40.7128,
    lng: -74.006,
  },
  {
    id: 2,
    name: "Islamabad Center",
    address: "456 I-8, Islamabad, CA 90001",
    phone: "+1 (213) 555-0200",
    email: "l0I-8@medidrone.com",
    hours: "24/7 Operations",
    lat: 34.0522,
    lng: -118.2437,
  },
  {
    id: 3,
    name: "Singhpura Operations",
    address: "789 Care Street, Singhpura lahore, IL 60601",
    phone: "+1 (312) 555-0300",
    email: "Singhpura@medidrone.com",
    hours: "24/7 Operations",
    lat: 41.8781,
    lng: -87.6298,
  },
  {
    id: 4,
    name: "Sindh Terminal",
    address: "321 Medical Way, Houston, TX 77001",
    phone: "+1 (713) 555-0400",
    email: "houston@medidrone.com",
    hours: "24/7 Operations",
    lat: 29.7604,
    lng: -95.3698,
  },
  {
    id: 5,
    name: "Karachi Station",
    address: "654 Health Avenue, Phoenix, AZ 85001",
    phone: "+1 (602) 555-0500",
    email: "phoenix@medidrone.com",
    hours: "24/7 Operations",
    lat: 33.4484,
    lng: -112.074,
  },
  {
    id: 6,
    name: "Miami Facility",
    address: "987 Delivery Drive, Miami, FL 33101",
    phone: "+1 (305) 555-0600",
    email: "miami@medidrone.com",
    hours: "24/7 Operations",
    lat: 25.7617,
    lng: -80.1918,
  },
]

export default function MapPage() {
  const [selectedLocation, setSelectedLocation] = useState(locations[0])

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Page Header */}
        <section className="py-12 bg-gradient-to-b from-primary/5 to-secondary/5 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Find a MediDrone Location
            </h1>
            <p className="text-lg text-muted-foreground text-balance">
              Our delivery hubs are strategically located across the nation to serve you better.
            </p>
          </div>
        </section>

        {/* Map and Locations */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Locations List */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold text-foreground mb-6">Our Locations</h2>
                <div className="space-y-4 max-h-[600px] overflow-y-auto">
                  {locations.map((location) => (
                    <div
                      key={location.id}
                      onClick={() => setSelectedLocation(location)}
                      className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 ${
                        selectedLocation.id === location.id
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary"
                      }`}
                    >
                      <h3 className="font-semibold text-foreground mb-2">{location.name}</h3>
                      <p className="text-sm text-muted-foreground flex items-start gap-2 mb-2">
                        <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        {location.address}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location Details */}
              <div className="lg:col-span-2">
                <div className="bg-card p-8 rounded-xl border border-border">
                  {/* Map Placeholder */}
                  <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mb-8 flex items-center justify-center border border-border">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                      <p className="text-muted-foreground">{selectedLocation.name}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Lat: {selectedLocation.lat.toFixed(4)}, Lng: {selectedLocation.lng.toFixed(4)}
                      </p>
                    </div>
                  </div>

                  {/* Location Information */}
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-3xl font-bold text-foreground mb-2">{selectedLocation.name}</h2>
                      <p className="text-muted-foreground">{selectedLocation.address}</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      {/* Phone */}
                      <div className="flex items-start gap-3">
                        <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-muted-foreground">Phone</p>
                          <a
                            href={`tel:${selectedLocation.phone}`}
                            className="text-primary font-semibold hover:underline"
                          >
                            {selectedLocation.phone}
                          </a>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-muted-foreground">Email</p>
                          <a
                            href={`mailto:${selectedLocation.email}`}
                            className="text-primary font-semibold hover:underline"
                          >
                            {selectedLocation.email}
                          </a>
                        </div>
                      </div>

                      {/* Hours */}
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-muted-foreground">Hours</p>
                          <p className="text-primary font-semibold">{selectedLocation.hours}</p>
                        </div>
                      </div>
                    </div>

                    {/* Services Available */}
                    <div className="pt-4 border-t border-border">
                      <h3 className="font-semibold text-foreground mb-3">Services Available</h3>
                      <div className="grid md:grid-cols-2 gap-2">
                        <div className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          Hospital Deliveries
                        </div>
                        <div className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          Pharmacy Services
                        </div>
                        <div className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          Emergency Response
                        </div>
                        <div className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          24/7 Support
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10 border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Need More Information?</h2>
            <p className="text-muted-foreground mb-8">
              Contact your nearest MediDrone location or reach out to our support team.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
