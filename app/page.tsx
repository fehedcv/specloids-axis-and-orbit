import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { ServicesSection } from "@/components/services-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { TeamSection } from "@/components/team-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import "./globals.css"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WhyChooseSection />
      <ServicesSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
