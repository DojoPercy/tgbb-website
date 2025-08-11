import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import PaymentModal from "@/components/payment-modal"
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
  Building2,
  UserCheck,
  Trophy,
  Handshake,
  
  Users2,
  Briefcase,
  Target,
  Zap,
  Check,
  X,
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
                <span className="text-sm font-medium">The Governance & Business Boardroom</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                The Boardroom
                <span className="block text-yellow-400">Membership</span>
              </h1>

              <p className="text-xl md:text-2xl mb-6 text-gray-200 leading-relaxed">
                Leaders Learning from Leaders
              </p>

              <p className="text-lg mb-10 text-gray-300 leading-relaxed">
                Tailor-made for visionary C-level executives, founders, board chairs, public leaders, and decision-makers who are committed to driving governance excellence and business growth.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <PaymentModal 
                  membershipType="elite" 
                  amount={1000}
                  trigger={
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all"
                    >
                      Join the Boardroom
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  }
                />
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#2E3192] bg-transparent px-8 py-4 rounded-full font-bold backdrop-blur-sm"
                >
                  Download Brochure
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/images/hero.jpg"
                  alt="TGBB Boardroom"
                  width={700}
                  height={500}
                  className="rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 shadow-2xl">
                  <div className="text-black font-bold text-lg">Elite Network</div>
                  <div className="text-black/80 text-sm">C-Suite Leaders</div>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-r from-yellow-400/30 to-orange-500/30 rounded-3xl blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-[#2E3192] mb-8">
              Why Join the
              <span className="block bg-gradient-to-r from-[#2E3192] to-yellow-500 bg-clip-text text-transparent">
                Boardroom?
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#2E3192] to-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              As a member, you gain direct access to an influential network of business leaders, policymakers, and boardroom authorities across Africa and beyond. This exclusive membership is your gateway to strategic partnerships, high-level insights, and elevated leadership visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Globe className="h-8 w-8 text-[#CBAF75]" />,
                title: "Elite Leadership Networking",
                desc: "Connect with an international network of C-suite executives, senior government leaders, and institutional investors."
              },
              {
                icon: <Calendar className="h-8 w-8 text-[#CBAF75]" />,
                title: "Executive Events & Forums",
                desc: "Complimentary access to 20+ curated business and governance events annually."
              },
              {
                icon: <Handshake className="h-8 w-8 text-[#CBAF75]" />,
                title: "Strategic Collaborations",
                desc: "Engage directly with policy influencers, investment leaders, and institutional partners."
              },
              {
                icon: <Trophy className="h-8 w-8 text-[#CBAF75]" />,
                title: "Leadership Recognition",
                desc: "Enjoy bespoke benefits including event vouchers, VIP seating, and public acknowledgment."
              }
            ].map((benefit, idx) => (
              <Card key={idx} className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="bg-[#2E3192] w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
            </div>
                  <CardTitle className="text-lg font-semibold text-[#2E3192]">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed text-center">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who Qualifies Section */}
      <section className="py-24 bg-[#10132a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Who Qualifies for the
              <span className="block text-[#CBAF75]">Boardroom Membership?</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#CBAF75] to-yellow-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Card className="bg-[#1B1E3F] border border-gray-700 rounded-xl p-8">
              <CardHeader className="text-center">
                <div className="bg-[#CBAF75] w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                  <Building2 className="h-8 w-8 text-black" />
                </div>
                <CardTitle className="text-xl font-bold text-white">Corporate Leaders</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  {[
                    "Chief Executive Officers (CEOs)",
                    "Managing Directors (MDs)",
                    "Board Chairs, Presidents",
                    "Regional Heads, General Managers",
                    "Country Directors",
                    "Board Members",
                    "Board Secretaries"
                  ].map((role, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#CBAF75] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{role}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#1B1E3F] border border-gray-700 rounded-xl p-8">
              <CardHeader className="text-center">
                <div className="bg-[#CBAF75] w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                  <Shield className="h-8 w-8 text-black" />
                </div>
                <CardTitle className="text-xl font-bold text-white">Government Officials</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  {[
                    "Ministers, Directors-General, Commissioners",
                    "Governors, Policy Heads"
                  ].map((role, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#CBAF75] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{role}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#1B1E3F] border border-gray-700 rounded-xl p-8">
              <CardHeader className="text-center">
                <div className="bg-[#CBAF75] w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                  <Crown className="h-8 w-8 text-black" />
                    </div>
                <CardTitle className="text-xl font-bold text-white">Diplomats & Sovereigns</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-300">
                  {[
                    "Ambassadors, Consul Generals, and Commercial Attachés",
                    "Royal Family Members and State Representatives"
                  ].map((role, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#CBAF75] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{role}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Membership Tiers Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-[#2E3192] mb-8">
              Membership Tiers &
              <span className="block bg-gradient-to-r from-[#2E3192] to-yellow-500 bg-clip-text text-transparent">
                Investment Options
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#2E3192] to-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600">Leaders learning from leaders.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Elite Membership */}
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 group">
              <CardHeader className="text-center pb-8">
                <div className="bg-green-500 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-green-800 mb-4">🟩 ELITE MEMBERSHIP</CardTitle>
                <p className="text-green-700 mb-6">
                  Perfect for senior executives, directors, and governance professionals looking to build influence, expand networks, and enhance visibility in Africa's boardroom leadership space and beyond.
                </p>
                <div className="text-4xl font-bold text-green-800 mb-2">USD 1,000</div>
                <div className="text-green-600">per year</div>
              </CardHeader>
              <CardContent>
                <PaymentModal 
                  membershipType="elite" 
                  amount={1000}
                  trigger={
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-full text-lg">
                      Apply for Elite Membership
                    </Button>
                  }
                />
              </CardContent>
            </Card>

            {/* VIP Membership */}
            <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-200 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                MOST POPULAR
              </div>
              <CardHeader className="text-center pb-8">
                <div className="bg-yellow-500 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Crown className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-yellow-800 mb-4">🟨 VIP MEMBERSHIP</CardTitle>
                <p className="text-yellow-700 mb-6">
                  Our most prestigious tier, tailored for high-impact business leaders, policymakers, royal dignitaries, and top C-suite executives who seek global engagement, strategic access, and board-level recognition.
                </p>
                <div className="text-4xl font-bold text-yellow-800 mb-2">USD 3,000</div>
                <div className="text-yellow-600">per year</div>
              </CardHeader>
              <CardContent>
                <PaymentModal 
                  membershipType="vip" 
                  amount={3000}
                  trigger={
                    <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-4 rounded-full text-lg">
                      Apply for VIP Membership
                    </Button>
                  }
                />
              </CardContent>
            </Card>
          </div>

          {/* Benefits Comparison Table */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="bg-[#2E3192] text-white p-8 text-center">
              <h3 className="text-2xl font-bold">Membership Benefits Comparison</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-6 font-semibold text-gray-700">Exclusive Benefits & Privileges</th>
                    <th className="text-center p-6 font-semibold text-yellow-600">VIP</th>
                    <th className="text-center p-6 font-semibold text-green-600">Elite</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    "Invitations to Governance & Leadership Events (Summits, Dinners, Roundtables, Retreats)",
                    "Access to Member-Only Strategic Lunches, Hi-Teas, and Cigar Nights",
                    "Member Offers & Promotional Voucher Program",
                    "Feature Your Business Opportunities on Boardroom Platforms",
                    "E-Introduction to the Governance & Business Boardroom Community",
                    "1-Hour Complimentary Leadership & Governance Advisory Session",
                    "International Business Summits & Wellness Retreats",
                    "Participation in Partner & Sponsored Events",
                    "Complimentary Entry to the Global Boardroom Awards",
                    "Publication in Boardroom Business Leadership E-Magazine",
                    "Thought Leadership Speaking Opportunities",
                    "VIP Access to Flagship Global Business Events & Cultural Gatherings",
                    "Invitation to Majlis Meetings with Royal Family Members",
                    "Opportunity for International Award Nominations",
                    "High-Level Government Engagement (Presidents, Ministers, Global Dignitaries)",
                    "Virtual Masterclasses & Webinars",
                    "Curated B2B Meeting Facilitation"
                  ].map((benefit, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="p-6 text-gray-700 text-sm">{benefit}</td>
                      <td className="text-center p-6">
                        {idx === 14 || idx === 16 ? (
                          <X className="h-6 w-6 text-red-500 mx-auto" />
                        ) : (
                          <Check className="h-6 w-6 text-green-500 mx-auto" />
                        )}
                      </td>
                      <td className="text-center p-6">
                        <Check className="h-6 w-6 text-green-500 mx-auto" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Fellowship Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-[#2E3192] mb-8">
              Fellowship Admission
              <span className="block bg-gradient-to-r from-[#2E3192] to-yellow-500 bg-clip-text text-transparent">
                The Governance & Business Boardroom
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#2E3192] to-yellow-400 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-3xl p-8 mb-8">
                <div className="text-center mb-6">
                  <div className="bg-purple-600 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                    <Trophy className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-800 mb-2">Fellowship Status</h3>
                  <div className="text-3xl font-bold text-purple-600 mb-2">USD 5,000</div>
                  <div className="text-purple-600">Admission Fee</div>
                  <div className="text-lg font-semibold text-purple-700 mt-4">Annual Renewal: USD 1,000</div>
                </div>
                <p className="text-purple-700 text-center leading-relaxed">
                  Becoming a Fellow of The Governance & Business Boardroom is one of the highest honours bestowed upon outstanding business leaders and boardroom executives. Fellows may proudly use the designation <strong>FGBB (Fellow of the Governance & Business Boardroom)</strong> after their names.
                </p>
              </div>

              <PaymentModal 
                membershipType="fellow" 
                amount={5000}
                trigger={
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-full text-lg">
                    Apply for Fellowship
                  </Button>
                }
              />
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-[#2E3192] mb-6">Who Can Apply or Be Nominated?</h3>
                <div className="space-y-4">
                  {[
                    "Directorship Experience: A continuous practice as a company director for not less than 8 years",
                    "Distinguished Track Record: A practicing director or executive with 12+ years of proven leadership excellence",
                    "Leadership Role: Held a senior leadership position (e.g. Unit Head or higher) for a minimum of 10 years",
                    "Boardroom Participation: Active involvement in board-related roles or activities for at least 10 years",
                    "Committee Engagement: Participated in corporate, advisory, or governance committees for a minimum of 10 years",
                    "Personal Criteria: Must be of sound mind and not less than 25 years of age"
                  ].map((criteria, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#CBAF75] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{criteria}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#2E3192] mb-6">Why Become a Fellow?</h3>
                <div className="space-y-3">
                  {[
                    "Be recognised among the top-tier leaders in governance, directorship, and business excellence",
                    "Gain access to exclusive boardroom roundtables, high-impact forums, and governance summits",
                    "Join a prestigious network of elite fellows driving change across industries",
                    "Be eligible for speaking, mentorship, and strategic leadership roles within the Boardroom Network"
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <Star className="h-5 w-5 text-[#CBAF75] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Join Section */}
      <section className="py-24 bg-[#10132a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              How to Join the
              <span className="block text-[#CBAF75]">Executive Circle</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#CBAF75] to-yellow-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Complete Application",
                desc: "Complete the Membership Expression of Interest form",
                icon: <UserCheck className="h-8 w-8" />
              },
              {
                step: "2",
                title: "Submit Documents",
                desc: "Submit your company profile and business registration documents to info@tgbboardroom.com",
                icon: <Briefcase className="h-8 w-8" />
              },
              {
                step: "3",
                title: "Verification & Invoice",
                desc: "Upon review, an official invoice will be issued",
                icon: <Target className="h-8 w-8" />
              },
              {
                step: "4",
                title: "Activate Membership",
                desc: "Once payment is received, your membership will be activated and welcome credentials sent",
                icon: <Zap className="h-8 w-8" />
              }
            ].map((item, idx) => (
              <Card key={idx} className="bg-[#1B1E3F] border border-gray-700 rounded-xl p-6 text-center">
                <CardHeader>
                  <div className="bg-[#CBAF75] w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                    {item.icon}
                  </div>
                  <div className="bg-[#CBAF75] text-black w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    {item.step}
                  </div>
                  <CardTitle className="text-lg font-bold text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-[#2E3192] mb-8">
              Your Seat at the Table
              <span className="block bg-gradient-to-r from-[#2E3192] to-yellow-500 bg-clip-text text-transparent">
                Awaits
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#2E3192] to-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Whether you're driving governance at the national level or steering transformational business decisions in the private sector, The Governance & Business Boardroom places you in the company of those redefining leadership across borders.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-12">
              {[
                { text: "Strategic Visibility", icon: <Target className="h-6 w-6" /> },
                { text: "Exclusive Access", icon: <Shield className="h-6 w-6" /> },
                { text: "Global Recognition", icon: <Globe className="h-6 w-6" /> },
                { text: "Board-Level Engagement", icon: <Users2 className="h-6 w-6" /> }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center space-y-2">
                  <div className="bg-[#2E3192] text-white p-3 rounded-full">
                    {item.icon}
                  </div>
                  <span className="text-sm font-semibold text-[#2E3192]">{item.text}</span>
          </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <PaymentModal 
              membershipType="elite" 
              amount={1000}
              trigger={
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#2E3192] to-yellow-500 hover:from-yellow-500 hover:to-[#2E3192] text-white font-bold px-12 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all"
                >
                  Join Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              }
            />
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#2E3192] text-[#2E3192] hover:bg-[#2E3192] hover:text-white px-12 py-4 rounded-full font-bold"
            >
              Download Membership Brochure
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#2E3192] text-[#2E3192] hover:bg-[#2E3192] hover:text-white px-12 py-4 rounded-full font-bold"
            >
              Speak to Our Team
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
