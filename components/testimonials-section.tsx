"use client"

import { useEffect, useRef } from "react"
import { Star, Quote, MapPin } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    rating: 5,
    quote:
      "Axis & Orbit delivered our e-commerce platform ahead of schedule with exceptional quality. Their communication was outstanding throughout the project.",
    name: "Takeshi Yamamoto",
    role: "CEO",
    company: "ZenMarket",
    location: "Tokyo, Japan",
    initials: "TY",
    color: "bg-blue-100 text-blue-600"
  },
  {
    rating: 5,
    quote:
      "The team's expertise in AI and their structured approach to delivery made all the difference. Our app users love the intelligent features they built.",
    name: "Sarah Chen",
    role: "Product Director",
    company: "FinTrack",
    location: "Singapore",
    initials: "SC",
    color: "bg-purple-100 text-purple-600"
  },
  {
    rating: 5,
    quote:
      "Working with Axis & Orbit felt like having an extended team. They truly understood our educational mission and delivered a platform that students love.",
    name: "Kim Ji-won",
    role: "Founder",
    company: "EduConnect",
    location: "Seoul, Korea",
    initials: "KJ",
    color: "bg-emerald-100 text-emerald-600"
  },
]

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

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

      // 2. Cards Reveal (Staggered)
      const cards = cardsRef.current?.children || []
      
      // Set initial rotation
      gsap.set(cards, { 
        rotation: (i) => (i % 2 === 0 ? -2 : 2),
        transformOrigin: "center center"
      })

      gsap.to(cards, {
        opacity: 1,
        y: 0,
        rotation: 0, 
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      })
      
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef} 
      // Added min-h-screen and flex-col justify-center for full screen height
      className="relative min-h-screen flex flex-col justify-center py-20 lg:py-32 bg-slate-50 overflow-hidden"
    >
      
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-white rounded-full blur-[100px] opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header */}
        <div 
          ref={headingRef} 
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 opacity-0 translate-y-8"
        >
          
          <h2 className="font-sans text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight text-balance">
            Trusted by Global Leaders
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed font-light">
            Don't just take our word for it. Here's what business leaders across Asia and the world say about working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              // Initial State: Opacity 0, Translated Down
              className="group relative p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 opacity-0 translate-y-12"
            >
              {/* Decorative Quote Icon */}
              <Quote className="absolute top-8 right-8 w-16 h-16 text-slate-50 opacity-50 group-hover:text-blue-50 group-hover:scale-110 transition-all duration-500 rotate-12" />

              {/* Rating */}
              <div className="relative flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="relative text-slate-700 text-lg leading-relaxed mb-8 font-medium">
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div className="relative flex items-center gap-4 pt-6 border-t border-slate-100">
                {/* Avatar Placeholder */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm ${testimonial.color}`}>
                  {testimonial.initials}
                </div>
                
                <div>
                  <div className="font-bold text-slate-900">{testimonial.name}</div>
                  <div className="text-xs font-medium text-slate-500 mb-0.5">
                    {testimonial.role}, {testimonial.company}
                  </div>
                  <div className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-slate-400">
                     <MapPin className="w-3 h-3" />
                     {testimonial.location}
                  </div>
                </div>
              </div>
              
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-[2rem] ring-2 ring-transparent group-hover:ring-blue-500/5 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}