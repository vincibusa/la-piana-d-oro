"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowRight } from "lucide-react"

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
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const headerVariants = {
    top: {
      height: "5rem",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      backdropFilter: "blur(8px)",
    },
    scrolled: {
      height: "4rem", 
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(16px)",
    }
  }

  const logoVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.05,
      rotate: 1,
      transition: { duration: 0.3, type: "spring" as const, damping: 15, stiffness: 100 }
    }
  }

  return (
    <motion.header
      className="fixed top-0 z-50 w-full border-b border-white/20 shadow-luxury"
      variants={headerVariants}
      animate={scrolled ? "scrolled" : "top"}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="container mx-auto flex items-center justify-between px-4 h-full">
        {/* Logo */}
        <motion.div variants={logoVariants} initial="rest" whileHover="hover">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              className="relative"
              whileHover={{ filter: "drop-shadow(0 0 8px rgba(212, 175, 55, 0.3))" }}
            >
              <Image
                src="/laPianaLogo.png"
                alt="La Piana D'oro"
                width={160}
                height={40}
                className={`w-auto transition-all duration-300 ${scrolled ? 'h-6' : 'h-8'}`}
              />
            </motion.div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <Link
                href={item.href}
                className={`relative text-sm font-medium transition-all duration-300 group ${
                  pathname === item.href 
                    ? 'text-primary' 
                    : 'text-foreground/80 hover:text-primary'
                }`}
              >
                <motion.span
                  className="relative z-10"
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                </motion.span>
                {pathname === item.href && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-luxury rounded-full"
                    layoutId="activeTab"
                    transition={{ duration: 0.3 }}
                  />
                )}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-luxury rounded-full opacity-0 group-hover:opacity-100"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* CTA Button Desktop */}
        <div className="hidden md:block">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <Button asChild className="gradient-luxury text-accent-foreground shadow-luxury hover:shadow-hover transition-luxury relative overflow-hidden group">
              <Link href="/contatti" className="flex items-center gap-2">
                <span className="relative z-10">Richiedi Preventivo</span>
                <motion.div
                  className="relative z-10"
                  initial={{ x: 0 }}
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="relative p-2 rounded-lg glass-effect"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          <AnimatePresence>
            {isOpen && (
              <>
                <motion.div
                  className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsOpen(false)}
                />
                <motion.div
                  className="fixed top-0 right-0 h-full w-80 bg-background/95 backdrop-blur-xl border-l border-white/20 shadow-luxury z-50"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                >
                  <div className="flex flex-col h-full p-6">
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="mb-8"
                    >
                      <Image
                        src="/laPianaLogo.png"
                        alt="La Piana D'oro"
                        width={160}
                        height={40}
                        className="h-8 w-auto"
                      />
                    </motion.div>

                    <nav className="flex flex-col space-y-2 flex-1">
                      {navigationItems.map((item, index) => (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.15 + index * 0.05 }}
                        >
                          <Link
                            href={item.href}
                            className={`block py-3 px-4 rounded-lg text-lg font-medium transition-all duration-300 ${
                              pathname === item.href
                                ? 'bg-gradient-luxury text-accent-foreground shadow-luxury'
                                : 'hover:bg-primary/10 hover:text-primary'
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </motion.div>
                      ))}
                    </nav>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="pt-6 border-t border-white/20"
                    >
                      <Button asChild className="w-full gradient-luxury text-accent-foreground shadow-luxury">
                        <Link href="/contatti" onClick={() => setIsOpen(false)}>
                          <span>Richiedi Preventivo</span>
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  )
}