"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import {
  MessageSquare,
  BarChart3,
  Cpu,
  Smartphone,
  Palette,
  CheckCircle,
  Cloud,
  FolderKanban,
  Zap,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: MessageSquare,
    title: "Conversational AI",
    description: "Intelligent chatbots and voice assistants that understand and engage your customers naturally.",
    tags: ["ChatGPT", "LangChain", "RAG", "Voice AI"],
    featured: true,
  },
  {
    icon: BarChart3,
    title: "BI & Analytics",
    description: "Transform raw data into actionable insights with custom dashboards and reporting solutions.",
    tags: ["Power BI", "Tableau", "Python", "SQL"],
  },
  {
    icon: Cpu,
    title: "AI & IoT",
    description: "Smart solutions connecting devices and artificial intelligence for automated operations.",
    tags: ["TensorFlow", "AWS IoT", "Edge Computing"],
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile applications built for performance and user experience.",
    tags: ["React Native", "Flutter", "iOS", "Android"],
  },
  {
    icon: Palette,
    title: "Web Design (UI/UX)",
    description: "Beautiful, intuitive interfaces that delight users and drive conversions.",
    tags: ["Figma", "Design Systems", "Prototyping"],
  },
  {
    icon: CheckCircle,
    title: "QA & Testing",
    description: "Comprehensive testing strategies ensuring quality and reliability across all platforms.",
    tags: ["Automation", "Performance", "Security"],
  },
  {
    icon: Cloud,
    title: "DevOps",
    description: "Streamlined CI/CD pipelines and cloud infrastructure for seamless deployment.",
    tags: ["AWS", "Docker", "Kubernetes", "Terraform"],
  },
  {
    icon: FolderKanban,
    title: "Project Management",
    description: "Expert coordination ensuring projects are delivered on time and within budget.",
    tags: ["Agile", "Scrum", "JIRA", "Notion"],
  },
  {
    icon: Zap,
    title: "MVP Acceleration",
    description: "Rapidly validate your ideas with minimal viable products built in weeks, not months.",
    tags: ["Rapid Prototyping", "Lean", "6-Week Sprints"],
  },
]

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const bgShapeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // 1. Background Animation (Slow Rotation)
      gsap.to(bgShapeRef.current, {
        rotation: 360,
        duration: 120,
        repeat: -1,
        ease: "none"
      })

      // 2. Entrance Animation: Heading
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

      // 3. Entrance Animation: Cards (Staggered Grid)
      gsap.to(cardsRef.current?.children || [], {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: {
          each: 0.05,
          grid: "auto",
          from: "start"
        },
        ease: "back.out(1.2)", // Subtle bounce effect
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="services" className="relative py-24 lg:py-32 bg-slate-50 overflow-hidden">
      
      {/* --- Background Elements --- */}
      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Dynamic Gradient Orb */}
      <div 
        ref={bgShapeRef}
        className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-gradient-to-br from-axis-blue/10 via-purple-100/20 to-transparent rounded-[40%] blur-[80px] pointer-events-none" 
      />
      
      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div 
          ref={headingRef} 
          className="text-center max-w-3xl mx-auto mb-16 opacity-0 translate-y-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-axis-blue/5 text-axis-blue text-xs font-bold uppercase tracking-wider mb-6">
            <Zap className="w-3 h-3" />
            Our Expertise
          </div>
          <h2 className="font-sans text-4xl sm:text-5xl font-bold text-orbital-navy tracking-tight text-balance">
            Complete Digital Solutions
          </h2>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            From concept to deployment, we provide end-to-end engineering tailored to scale your business.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              // Initial State: Opacity 0, Translated down, Scaled down slightly
              className={`group relative p-8 rounded-3xl bg-white transition-all duration-500 hover:-translate-y-2 opacity-0 translate-y-12 scale-95 overflow-hidden
                ${service.featured 
                  ? "shadow-[0_0_40px_-10px_rgba(255,215,0,0.2)] border border-ion-gold/30" 
                  : "shadow-sm hover:shadow-xl border border-slate-100 hover:border-axis-blue/20"
                }
              `}
            >
              {/* Featured Badge */}
              {service.featured && (
                <div className="absolute top-0 right-0 px-4 py-1.5 bg-gradient-to-r from-ion-gold to-yellow-400 text-white text-xs font-bold rounded-bl-2xl">
                  POPULAR
                </div>
              )}

              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 relative z-10
                  ${service.featured 
                    ? "bg-ion-gold/10 text-ion-gold" 
                    : "bg-slate-50 text-slate-600 group-hover:bg-axis-blue/10 group-hover:text-axis-blue"
                  }`}
              >
                <service.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="font-sans font-bold text-xl text-orbital-navy mb-3 group-hover:text-axis-blue transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2.5 py-1 text-[11px] font-semibold bg-slate-100 text-slate-500 rounded-md transition-colors duration-300 group-hover:bg-white group-hover:shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Link */}
                <div className="pt-4 border-t border-slate-100 group-hover:border-transparent transition-colors duration-300">
                  <Button
                    variant="ghost"
                    className="p-0 h-auto font-semibold text-slate-400 group-hover:text-axis-blue transition-colors duration-300 flex items-center gap-2"
                    asChild
                  >
                    <Link href="#contact">
                      Learn more
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}