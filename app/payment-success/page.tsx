import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Users, Award, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PaymentSuccessPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="text-center mb-16">
                    <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
                        <CheckCircle className="h-12 w-12 text-green-600" />
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl font-bold text-[#2E3192] mb-6">
                        Welcome to <span className="text-green-600">TGBB!</span>
                    </h1>
                    
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                        Your membership payment has been processed successfully. You are now part of The Governance & Business Boardroom's exclusive network of leaders.
                    </p>
                    
                    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto">
                        <h3 className="text-lg font-semibold text-[#2E3192] mb-4">Membership Details</h3>
                        <div className="space-y-3 text-left">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Membership Type:</span>
                                <span className="font-semibold">Premium</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Status:</span>
                                <span className="text-green-600 font-semibold">Active</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Valid Until:</span>
                                <span className="font-semibold">Dec 31, 2025</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {[
                        {
                            icon: <Users className="h-8 w-8" />,
                            title: "Network Access",
                            description: "Connect with 500+ global leaders and executives"
                        },
                        {
                            icon: <Award className="h-8 w-8" />,
                            title: "Exclusive Events",
                            description: "Access to premium networking events and conferences"
                        },
                        {
                            icon: <Globe className="h-8 w-8" />,
                            title: "Global Reach",
                            description: "Join our international community of governance professionals"
                        }
                    ].map((feature, idx) => (
                        <Card key={idx} className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                            <CardHeader className="text-center">
                                <div className="bg-[#2E3192] w-12 h-12 flex items-center justify-center rounded-full mx-auto mb-4">
                                    <div className="text-white">
                                        {feature.icon}
                                    </div>
                                </div>
                                <CardTitle className="text-lg font-semibold text-[#2E3192]">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600 text-center">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center space-y-6">
                    <h2 className="text-2xl font-bold text-[#2E3192]">What's Next?</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        You'll receive a welcome email with your member credentials and access to our exclusive member portal. 
                        Start exploring our upcoming events and networking opportunities.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/">
                            <Button className="bg-gradient-to-r from-[#2E3192] to-[#1e2270] hover:from-[#1e2270] hover:to-[#2E3192] text-white px-8 py-3 rounded-full font-bold">
                                Return to Home
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link href="/about">
                            <Button variant="outline" className="border-2 border-[#2E3192] text-[#2E3192] hover:bg-[#2E3192] hover:text-white px-8 py-3 rounded-full font-bold">
                                Explore Our Community
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
} 