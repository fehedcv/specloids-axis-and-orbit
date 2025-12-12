"use client"

import { useEffect, useRef } from "react"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

const caseStudies = [
  {
    title: "ZenMarket Japan",
    category: "E-commerce Platform",
    description: "Complete e-commerce solution with real-time inventory management and global payment processing.",
    image: "/japanese-ecommerce-website-dashboard-with-products.jpg",
    tech: ["React", "Node.js", "MongoDB"],
    metrics: [
      { label: "Load Speed", value: "2.3x" },
      { label: "Conversion", value: "+45%" },
    ],
  },
  {
    title: "FinTrack Singapore",
    category: "Personal Finance App",
    description: "AI-powered financial insights helping users make smarter money decisions via predictive models.",
    image: "/modern-finance-app-mobile-interface-with-charts.jpg",
    tech: ["React Native", "Python", "TensorFlow"],
    metrics: [
      { label: "Rating", value: "4.8/5" },
      { label: "Retention", value: "85%" },
    ],
  },
  {
    title: "EduConnect Korea",
    category: "EdTech Platform",
    description: "Interactive learning platform connecting students with world-class educators via WebRTC.",
    image: "/online-learning-platform-with-video-courses.jpg",
    tech: ["Next.js", "WebRTC", "Redis"],
    metrics: [
      { label: "Active Users", value: "200K+" },
      { label: "Uptime", value: "99.9%" },
    ],
  },
]

export function CaseStudiesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const cardsContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // 1. Heading Entrance
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

      // 2. Cards Entrance (Staggered)
      const cards = cardsContainerRef.current?.children || []
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsContainerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      })

      // 3. Image Parallax Effect (Inner image moves slower than scroll)
      Array.from(cards).forEach((card) => {
        const image = card.querySelector(".project-image")
        if (image) {
          gsap.fromTo(image, 
            { y: "-10%" },
            {
              y: "10%",
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          )
        }
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="work" className="py-24 lg:py-32 bg-orbital-navy relative overflow-hidden">
      
      {/* --- Background Decor --- */}
      {/* Subtle glowing mesh gradient */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-axis-blue/5 to-transparent pointer-events-none" />
      <div className="absolute -right-40 top-40 w-[600px] h-[600px] bg-ion-gold/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div 
          ref={headingRef} 
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 opacity-0 translate-y-10"
        >
          <div className="max-w-2xl">
            <h2 className="font-sans text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Selected Work
            </h2>
            <p className="mt-6 text-lg text-cool-fog/80 leading-relaxed font-light">
              Real projects, real results. We build digital products that scale.
            </p>
          </div>
          
          <Button variant="outline" className="hidden md:flex rounded-full border-white/20 bg-white/5 text-white hover:bg-white hover:text-orbital-navy transition-all" asChild>
            <Link href="/portfolio">
              View All Projects <ExternalLink className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Projects Grid */}
        <div ref={cardsContainerRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div 
              key={index} 
              // Initial state: Opacity 0, Translated Down
              className="group relative h-[500px] rounded-[2rem] overflow-hidden bg-gray-900 border border-white/10 opacity-0 translate-y-12"
            >
              
              {/* Image Container with Parallax Class */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  // Scale up slightly to allow for parallax movement without showing edges
                  className="project-image w-full h-[120%] object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-60 group-hover:opacity-40"
                />
              </div>

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-orbital-navy via-orbital-navy/80 to-transparent opacity-90" />

              {/* Content Container */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                
                {/* Floating Top Tag */}
                <div className="absolute top-8 left-8">
                   <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-aurora-mint backdrop-blur-md border border-white/10">
                      {study.category}
                   </span>
                </div>

                {/* Bottom Content */}
                <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                  
                  <h3 className="font-sans text-2xl font-bold text-white mb-2 flex items-center gap-2 group-hover:text-ion-gold transition-colors">
                    {study.title}
                    <ArrowUpRight className="w-6 h-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </h3>
                  
                  <p className="text-cool-fog/80 text-sm leading-relaxed mb-6 line-clamp-2 group-hover:text-white transition-colors">
                    {study.description}
                  </p>

                  {/* Hidden Details that slide up on hover */}
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {/* Metrics */}
                    {study.metrics.map((metric, i) => (
                       <div key={i}>
                          <div className="text-xl font-bold text-white">{metric.value}</div>
                          <div className="text-xs text-cool-fog uppercase tracking-wider">{metric.label}</div>
                       </div>
                    ))}
                  </div>

                  {/* Tech Stack (Visible always, pushes up on hover) */}
                  <div className="flex flex-wrap gap-2 mt-6 absolute bottom-8 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                     {study.tech.map((t, i) => (
                        <span key={i} className="text-xs text-cool-fog/60 font-mono">
                           #{t}
                        </span>
                     ))}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Button (Visible only on small screens) */}
        <div className="mt-12 flex md:hidden justify-center">
             <Button variant="outline" className="rounded-full border-white/20 bg-white/5 text-white" asChild>
            <Link href="/portfolio">
              View All Projects
            </Link>
          </Button>
        </div>

      </div>
    </section>
  )
}