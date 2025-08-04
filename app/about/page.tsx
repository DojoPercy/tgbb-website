import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Users,
  Calendar,
  TrendingUp,
  Award,
  Globe,
  BookOpen,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Shield,
  Target,
  Lightbulb,
  Network,
  Zap,
  Building2,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
   
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E3192] via-[#1e2270] to-[#0f1235]"></div>
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center text-white">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
              <Building2 className="h-4 w-4 text-yellow-400 mr-2" />
              <span className="text-sm font-medium">Established 2021 • Global Excellence</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              About
              <span className="block text-yellow-400">TGBB</span>
            </h1>

            <p className="text-xl md:text-2xl mb-10 text-gray-200 leading-relaxed max-w-4xl mx-auto">
              The premier networking and thought leadership platform dedicated to fostering collaboration among
              corporate governance and business leaders worldwide.
            </p>

            <div className="flex items-center justify-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">500+</div>
                <div className="text-sm text-gray-300">Global Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">50+</div>
                <div className="text-sm text-gray-300">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">100+</div>
                <div className="text-sm text-gray-300">Annual Events</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">4+</div>
                <div className="text-sm text-gray-300">Years Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2E3192] via-yellow-400 to-[#2E3192]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <div className="text-lg text-gray-700 leading-relaxed space-y-8">
              <p>
                <span className="text-8xl font-bold text-[#2E3192] float-left mr-6 mt-2 leading-none">T</span>
                he <strong className="font-semibold">Governance & Business Boardroom (TGBB)</strong> is a premier
                networking and thought leadership platform, established in{" "}
                <strong className="font-semibold">2021</strong>, dedicated to fostering collaboration among{" "}
                <strong className="font-semibold">corporate governance and business leaders worldwide</strong>. As a
                trusted hub for{" "}
                <strong className="font-semibold">board members, senior executives, and industry professionals</strong>,
                TGBB provides an exclusive space for exchanging ideas, sharing best practices, and building influential
                connections that drive{" "}
                <strong className="font-semibold">organizational success and sustainable business growth</strong>.
              </p>

              <p>
                At TGBB, we recognize the{" "}
                <strong className="font-semibold">pivotal role of governance in business excellence</strong>. Our
                mission is to <strong className="font-semibold">cultivate a dynamic environment</strong> where leaders
                engage in{" "}
                <strong className="font-semibold">
                  insightful discussions, collaborate on emerging trends, and leverage collective expertise
                </strong>{" "}
                to shape the future of corporate governance and executive leadership. Through our initiatives, we
                empower leaders to navigate challenges, embrace innovation, and set new standards for governance,
                compliance, and strategic decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-[#2E3192]/10 rounded-full px-6 py-2 mb-6">
              <span className="text-[#2E3192] font-semibold">Member Benefits</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#2E3192] mb-6">
              Why Join
              <span className="block bg-gradient-to-r from-[#2E3192] to-yellow-500 bg-clip-text text-transparent">
                Our Elite Network?
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
              <div className="flex items-start space-x-6">
                <div className="bg-[#2E3192] rounded-full p-3 flex-shrink-0">
                  <Network className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#2E3192] mb-4">Networking Opportunities</h3>
                  <p className="text-gray-700 leading-relaxed">
                    As a member of The Governance & Business Boardroom, you gain exclusive access to an elite network of
                    corporate governance and business leaders. Our organization serves as a hub for like-minded
                    professionals, offering numerous networking opportunities through events, conferences, and
                    specialized forums.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-[#CBAF75] rounded-full p-3 flex-shrink-0">
                  <Lightbulb className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#2E3192] mb-4">Thought Leadership and Knowledge Exchange</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We bring together influential thought leaders, subject matter experts, and renowned speakers who are
                    at the forefront of corporate governance and business strategy. Through our thought-provoking
                    events, conferences, and expert-led discussions, we provide a platform for exchanging insights and
                    innovative ideas.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-[#2E3192] rounded-full p-3 flex-shrink-0">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#2E3192] mb-4">Professional Development and Education</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The Governance & Business Boardroom is committed to the professional development and continuous
                    learning of its members. We offer a range of educational resources, executive training programs, and
                    workshops focused on corporate governance, leadership, and strategic management.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div className="flex items-start space-x-6">
                <div className="bg-[#CBAF75] rounded-full p-3 flex-shrink-0">
                  <Globe className="h-6 w-6 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#2E3192] mb-4">Global Reach and Influence</h3>
                  <p className="text-gray-700 leading-relaxed">
                    With a global perspective, The Governance & Business Boardroom fosters a diverse and inclusive
                    community of governance and business leaders. Our organization connects professionals from various
                    industries, sectors, and geographical regions, enabling cross-pollination of ideas and insights.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-[#2E3192] rounded-full p-3 flex-shrink-0">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#2E3192] mb-4">Recognition and Credibility</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Membership in The Governance & Business Boardroom brings prestige and recognition within the
                    corporate governance and business community. It signifies a commitment to excellence and adherence
                    to high standards of governance and leadership practices.
                  </p>
                </div>
              </div>

              <Card className="bg-gradient-to-br from-[#2E3192] to-[#1e2270] text-white p-8 shadow-2xl">
                <div className="text-center">
                  <Target className="h-12 w-12 text-[#CBAF75] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Ready to Lead the Future?</h3>
                  <p className="text-gray-200 mb-6">
                    Become part of an exclusive community that's shaping the future of business governance.
                  </p>
                  <Button className="bg-gradient-to-r from-[#CBAF75] to-yellow-500 hover:from-yellow-500 hover:to-[#CBAF75] text-black font-bold px-8 py-3 rounded-full w-full">
                    Apply for Membership
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Initiatives Section */}
      <section className="py-24 bg-[#10132a] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/texture.svg')] opacity-5 mix-blend-soft-light"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="/images/magazine-launch.jpg"
                alt="TGBB Strategic Initiatives"
                width={600}
                height={700}
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-[#CBAF75] to-yellow-500 rounded-2xl p-6 text-black shadow-2xl">
                <Zap className="h-8 w-8 mb-2" />
                <div className="font-bold">Innovation</div>
                <div className="text-sm opacity-90">Leading Change</div>
              </div>
            </div>

            <div>
              <span className="text-sm uppercase tracking-widest text-[#CBAF75] font-semibold">
                Strategic Initiatives
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-4 mb-8">
                Our Strategic
                <span className="block text-[#CBAF75]">Initiatives</span>
              </h2>

              <p className="text-lg text-gray-400 mb-12">
                TGBB leads several high-impact programs designed to strengthen leadership and governance across key
                business functions:
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: <Zap className="h-5 w-5" />,
                    title: "Future Workplace Africa (FWA)",
                    desc: "Driving innovation and transformation in the future of work.",
                  },
                  {
                    icon: <TrendingUp className="h-5 w-5" />,
                    title: "Investor Relations Leadership Africa (IRLA)",
                    desc: "Enhancing investor confidence through strategic leadership.",
                  },
                  {
                    icon: <Shield className="h-5 w-5" />,
                    title: "Corporate Legal Leadership Africa (CLLA)",
                    desc: "Shaping the future of corporate law and regulatory compliance.",
                  },
                  {
                    icon: <Network className="h-5 w-5" />,
                    title: "ProcureTech Leadership Africa (PLA)",
                    desc: "Advancing digital transformation in procurement and supply chain leadership.",
                  },
                  {
                    icon: <Users className="h-5 w-5" />,
                    title: "Boardroom Leadership Africa (BLA)",
                    desc: "Developing board governance excellence and ethical leadership.",
                  },
                  {
                    icon: <Target className="h-5 w-5" />,
                    title: "Marketing Leadership Africa (MLA)",
                    desc: "Empowering marketing executives to lead in an evolving digital landscape.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4 group">
                    <div className="bg-[#CBAF75] rounded-full p-2 text-black group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-gray-300 mt-8">
                Through these initiatives, <strong>The Governance & Business Boardroom</strong> continues to{" "}
                <strong>
                  champion thought leadership, executive excellence, and impactful business transformation
                </strong>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-[#2E3192]/10 rounded-full px-6 py-2 mb-6">
              <span className="text-[#2E3192] font-semibold">Our Programs</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#2E3192] mb-6">
              Flagship
              <span className="block bg-gradient-to-r from-[#2E3192] to-yellow-500 bg-clip-text text-transparent">
                Programs & Events
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="h-6 w-6 text-[#CBAF75]" />,
                title: "National Governance & Business Leadership Awards",
              },
              {
                icon: <Calendar className="h-6 w-6 text-[#CBAF75]" />,
                title: "Africa Governance & Business Boardroom Week",
              },
              {
                icon: <TrendingUp className="h-6 w-6 text-[#CBAF75]" />,
                title: "Investor Relations Leadership Forum (IRLFA)",
              },
              {
                icon: <Zap className="h-6 w-6 text-[#CBAF75]" />,
                title: "Future Workplace Summit & Awards Africa (FWSAA)",
              },
              { icon: <Shield className="h-6 w-6 text-[#CBAF75]" />, title: "Corporate Legal Leadership Forum (CLLF)" },
              { icon: <Network className="h-6 w-6 text-[#CBAF75]" />, title: "Procuretech Leadership Awards (PLA)" },
              {
                icon: <Target className="h-6 w-6 text-[#CBAF75]" />,
                title: "Premier Marketing Leadership Awards Africa (PMLA)",
              },
            ].map((program, idx) => (
              <Card
                key={idx}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <CardHeader className="flex flex-col gap-4">
                  <div className="bg-[#2E3192] w-12 h-12 flex items-center justify-center rounded-md group-hover:scale-110 transition-transform duration-300">
                    {program.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold text-[#2E3192]">{program.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-[#10132a] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/texture.svg')] opacity-5 mix-blend-soft-light pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="text-sm uppercase tracking-widest text-[#CBAF75] font-semibold">Contact Us</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Ready to Shape the Future of <span className="text-[#CBAF75]">Corporate Governance?</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-6">
              Join us in championing thought leadership, executive excellence, and impactful business transformation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#CBAF75] to-yellow-500 hover:from-yellow-500 hover:to-[#CBAF75] text-black font-bold px-12 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all"
            >
              Apply for Membership
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#2E3192] bg-transparent px-12 py-4 rounded-full font-bold backdrop-blur-sm"
            >
              Explore Our Programs
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B0C1D] text-white py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <Image
                src="/logo.png"
                alt="TGBB Logo"
                width={300}
                height={90}
                className="h-16 w-auto mb-6 brightness-0 invert"
              />
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                The Governance & Business Boardroom is a prestigious and influential networking organization established
                in 2021, dedicated to connecting corporate governance and business leaders from around the world.
              </p>
              <div className="flex space-x-4">
                <div className="bg-[#2A2D50] p-3 rounded-md">
                  <Globe className="h-5 w-5 text-white" />
                </div>
                <div className="bg-[#2A2D50] p-3 rounded-md">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div className="bg-[#2A2D50] p-3 rounded-md">
                  <Award className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { label: "Home", href: "/" },
                  { label: "About Us", href: "/about" },
                  { label: "Membership", href: "/membership" },
                  { label: "Our Magazine", href: "/our-magazine" },
                  { label: "Events", href: "/events" },
                  { label: "Gallery", href: "/gallery" },
                  { label: "Initiatives", href: "/initiatives" },
                  { label: "Contact Us", href: "/contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-400 hover:text-[#CBAF75] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-white">Contact Info</h3>
              <div className="space-y-4 text-gray-400 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#CBAF75] flex-shrink-0 mt-0.5" />
                  <span>
                    The Governance & Business Boardroom
                    <br />
                    Kwabenya, Accra, Ghana
                    <br />
                    West Africa
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-[#CBAF75] flex-shrink-0" />
                  <span>+233 202384500 / +233 247415140</span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-[#CBAF75] flex-shrink-0" />
                  <span>info@tgbboardroom.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-[#CBAF75] flex-shrink-0" />
                  <span>www.tgbboardroom.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© 2025 The Governance & Business Boardroom. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-[#CBAF75] transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#CBAF75] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
