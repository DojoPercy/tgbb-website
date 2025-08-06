import './globals.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import Navbar from '@/components/navbar'
import { Toaster } from 'sonner'

export const metadata = {
  title: "TGB Boardroom – Empowering African Governance",
  description:
    "The TGB Boardroom is a pan-African digital hub focused on leadership, policy, governance, and innovation. Dive into insightful stories, strategic dialogues, and impactful solutions shaping Africa’s future.",
  keywords: [
    "TGB Boardroom",
    "African governance",
    "leadership",
    "policy innovation",
    "African development",
    "digital storytelling",
    "Africa think tank",
    "AfCFTA",
    "African leaders",
    "Boardroom Africa"
  ],
  openGraph: {
    title: "TGB Boardroom – A Platform for Strategic African Conversations",
    description:
      "Explore transformative ideas and leadership stories that are shaping Africa's governance and policy landscape. Hosted by The Global Boardroom.",
    url: "https://tgbboardroom.vercel.app",
    siteName: "TGB Boardroom",
    images: [
      {
        url: "https://tgbboardroom.vercel.app/og-image.jpg", // Replace with your actual OG image path
        width: 1200,
        height: 630,
        alt: "TGB Boardroom – African Policy & Leadership Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TGB Boardroom – Shaping Africa’s Future",
    description:
      "A hub for African leaders, policy thinkers, and innovators. Discover insights and solutions on leadership, governance, and economic transformation.",
    images: [
      "https://tgbboardroom.vercel.app/og-image.jpg", // Replace with actual Twitter image
    ],
  },
  metadataBase: new URL("https://tgbboardroom.vercel.app"),
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <Navbar /> {/* ← Insert navbar here */}
        {children}
        <Toaster />
      </body>
    </html>
  )
}
