"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Hospital Portal", href: "/hospital" },
  { label: "Pharmacy Portal", href: "/pharmacy" },
  { label: "Emergency", href: "/emergency" },
  { label: "Map", href: "/map" },
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 group">
            
            <span className="font-bold text-2xl text-primary hidden sm:inline-block group-hover:text-accent transition-colors duration-300">
               MedDrone
                    </span>

          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-105"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side - Auth and Theme Toggle */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            <Link
              href="/login"
              className="hidden sm:inline-block px-4 py-2 rounded-md text-sm font-medium bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="hidden sm:inline-block px-4 py-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200"
            >
              Register
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2 animate-slide-down">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 rounded-md text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border flex gap-2">
              <Link
                href="/login"
                className="flex-1 px-4 py-2 rounded-md text-sm font-medium bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-all text-center"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/register"
                className="flex-1 px-4 py-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-accent transition-all text-center"
                onClick={() => setIsOpen(false)}
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
