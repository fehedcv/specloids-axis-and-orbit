"use client"

import { useEffect, useRef } from "react"
import { Globe, Calendar, Rocket, Users, CreditCard, Shield } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLanguage } from "@/components/language-provider"

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    icon: Globe,
    title: "Global Quality from India",
    description: "World-class talent delivering international standards at competitive rates.",
  },
  {
    icon: Calendar,
    title: "Structured Agile Delivery",
    description: "Proven methodologies with clear milestones and regular communication.",
  },
  {
    icon: Rocket,
    title: "MVPs in 6 Weeks",
    description: "Rapid prototyping and deployment to validate ideas quickly.",
  },
  {
    icon: Users,
    title: "Dedicated PMs",
    description: "Experienced project managers ensuring smooth execution.",
  },
  {
    icon: CreditCard,
    title: "Transparent Pricing",
    description: "No hidden costs, clear estimates, flexible payment options.",
  },
  {
    icon: Shield,
    title: "IP Protection",
    description: "Your intellectual property remains secure with NDAs.",
  },
]

export function WhyChooseSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const blob1Ref = useRef<HTMLDivElement>(null)
  const blob2Ref = useRef<HTMLDivElement>(null)
  const contentContainerRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // --- 1. Background Animation (Floating Blobs) ---
      const bgTl = gsap.timeline({ repeat: -1, yoyo: true })
      
      bgTl.to(blob1Ref.current, {
        x: "30%",
        y: "20%",
        scale: 1.1,
        rotation: 10,
        duration: 15,
        ease: "sine.inOut",
      }, 0)
      
      bgTl.to(blob2Ref.current, {
        x: "-25%",
        y: "-15%",
        scale: 1.2,
        rotation: -10,
        duration: 20,
        ease: "sine.inOut",
      }, 0)


      // --- 2. Entrance Animations ---
      // Heading
      gsap.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })

      // Cards (Staggered)
      gsap.to(cardsRef.current?.children || [], {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.1,
        ease: "expo.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })

      // --- 3. Parallax Scroll ---
      gsap.to(contentContainerRef.current, {
        y: -30, 
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1, 
        },
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-24 lg:py-32 bg-slate-50/50 overflow-hidden relative">
      
      {/* --- VISIBLE Background Elements --- */}
      
      {/* 1. Technical Grid Pattern (Gray) - Guaranteed visibility */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* 2. Floating Color Blobs (Using standard Tailwind colors for safety) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Blob 1: Blue - Top Right */}
        <div 
            ref={blob1Ref}
            className="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[100px] mix-blend-multiply" 
        />
        {/* Blob 2: Purple - Bottom Left */}
        <div 
            ref={blob2Ref}
            className="absolute -bottom-[10%] -left-[10%] w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[90px] mix-blend-multiply" 
        />
      </div>


      {/* --- Content --- */}
      <div ref={contentContainerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div 
          ref={headingRef} 
          className="text-center max-w-3xl mx-auto mb-20 opacity-0 translate-y-12"
        >
          <h2 className="font-sans text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight text-balance leading-tight">
            {t("why.title")}
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed font-light">
            {t("why.paragraph")}
          </p>
        </div>

        {/* Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-[2rem] bg-white border border-slate-200 hover:border-blue-200/50 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-500 ease-expo-out opacity-0 translate-y-10 scale-95 relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-blue-50 transition-all duration-500 relative z-10">
                <feature.icon className="w-7 h-7 text-slate-700 group-hover:text-blue-600 transition-colors duration-300" />
              </div>
              
              <h3 className="font-sans font-bold text-xl text-slate-900 mb-3 tracking-tight relative z-10">
                {t(`why.items.${index}.title`)}
              </h3>

              <p className="text-slate-500 leading-relaxed text-base relative z-10">
                {t(`why.items.${index}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}