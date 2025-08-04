'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT US', href: '/about' },
  { name: 'MEMBERSHIP', href: '/membership' },
  { name: 'OUR MAGAZINE', href: '/our-magazine' },
  { name: 'EVENTS', href: '#' },
  {name: 'INITIATIVES', href: '#'},
  { name: 'CONTACT', href: '/#contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeHash, setActiveHash] = useState<string>('')

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash)
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Image
            src="/logo.png"
            alt="TGBB Logo"
            width={250}
            height={75}
            className="h-14 w-auto"
          />

          {/* Desktop Nav */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-2">
              {navItems.map(({ name, href }) => {
                const isAnchor = href.includes('#')
                const isActive =
                  (!isAnchor && pathname === href) ||
                  (isAnchor && pathname === '/' && activeHash === href.replace('/', ''))

                return (
                  <Link
                    key={name}
                    href={href}
                    className={`px-4 py-2 text-sm font-semibold transition-colors ${
                      isActive
                        ? 'text-[#2E3192] border-b-2 border-[#2E3192]'
                        : 'text-gray-700 hover:text-[#2E3192]'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {name}
                  </Link>
                )
              })}

              <Button className="bg-gradient-to-r from-[#2E3192] to-[#1e2270] hover:from-[#1e2270] hover:to-[#2E3192] text-white px-6 py-2 rounded-full font-semibold shadow-lg">
                JOIN NOW
              </Button>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-[#2E3192] focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md border-t">
          <div className="px-4 py-4 space-y-4">
            {navItems.map(({ name, href }) => {
              const isAnchor = href.includes('#')
              const isActive =
                (!isAnchor && pathname === href) ||
                (isAnchor && pathname === '/' && activeHash === href.replace('/', ''))

              return (
                <Link
                  key={name}
                  href={href}
                  className={`block px-4 py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-[#2E3192] border-l-4 border-[#2E3192] bg-gray-100'
                      : 'text-gray-700 hover:text-[#2E3192]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {name}
                </Link>
              )
            })}

            <Button className="w-full bg-gradient-to-r from-[#2E3192] to-[#1e2270] hover:from-[#1e2270] hover:to-[#2E3192] text-white py-2 rounded-full font-semibold shadow-lg">
              JOIN NOW
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
