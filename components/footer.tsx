"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image" // 1. Import Image
import { MapPin, Mail, Linkedin, Twitter, Github, ArrowRight, Send } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

gsap.registerPlugin(ScrollTrigger)

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Team", href: "#team" },
  { label: "Careers", href: "#careers" },
]

const services = [
  "Conversational AI",
  "App Development", 
  "Web Design", 
  "DevOps", 
  "QA & Testing", 
  "MVP Acceleration"
]

export function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const watermarkRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // 1. Content Reveal
      gsap.to(contentRef.current?.children || [], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      })

      // 2. Parallax Watermark Effect
      gsap.to(watermarkRef.current, {
        y: -50,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
        },
      })

    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer ref={footerRef} className="bg-slate-950 text-white relative overflow-hidden pt-24 pb-12">
      
      {/* --- Background Elements --- */}
      {/* Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Massive Watermark Text */}
      <div 
        ref={watermarkRef}
        className="absolute -bottom-20 left-0 right-0 text-center pointer-events-none select-none overflow-hidden"
      >
        <span className="text-[12vw] sm:text-[15vw] font-bold leading-none text-white/[0.03] whitespace-nowrap tracking-tighter">
          AXIS & ORBIT
        </span>
      </div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid */}
        <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Column (Span 4) */}
          <div className="lg:col-span-4 opacity-0 translate-y-8">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              {/* Logo Image */}
              <div className="relative w-10 h-10">
                <Image 
                  src="/axislogolight.png" 
                  alt="Specloid's Axis & Orbit Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              {/* Updated Text */}
              <span className="font-sans font-bold text-2xl tracking-tight">
                Specloid&apos;s Axis & Orbit
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
              Premium digital delivery combining freelancer flexibility with agency reliability. 
              Building exceptional digital experiences from Kerala to the world.
            </p>
            
            <div className="flex gap-4">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all duration-300 group"
                >
                  <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Column (Span 2) */}
          <div className="lg:col-span-2 lg:col-start-6 opacity-0 translate-y-8">
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-slate-400 text-sm hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-px bg-blue-500 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column (Span 2) */}
          <div className="lg:col-span-2 opacity-0 translate-y-8">
            <h4 className="font-bold text-lg mb-6">Expertise</h4>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <Link href="#services" className="text-slate-400 text-sm hover:text-white transition-colors block">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column (Span 3) */}
          <div className="lg:col-span-3 opacity-0 translate-y-8">
            <h4 className="font-bold text-lg mb-6">Stay Updated</h4>
            <p className="text-slate-400 text-sm mb-4">
              Get the latest tech trends and insights delivered to your inbox.
            </p>
            <form className="relative">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 h-12 pr-12 rounded-lg focus:bg-white/10 transition-colors"
              />
              <Button 
                size="icon"
                className="absolute right-1 top-1 h-10 w-10 bg-blue-600 hover:bg-blue-500 text-white rounded-md"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Axis & Orbit. All rights reserved.
          </div>
          
          
        </div>
      </div>
    </footer>
  )
}