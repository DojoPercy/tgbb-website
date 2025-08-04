import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BookOpen,
  Users,
  Award,
  Globe,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Calendar,
  Download,
  Eye,
  TrendingUp,
  Building2,
  Newspaper,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function MagazinePage() {
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
                <BookOpen className="h-4 w-4 text-yellow-400 mr-2" />
                <span className="text-sm font-medium">Africa's Premier Brands Magazine</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                The
                <span className="block text-yellow-400">BOARDROOM</span>
                <span className="block text-2xl md:text-3xl font-normal mt-4">Magazine</span>
              </h1>

              <p className="text-xl md:text-2xl mb-10 text-gray-200 leading-relaxed">
                A Brand Focus Africa Magazine showcasing inspirational leadership profiles, navigating success
                strategies, and celebrating excellence in corporate governance across the continent.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Latest Issue
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#2E3192] bg-transparent px-8 py-4 rounded-full font-bold backdrop-blur-sm"
                >
                  <Eye className="mr-2 h-5 w-5" />
                  View Online
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center group">
                  <div className="text-3xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                    50+
                  </div>
                  <div className="text-sm text-gray-300">Issues Published</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                    100K+
                  </div>
                  <div className="text-sm text-gray-300">Readers</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                    54
                  </div>
                  <div className="text-sm text-gray-300">African Countries</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                    4+
                  </div>
                  <div className="text-sm text-gray-300">Years Publishing</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 group">
                <Image
                  src="/magazine.jpg"
                  alt="The Boardroom Magazine Cover"
                  width={600}
                  height={800}
                  className="rounded-3xl shadow-2xl group-hover:shadow-3xl transform group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 shadow-2xl">
                  <div className="text-black font-bold text-lg">Latest Issue</div>
                  <div className="text-black/80 text-sm">Leadership Excellence</div>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-r from-yellow-400/30 to-orange-500/30 rounded-3xl blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Magazine Introduction */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2E3192] via-yellow-400 to-[#2E3192]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-[#2E3192]/10 rounded-full px-6 py-2 mb-6">
              <span className="text-[#2E3192] font-semibold">Our Magazine Brand</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#2E3192] mb-8">
              Africa's Premier
              <span className="block bg-gradient-to-r from-[#2E3192] to-yellow-500 bg-clip-text text-transparent">
                Brands Magazine
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#2E3192] to-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The Boardroom Magazine is a Brand Focus Africa publication that celebrates inspirational leadership,
              showcases success strategies, and highlights the achievements of corporate governance and business leaders
              across Africa and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <Image
                src="/magazine.jpg"
                alt="Person reading The Boardroom Magazine"
                width={700}
                height={500}
                className="rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500"
              />
              <div className="absolute -bottom-8 -right-8 bg-gradient-to-r from-[#2E3192] to-slate-800 rounded-3xl p-8 text-white shadow-2xl">
                <BookOpen className="h-10 w-10 mb-3" />
                <div className="font-bold text-lg font-serif">Insight</div>
                <div className="text-sm opacity-90 font-medium">Thought Leadership</div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-[#2E3192] mb-6">About The Publication</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  The Boardroom Magazine serves as the official publication of The Governance & Business Boardroom,
                  featuring in-depth profiles of inspirational leaders, strategic insights, and thought-provoking
                  content that drives excellence in corporate governance.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Each issue showcases the achievements of our members and the broader African business community,
                  providing valuable insights into leadership strategies, HR excellence, and business transformation
                  across the continent.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="flex flex-col gap-4">
                    <div className="bg-[#2E3192] w-12 h-12 flex items-center justify-center rounded-md">
                      <Newspaper className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-[#2E3192]">Digital & Print</CardTitle>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Available in both digital and print formats for global accessibility.
                    </p>
                  </CardHeader>
                </Card>

                <Card className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="flex flex-col gap-4">
                    <div className="bg-[#CBAF75] w-12 h-12 flex items-center justify-center rounded-md">
                      <Globe className="h-6 w-6 text-black" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-[#2E3192]">Pan-African Reach</CardTitle>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Distributed across 54 African countries and the global diaspora.
                    </p>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Magazine Features */}
      <section className="py-24 bg-[#10132a] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=800')] opacity-5 mix-blend-soft-light"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-sm uppercase tracking-widest text-[#CBAF75] font-semibold">Magazine Features</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-4">
              What You'll Find
              <span className="block text-[#CBAF75]">In Every Issue</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#CBAF75] to-yellow-400 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-6 w-6 text-[#CBAF75]" />,
                title: "Leadership Profiles",
                desc: "In-depth interviews with C-level executives, board members, and industry pioneers.",
              },
              {
                icon: <TrendingUp className="h-6 w-6 text-[#CBAF75]" />,
                title: "Success Strategies",
                desc: "Proven methodologies and frameworks for navigating business challenges.",
              },
              {
                icon: <Building2 className="h-6 w-6 text-[#CBAF75]" />,
                title: "Corporate Governance",
                desc: "Best practices, compliance insights, and governance excellence frameworks.",
              },
              {
                icon: <Award className="h-6 w-6 text-[#CBAF75]" />,
                title: "Awards Coverage",
                desc: "Comprehensive coverage of TGBB awards and recognition programs.",
              },
              {
                icon: <Globe className="h-6 w-6 text-[#CBAF75]" />,
                title: "African Business",
                desc: "Spotlight on African business excellence and continental success stories.",
              },
              {
                icon: <BookOpen className="h-6 w-6 text-[#CBAF75]" />,
                title: "Industry Insights",
                desc: "Expert analysis, market trends, and strategic business intelligence.",
              },
            ].map((feature, idx) => (
              <Card
                key={idx}
                className="bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-500 group rounded-3xl overflow-hidden"
              >
                <CardHeader className="pb-6 p-8">
                  <div className="bg-[#2E3192] rounded-3xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-white text-xl font-bold mb-4">{feature.title}</CardTitle>
                  <p className="text-gray-300 leading-relaxed">{feature.desc}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-[#2E3192]/10 rounded-full px-6 py-2 mb-6">
              <span className="text-[#2E3192] font-semibold">Stay Updated</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#2E3192] mb-6">
              Subscribe to
              <span className="block bg-gradient-to-r from-[#2E3192] to-yellow-500 bg-clip-text text-transparent">
                The Boardroom
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold text-[#2E3192] mb-6">Get Every Issue</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Stay connected with Africa's premier brands magazine. Receive the latest issues featuring inspirational
                leadership profiles, success strategies, and insights from the continent's top business leaders.
              </p>

              <div className="space-y-6">
                {[
                  "Quarterly digital and print editions",
                  "Exclusive member content and interviews",
                  "Early access to special issues",
                  "Complimentary access for Premium members",
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="bg-[#2E3192] rounded-full p-1 flex-shrink-0 mt-1">
                      <ArrowRight className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="bg-gradient-to-br from-[#2E3192] to-[#1e2270] rounded-3xl p-8 text-white shadow-2xl">
              <div className="text-center">
                <Calendar className="h-12 w-12 text-[#CBAF75] mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Free for Members</h3>
                <p className="text-gray-200 mb-8">
                  All TGBB members receive complimentary access to The Boardroom Magazine as part of their membership
                  benefits.
                </p>
                <div className="space-y-4">
                  <Button className="bg-gradient-to-r from-[#CBAF75] to-yellow-500 hover:from-yellow-500 hover:to-[#CBAF75] text-black font-bold px-8 py-3 rounded-full w-full">
                    Subscribe Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#2E3192] bg-transparent px-8 py-3 rounded-full w-full font-bold"
                  >
                    View Sample Issue
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-[#10132a] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=800')] opacity-5 mix-blend-soft-light pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="text-sm uppercase tracking-widest text-[#CBAF75] font-semibold">Get Featured</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8">
              Share Your
              <span className="block text-[#CBAF75]">Success Story</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-6 mb-12">
              Are you a business leader with an inspiring story? We'd love to feature your journey in The Boardroom
              Magazine and share your insights with our global community.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#CBAF75] to-yellow-500 hover:from-yellow-500 hover:to-[#CBAF75] text-black font-bold px-12 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all"
            >
              Submit Your Story
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#2E3192] bg-transparent px-12 py-4 rounded-full font-bold backdrop-blur-sm"
            >
              Contact Editorial Team
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
