"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2, ArrowRight, Mail, MessageSquare, Send } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description: "We discuss your goals, budget, and timeline in a free 30-min consultation.",
  },
  {
    number: "02",
    title: "Strategic Proposal",
    description: "Receive a detailed roadmap, architecture plan, and fixed-price quote.",
  },
  {
    number: "03",
    title: "Kickoff & Build",
    description: "Meet your dedicated squad and start the first sprint within 48 hours.",
  },
]

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // 1. Heading Reveal
      gsap.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })

      // 2. Left Content Reveal
      gsap.to(leftRef.current, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })

      // 3. Form Reveal
      gsap.to(formRef.current, {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section ref={sectionRef} id="contact" className="relative py-24 lg:py-32 bg-slate-50 overflow-hidden">
      
      {/* --- Background Decor --- */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />
      
      {/* Technical Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div ref={headingRef} className="text-center max-w-3xl mx-auto mb-16 lg:mb-24 opacity-0 translate-y-10">
          
          <h2 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Launch?</span>
          </h2>
          <p className="mt-6 text-xl text-slate-600 font-light max-w-2xl mx-auto">
            Tell us about your vision. We'll help you navigate the technical landscape and build a solution that scales.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left: Process Steps */}
          <div ref={leftRef} className="opacity-0 -translate-x-12">
            <h3 className="font-sans text-2xl font-bold text-slate-900 mb-8">The Journey</h3>
            
            <div className="relative space-y-12">
              {/* Connecting Line */}
              <div className="absolute left-6 top-2 bottom-2 w-px bg-slate-200" />

              {steps.map((step, index) => (
                <div key={index} className="relative flex gap-6">
                  {/* Number Bubble */}
                  <div className="relative flex-shrink-0 w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center z-10 shadow-sm text-blue-600 font-bold font-mono">
                    {step.number}
                  </div>
                  
                  <div className="pt-1">
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h4>
                    <p className="text-slate-500 leading-relaxed text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Free Architecture Review</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>NDA Signed Upfront</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>Response in 24 Hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form (Clean White Card) */}
          <div 
            ref={formRef} 
            className="relative p-8 lg:p-10 rounded-[2rem] bg-white border border-slate-100 shadow-2xl shadow-slate-200/50 opacity-0 translate-x-12"
          >
            {isSubmitted ? (
              <div className="text-center py-20 flex flex-col items-center justify-center h-full">
                <div className="w-20 h-20 mb-6 rounded-full bg-green-50 border border-green-100 flex items-center justify-center animate-pulse">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="font-sans text-2xl font-bold text-slate-900 mb-2">Message Received!</h3>
                <p className="text-slate-500">We'll analyze your request and get back to you shortly.</p>
                <Button 
                   onClick={() => setIsSubmitted(false)}
                   variant="link" 
                   className="mt-6 text-blue-600 hover:text-blue-800"
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Name</label>
                    <Input
                      required
                      placeholder="John Doe"
                      className="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white h-12 rounded-xl transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Company</label>
                    <Input 
                      placeholder="Acme Inc." 
                      className="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white h-12 rounded-xl transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input
                      required
                      type="email"
                      placeholder="john@example.com"
                      className="pl-10 bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white h-12 rounded-xl transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Service</label>
                    <Select>
                      <SelectTrigger className="bg-slate-50 border-slate-200 text-slate-900 h-12 rounded-xl focus:ring-offset-0 focus:ring-blue-500">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-slate-200 text-slate-900">
                        <SelectItem value="web">Web Development</SelectItem>
                        <SelectItem value="mobile">Mobile App</SelectItem>
                        <SelectItem value="ai">AI / LLM Integration</SelectItem>
                        <SelectItem value="design">UI/UX Design</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Budget</label>
                    <Select>
                      <SelectTrigger className="bg-slate-50 border-slate-200 text-slate-900 h-12 rounded-xl focus:ring-offset-0 focus:ring-blue-500">
                        <SelectValue placeholder="Range" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-slate-200 text-slate-900">
                        <SelectItem value="5k">$5k - $10k</SelectItem>
                        <SelectItem value="10k">$10k - $25k</SelectItem>
                        <SelectItem value="25k">$25k - $50k</SelectItem>
                        <SelectItem value="50k">$50k+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Project Details</label>
                  <Textarea
                    required
                    placeholder="Tell us a bit about your goals..."
                    rows={4}
                    className="bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white resize-none rounded-xl transition-all"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 bg-slate-900 text-white hover:bg-blue-700 font-bold text-base rounded-xl transition-all duration-300 shadow-lg shadow-slate-200 hover:-translate-y-1"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Processing..."
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Request <ArrowRight className="w-4 h-4" />
                    </span>
                  )}
                </Button>
                
                <p className="text-center text-xs text-slate-400">
                  Protected by reCAPTCHA and our Privacy Policy.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}