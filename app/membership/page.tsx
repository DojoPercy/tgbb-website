import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Users,
  Crown,
  CheckCircle,
  Star,
  Award,
  Globe,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Shield,
  Calendar,
  BookOpen,
  Network,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function MembershipPage() {
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
                <Crown className="h-4 w-4 text-yellow-400 mr-2" />
                <span className="text-sm font-medium">Exclusive Membership Since 2021</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Join
                <span className="block text-yellow-400">TGBB</span>
              </h1>

              <p className="text-xl md:text-2xl mb-10 text-gray-200 leading-relaxed">
                When you become a member of TGBB, you gain exclusive access to frequent networking luncheons,
                specialized training sessions tailored to your industry and profession, and conferences—all at a
                discounted rate.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all"
                >
                  Apply for Membership
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#2E3192] bg-transparent px-8 py-4 rounded-full font-bold backdrop-blur-sm"
                >
                  Learn More
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/membership.jpg-uDqJsvUvwPxWUZZBo7q5qEfoEu5nkg.jpeg"
                  alt="TGBB Awards Ceremony"
                  width={700}
                  height={500}
                  className="rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 shadow-2xl">
                  <div className="text-black font-bold text-lg">Elite Network</div>
                  <div className="text-black/80 text-sm">500+ Global Members</div>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-r from-yellow-400/30 to-orange-500/30 rounded-3xl blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Introduction */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2E3192] via-yellow-400 to-[#2E3192]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-[#2E3192]/10 rounded-full px-6 py-2 mb-6">
              <span className="text-[#2E3192] font-semibold">Join The Governance & Business Boardroom</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#2E3192] mb-8">
              Exclusive Membership
              <span className="block bg-gradient-to-r from-[#2E3192] to-yellow-500 bg-clip-text text-transparent">
                By Invitation or Application
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#2E3192] to-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Membership in The Governance & Business Boardroom is by invitation or application, ensuring that our
              community consists of high-caliber professionals dedicated to excellence in governance and leadership.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mt-6">
              Be a part of The Governance & Business Boardroom, where leaders learn from leaders, collaborate, and drive
              the future of corporate governance and business excellence.
            </p>
          </div>

          <div className="relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chair.jpg-sMXMXghYyyjHEd4eDw9yKEmn4swvTs.jpeg"
              alt="TGBB Networking Event"
              width={1200}
              height={600}
              className="rounded-3xl shadow-2xl w-full"
            />
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-[#2E3192] to-purple-600 rounded-2xl p-6 text-white shadow-2xl">
              <Network className="h-8 w-8 mb-2" />
              <div className="font-bold">Premium Events</div>
              <div className="text-sm opacity-90">Executive Networking</div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Types */}
      <section className="py-24 bg-[#10132a] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pattern.jpg-gWYJhpEDbrnQ9bQnuiQwx3TdIlGNcM.jpeg')] opacity-5 mix-blend-soft-light"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-sm uppercase tracking-widest text-[#CBAF75] font-semibold">Membership Options</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-4">
              Choose Your
              <span className="block text-[#CBAF75]">Membership Tier</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#CBAF75] to-yellow-400 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Youth/Student/Basic Membership */}
            <Card className="bg-[#1B1E3F] border border-gray-700 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 group">
              <CardHeader className="text-center pb-8">
                <div className="bg-[#CBAF75] w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-black" />
                </div>
                <CardTitle className="text-2xl font-bold text-white mb-4">Youth/Student/Basic Membership</CardTitle>
                <div className="text-4xl font-bold text-[#CBAF75] mb-2">$10</div>
                <div className="text-gray-400">per year</div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  This offers individuals an exclusive gateway to valuable resources and events within our community.
                  Geared towards youth, students, and those seeking fundamental access.
                </p>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">Key Features:</h4>
                  {[
                    "Access to Member-Only Resources",
                    "Invitations to Exclusive Events",
                    "Affordable Annual Fee",
                    "Community Engagement",
                    "Exclusive Updates and Announcements",
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#CBAF75] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-gradient-to-r from-[#CBAF75] to-yellow-500 hover:from-yellow-500 hover:to-[#CBAF75] text-black font-bold py-3 rounded-full mt-8">
                  Apply for Basic Membership
                </Button>
              </CardContent>
            </Card>

            {/* Premium Membership */}
            <Card className="bg-gradient-to-br from-[#2E3192] to-[#1e2270] border-2 border-[#CBAF75] rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-[#CBAF75] text-black px-3 py-1 rounded-full text-xs font-bold">
                RECOMMENDED
              </div>
              <CardHeader className="text-center pb-8">
                <div className="bg-[#CBAF75] w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Crown className="h-8 w-8 text-black" />
                </div>
                <CardTitle className="text-2xl font-bold text-white mb-4">Premium Membership</CardTitle>
                <div className="text-4xl font-bold text-[#CBAF75] mb-2">$100</div>
                <div className="text-gray-300">per year</div>
                <div className="text-sm text-gray-300 mt-2">For C-Suite Executives with 10+ years experience</div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-200 leading-relaxed">
                  The Premium Membership offers an elevated experience for Corporate & Entrepreneur Executives,
                  targeting individuals in C-Suite positions, CEOs, Directors, and Heads of Department.
                </p>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-white">Key Features:</h4>
                  {[
                    "Priority Registration for Events",
                    "Exclusive Networking Opportunities",
                    "Discounted Event Fees",
                    "Tailored Content and Resources",
                    "Recognition and Visibility",
                    "Dedicated Support",
                    "Complimentary Access to Select Events",
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <Star className="h-5 w-5 text-[#CBAF75] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-200 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-gradient-to-r from-[#CBAF75] to-yellow-500 hover:from-yellow-500 hover:to-[#CBAF75] text-black font-bold py-3 rounded-full mt-8">
                  Apply for Premium Membership
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Member Benefits */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-[#2E3192]/10 rounded-full px-6 py-2 mb-6">
              <span className="text-[#2E3192] font-semibold">Member Benefits</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#2E3192] mb-6">
              What You'll
              <span className="block bg-gradient-to-r from-[#2E3192] to-yellow-500 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Calendar className="h-6 w-6 text-[#CBAF75]" />,
                title: "Networking Luncheons",
                desc: "Frequent exclusive networking opportunities with industry leaders and peers.",
              },
              {
                icon: <BookOpen className="h-6 w-6 text-[#CBAF75]" />,
                title: "Specialized Training",
                desc: "Training sessions tailored to your industry and profession at discounted rates.",
              },
              {
                icon: <Users className="h-6 w-6 text-[#CBAF75]" />,
                title: "Premium Conferences",
                desc: "Access to high-level conferences and summits with exclusive member pricing.",
              },
              {
                icon: <Network className="h-6 w-6 text-[#CBAF75]" />,
                title: "Global Network",
                desc: "Connect with governance and business leaders across Africa and globally.",
              },
              {
                icon: <Award className="h-6 w-6 text-[#CBAF75]" />,
                title: "Recognition Programs",
                desc: "Opportunities for recognition and awards within the governance community.",
              },
              {
                icon: <Shield className="h-6 w-6 text-[#CBAF75]" />,
                title: "Exclusive Resources",
                desc: "Access to premium content, research, and industry insights.",
              },
            ].map((benefit, idx) => (
              <Card
                key={idx}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <CardHeader className="flex flex-col gap-4">
                  <div className="bg-[#2E3192] w-12 h-12 flex items-center justify-center rounded-md group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold text-[#2E3192]">{benefit.title}</CardTitle>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.desc}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Member Showcase */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-[#2E3192]/10 rounded-full px-6 py-2 mb-6">
              <span className="text-[#2E3192] font-semibold">Our Community</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#2E3192] mb-6">
              Join Distinguished
              <span className="block bg-gradient-to-r from-[#2E3192] to-yellow-500 bg-clip-text text-transparent">
                Leaders Worldwide
              </span>
            </h2>
          </div>

          <div className="relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/group.jpg-7PohlnawdiZjCcYRovBMQxT14d8Y8A.jpeg"
              alt="TGBB Member Community"
              width={1200}
              height={600}
              className="rounded-3xl shadow-2xl w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-3xl"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold mb-2">500+ Global Members</h3>
              <p className="text-gray-200">Distinguished leaders from 50+ countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-[#10132a] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pattern.jpg-gWYJhpEDbrnQ9bQnuiQwx3TdIlGNcM.jpeg')] opacity-5 mix-blend-soft-light pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <span className="text-sm uppercase tracking-widest text-[#CBAF75] font-semibold">Ready to Join?</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8">
              <span className="text-[#CBAF75]">BECOME A MEMBER TODAY!</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-6 mb-12">
              Take the next step in your professional journey. Join an exclusive community of governance and business
              leaders shaping the future of corporate excellence.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center">
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
              Contact Us for More Info
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
