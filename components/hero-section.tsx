"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { gsap } from "gsap"
import { ChevronRight } from "lucide-react"

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null) // Kept the ref even though badge is removed in your snippet, just in case.
  const headingRef = useRef<HTMLHeadingElement>(null)
  const paragraphRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null) // Kept ref, though removed from JSX in your snippet.

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      // 1. Background Glow
      tl.to(glowRef.current, { 
        scale: 1, 
        opacity: 1, 
        duration: 2, 
        ease: "power2.out" 
      })

      // 2. Content Reveal
      // Heading 
      .to(headingRef.current, { 
        y: 0, 
        opacity: 1, 
        duration: 1 
      }, "-=1.0") // Adjusted timing slightly since badge is gone
      
      // Paragraph
      .to(paragraphRef.current, { 
        y: 0, 
        opacity: 1, 
        duration: 0.8 
      }, "-=0.8")
      
      // Buttons
      .to(buttonsRef.current, { 
        y: 0, 
        opacity: 1, 
        duration: 0.8 
      }, "-=0.6")

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={containerRef} 
      className="relative flex flex-col justify-center items-center min-h-screen w-full bg-orbital-navy overflow-hidden perspective-[1000px]"
    >
      {/* --- Background --- */}
      
      {/* 1. Base Grid Pattern (Existing) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* 2. NEW: Subtle Orbital Rings */}
      {/* These add structure and passive movement without distracting */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
         {/* Large slow ring */}
         <div className="absolute w-[800px] h-[800px] rounded-full border border-white/[0.03] animate-[spin_60s_linear_infinite]" />
         {/* Smaller reverse ring tilted slightly */}
         <div className="absolute w-[600px] h-[600px] rounded-full border border-white/[0.05] animate-[spin_40s_linear_infinite_reverse] rotate-12 scale-y-90" />
      </div>

      {/* 3. NEW: Floating Particles */}
      {/* Adds life and depth. Using arbitrary Tailwind values for quick animation. */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-aurora-mint rounded-full animate-[bounce_8s_infinite] opacity-40 shadow-[0_0_10px_currentColor]"></div>
          <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-ion-gold rounded-full animate-[bounce_12s_infinite] opacity-30 shadow-[0_0_10px_currentColor]" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 right-[20%] w-1 h-1 bg-axis-blue rounded-full animate-[bounce_10s_infinite] opacity-40 shadow-[0_0_10px_currentColor]" style={{ animationDelay: '4s' }}></div>
      </div>


      {/* 4. Glow Blobs (Existing) */}
      <div 
        ref={glowRef} 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-axis-blue/15 rounded-full blur-[120px] pointer-events-none opacity-0 scale-75 mix-blend-screen" 
      />
      
      <div className="absolute top-[60%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[20vw] bg-ion-gold/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />


      {/* --- Main Content --- */}
      <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6 flex flex-col items-center text-center mt-0"> 
        
        {/* Heading */}
        <h1 
          ref={headingRef}
          className="font-sans text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-white leading-[1.05] mb-8 opacity-0 translate-y-8"
        >
          Flexible Like Freelancers. <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-ion-gold via-yellow-100 to-ion-gold">
            Reliable Like Agencies.
          </span>
        </h1>

        {/* Subtext */}
        <p 
          ref={paragraphRef}
          className="text-lg sm:text-2xl text-cool-fog/80 max-w-3xl mx-auto leading-relaxed font-light mb-12 tracking-tight opacity-0 translate-y-8"
        >
          Premium digital delivery from Kerala to the world. <br className="hidden sm:block"/>
          We combine the agility of elite developers with the structure of established firms.
        </p>

        {/* Action Buttons */}
        <div 
          ref={buttonsRef} 
          className="flex flex-col sm:flex-row items-center gap-5 w-full justify-center z-20 opacity-0 translate-y-8"
        >
          <div className="w-full sm:w-auto">
             <Button
              size="lg"
              className="h-14 px-10 bg-white text-orbital-navy hover:bg-gray-200 font-bold rounded-full text-lg transition-all duration-300 w-full shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_-5px_rgba(255,255,255,0.4)] hover:-translate-y-1"
              asChild
            >
              <Link href="#contact">
                Start Project
              </Link>
            </Button>
          </div>
          
          <div className="w-full sm:w-auto">
            <Button
              size="lg"
              variant="ghost"
              className="h-14 px-10 text-white hover:bg-white/5 hover:text-white font-medium rounded-full text-lg border border-white/10 hover:border-white/20 transition-all duration-300 w-full group backdrop-blur-sm"
              asChild
            >
              <Link href="#services">
                View Our Work
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}