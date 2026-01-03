"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowRight } from "lucide-react"
import { gsap } from "gsap"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLAnchorElement>(null)
  const linksRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const mobileLinksRef = useRef<HTMLDivElement>(null)

  // Scroll state
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(logoRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      })

      gsap.to(linksRef.current?.children || [], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.4,
      })
    }, navRef)

    return () => ctx.revert()
  }, [])

  // Mobile menu animation
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
      gsap.to(mobileMenuRef.current, {
        opacity: 1,
        pointerEvents: "all",
        duration: 0.4,
        ease: "power2.out",
      })
      gsap.fromTo(
        mobileLinksRef.current?.children || [],
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.5,
          ease: "back.out(1.2)",
          delay: 0.2,
        }
      )
    } else {
      document.body.style.overflow = "unset"
      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        pointerEvents: "none",
        duration: 0.3,
        ease: "power2.in",
      })
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#case-studies" },
    { label: "Team", href: "#team" },
  ]

  const textColorClass =
    isScrolled || isMobileMenuOpen ? "text-slate-900" : "text-white"

  const currentLogo =
    isScrolled || isMobileMenuOpen
      ? "/axislogomain.png"
      : "/axislogolight.png"

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl border-slate-200/50 shadow-sm py-4"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              ref={logoRef}
              href="/"
              className="flex items-center gap-3 relative z-50 opacity-0 -translate-y-4 group"
            >
              <div className="w-10 h-10 transition-all duration-300">
                <img
                  src={currentLogo}
                  alt="Specloid's Axis & Orbit Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              <span
                className={`font-bold text-lg tracking-tight whitespace-nowrap transition-colors duration-300 ${textColorClass}`}
              >
                Specloid&apos;s Axis & Orbit
              </span>
            </Link>

            {/* Desktop Nav */}
            <div ref={linksRef} className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors hover:opacity-70 group opacity-0 -translate-y-4 ${textColorClass}`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      isScrolled ? "bg-blue-600" : "bg-white"
                    }`}
                  />
                </Link>
              ))}

              <div className="opacity-0 -translate-y-4">
                <Button
                  className={`font-semibold rounded-full px-6 transition-all duration-300 shadow-lg ${
                    isScrolled
                      ? "bg-slate-900 text-white hover:bg-blue-600 hover:shadow-blue-200"
                      : "bg-white text-slate-900 hover:bg-blue-50"
                  }`}
                  asChild
                >
                  <Link href="#contact">Start Project</Link>
                </Button>
              </div>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden z-50 relative p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="text-slate-900" size={24} />
              ) : (
                <Menu className={textColorClass} size={24} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl opacity-0 pointer-events-none md:hidden flex flex-col justify-center"
      >
        <div ref={mobileLinksRef} className="px-8 space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block text-4xl font-bold text-slate-900 tracking-tight hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <div className="pt-8">
            <Button
              size="lg"
              className="w-full bg-blue-600 text-white hover:bg-blue-700 h-14 text-lg rounded-xl"
              asChild
            >
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start a Project <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 w-full text-center">
          <p className="text-sm text-slate-400 font-medium">
            Kochi • Dubai • San Francisco
          </p>
        </div>
      </div>
    </>
  )
}
