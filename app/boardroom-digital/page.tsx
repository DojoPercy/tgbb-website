import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Globe,
    Monitor,
    PenTool,
    Users,
    Award,
    Shield,
    Target,
    Lightbulb,
    Network,
    Zap,
    Building2,
    ArrowRight,
    Phone,
    Mail,
    MapPin,
    CheckCircle,
    Star,
    Linkedin,
    Twitter,
    Instagram,
    Facebook,
    Youtube,
    MessageSquare
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BoardroomDigitalPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2E3192] via-[#1e2270] to-[#0f1235] z-0" />
                <div className="absolute inset-0 bg-black/30 z-0" />
                <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl animate-pulse z-0" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000 z-0" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 w-full">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-y-16 gap-x-24">
                        <div className="flex-1 text-white text-center lg:text-left max-w-2xl">
                            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8 shadow">
                                <Building2 className="h-4 w-4 text-yellow-400 mr-2" />
                                <span className="text-sm font-medium">An Initiative of TGBB</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                The Boardroom <span className="block text-yellow-400">Digital</span>
                            </h1>

                            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
                                Positioning Africa's Leaders in the Digital Age
                            </p>

                            <p className="text-lg text-gray-300 leading-relaxed mb-10">
                                A specialized digital agency providing premium social media management, website design & development, and content creation services exclusively tailored for business leaders, board leaders, public sector executives, private sector CEOs, HR professionals, Deputy MDs, and governance personalities across Africa and beyond.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-bold px-8 py-3 rounded-full shadow-lg">
                                    Get Started
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                                <Button variant="outline" className="border-2 border-white text-white hover:bg-white text-[#2E3192] px-8 py-3 rounded-full font-bold">
                                    View Portfolio
                                </Button>
                            </div>
                        </div>

                        <div className="flex-1 max-w-xl w-full">
                            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-white/10">
                                <Image
                                    src="/images/hero.jpg"
                                    alt="The Boardroom Digital"
                                    fill
                                    className="object-cover"
                                    sizes="(min-width: 1024px) 50vw, 100vw"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/pattern.jpg')] bg-cover bg-center opacity-5 z-0"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2E3192] via-yellow-400 to-[#2E3192]"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#2E3192] mb-6">
                            Your Digital Presence is Your <span className="text-yellow-500">Leadership Voice</span>
                        </h2>
                        <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                            We understand that in today's boardroom and policy-driven world, your digital presence is your leadership voice. That's why we don't just manage platforms—we build influence, credibility, and connection through strategic, high-impact digital communication.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Services */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center bg-[#2E3192]/10 rounded-full px-6 py-2 mb-6">
                            <span className="text-[#2E3192] font-semibold">Our Core Services</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-[#2E3192] mb-6">
                            Premium Digital
                            <span className="block bg-gradient-to-r from-[#2E3192] to-yellow-500 bg-clip-text text-transparent">
                                Solutions
                            </span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <MessageSquare className="h-8 w-8" />,
                                title: "Social Media Management",
                                description: "Elevating executive voices with curated, professional content for LinkedIn, X (Twitter), Facebook, TikTok and Instagram.",
                                features: ["Content Strategy", "Platform Management", "Engagement Monitoring", "Analytics & Reporting"]
                            },
                            {
                                icon: <Monitor className="h-8 w-8" />,
                                title: "Website Design & Development",
                                description: "Custom websites for executives, public institutions, and brands that reflect authority, innovation, and trust.",
                                features: ["Custom Design", "Responsive Development", "SEO Optimization", "Performance Monitoring"]
                            },
                            {
                                icon: <PenTool className="h-8 w-8" />,
                                title: "Content Creation",
                                description: "Executive bios, thought leadership articles, branding videos, and digital storytelling tailored to your leadership profile.",
                                features: ["Executive Bios", "Thought Leadership", "Brand Videos", "Digital Storytelling"]
                            }
                        ].map((service, idx) => (
                            <Card key={idx} className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                                <CardHeader className="text-center">
                                    <div className="bg-gradient-to-r from-[#2E3192] to-[#1e2270] w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <div className="text-white">
                                            {service.icon}
                                        </div>
                                    </div>
                                    <CardTitle className="text-2xl font-bold text-[#2E3192] mb-4">{service.title}</CardTitle>
                                    <CardDescription className="text-gray-600 text-lg leading-relaxed">
                                        {service.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        {service.features.map((feature, featureIdx) => (
                                            <li key={featureIdx} className="flex items-center space-x-3">
                                                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who We Serve */}
            <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-bold text-[#2E3192] mb-6">
                            Who We
                            <span className="block bg-gradient-to-r from-[#2E3192] to-yellow-500 bg-clip-text text-transparent">
                                Serve
                            </span>
                        </h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            We exclusively serve Africa's top-tier leadership and executive networks, providing digital solutions that match their stature and influence.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "CEOs & Deputy MDs", icon: <Building2 className="h-6 w-6" /> },
                            { title: "Public Sector Leaders & DGs", icon: <Shield className="h-6 w-6" /> },
                            { title: "Board Chairs and Members", icon: <Users className="h-6 w-6" /> },
                            { title: "Governance Icons & Policy Influencers", icon: <Award className="h-6 w-6" /> },
                            { title: "HR Directors & Business Transformation Executives", icon: <Target className="h-6 w-6" /> },
                            { title: "Management Consultants & Industry Experts", icon: <Lightbulb className="h-6 w-6" /> }
                        ].map((client, idx) => (
                            <Card key={idx} className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                                <CardContent className="text-center">
                                    <div className="bg-[#2E3192] w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <div className="text-white">
                                            {client.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-semibold text-[#2E3192]">{client.title}</h3>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-[#10132a] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/texture.svg')] opacity-5 mix-blend-soft-light"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6">
                            Why
                            <span className="block text-yellow-400">The Boardroom Digital?</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            {[
                                {
                                    icon: <Target className="h-6 w-6" />,
                                    title: "Boardroom-Level Insight",
                                    description: "We speak the language of leadership and governance."
                                },
                                {
                                    icon: <PenTool className="h-6 w-6" />,
                                    title: "Personalized Branding",
                                    description: "Every digital asset we create aligns with your professional values, influence, and legacy."
                                },
                                {
                                    icon: <Award className="h-6 w-6" />,
                                    title: "Trusted by the C-Suite",
                                    description: "As a TGBB company, we serve Africa's top-tier leadership and executive networks."
                                },
                                {
                                    icon: <Zap className="h-6 w-6" />,
                                    title: "Strategic + Creative",
                                    description: "We combine premium aesthetics with strategy-led content for digital authority."
                                }
                            ].map((feature, idx) => (
                                <div key={idx} className="flex items-start space-x-4 group">
                                    <div className="bg-yellow-400 rounded-full p-3 text-black group-hover:scale-110 transition-transform duration-300">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                                        <p className="text-gray-300">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="relative">
                            <Image
                                src="/images/magazine-launch.jpg"
                                alt="The Boardroom Digital Services"
                                width={600}
                                height={700}
                                className="rounded-3xl shadow-2xl"
                            />
                            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-6 text-black shadow-2xl">
                                <Star className="h-8 w-8 mb-2" />
                                <div className="font-bold">Premium</div>
                                <div className="text-sm opacity-90">Quality</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-bold text-[#2E3192] mb-6">
                            Let's Build Your
                            <span className="block bg-gradient-to-r from-[#2E3192] to-yellow-500 bg-clip-text text-transparent">
                                Digital Legacy
                            </span>
                        </h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                            Whether you're a public figure shaping policy or a corporate leader driving innovation, The Boardroom Digital ensures your online presence reflects your real-world impact.
                        </p>
                        <Button className="bg-gradient-to-r from-[#2E3192] to-[#1e2270] hover:from-[#1e2270] hover:to-[#2E3192] text-white px-12 py-4 rounded-full text-lg font-bold shadow-lg">
                            Start Your Digital Transformation
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-24 bg-[#10132a] text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/texture.svg')] opacity-5 mix-blend-soft-light pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Contact <span className="text-yellow-400">Us</span>
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Ready to elevate your digital presence? Get in touch with The Boardroom Digital team.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div className="space-y-8">
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                                <h3 className="text-2xl font-bold mb-6 text-yellow-400">The Boardroom Digital</h3>
                                
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <MapPin className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="font-semibold">Location</p>
                                            <p className="text-gray-300">TGBB Head Office, Franko Estates, Kwabenya – Accra.</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start space-x-4">
                                        <Phone className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="font-semibold">Phone</p>
                                            <p className="text-gray-300">+233 202384500</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start space-x-4">
                                        <Mail className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="font-semibold">Email</p>
                                            <p className="text-gray-300">digital@tgbboardroom.com</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start space-x-4">
                                        <Globe className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="font-semibold">Website</p>
                                            <p className="text-gray-300">digital.tgbboardroom.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                            <h3 className="text-2xl font-bold mb-6 text-yellow-400">Send us a Message</h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
                                    />
                                </div>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
                                />
                                <textarea
                                    placeholder="Tell us about your digital needs..."
                                    rows={4}
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 resize-none"
                                ></textarea>
                                <Button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-black font-bold py-3 rounded-lg">
                                    Send Message
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </form>
                        </div>
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
                                The Boardroom Digital is a specialized digital agency providing premium social media management, website design & development, and content creation services exclusively tailored for business leaders across Africa and beyond.
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
                                    { label: "Services", href: "#services" },
                                    { label: "Portfolio", href: "#portfolio" },
                                    { label: "Contact", href: "#contact" },
                                ].map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.href} className="text-gray-400 hover:text-yellow-400 transition-colors">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-6 text-white">Services</h3>
                            <ul className="space-y-3">
                                {[
                                    "Social Media Management",
                                    "Website Design",
                                    "Content Creation",
                                    "Digital Strategy",
                                    "Brand Development"
                                ].map((service) => (
                                    <li key={service}>
                                        <span className="text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer">
                                            {service}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-500 text-sm">© 2025 The Boardroom Digital. All rights reserved.</p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <Link href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
} 