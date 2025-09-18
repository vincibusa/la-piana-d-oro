"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Heart, Users, Calendar, Utensils, Camera, Music, ArrowRight, CheckCircle, Sparkles } from "lucide-react"
import Link from "next/link"

export default function CosaFacciamo() {
  const [heroRef, heroInView] = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  })
  
  const [servicesRef, servicesInView] = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  })

  const [additionalRef, additionalInView] = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  })

  const [processRef, processInView] = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  })

  const [ctaRef, ctaInView] = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, type: "spring" as const, damping: 20, stiffness: 100 }
    }
  }
  return (
    <div className="flex flex-col relative">
      {/* Floating Particles Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => {
          // Deterministic positions based on index to avoid hydration mismatch
          const positions = [
            { left: 18.92, top: 22.45 }, { left: 45.61, top: 67.83 }, { left: 73.24, top: 89.12 },
            { left: 56.89, top: 34.78 }, { left: 82.17, top: 12.34 }, { left: 29.63, top: 78.45 },
            { left: 13.89, top: 45.67 }, { left: 64.52, top: 91.28 }, { left: 37.81, top: 23.45 },
            { left: 89.12, top: 56.78 }, { left: 22.45, top: 38.92 }, { left: 67.83, top: 73.24 },
            { left: 91.28, top: 15.67 }, { left: 34.78, top: 82.17 }, { left: 56.89, top: 29.63 }
          ]
          const pos = positions[i] || { left: 50, top: 50 }
          
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gradient-luxury rounded-full opacity-20"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 4 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
              }}
            />
          )
        })}
      </div>

      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
      >
        {/* Dynamic Background */}
        <div className="absolute inset-0 gradient-mesh opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background/60" />
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-32 left-16 w-40 h-40 rounded-full bg-accent/20 opacity-30 blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 120, 240, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-32 h-32 rounded-full bg-primary/25 opacity-40 blur-xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-6xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-8">
              <Badge className="bg-accent/20 text-accent-foreground border-accent/30 glass-effect">
                🎯 I Nostri Servizi
              </Badge>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-tight"
            >
              <span className="block text-gradient">Cosa Facciamo</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto"
            >
              Dalla pianificazione alla realizzazione, offriamo servizi completi 
              per ogni tipo di evento, curandone ogni singolo dettaglio.
            </motion.p>

            {/* Decorative Elements */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center items-center gap-4"
            >
              {Array.from({ length: 3 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-gradient-luxury rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Servizi Principali */}
      <motion.section 
        ref={servicesRef}
        className="py-32 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-luxury opacity-10 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            className="text-center mb-20"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              I Nostri <span className="text-gradient">Servizi Principali</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Ogni evento è unico e richiede un approccio personalizzato. 
              Ecco i nostri servizi specializzati.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Matrimoni */}
            <motion.div
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group perspective-1000"
            >
              <Card className="glass-effect border-white/20 shadow-luxury hover:shadow-hover transition-luxury h-full relative overflow-hidden group-hover:scale-105 transform-gpu">
                {/* Card Glow Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-primary/30 to-accent/20 transition-opacity duration-500"
                />
                <CardHeader className="relative z-10">
                  <motion.div 
                    className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 glass-effect border-white/20 relative"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <Heart className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300 relative z-10" />
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-40 bg-primary/20 blur-md"
                      whileHover={{ scale: 1.3, opacity: 0.6 }}
                    />
                  </motion.div>
                  <CardTitle className="text-2xl mb-4 group-hover:text-gradient transition-all duration-300">Matrimoni</CardTitle>
                  <CardDescription className="text-lg leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    Il giorno più importante della vostra vita merita la perfezione assoluta. 
                    Ci occupiamo di ogni dettaglio per realizzare il matrimonio dei vostri sogni.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.div 
                      className="flex items-center space-x-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CheckCircle className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm group-hover:text-foreground transition-colors duration-300">Wedding Planning completo</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CheckCircle className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm group-hover:text-foreground transition-colors duration-300">Selezione location</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CheckCircle className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm group-hover:text-foreground transition-colors duration-300">Coordinamento cerimonia</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CheckCircle className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm group-hover:text-foreground transition-colors duration-300">Gestione fornitori</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CheckCircle className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm group-hover:text-foreground transition-colors duration-300">Allestimenti floreali</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CheckCircle className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm group-hover:text-foreground transition-colors duration-300">Timeline giornata</span>
                    </motion.div>
                  </div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button asChild className="w-full gradient-luxury text-accent-foreground shadow-luxury hover:shadow-hover transition-luxury">
                      <Link href="/contatti" className="flex items-center justify-center">
                        Richiedi Preventivo Matrimonio
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </motion.div>
                </CardContent>
            </Card>
            </motion.div>

            {/* Eventi Corporate */}
            <motion.div
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group perspective-1000"
            >
              <Card className="glass-effect border-white/20 shadow-luxury hover:shadow-hover transition-luxury h-full relative overflow-hidden group-hover:scale-105 transform-gpu">
                {/* Card Glow Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-accent/30 to-primary/20 transition-opacity duration-500"
                />
                <CardHeader className="relative z-10">
                  <motion.div 
                    className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 glass-effect border-white/20 relative"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: -5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <Users className="h-8 w-8 text-accent group-hover:scale-110 transition-transform duration-300 relative z-10" />
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-40 bg-accent/20 blur-md"
                      whileHover={{ scale: 1.3, opacity: 0.6 }}
                    />
                  </motion.div>
                  <CardTitle className="text-2xl mb-4 group-hover:text-gradient transition-all duration-300">Eventi Corporate</CardTitle>
                  <CardDescription className="text-lg leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    Conferenze, convention e team building professionali che rafforzano 
                    l'identità aziendale e creano valore per il vostro business.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.div 
                      className="flex items-center space-x-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CheckCircle className="h-4 w-4 text-accent group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm group-hover:text-foreground transition-colors duration-300">Conferenze & Meeting</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CheckCircle className="h-4 w-4 text-accent group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm group-hover:text-foreground transition-colors duration-300">Lanci di prodotto</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CheckCircle className="h-4 w-4 text-accent group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm group-hover:text-foreground transition-colors duration-300">Team building</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CheckCircle className="h-4 w-4 text-accent group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm group-hover:text-foreground transition-colors duration-300">Gala aziendali</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CheckCircle className="h-4 w-4 text-accent group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm group-hover:text-foreground transition-colors duration-300">Convention</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CheckCircle className="h-4 w-4 text-accent group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm group-hover:text-foreground transition-colors duration-300">Incentive travel</span>
                    </motion.div>
                  </div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button asChild variant="outline" className="w-full glass-effect border-accent/30 text-accent hover:bg-accent/10 transition-luxury">
                      <Link href="/contatti" className="flex items-center justify-center">
                        Richiedi Preventivo Corporate
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Feste Private */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="group perspective-1000"
            >
              <Card className="glass-effect border-white/20 shadow-luxury hover:shadow-hover transition-luxury h-full relative overflow-hidden group-hover:scale-105 transform-gpu">
                {/* Card Glow Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-primary/30 to-accent/20 transition-opacity duration-500"
                />
                <CardHeader className="relative z-10">
                  <motion.div 
                    className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 glass-effect border-white/20 relative"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <Calendar className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300 relative z-10" />
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-40 bg-primary/20 blur-md"
                      whileHover={{ scale: 1.3, opacity: 0.6 }}
                    />
                  </motion.div>
                  <CardTitle className="text-2xl mb-4 group-hover:text-gradient transition-all duration-300">Feste Private</CardTitle>
                  <CardDescription className="text-lg leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    Compleanni, anniversari e celebrazioni speciali personalizzate 
                    per rendere ogni momento unico e memorabile.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <motion.div 
                      className="flex items-center space-x-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CheckCircle className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm group-hover:text-foreground transition-colors duration-300">Feste di compleanno</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CheckCircle className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm group-hover:text-foreground transition-colors duration-300">Anniversari</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CheckCircle className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm group-hover:text-foreground transition-colors duration-300">Cene di gala</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CheckCircle className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm group-hover:text-foreground transition-colors duration-300">Eventi a tema</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CheckCircle className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm group-hover:text-foreground transition-colors duration-300">Feste di laurea</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CheckCircle className="h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm group-hover:text-foreground transition-colors duration-300">Celebrazioni familiari</span>
                    </motion.div>
                  </div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button asChild className="w-full gradient-luxury text-accent-foreground shadow-luxury hover:shadow-hover transition-luxury">
                      <Link href="/contatti" className="flex items-center justify-center">
                        Organizza la Tua Festa
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Consulenza Eventi */}
            <Card className="group hover:shadow-xl transition-all" id="consulenza">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-2xl">Consulenza Eventi</CardTitle>
                <CardDescription className="text-lg">
                  Supporto professionale per chi desidera organizzare autonomamente 
                  il proprio evento con la garanzia della nostra esperienza.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-sm">Pianificazione strategica</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-sm">Selezione fornitori</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-sm">Budget management</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-sm">Timeline ottimizzate</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-sm">Supporto logistico</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-sm">Coordinamento finale</span>
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/contatti">
                    Richiedi Consulenza
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      <Separator />

      {/* Servizi Aggiuntivi */}
      <section className="py-20 bg-muted/30" id="catering">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Servizi Aggiuntivi</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Completiamo ogni evento con servizi specializzati per un'esperienza 
              davvero completa e professionale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Utensils className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Catering & Banqueting</CardTitle>
                <CardDescription>
                  Menu personalizzati e servizio catering di alta qualità per ogni occasione.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Menu degustazione</li>
                  <li>• Buffet personalizzati</li>
                  <li>• Servizio al tavolo</li>
                  <li>• Wine pairing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="h-8 w-8 text-accent" />
                </div>
                <CardTitle>Fotografia & Video</CardTitle>
                <CardDescription>
                  Immortaliamo i momenti più belli con servizi fotografici e video professionali.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Reportage eventi</li>
                  <li>• Video highlights</li>
                  <li>• Streaming live</li>
                  <li>• Album personalizzati</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Music className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Intrattenimento</CardTitle>
                <CardDescription>
                  Musica dal vivo, DJ set e spettacoli per animare ogni tipo di evento.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• DJ professionali</li>
                  <li>• Band musicali</li>
                  <li>• Animatori eventi</li>
                  <li>• Spettacoli su misura</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Processo di Lavoro */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Il Nostro Processo</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Un approccio strutturato e professionale per garantire il successo 
              di ogni evento, dalla prima idea alla realizzazione finale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold text-lg mb-3">Consulenza Iniziale</h3>
              <p className="text-muted-foreground text-sm">
                Ascoltiamo le vostre idee e analizziamo insieme obiettivi, budget e tempistiche.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold text-lg mb-3">Progettazione</h3>
              <p className="text-muted-foreground text-sm">
                Sviluppiamo un concept dettagliato con timeline, fornitori e soluzioni creative.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold text-lg mb-3">Coordinamento</h3>
              <p className="text-muted-foreground text-sm">
                Gestiamo tutti i fornitori e gli aspetti logistici per una preparazione perfetta.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                4
              </div>
              <h3 className="font-semibold text-lg mb-3">Realizzazione</h3>
              <p className="text-muted-foreground text-sm">
                Coordiniamo l'evento in tempo reale assicurando che tutto si svolga perfettamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronti a Realizzare il Vostro Evento?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Ogni grande evento inizia con una conversazione. Contattateci per 
              una consulenza gratuita e scoprite come possiamo aiutarvi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contatti">
                  Richiedi Preventivo Gratuito
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/progetti">Guarda i Nostri Progetti</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
