"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MapPin, ArrowUpRight, Sparkles } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const team = [
  {
    name: "Danish Roshan",
    role: "Founder & CEO",
    location: "Daejeon, South Korea",
    image: "/danish(1).jpeg",
    bio: "A bachelor’s student in Physics based in Daejeon, exploring the fundamental laws of nature through theory and experimentation.",
  },
  {
    name: "Fahad Mohammed Kabeer",
    role: "Project Manager",
    location: "Kerala, India",
    image: "/fahad(2).jpeg",
    bio: "The best developer in the whole world who loves to manage projects and teams efficiently.",
  },
  {
    name: "Moon Sohn",
    role: "Strategic Advisor",
    location: "Daejeon, South Korea",
    image: "https://raw.githubusercontent.com/fehedcv/axis-and-orbit/refs/heads/main/img/WhatsApp%20Image%202025-07-25%20at%2011.11.52%20AM.jpeg",
    bio: "A student of Business Administration with a passion for strategic planning and organizational growth.",
  },
]

export function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simple fade in for the whole section
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="team" className="py-24 lg:py-32 bg-orbital-navy text-white relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-axis-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-ion-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Mobile Heading (Visible only on mobile) */}
        <div className="lg:hidden mb-12">
            <h2 className="font-sans text-4xl font-bold mb-4">The Collective</h2>
            <p className="text-cool-fog/80">World-class talent from India.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* LEFT COLUMN: Sticky Image Area (Desktop) */}
          <div className="hidden lg:block w-5/12 relative">
            <div className="sticky top-32 h-[600px] w-full rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 shadow-2xl">
              {team.map((member, index) => (
                <div
                  key={index}
                  ref={(el) => { imageRefs.current[index] = el }}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                    index === activeIndex 
                      ? "opacity-100 scale-100 grayscale-0" 
                      : "opacity-0 scale-110 grayscale"
                  }`}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay Info on Image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <div className="inline-flex items-center gap-2 text-ion-gold mb-2 text-sm font-medium">
                      <Sparkles className="w-4 h-4" />
                      {member.role}
                    </div>
                    <p className="text-white/90 text-lg leading-relaxed font-light">
                      "{member.bio}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive List (Desktop) + Cards (Mobile) */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center">
            
            {/* Desktop Heading */}
            <div className="hidden lg:block mb-16">
              <h2 className="font-sans text-5xl font-bold tracking-tight mb-6">
                The Collective
              </h2>
              <p className="text-xl text-cool-fog/60 font-light max-w-md">
                 We are a curated network of senior engineers and designers, not a random bench.
              </p>
            </div>

            {/* List */}
            <div className="space-y-2">
              {team.map((member, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`group relative p-6 lg:p-8 rounded-2xl transition-all duration-300 cursor-pointer border border-transparent
                    ${index === activeIndex 
                      ? "bg-white/10 border-white/10" 
                      : "hover:bg-white/5 hover:border-white/5"
                    }
                  `}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      
                      {/* Mobile-only Avatar (Since the big image is hidden on mobile) */}
                      <div className="lg:hidden w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/10">
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                      </div>

                      <div className="flex flex-col items-start">
                         <span className={`font-sans text-xl lg:text-3xl font-bold transition-colors duration-300 ${index === activeIndex ? "text-white" : "text-white/40 group-hover:text-white/70"}`}>
                            {member.name}
                         </span>
                         {/* Mobile Role display */}
                         <span className="lg:hidden text-sm text-ion-gold mt-1">{member.role}</span>
                      </div>
                    </div>

                    {/* Desktop: Arrow / Mobile: Location */}
                    <div className="flex items-center gap-4">
                        <span className={`hidden lg:flex items-center gap-2 text-sm transition-opacity duration-300 ${index === activeIndex ? "opacity-100 text-cool-fog" : "opacity-0"}`}>
                            <MapPin className="w-4 h-4" />
                            {member.location}
                        </span>
                        
                        <ArrowUpRight className={`w-6 h-6 transition-all duration-300 ${index === activeIndex ? "text-ion-gold rotate-45" : "text-white/20"}`} />
                    </div>
                  </div>
                  
                  {/* Mobile-only Bio */}
                  <div className="lg:hidden mt-4 pt-4 border-t border-white/10">
                      <p className="text-cool-fog/80 text-sm">"{member.bio}"</p>
                  </div>

                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 lg:pl-8">
               <Button 
                variant="outline" 
                className="rounded-full border-white/20 bg-transparent text-white hover:bg-white hover:text-orbital-navy h-12 px-8"
                asChild
               >
                 <Link href="#contact">Join the Network</Link>
               </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}