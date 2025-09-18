"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/chi-siamo", label: "Chi Siamo" },
  { href: "/progetti", label: "Progetti" },
  { href: "/cosa-facciamo", label: "Cosa Facciamo" },
  { href: "/press", label: "Press" },
  { href: "/contatti", label: "Contatti" }
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/laPianaLogo.png"
            alt="La Piana D'oro"
            width={160}
            height={40}
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button Desktop */}
        <div className="hidden md:block">
          <Button asChild className="bg-accent hover:bg-accent/90">
            <Link href="/contatti">Richiedi Preventivo</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <Image
                  src="/laPianaLogo.png"
                  alt="La Piana D'oro"
                  width={160}
                  height={40}
                  className="h-8 w-auto"
                />
              </Link>
              <nav className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="pt-4 border-t">
                <Button asChild className="w-full bg-accent hover:bg-accent/90">
                  <Link href="/contatti" onClick={() => setIsOpen(false)}>
                    Richiedi Preventivo
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}