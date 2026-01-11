"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

type Lang = "en" | "ko"

const translations: Record<Lang, Record<string, any>> = {
  en: {
    nav: {
      about: "About",
      services: "Services",
      work: "Work",
      team: "Team",
      startProject: "Start Project",
      contact: "Contact",
    },
    hero: {
      headingLine1: "Flexible Like Freelancers.",
      headingLine2: "Reliable Like Agencies.",
      paragraph:
        "Premium digital delivery from Kerala to the world. We combine the agility of elite developers with the structure of established firms.",
      startButton: "Start Project",
      viewWork: "View Our Work",
    },
    services: {
      tag: "Our Expertise",
      title: "Complete Digital Solutions",
      description:
        "From concept to deployment, we provide end-to-end engineering tailored to scale your business.",
      popular: "POPULAR",
      learnMore: "Learn more",
      items: [
        {
          title: "Conversational AI",
          description:
            "Intelligent chatbots and voice assistants that understand and engage your customers naturally.",
          tags: ["ChatGPT", "LangChain", "RAG", "Voice AI"],
        },
        {
          title: "BI & Analytics",
          description:
            "Transform raw data into actionable insights with custom dashboards and reporting solutions.",
          tags: ["Power BI", "Tableau", "Python", "SQL"],
        },
        {
          title: "AI & IoT",
          description: "Smart solutions connecting devices and artificial intelligence for automated operations.",
          tags: ["TensorFlow", "AWS IoT", "Edge Computing"],
        },
        {
          title: "App Development",
          description: "Native and cross-platform mobile applications built for performance and user experience.",
          tags: ["React Native", "Flutter", "iOS", "Android"],
        },
        {
          title: "Web Design (UI/UX)",
          description: "Beautiful, intuitive interfaces that delight users and drive conversions.",
          tags: ["Figma", "Design Systems", "Prototyping"],
        },
        {
          title: "QA & Testing",
          description: "Comprehensive testing strategies ensuring quality and reliability across all platforms.",
          tags: ["Automation", "Performance", "Security"],
        },
        {
          title: "DevOps",
          description: "Streamlined CI/CD pipelines and cloud infrastructure for seamless deployment.",
          tags: ["AWS", "Docker", "Kubernetes", "Terraform"],
        },
        {
          title: "Project Management",
          description: "Expert coordination ensuring projects are delivered on time and within budget.",
          tags: ["Agile", "Scrum", "JIRA", "Notion"],
        },
        {
          title: "MVP Acceleration",
          description: "Rapidly validate your ideas with minimal viable products built in weeks, not months.",
          tags: ["Rapid Prototyping", "Lean", "6-Week Sprints"],
        },
      ],
    },
    footer: {
      brandParagraph:
        "Premium digital delivery combining freelancer flexibility with agency reliability. Building exceptional digital experiences from Kerala to the world.",
      company: "Company",
      expertise: "Expertise",
      stayUpdated: "Stay Updated",
      newsletterPlaceholder: "Enter your email",
      copyright: "All rights reserved.",
      services: [
        "Conversational AI",
        "App Development",
        "Web Design",
        "DevOps",
        "QA & Testing",
        "MVP Acceleration",
      ],
    },
    contact: {
      heading: "Ready to Launch?",
      paragraph:
        "Tell us about your vision. We'll help you navigate the technical landscape and build a solution that scales.",
      journeyTitle: "The Journey",
      journeySteps: [
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
      ],
      sendWhatsApp: "Send via WhatsApp",
      redirecting: "Redirecting to WhatsApp...",
      willRedirect: "You will be redirected to WhatsApp to send the message.",
      form: {
        name: "Name",
        company: "Company",
        email: "Email",
        service: "Service",
        budget: "Budget",
        details: "Project Details",
      },
    },
    why: {
      title: "Why Choose Axis & Orbit?",
      paragraph:
        "We bridge the gap between freelancer flexibility and agency reliability, delivering exceptional results for businesses worldwide.",
      items: [
        {
          title: "Global Quality from India",
          description: "World-class talent delivering international standards at competitive rates.",
        },
        {
          title: "Structured Agile Delivery",
          description: "Proven methodologies with clear milestones and regular communication.",
        },
        {
          title: "MVPs in 6 Weeks",
          description: "Rapid prototyping and deployment to validate ideas quickly.",
        },
        {
          title: "Dedicated PMs",
          description: "Experienced project managers ensuring smooth execution.",
        },
        {
          title: "Transparent Pricing",
          description: "No hidden costs, clear estimates, flexible payment options.",
        },
        {
          title: "IP Protection",
          description: "Your intellectual property remains secure with NDAs.",
        },
      ],
    },
    testimonials: {
      heading: "Trusted by Global Leaders",
      subheading:
        "Don't just take our word for it. Here's what business leaders across Asia and the world say about working with us.",
      items: [
        {
          rating: 5,
          quote:
            "Axis & Orbit delivered our e-commerce platform ahead of schedule with exceptional quality. Their communication was outstanding throughout the project.",
          name: "Takeshi Yamamoto",
          role: "CEO",
          company: "ZenMarket",
          location: "Tokyo, Japan",
          initials: "TY",
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
        },
      ],
    },
    caseStudies: {
      heading: "Selected Work",
      subheading: "Real projects, real results. We build digital products that scale.",
      viewAllButton: "View All Projects",
      items: [
        {
          title: "ZenMarket Japan",
          category: "E-commerce Platform",
          description: "Complete e-commerce solution with real-time inventory management and global payment processing.",
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
          tech: ["Next.js", "WebRTC", "Redis"],
          metrics: [
            { label: "Active Users", value: "200K+" },
            { label: "Uptime", value: "99.9%" },
          ],
        },
      ],
    },
    team: {
      heading: "The Collective",
      subheading: "World-class talent from India.",
      description: "We are a curated network of senior engineers and designers, not a random bench.",
      joinNetworkButton: "Join the Network",
      items: [
        {
          name: "Danish Roshan",
          role: "Founder & CEO",
          location: "Daejeon, South Korea",
          bio: "A bachelor's student in Physics based in Daejeon, exploring the fundamental laws of nature through theory and experimentation.",
        },
        {
          name: "Fahad Mohammed Kabeer",
          role: "Project Manager",
          location: "Kerala, India",
          bio: "The best developer in the whole world who loves to manage projects and teams efficiently.",
        },
        {
          name: "Moon Sohn",
          role: "Strategic Advisor",
          location: "Daejeon, South Korea",
          bio: "A student of Business Administration with a passion for strategic planning and organizational growth.",
        },
      ],
    },
  },
  ko: {
    nav: {
      about: "소개",
      services: "서비스",
      work: "사례",
      team: "팀",
      startProject: "프로젝트 시작",
      contact: "연락",
    },
    hero: {
      headingLine1: "프리랜서처럼 유연하게.",
      headingLine2: "에이전시처럼 신뢰할 수 있게.",
      paragraph:
        "케랄라에서 전 세계로 전하는 프리미엄 디지털 제공. 엘리트 개발자의 민첩성과 체계적인 조직의 신뢰성을 결합합니다.",
      startButton: "프로젝트 시작",
      viewWork: "작업 보기",
    },
    services: {
      tag: "전문성",
      title: "종합 디지털 솔루션",
      description:
        "개념부터 배포까지, 비즈니스 확장에 맞춘 엔드투엔드 엔지니어링을 제공합니다.",
      popular: "인기",
      learnMore: "자세히 보기",
      items: [
        {
          title: "대화형 AI",
          description: "고객을 자연스럽게 이해하고 참여시키는 지능형 챗봇 및 음성 비서.",
          tags: ["ChatGPT", "LangChain", "RAG", "음성 AI"],
        },
        {
          title: "BI 및 분석",
          description: "맞춤형 대시보드 및 보고 솔루션으로 원시 데이터를 실행 가능한 인사이트로 전환합니다.",
          tags: ["Power BI", "Tableau", "Python", "SQL"],
        },
        {
          title: "AI 및 IoT",
          description: "장치와 인공지능을 연결하는 스마트 솔루션으로 자동화된 운영을 제공합니다.",
          tags: ["TensorFlow", "AWS IoT", "엣지 컴퓨팅"],
        },
        {
          title: "앱 개발",
          description: "성능과 사용자 경험을 고려한 네이티브 및 크로스 플랫폼 모바일 애플리케이션.",
          tags: ["React Native", "Flutter", "iOS", "Android"],
        },
        {
          title: "웹 디자인 (UI/UX)",
          description: "사용자를 즐겁게 하고 전환을 이끄는 아름답고 직관적인 인터페이스.",
          tags: ["Figma", "디자인 시스템", "프로토타이핑"],
        },
        {
          title: "QA 및 테스트",
          description: "모든 플랫폼에서 품질과 신뢰성을 보장하는 종합 테스트 전략.",
          tags: ["자동화", "성능", "보안"],
        },
        {
          title: "DevOps",
          description: "원활한 배포를 위한 CI/CD 파이프라인과 클라우드 인프라스트럭처.",
          tags: ["AWS", "Docker", "Kubernetes", "Terraform"],
        },
        {
          title: "프로젝트 관리",
          description: "프로젝트가 정시에 예산 내에서 전달되도록 전문적으로 조정합니다.",
          tags: ["Agile", "Scrum", "JIRA", "Notion"],
        },
        {
          title: "MVP 가속화",
          description: "몇 주 안에 최소 기능 제품을 구축하여 아이디어를 빠르게 검증합니다.",
          tags: ["신속 프로토타이핑", "린", "6주 스프린트"],
        },
      ],
    },
    footer: {
      brandParagraph:
        "프리랜서의 유연성과 에이전시의 신뢰성을 결합한 프리미엄 디지털 제공. 케랄라에서 전 세계로 뛰어난 디지털 경험을 구축합니다.",
      company: "회사",
      expertise: "전문 분야",
      stayUpdated: "최신 소식 받기",
      newsletterPlaceholder: "이메일을 입력하세요",
      copyright: "모든 권리 보유.",
      services: [
        "대화형 AI",
        "앱 개발",
        "웹 디자인",
        "DevOps",
        "QA 및 테스트",
        "MVP 가속화",
      ],
    },
    contact: {
      heading: "출시할 준비가 되셨나요?",
      paragraph:
        "비전을 알려주세요. 기술적 방향을 안내하고 확장 가능한 솔루션을 빌드합니다.",
      journeyTitle: "여정",
      journeySteps: [
        {
          number: "01",
          title: "발견 호출",
          description: "무료 30분 상담에서 목표, 예산 및 일정을 논의합니다.",
        },
        {
          number: "02",
          title: "전략적 제안",
          description: "상세한 로드맵, 아키텍처 계획 및 고정 가격 견적을 받으세요.",
        },
        {
          number: "03",
          title: "킥오프 및 빌드",
          description: "전담 팀을 만나고 48시간 이내에 첫 번째 스프린트를 시작하세요.",
        },
      ],
      sendWhatsApp: "WhatsApp으로 전송",
      redirecting: "WhatsApp으로 리디렉트 중...",
      willRedirect: "메시지를 전송하기 위해 WhatsApp으로 이동합니다.",
      form: {
        name: "이름",
        company: "회사",
        email: "이메일",
        service: "서비스",
        budget: "예산",
        details: "프로젝트 상세",
      },
    },
    why: {
      title: "왜 Axis & Orbit를 선택해야 하나요?",
      paragraph:
        "우리는 프리랜서의 유연성과 에이전시의 신뢰성 사이의 격차를 메우며, 전 세계 비즈니스를 위한 탁월한 결과를 제공합니다.",
      items: [
        {
          title: "인도에서 제공되는 글로벌 품질",
          description: "국제 표준을 충족하는 세계적 수준의 인재를 제공합니다.",
        },
        {
          title: "구조화된 애자일 전달",
          description: "명확한 마일스톤과 정기적인 커뮤니케이션을 갖춘 검증된 방법론.",
        },
        {
          title: "6주 내 MVP",
          description: "아이디어를 빠르게 검증하기 위한 신속한 프로토타이핑 및 배포.",
        },
        {
          title: "전담 PM",
          description: "원활한 실행을 보장하는 숙련된 프로젝트 매니저.",
        },
        {
          title: "투명한 가격",
          description: "숨겨진 비용 없이 명확한 견적과 유연한 결제 옵션.",
        },
        {
          title: "지적 재산 보호",
          description: "NDA로 지적 재산이 안전하게 보호됩니다.",
        },
      ],
    },
    testimonials: {
      heading: "글로벌 리더들이 신뢰합니다",
      subheading:
        "말만 믿지 마세요. 아시아와 전 세계의 비즈니스 리더들이 우리와의 협력에 대해 어떻게 말하는지 알아보세요.",
      items: [
        {
          rating: 5,
          quote:
            "Axis & Orbit는 뛰어난 품질로 일정보다 먼저 우리의 전자상거래 플랫폼을 제공했습니다. 프로젝트 전반에 걸쳐 그들의 소통은 훌륭했습니다.",
          name: "Takeshi Yamamoto",
          role: "CEO",
          company: "ZenMarket",
          location: "Tokyo, Japan",
          initials: "TY",
        },
        {
          rating: 5,
          quote:
            "팀의 AI 전문성과 체계적인 전달 방식이 모든 차이를 만들었습니다. 우리 앱 사용자들이 그들이 구축한 지능형 기능을 좋아합니다.",
          name: "Sarah Chen",
          role: "Product Director",
          company: "FinTrack",
          location: "Singapore",
          initials: "SC",
        },
        {
          rating: 5,
          quote:
            "Axis & Orbit와의 협력은 확장된 팀을 갖는 것 같았습니다. 그들은 우리의 교육적 미션을 진정으로 이해했고 학생들이 사랑하는 플랫폼을 제공했습니다.",
          name: "Kim Ji-won",
          role: "Founder",
          company: "EduConnect",
          location: "Seoul, Korea",
          initials: "KJ",
        },
      ],
    },
    caseStudies: {
      heading: "선별된 작업",
      subheading: "실제 프로젝트, 실제 결과. 우리는 확장 가능한 디지털 제품을 구축합니다.",
      viewAllButton: "모든 프로젝트 보기",
      items: [
        {
          title: "ZenMarket Japan",
          category: "전자상거래 플랫폼",
          description: "실시간 재고 관리 및 글로벌 결제 처리가 포함된 완전한 전자상거래 솔루션.",
          tech: ["React", "Node.js", "MongoDB"],
          metrics: [
            { label: "로드 속도", value: "2.3x" },
            { label: "전환율", value: "+45%" },
          ],
        },
        {
          title: "FinTrack Singapore",
          category: "개인 금융 앱",
          description: "예측 모델을 통해 사용자가 더 현명한 금전 결정을 내리도록 돕는 AI 기반 금융 통찰력.",
          tech: ["React Native", "Python", "TensorFlow"],
          metrics: [
            { label: "평점", value: "4.8/5" },
            { label: "유지율", value: "85%" },
          ],
        },
        {
          title: "EduConnect Korea",
          category: "에드테크 플랫폼",
          description: "WebRTC를 통해 학생과 세계 수준의 교육자를 연결하는 대화형 학습 플랫폼.",
          tech: ["Next.js", "WebRTC", "Redis"],
          metrics: [
            { label: "활성 사용자", value: "200K+" },
            { label: "가동 시간", value: "99.9%" },
          ],
        },
      ],
    },
    team: {
      heading: "컬렉티브",
      subheading: "인도의 세계 수준 인재.",
      description: "우리는 무작위 벤치가 아닌 선별된 시니어 엔지니어와 디자이너 네트워크입니다.",
      joinNetworkButton: "네트워크에 참여하세요",
      items: [
        {
          name: "Danish Roshan",
          role: "Founder & CEO",
          location: "Daejeon, South Korea",
          bio: "대전을 기반으로 하는 물리학과 학사 과정 학생으로 이론과 실험을 통해 자연의 기본 법칙을 탐구합니다.",
        },
        {
          name: "Fahad Mohammed Kabeer",
          role: "Project Manager",
          location: "Kerala, India",
          bio: "전 세계에서 가장 좋은 개발자로 프로젝트와 팀을 효율적으로 관리하는 것을 좋아합니다.",
        },
        {
          name: "Moon Sohn",
          role: "Strategic Advisor",
          location: "Daejeon, South Korea",
          bio: "경영학을 전공하는 학생으로 전략적 계획과 조직 성장에 대한 열정을 가지고 있습니다.",
        },
      ],
    },
  },
}

type ContextValue = {
  lang: Lang
  setLang: (l: Lang) => void
  toggleLang: () => void
  t: (path: string) => any
}

const LanguageContext = createContext<ContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en")

  useEffect(() => {
    try {
      const stored = localStorage.getItem("site-lang") as Lang | null
      if (stored === "en" || stored === "ko") setLang(stored)
    } catch (e) {
      // ignore
    }
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem("site-lang", lang)
    } catch (e) {
      // ignore
    }
    // set html lang attribute
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang === "en" ? "en" : "ko"
    }
  }, [lang])

  const toggleLang = () => setLang((s) => (s === "en" ? "ko" : "en"))

  const t = (path: string) => {
    const parts = path.split(".")
    let cur: any = translations[lang]
    for (const p of parts) {
      cur = cur?.[p]
      if (cur == null) return path
    }
    return cur
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}

export function LanguageToggleButton({ className }: { className?: string }) {
  const { lang, toggleLang } = useLanguage()
  return (
    <button
      onClick={toggleLang}
      aria-label="Toggle language"
      className={className}
    >
      {lang === "en" ? "EN" : "한글"}
    </button>
  )
}

export default LanguageProvider
