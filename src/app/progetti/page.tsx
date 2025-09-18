"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Users, Calendar, Award, MapPin, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export default function Progetti() {
  const [heroRef, heroInView] = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  })
  
  const [portfolioRef, portfolioInView] = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  })

  const [statsRef, statsInView] = useInView({ 
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
                📸 Portfolio
              </Badge>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-tight"
            >
              <span className="block text-gradient">I Nostri Progetti</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto"
            >
              Scoprite alcuni dei nostri eventi più significativi e lasciatevi ispirare 
              dalle storie che abbiamo contribuito a creare.
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

      {/* Portfolio Tabs */}
      <motion.section 
        ref={portfolioRef}
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
            animate={portfolioInView ? "visible" : "hidden"}
          >
            <Tabs defaultValue="matrimoni" className="w-full">
              <TabsList className="grid w-full grid-cols-3 lg:w-[600px] mx-auto mb-16 glass-effect border-white/20 shadow-luxury">
                <TabsTrigger value="matrimoni" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary transition-luxury">
                  Matrimoni
                </TabsTrigger>
                <TabsTrigger value="corporate" className="data-[state=active]:bg-accent/10 data-[state=active]:text-accent transition-luxury">
                  Corporate
                </TabsTrigger>
                <TabsTrigger value="private" className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary transition-luxury">
                  Private
                </TabsTrigger>
              </TabsList>

            {/* Matrimoni */}
            <TabsContent value="matrimoni" className="space-y-8">
              <motion.div
                variants={itemVariants}
                className="text-center mb-16"
              >
                <motion.h2 
                  className="text-4xl md:text-6xl font-bold mb-6"
                  whileInView={{ 
                    backgroundPosition: ["0% 50%", "100% 50%"],
                  }}
                  transition={{ duration: 2 }}
                >
                  Matrimoni da <span className="text-gradient">Sogno</span>
                </motion.h2>
                <motion.p 
                  className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                  variants={itemVariants}
                >
                  Ogni matrimonio è unico, proprio come l'amore che celebra. 
                  Ecco alcuni dei nostri progetti più emozionanti.
                </motion.p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <motion.div
                  variants={itemVariants}
                  whileHover={{ 
                    y: -10,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="group perspective-1000"
                >
                  <Card className="glass-effect border-white/20 shadow-luxury hover:shadow-hover transition-luxury h-full relative overflow-hidden group-hover:scale-105 transform-gpu !pt-0">
                    {/* Card Glow Effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-primary/30 to-accent/20 transition-opacity duration-500"
                    />
                    
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-t-lg mb-4 relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-gradient-luxury transition-opacity duration-500"
                      />
                    </div>
                    <CardHeader className="relative z-10">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="glass-effect border-primary/30">Matrimonio</Badge>
                        <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          <MapPin className="h-4 w-4 mr-1" />
                          Villa Toscana
                        </div>
                      </div>
                      <CardTitle className="group-hover:text-gradient transition-all duration-300">Elena & Marco</CardTitle>
                      <CardDescription className="group-hover:text-foreground transition-colors duration-300">
                        Un matrimonio intimo in una villa storica toscana, con 120 invitati 
                        e una cerimonia all'aperto seguita da una cena elegante.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          Giugno 2024
                        </div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button variant="ghost" size="sm" className="glass-effect border-border hover:border-primary/30">
                            Dettagli <ArrowRight className="ml-1 h-3 w-3" />
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  whileHover={{ 
                    y: -10,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="group perspective-1000"
                >
                  <Card className="glass-effect border-white/20 shadow-luxury hover:shadow-hover transition-luxury h-full relative overflow-hidden group-hover:scale-105 transform-gpu !pt-0">
                    {/* Card Glow Effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-accent/30 to-primary/20 transition-opacity duration-500"
                    />
                    
                    <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 rounded-t-lg mb-4 relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-gradient-luxury transition-opacity duration-500"
                      />
                    </div>
                    <CardHeader className="relative z-10">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="glass-effect border-accent/30">Matrimonio</Badge>
                        <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          <MapPin className="h-4 w-4 mr-1" />
                          Castello Romano
                        </div>
                      </div>
                      <CardTitle className="group-hover:text-gradient transition-all duration-300">Giulia & Alessandro</CardTitle>
                      <CardDescription className="group-hover:text-foreground transition-colors duration-300">
                        Celebrazione sontuosa in un castello medievale con 200 invitati, 
                        coordinamento completo e spettacolo pirotecnico finale.
                    </CardDescription>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          Settembre 2024
                        </div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button variant="ghost" size="sm" className="glass-effect border-border hover:border-accent/30">
                            Dettagli <ArrowRight className="ml-1 h-3 w-3" />
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  whileHover={{ 
                    y: -10,
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="group perspective-1000"
                >
                  <Card className="glass-effect border-white/20 shadow-luxury hover:shadow-hover transition-luxury h-full relative overflow-hidden group-hover:scale-105 transform-gpu !pt-0">
                    {/* Card Glow Effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-primary/30 to-accent/20 transition-opacity duration-500"
                    />
                    
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-t-lg mb-4 relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-gradient-luxury transition-opacity duration-500"
                      />
                    </div>
                    <CardHeader className="relative z-10">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="glass-effect border-primary/30">Matrimonio</Badge>
                        <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          <MapPin className="h-4 w-4 mr-1" />
                          Spiaggia Amalfi
                        </div>
                      </div>
                      <CardTitle className="group-hover:text-gradient transition-all duration-300">Sofia & Luca</CardTitle>
                      <CardDescription className="group-hover:text-foreground transition-colors duration-300">
                        Matrimonio sulla costa amalfitana con cerimonia al tramonto, 
                        80 invitati e cena vista mare con musica dal vivo.
                    </CardDescription>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          Agosto 2024
                        </div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button variant="ghost" size="sm" className="glass-effect border-border hover:border-primary/30">
                            Dettagli <ArrowRight className="ml-1 h-3 w-3" />
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>

            {/* Eventi Corporate */}
            <TabsContent value="corporate" className="space-y-8">
              <motion.div
                variants={itemVariants}
                className="text-center mb-16"
              >
                <motion.h2 
                  className="text-4xl md:text-6xl font-bold mb-6"
                  whileInView={{ 
                    backgroundPosition: ["0% 50%", "100% 50%"],
                  }}
                  transition={{ duration: 2 }}
                >
                  Eventi <span className="text-gradient">Corporate</span>
                </motion.h2>
                <motion.p 
                  className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                  variants={itemVariants}
                >
                  Conferenze, lanci di prodotto e team building che rafforzano 
                  l'identità aziendale e creano connessioni durature.
                </motion.p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    
                    <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 rounded-t-lg mb-4 relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-gradient-luxury transition-opacity duration-500"
                      />
                    </div>
                    <CardHeader className="relative z-10">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="glass-effect border-accent/30">Conferenza</Badge>
                        <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          <Users className="h-4 w-4 mr-1" />
                          500 partecipanti
                        </div>
                      </div>
                      <CardTitle className="group-hover:text-gradient transition-all duration-300">Tech Innovation Summit</CardTitle>
                      <CardDescription className="group-hover:text-foreground transition-colors duration-300">
                        Conferenza internazionale su innovazione tecnologica con 
                        speaker internazionali, networking e workshop interattivi.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          Novembre 2024
                        </div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button variant="ghost" size="sm" className="glass-effect border-border hover:border-accent/30">
                            Dettagli <ArrowRight className="ml-1 h-3 w-3" />
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

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
                    
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-t-lg mb-4 relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-gradient-luxury transition-opacity duration-500"
                      />
                    </div>
                    <CardHeader className="relative z-10">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="glass-effect border-primary/30">Lancio Prodotto</Badge>
                        <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          <Users className="h-4 w-4 mr-1" />
                          300 invitati
                        </div>
                      </div>
                      <CardTitle className="group-hover:text-gradient transition-all duration-300">Luxury Brand Launch</CardTitle>
                      <CardDescription className="group-hover:text-foreground transition-colors duration-300">
                        Evento esclusivo per il lancio di una nuova linea di prodotti 
                        luxury con show multimediale e cocktail di gala.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          Ottobre 2024
                        </div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button variant="ghost" size="sm" className="glass-effect border-border hover:border-primary/30">
                            Dettagli <ArrowRight className="ml-1 h-3 w-3" />
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

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
                    
                    <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 rounded-t-lg mb-4 relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-gradient-luxury transition-opacity duration-500"
                      />
                    </div>
                    <CardHeader className="relative z-10">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="glass-effect border-accent/30">Team Building</Badge>
                        <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          <Users className="h-4 w-4 mr-1" />
                          150 dipendenti
                        </div>
                      </div>
                      <CardTitle className="group-hover:text-gradient transition-all duration-300">Corporate Retreat</CardTitle>
                      <CardDescription className="group-hover:text-foreground transition-colors duration-300">
                        Weekend di team building per multinazionale con attività 
                        outdoor, workshop motivazionali e cena aziendale.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          Settembre 2024
                        </div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button variant="ghost" size="sm" className="glass-effect border-border hover:border-accent/30">
                            Dettagli <ArrowRight className="ml-1 h-3 w-3" />
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>

            {/* Eventi Private */}
            <TabsContent value="private" className="space-y-8">
              <motion.div
                variants={itemVariants}
                className="text-center mb-16"
              >
                <motion.h2 
                  className="text-4xl md:text-6xl font-bold mb-6"
                  whileInView={{ 
                    backgroundPosition: ["0% 50%", "100% 50%"],
                  }}
                  transition={{ duration: 2 }}
                >
                  Feste <span className="text-gradient">Private</span>
                </motion.h2>
                <motion.p 
                  className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                  variants={itemVariants}
                >
                  Compleanni, anniversari e celebrazioni speciali che rendono 
                  ogni momento unico e memorabile.
                </motion.p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-t-lg mb-4 relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-gradient-luxury transition-opacity duration-500"
                      />
                    </div>
                    <CardHeader className="relative z-10">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="glass-effect border-primary/30">Compleanno</Badge>
                        <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          <Calendar className="h-4 w-4 mr-1" />
                          50° Compleanno
                        </div>
                      </div>
                      <CardTitle className="group-hover:text-gradient transition-all duration-300">Festa Elegante</CardTitle>
                      <CardDescription className="group-hover:text-foreground transition-colors duration-300">
                        Celebrazione di 50° compleanno in villa privata con 
                        80 invitati, tema Great Gatsby e orchestra dal vivo.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          Dicembre 2024
                        </div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button variant="ghost" size="sm" className="glass-effect border-border hover:border-primary/30">
                            Dettagli <ArrowRight className="ml-1 h-3 w-3" />
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

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
                    
                    <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 rounded-t-lg mb-4 relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-gradient-luxury transition-opacity duration-500"
                      />
                    </div>
                    <CardHeader className="relative z-10">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="glass-effect border-accent/30">Anniversario</Badge>
                        <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          <Heart className="h-4 w-4 mr-1" />
                          25° Anniversario
                        </div>
                      </div>
                      <CardTitle className="group-hover:text-gradient transition-all duration-300">Nozze d'Argento</CardTitle>
                      <CardDescription className="group-hover:text-foreground transition-colors duration-300">
                        Celebrazione di 25° anniversario di matrimonio con 
                        rinnovo delle promesse e festa con famiglia e amici.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          Luglio 2024
                        </div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button variant="ghost" size="sm" className="glass-effect border-border hover:border-accent/30">
                            Dettagli <ArrowRight className="ml-1 h-3 w-3" />
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

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
                    
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-t-lg mb-4 relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-gradient-luxury transition-opacity duration-500"
                      />
                    </div>
                    <CardHeader className="relative z-10">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="glass-effect border-primary/30">Laurea</Badge>
                        <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          <Award className="h-4 w-4 mr-1" />
                          Graduation Party
                        </div>
                      </div>
                      <CardTitle className="group-hover:text-gradient transition-all duration-300">Festa di Laurea</CardTitle>
                      <CardDescription className="group-hover:text-foreground transition-colors duration-300">
                        Celebrazione di laurea magistrale con tema universitario, 
                        giochi a squadre e buffet informale per giovani laureati.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          Luglio 2024
                        </div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button variant="ghost" size="sm" className="glass-effect border-border hover:border-primary/30">
                            Dettagli <ArrowRight className="ml-1 h-3 w-3" />
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </motion.section>

      {/* Statistiche */}
      <motion.section 
        ref={statsRef}
        className="py-32 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
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
            animate={statsInView ? "visible" : "hidden"}
            className="text-center mb-20"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              I Nostri <span className="text-gradient">Numeri</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Anni di esperienza si traducono in risultati concreti e clienti soddisfatti.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Eventi Organizzati", color: "primary", delay: 0 },
              { number: "15+", label: "Anni di Esperienza", color: "accent", delay: 0.1 },
              { number: "98%", label: "Clienti Soddisfatti", color: "primary", delay: 0.2 },
              { number: "50+", label: "Partner Affidabili", color: "accent", delay: 0.3 }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { 
                      duration: 0.6, 
                      delay: stat.delay,
                      type: "spring" as const,
                      damping: 20,
                      stiffness: 100
                    }
                  }
                }}
                initial="hidden"
                animate={statsInView ? "visible" : "hidden"}
                whileHover={{ 
                  y: -8,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="text-center group relative"
              >
                {/* Glow Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-15 bg-gradient-to-br ${
                    stat.color === 'primary' 
                      ? 'from-primary/30 to-accent/20' 
                      : 'from-accent/30 to-primary/20'
                  } blur-xl transition-opacity duration-500`}
                  whileHover={{ scale: 1.1 }}
                />
                
                <motion.div 
                  className={`text-4xl md:text-5xl font-bold mb-2 ${
                    stat.color === 'primary' ? 'text-primary' : 'text-accent'
                  } group-hover:text-gradient transition-all duration-300`}
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.number}
                </motion.div>
                <motion.div 
                  className="text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                  whileHover={{ y: -2 }}
                >
                  {stat.label}
                </motion.div>

                {/* Sparkle Effect */}
                <motion.div
                  className={`absolute -top-1 -right-1 w-2 h-2 ${
                    stat.color === 'primary' ? 'text-primary' : 'text-accent'
                  }`}
                  animate={{
                    scale: [0, 1, 0],
                    rotate: [0, 180, 360],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: stat.delay + 0.5,
                    repeat: Infinity,
                    repeatDelay: 4,
                  }}
                >
                  <Sparkles className="w-2 h-2" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        ref={ctaRef}
        className="py-32 relative overflow-hidden"
      >
        {/* Dynamic Background */}
        <div className="absolute inset-0 gradient-mesh opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-primary/5 to-background/90" />
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-16 left-1/4 w-24 h-24 rounded-full bg-primary/20 opacity-40 blur-lg"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-1/3 w-32 h-32 rounded-full bg-accent/15 opacity-50 blur-xl"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            className="max-w-5xl mx-auto text-center"
          >
            {/* Main CTA Container */}
            <motion.div 
              variants={itemVariants}
              className="glass-effect border-white/20 shadow-luxury rounded-3xl p-12 md:p-16 relative overflow-hidden backdrop-blur-xl"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              {/* Gradient Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-luxury opacity-10 rounded-3xl"
                whileHover={{ opacity: 0.15 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Content */}
              <div className="relative z-10">
                <motion.h2 
                  variants={itemVariants}
                  className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
                >
                  <span className="block">Ispirato dai Nostri</span>
                  <span className="block text-gradient">Progetti?</span>
                </motion.h2>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto"
                >
                  Contattateci per scoprire come possiamo realizzare insieme 
                  il vostro evento da sogno.
                </motion.p>
                
                {/* CTA Buttons */}
                <motion.div 
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group"
                  >
                    <Button asChild size="lg" className="gradient-luxury text-accent-foreground shadow-luxury hover:shadow-hover transition-luxury text-lg px-10 py-6 relative overflow-hidden">
                      <Link href="/contatti" className="flex items-center gap-3">
                        <span className="relative z-10">Inizia il Tuo Progetto</span>
                        <motion.div
                          className="relative z-10"
                          initial={{ x: 0 }}
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ArrowRight className="h-5 w-5" />
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

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button asChild variant="outline" size="lg" className="glass-effect border-primary/30 text-primary hover:bg-primary/10 transition-luxury text-lg px-10 py-6">
                      <Link href="/cosa-facciamo" className="flex items-center gap-2">
                        <span>Scopri i Servizi</span>
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Decorative Elements */}
              <motion.div
                className="absolute top-6 right-6 w-3 h-3 bg-accent rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
              <motion.div
                className="absolute bottom-8 left-8 w-2 h-2 bg-primary rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>

  )
}
