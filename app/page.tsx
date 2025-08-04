import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
  Star,
  CheckCircle,
  Users2,
  CalendarDays,
  BarChart3,
  GraduationCap,
  Handshake,
  Megaphone,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
     

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2E3192] via-[#1e2270] to-[#0f1235]"></div>
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
                <Star className="h-4 w-4 text-yellow-400 mr-2" />
                <span className="text-sm font-medium">Premier Networking Platform Since 2021</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                The Governance & Business
                <span className="block text-yellow-400">Boardroom</span>
              </h1>

              <p className="text-xl md:text-2xl mb-10 text-gray-200 leading-relaxed">
                Where corporate governance meets business excellence. Join an exclusive network of C-level executives,
                board members, and industry leaders shaping the future of business.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all"
                >
                  Become a Member
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#2E3192] bg-transparent px-8 py-4 rounded-full font-bold backdrop-blur-sm"
                >
                  Explore Our Network
                </Button>
              </div>

              <div className="flex items-center gap-8 mt-12">
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
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/images/hero.jpg"
                  alt="TGBB Conference Event"
                  width={700}
                  height={500}
                  className="rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 shadow-2xl">
                  <div className="text-black font-bold text-lg">Next Event</div>
                  <div className="text-black/80 text-sm">Leadership Summit 2025</div>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-r from-yellow-400/30 to-orange-500/30 rounded-3xl blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2E3192] via-yellow-400 to-[#2E3192]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-[#2E3192]/10 rounded-full px-6 py-2 mb-6">
              <span className="text-[#2E3192] font-semibold">About TGBB</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#2E3192] mb-6">
              Shaping the Future of
              <span className="block bg-gradient-to-r from-[#2E3192] to-yellow-500 bg-clip-text text-transparent">
                Corporate Governance
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Since 2021, we've been the premier destination for corporate governance and business leaders worldwide,
              fostering collaboration, innovation, and excellence in executive leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative">
              <Image
                src="/images/magazine-launch.jpg"
                alt="TGBB Magazine Launch"
                width={600}
                height={700}
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-[#2E3192] to-purple-600 rounded-2xl p-6 text-white shadow-2xl">
                <Award className="h-8 w-8 mb-2" />
                <div className="font-bold">Excellence</div>
                <div className="text-sm opacity-90">Award Winner</div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-[#2E3192] mb-6">Our Mission</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  We cultivate a dynamic environment where leaders engage in insightful discussions, collaborate on
                  emerging trends, and leverage collective expertise to shape the future of corporate governance.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Through our initiatives, we empower leaders to navigate challenges, embrace innovation, and set new
                  standards for governance, compliance, and strategic decision-making.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="text-2xl font-bold text-[#2E3192] mb-2">2021</div>
                  <div className="text-gray-600">Established</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="text-2xl font-bold text-[#2E3192] mb-2">Global</div>
                  <div className="text-gray-600">Reach</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
<section
  id="services"
  className="py-24 bg-[#10132a] text-white relative overflow-hidden"
>
  <div className="absolute inset-0 bg-[url('/texture.svg')] opacity-5 mix-blend-soft-light"></div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-20">
      <span className="text-sm uppercase tracking-widest text-[#CBAF75] font-semibold">
        Our Services
      </span>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-4">
        Empowering Excellence in
        <span className="block text-[#CBAF75]">Corporate Leadership</span>
      </h2>
      <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-6">
        Premium services tailored for board-level executives, strategic growth, and global business impact.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {/* SERVICE CARD TEMPLATE */}
      {[
        {
          icon: <Users2 className="h-6 w-6 text-[#CBAF75]" />,
          title: 'Boardroom Membership',
          desc: 'Tailored for C-level executives seeking strategic insights, networking, and governance influence.'
        },
        {
          icon: <CalendarDays className="h-6 w-6 text-[#CBAF75]" />,
          title: 'Event Management',
          desc: 'Curated board-level events, summits, and leadership forums aligned with your vision.'
        },
        {
          icon: <BarChart3 className="h-6 w-6 text-[#CBAF75]" />,
          title: 'Trade & Investment',
          desc: 'Strategic partnerships to fuel economic growth through trade and investment alliances.'
        },
        {
          icon: <GraduationCap className="h-6 w-6 text-[#CBAF75]" />,
          title: 'The Boardroom Institute',
          desc: 'Executive education to elevate governance, compliance, and strategic leadership.'
        },
        {
          icon: <Handshake className="h-6 w-6 text-[#CBAF75]" />,
          title: 'Sponsorships',
          desc: 'Amplify your brand to senior decision-makers and governance influencers.'
        },
        {
          icon: <Megaphone className="h-6 w-6 text-[#CBAF75]" />,
          title: 'Publishing & Media',
          desc: 'Content creation, executive branding, and premium media exposure across boardroom channels.'
        },
      ].map((service, idx) => (
        <Card
          key={idx}
          className="bg-[#1B1E3F] border border-gray-700 rounded-lg p-6 transition-transform hover:scale-[1.01] hover:shadow-lg"
        >
          <CardHeader className="flex flex-col gap-4">
            <div className="bg-[#2A2D50] w-12 h-12 flex items-center justify-center rounded-md">
              {service.icon}
            </div>
            <CardTitle className="text-lg font-semibold text-white">{service.title}</CardTitle>
            <CardDescription className="text-gray-400 text-sm leading-relaxed">
              {service.desc}
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  </div>
</section>



      {/* Leadership Team Section */}
      <section id="leadership" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-[#2E3192]/10 rounded-full px-6 py-2 mb-6">
              <span className="text-[#2E3192] font-semibold">Leadership Team</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#2E3192] mb-6">
              Visionary Leaders
              <span className="block bg-gradient-to-r from-[#2E3192] to-yellow-500 bg-clip-text text-transparent">
                Driving Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the distinguished leaders who guide TGBB's mission and vision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Card className="bg-white shadow-2xl border-0 overflow-hidden group hover:shadow-3xl transition-all duration-300">
              <div className="relative">
                <Image
                  src="/images/professor-adei.jpg"
                  alt="Professor Emeritus Stephen Adei"
                  width={400}
                  height={400}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <CardContent className="p-8 text-center">
                <CardTitle className="text-2xl font-bold text-[#2E3192] mb-2">
                  Professor Emeritus Stephen Adei
                </CardTitle>
                <CardDescription className="text-lg text-yellow-600 font-semibold mb-4">Patron</CardDescription>
                <p className="text-gray-600">
                  Distinguished academic and governance expert leading our strategic vision
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-2xl border-0 overflow-hidden group hover:shadow-3xl transition-all duration-300">
              <div className="relative">
                <Image
                  src="/images/professor-adams.jpg"
                  alt="Professor Samuel Adams"
                  width={400}
                  height={400}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <CardContent className="p-8 text-center">
                <CardTitle className="text-2xl font-bold text-[#2E3192] mb-2">Professor Samuel Adams</CardTitle>
                <CardDescription className="text-lg text-yellow-600 font-semibold mb-4">Board Chairman</CardDescription>
                <p className="text-gray-600">Renowned business leader driving organizational excellence and growth</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-2xl border-0 overflow-hidden group hover:shadow-3xl transition-all duration-300">
              <div className="relative">
                <Image
                  src="/images/richmond-damoah.jpg"
                  alt="Mr. Richmond Anim Damoah"
                  width={400}
                  height={400}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <CardContent className="p-8 text-center">
                <CardTitle className="text-2xl font-bold text-[#2E3192] mb-2">Mr. Richmond Anim Damoah</CardTitle>
                <CardDescription className="text-lg text-yellow-600 font-semibold mb-4">Founder & CEO</CardDescription>
                <p className="text-gray-600">Visionary entrepreneur and the driving force behind TGBB's success</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
    <section id="contact" className="py-24 bg-[#10132a] text-white relative overflow-hidden">
  <div className="absolute inset-0 bg-[url('/texture.svg')] opacity-5 mix-blend-soft-light pointer-events-none"></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center mb-20">
      <span className="text-sm uppercase tracking-widest text-[#CBAF75] font-semibold">Contact Us</span>
      <h2 className="text-4xl md:text-5xl font-bold mt-4">
        Connect with <span className="text-[#CBAF75]">Our Team</span>
      </h2>
      <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-6">
        Ready to join the premier network of governance and business leaders? Let’s begin the conversation.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          icon: <MapPin className="h-6 w-6 text-[#CBAF75]" />,
          title: 'Our Location',
          desc: (
            <>
              The Governance & Business Boardroom
              <br /> Kwabenya, Accra, Ghana
              <br /> West Africa
            </>
          )
        },
        {
          icon: <Phone className="h-6 w-6 text-[#CBAF75]" />,
          title: 'Call Us',
          desc: (
            <>
              +233 202384500
              <br />
              +233 247415140
            </>
          )
        },
        {
          icon: <Mail className="h-6 w-6 text-[#CBAF75]" />,
          title: 'Email Us',
          desc: (
            <>
              info@tgbboardroom.com
              <br />
              www.tgbboardroom.com
            </>
          )
        }
      ].map((item, idx) => (
        <Card
          key={idx}
          className="bg-[#1B1E3F] border border-gray-700 rounded-lg text-center p-8 shadow-md"
        >
          <div className="flex items-center justify-center w-12 h-12 mx-auto mb-6 bg-[#2A2D50] rounded-md">
            {item.icon}
          </div>
          <CardTitle className="text-lg font-semibold text-white mb-2">{item.title}</CardTitle>
          <CardDescription className="text-gray-400 text-sm leading-relaxed">{item.desc}</CardDescription>
        </Card>
      ))}
    </div>
  </div>
</section>

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
          The Governance & Business Boardroom is a prestigious networking organization connecting corporate governance and business leaders worldwide since 2021.
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
          {['Home', 'About Us', 'Services', 'Leadership', 'Contact'].map((label) => (
            <li key={label}>
              <Link
                href={`#${label.toLowerCase().replace(/ /g, '')}`}
                className="text-gray-400 hover:text-[#CBAF75] transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-6 text-white">Contact Info</h3>
        <div className="space-y-4 text-gray-400 text-sm">
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-[#CBAF75]" />
            <span>Kwabenya, Accra, Ghana</span>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 text-[#CBAF75]" />
            <span>+233 202384500</span>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="h-5 w-5 text-[#CBAF75]" />
            <span>info@tgbboardroom.com</span>
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
      <p className="text-gray-500 text-sm">
        © 2025 The Governance & Business Boardroom. All rights reserved.
      </p>
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
