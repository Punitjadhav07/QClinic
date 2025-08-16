"use client"

import { useEffect, useState } from "react"
import {
  ChevronDown,
  Users,
  Clock,
  MessageCircle,
  BarChart3,
  Shield,
  Zap,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Rocket,
} from "lucide-react"

export default function QClinicPortfolio() {
  const [activeTab, setActiveTab] = useState("patient")

  useEffect(() => {
    // Intersection Observer for fade-in animations

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
    }
  }, [])

  const teamMembers = [
    { name: "Punit Jadhav", role: "Full Stack Developer", avatar: "/professional-male-developer.png" },
    { name: "Tejas Sonawane", role: "Frontend Developer", avatar: "/professional-male-engineer.png" },
    { name: "Shreya Jadhao", role: "AI", avatar: "/placeholder-6wikv.png" },
    { name: "Purvesh Tawade", role: "Backend", avatar: "/professional-male-designer.png" },
  ]

  const patientChallenges = [
    { icon: Clock, title: "Long Waiting Times", desc: "30–90 mins avg, missed follow-ups" },
    { icon: BarChart3, title: "No Real-Time Tracking", desc: "No doctor availability updates" },
    { icon: Shield, title: "Fragmented Records", desc: "Paper/scattered history slows care" },
    { icon: MessageCircle, title: "Poor Communication", desc: "Calls missed, hard to reach clinics" },
    { icon: Users, title: "Unclear Cost Transparency", desc: "Consultation & test costs unclear" },
  ]

  const clinicChallenges = [
    { icon: Users, title: "Manual Appointment Management", desc: "Errors, double slots, overcrowding" },
    { icon: Clock, title: "Admin Overload", desc: "40% staff time spent on non-medical tasks" },
    { icon: BarChart3, title: "No Centralized Data", desc: "Slows consultations, repeat questions" },
    { icon: MessageCircle, title: "Weak Patient Follow-Ups", desc: "No automated reminders, low retention" },
  ]

  const techStack = {
    frontend: [
      "React Native with Redux",
      "MapLibre / Google Maps",
      "i18next (localization)",
      "Socket.IO Client",
      "Firebase Cloud Messaging",
    ],
    backend: ["Node.js", "Socket.IO", "JWT Authentication with OAuth", "MongoDB + Redis"],
    database: ["MongoDB", "Redis (Optional: fast caching for queues/state)"],
    deployment: [
      "GCP/AWS/Heroku for backend",
      "MongoDB Atlas for database",
      "Cloudflare",
      "App Stores for distribution",
      "GitHub Actions",
    ],
  }

  const timeline = [
    {
      phase: 1,
      title: "Planning & Requirement Gathering",
      activities: "Identify stakeholders, collect requirements, define success metrics",
      duration: "Week 1 – Week 2",
    },
    {
      phase: 2,
      title: "System Design",
      activities: "Create architecture, DFDs, database schema, wireframes, finalize tech stack",
      duration: "Week 3 – Week 4",
    },
    {
      phase: 3,
      title: "Prototype Development (MVP)",
      activities: "Build patient & clinic modules, basic notifications, initial testing",
      duration: "Month 2",
    },
    {
      phase: 4,
      title: "Full-Scale Development",
      activities: "Add advanced features (chat, analytics, multilingual, maps, queue updates), ensure security",
      duration: "Month 3 – Month 4",
    },
    {
      phase: 5,
      title: "Testing & QA",
      activities: "Functional, performance, and security testing, pilot user validation, feedback integration",
      duration: "Month 5",
    },
    {
      phase: 6,
      title: "Deployment & Rollout",
      activities: "Deploy on cloud, release mobile & web apps, onboard first clinics, train staff",
      duration: "Month 6",
    },
    {
      phase: 7,
      title: "Monitoring & Continuous Improvement",
      activities: "Track metrics, release updates, plan integrations with healthcare systems & insurance",
      duration: "Ongoing",
    },
  ]

  const futureScope = [
    {
      icon: Rocket,
      title: "AI-Powered Diagnostics",
      desc: "Integration with AI diagnostic tools for preliminary health assessments",
    },
    {
      icon: Globe,
      title: "Telemedicine Integration",
      desc: "Video consultations and remote patient monitoring capabilities",
    },
    {
      icon: Shield,
      title: "Blockchain Health Records",
      desc: "Secure, immutable patient health records using blockchain technology",
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      desc: "ML algorithms to predict patient flow and optimize clinic operations",
    },
    {
      icon: Users,
      title: "Insurance Integration",
      desc: "Direct integration with insurance providers for seamless claim processing",
    },
    {
      icon: Zap,
      title: "IoT Health Monitoring",
      desc: "Integration with wearable devices and IoT health monitoring systems",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">Q</span>
              </div>
              <span className="text-xl font-bold">QClinic</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-primary transition-colors">
                Home
              </a>
              <a href="#team" className="hover:text-primary transition-colors">
                Team
              </a>
              <a href="#problem" className="hover:text-primary transition-colors">
                Problem
              </a>
              <a href="#solution" className="hover:text-primary transition-colors">
                Solution
              </a>
              <a href="#features" className="hover:text-primary transition-colors">
                Features
              </a>
              <a href="#tech" className="hover:text-primary transition-colors">
                Technology
              </a>
              <a href="#timeline" className="hover:text-primary transition-colors">
                Timeline
              </a>
              <a href="#future" className="hover:text-primary transition-colors">
                Future
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="floating">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              QClinic
            </h1>
          </div>
          <p className="text-2xl md:text-3xl mb-4 text-muted-foreground">&ldquo;Less waiting, more healing.&rdquo;</p>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">&ldquo;Where patient time matters most&rdquo;</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <span className="text-lg font-semibold text-primary">Smarter Clinics</span>
            <ArrowRight className="w-6 h-6 text-primary" />
            <span className="text-lg font-semibold text-primary">Faster Care</span>
          </div>
          <div className="pulse-glow inline-block">
            <a
              href="#team"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary/90 transition-all duration-300 inline-flex items-center gap-2"
            >
              Explore Our Solution
              <ChevronDown className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">The innovators behind QClinic</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="fade-in bg-card border border-border rounded-2xl p-6 text-center hover:bg-card/80 transition-all duration-300 glow-effect"
              >
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Understanding Section */}
      <section id="problem" className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Problem Understanding</h2>
            <p className="text-xl text-muted-foreground">Identifying the core challenges in healthcare management</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Patient Challenges */}
            <div className="fade-in">
              <h3 className="text-2xl font-bold mb-8 text-center text-primary">Challenges Faced by Patients</h3>
              <div className="space-y-6">
                {patientChallenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 p-3 rounded-lg">
                        <challenge.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">{challenge.title}</h4>
                        <p className="text-muted-foreground">{challenge.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Clinic Challenges */}
            <div className="fade-in">
              <h3 className="text-2xl font-bold mb-8 text-center text-accent">Challenges Faced by Clinics</h3>
              <div className="space-y-6">
                {clinicChallenges.map((challenge, index) => (
                  <div
                    key={index}
                    className="bg-background border border-border rounded-xl p-6 hover:border-accent/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-accent/20 p-3 rounded-lg">
                        <challenge.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">{challenge.title}</h4>
                        <p className="text-muted-foreground">{challenge.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section id="solution" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Proposed Solution Overview</h2>
            <p className="text-xl text-muted-foreground">
              A comprehensive platform revolutionizing healthcare queue management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="fade-in bg-card border border-border rounded-2xl p-8 text-center glow-effect">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Centralized Platform</h3>
              <p className="text-muted-foreground">
                QClinic provides a unified platform for real-time queue and clinic availability data with an intuitive
                map-first interface.
              </p>
            </div>

            <div className="fade-in bg-card border border-border rounded-2xl p-8 text-center glow-effect">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">For Patients</h3>
              <p className="text-muted-foreground">
                View nearby clinics with live wait times, request slots with confirmation, and chat directly with staff
                for clarifications.
              </p>
            </div>

            <div className="fade-in bg-card border border-border rounded-2xl p-8 text-center glow-effect">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">For Clinics</h3>
              <p className="text-muted-foreground">
                Admin panel for real-time queue management, priority tagging, slot updates, and delay alerts to reduce
                chaos and improve efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Core Features</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive tools for patients, clinics, and administrators
            </p>
          </div>

          <div className="fade-in">
            <div className="flex justify-center mb-8">
              <div className="bg-background border border-border rounded-xl p-2 flex">
                <button
                  onClick={() => setActiveTab("patient")}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === "patient"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Patient Panel
                </button>
                <button
                  onClick={() => setActiveTab("clinic")}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === "clinic"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Clinic Panel
                </button>
                <button
                  onClick={() => setActiveTab("admin")}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeTab === "admin"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Admin Panel
                </button>
              </div>
            </div>

            <div className="bg-background border border-border rounded-2xl p-8">
              {activeTab === "patient" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 p-3 rounded-lg">
                        <Globe className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">Nearby Clinics Map</h4>
                        <p className="text-muted-foreground">
                          Search & view clinics on a map with real-time availability and distance.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 p-3 rounded-lg">
                        <CheckCircle className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">Queue Check-In</h4>
                        <p className="text-muted-foreground">
                          Virtual check-in, view position in queue, estimated wait time.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 p-3 rounded-lg">
                        <Zap className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">Smart Notifications</h4>
                        <p className="text-muted-foreground">
                          Alerts via push, SMS, or voice for updates and reminders.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 p-3 rounded-lg">
                        <MessageCircle className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">In-App Chat</h4>
                        <p className="text-muted-foreground">
                          Direct connect with staff for clarifications, rescheduling, or service questions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "clinic" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent/20 p-3 rounded-lg">
                        <Users className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">Queue Management with Sync</h4>
                        <p className="text-muted-foreground">
                          Add/remove patients in queue with offline support and auto-sync.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-accent/20 p-3 rounded-lg">
                        <Clock className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">Broadcast Delays</h4>
                        <p className="text-muted-foreground">Notify patients instantly about delays with reasons.</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent/20 p-3 rounded-lg">
                        <MessageCircle className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">Patient Messaging</h4>
                        <p className="text-muted-foreground">
                          Respond to patient queries directly via chat with multilingual support.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-accent/20 p-3 rounded-lg">
                        <CheckCircle className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">Check-In Confirmation</h4>
                        <p className="text-muted-foreground">
                          Mark patients as checked-in when they arrive physically.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "admin" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-chart-1/20 p-3 rounded-lg">
                        <BarChart3 className="w-6 h-6 text-chart-1" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">System Analytics</h4>
                        <p className="text-muted-foreground">
                          Track usage metrics like patient counts, busiest clinics, and wait-time trends.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-chart-1/20 p-3 rounded-lg">
                        <Users className="w-6 h-6 text-chart-1" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">Clinic Onboarding</h4>
                        <p className="text-muted-foreground">
                          Add/manage registered clinics, staff accounts, and permissions.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-chart-1/20 p-3 rounded-lg">
                        <Shield className="w-6 h-6 text-chart-1" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">Security & Compliance</h4>
                        <p className="text-muted-foreground">Data encryption, GDPR/HIPAA compliance, audit logs.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-chart-1/20 p-3 rounded-lg">
                        <Zap className="w-6 h-6 text-chart-1" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2">Scalability Management</h4>
                        <p className="text-muted-foreground">
                          Add more clinics, regions, or new feature modules seamlessly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section id="tech" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Technology Stack</h2>
            <p className="text-xl text-muted-foreground">
              Powering QClinic with real-time chat, maps and secure backend
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(techStack).map(([category, technologies], index) => (
              <div key={index} className="fade-in bg-card border border-border rounded-2xl p-6 glow-effect">
                <h3 className="text-xl font-bold mb-4 text-primary capitalize">{category}</h3>
                <ul className="space-y-2">
                  {technologies.map((tech, techIndex) => (
                    <li key={techIndex} className="text-muted-foreground flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section id="timeline" className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Implementation Plan & Timeline</h2>
            <p className="text-xl text-muted-foreground">Structured approach to bringing QClinic to life</p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary"></div>
            <div className="space-y-8">
              {timeline.map((phase, index) => (
                <div key={index} className="fade-in relative flex items-start gap-8">
                  <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg z-10">
                    {phase.phase}
                  </div>
                  <div className="bg-background border border-border rounded-xl p-6 flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-bold">{phase.title}</h3>
                      <span className="text-primary font-semibold">{phase.duration}</span>
                    </div>
                    <p className="text-muted-foreground">{phase.activities}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Scope */}
      <section id="future" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Future Scope</h2>
            <p className="text-xl text-muted-foreground">
              Expanding horizons for next-generation healthcare technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {futureScope.map((item, index) => (
              <div
                key={index}
                className="fade-in bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 glow-effect"
              >
                <div className="bg-primary/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Impact on Society & Healthcare Ecosystem</h2>
            <p className="text-xl text-muted-foreground">
              Transforming healthcare delivery for better patient outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="fade-in bg-background border border-border rounded-2xl p-8 text-center">
              <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary">Improved Patient Experience</h3>
              <ul className="space-y-2 text-left">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">Real-time wait times & slot booking</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">Stress-free visits with notifications</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">Easy access for newcomers & multilingual support</span>
                </li>
              </ul>
            </div>

            <div className="fade-in bg-background border border-border rounded-2xl p-8 text-center">
              <div className="bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-accent">Optimized Clinic Operations</h3>
              <ul className="space-y-2 text-left">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span className="text-muted-foreground">Smarter queue & priority management</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span className="text-muted-foreground">Reduced overcrowding & no-shows</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span className="text-muted-foreground">Direct patient–staff communication</span>
                </li>
              </ul>
            </div>

            <div className="fade-in bg-background border border-border rounded-2xl p-8 text-center">
              <div className="bg-chart-3/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-chart-3" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-chart-3">Benefits to Healthcare Network</h3>
              <ul className="space-y-2 text-left">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-chart-3" />
                  <span className="text-muted-foreground">Balanced patient distribution across clinics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-chart-3" />
                  <span className="text-muted-foreground">Data insights for better planning</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-chart-3" />
                  <span className="text-muted-foreground">Inclusive system for small clinics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">Q</span>
            </div>
            <span className="text-2xl font-bold">QClinic</span>
          </div>
          <p className="text-muted-foreground mb-4">&ldquo;Less waiting, more healing.&rdquo;</p>
          <p className="text-sm text-muted-foreground">
            © 2024 QClinic. Built with ❤️ by Punit Jadhav, Tejas Sonawane, Shreya Jadhao, and Purvesh Tawade.
          </p>
        </div>
      </footer>
    </div>
  )
}
