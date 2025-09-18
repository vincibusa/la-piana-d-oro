"use client"

import Link from "next/link"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import { Separator } from "@/components/ui/separator"
import { Users, Heart, Award, ArrowRight, Sparkles } from "lucide-react"

export default function ChiSiamo() {
  const [heroRef, heroInView] = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  })
  
  const [missionRef, missionInView] = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  })

  const [teamRef, teamInView] = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  })

  const [whyUsRef, whyUsInView] = useInView({ 
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
            { left: 22.45, top: 18.92 }, { left: 67.83, top: 45.61 }, { left: 89.12, top: 73.24 },
            { left: 34.78, top: 56.89 }, { left: 12.34, top: 82.17 }, { left: 78.45, top: 29.63 },
            { left: 45.67, top: 13.89 }, { left: 91.28, top: 64.52 }, { left: 23.45, top: 37.81 },
            { left: 56.78, top: 89.12 }, { left: 38.92, top: 22.45 }, { left: 73.24, top: 67.83 },
            { left: 15.67, top: 91.28 }, { left: 82.17, top: 34.78 }, { left: 29.63, top: 56.89 }
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
        className="relative min-h-[100vh] flex items-center justify-center overflow-hidden"
      >
        {/* Dynamic Background */}
        <div className="absolute inset-0 gradient-mesh opacity-50" />
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
            <motion.div
              variants={itemVariants}
              className="mb-8"
            >

            </motion.div>

            {/* Main Title */}
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-tight"
            >
              <span className="block text-gradient">Chi Siamo</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto"
            >
              La Piana d'Oro nasce nel 2016 da un gruppo di cittadini e professionisti 
              con l'obiettivo di promuovere lo sviluppo territoriale e la cultura agroalimentare locale.
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

      {/* Mission e Vision */}
      <motion.section 
        ref={missionRef}
        className="py-32 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <motion.div
          className="absolute top-20 right-10 w-36 h-36 rounded-full bg-primary/15 opacity-40 blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={missionInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            {/* Mission Content */}
            <motion.div variants={itemVariants}>
              <motion.h2 
                className="text-4xl md:text-6xl font-bold mb-8"
                whileInView={{ 
                  backgroundPosition: ["0% 50%", "100% 50%"],
                }}
                transition={{ duration: 2 }}
              >
                La Nostra <span className="text-gradient">Storia</span>
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
              >
                La Piana d'Oro nasce nel 2016, da un gruppo di cittadini e professionisti 
                con l'obiettivo di promuovere lo sviluppo territoriale, la cultura agroalimentare locale 
                e la tradizione bagherese.
              </motion.p>
              
            </motion.div>

            {/* Team Image */}
            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden rounded-3xl"
              >
                {/* Team Image */}
                <div className="aspect-square relative">
                  <div 
                    className="w-full h-full bg-cover bg-center rounded-3xl"
                    style={{
                      backgroundImage: "url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop&crop=entropy&auto=format)",
                    }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl" />
                </div>
                
                {/* Text Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    Il Nostro Team
                  </motion.h3>
                  <motion.p 
                    className="text-white/90 text-base"
                    whileHover={{ y: -2 }}
                  >
                    Cittadini, professionisti e volontari uniti dalla passione per Bagheria
                  </motion.p>
                </div>
                
                {/* Glass effect border */}
                <div className="absolute inset-0 rounded-3xl ring-1 ring-white/20 group-hover:ring-white/30 transition-all duration-300" />
                
                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-primary/30 to-accent/20 transition-opacity duration-500 rounded-3xl"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <Separator />

      {/* Cosa Facciamo Section */}
      <motion.section className="py-32 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-primary/5" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={missionInView ? "visible" : "hidden"}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-12 text-center"
            >
              Cosa <span className="text-gradient">Facciamo</span>
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Eventi e Manifestazioni",
                  description: "Organizziamo eventi come Sfincione Fest e Verdello Fest, promuovendo lo sfincione bianco di Bagheria e i prodotti tipici locali.",
                  image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=600&h=400&fit=crop&crop=entropy&auto=format"
                },
                {
                  title: "Certificazione Prodotti",
                  description: "Lavoriamo per il riconoscimento e la certificazione dei prodotti identitari del territorio bagherese.",
                  image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&h=400&fit=crop&crop=entropy&auto=format"
                },
                {
                  title: "Rigenerazione Urbana",
                  description: "Avviamo progetti di rigenerazione urbana, come la riqualificazione di Piazza Carlo Doglio con \"Un giardino per Bagheria\".",
                  image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop&crop=entropy&auto=format"
                },
                {
                  title: "Educazione e Formazione",
                  description: "Collaboriamo con scuole, enti e istituzioni per seminari, workshop e attività formative.",
                  image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop&crop=entropy&auto=format"
                }
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group"
                >
                  <Card className="glass-effect border-white/20 shadow-luxury hover:shadow-hover transition-luxury h-full relative overflow-hidden group-hover:scale-105 transform-gpu">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <div 
                        className="w-full h-full bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${item.image})`,
                        }}
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                    </div>
                    
                    {/* Card Glow Effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-primary/30 to-accent/20 transition-opacity duration-500"
                    />
                    
                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-end p-6">
                      <CardTitle className="text-xl mb-3 text-white group-hover:text-gradient transition-all duration-300">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed text-white/90">
                        {item.description}
                      </CardDescription>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>


      {/* Team */}
      <motion.section 
        ref={teamRef}
        className="py-32 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-background to-primary/5" />
        <motion.div
          className="absolute top-10 left-1/4 w-48 h-48 rounded-full bg-accent/10 opacity-30 blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-40 h-40 rounded-full bg-primary/15 opacity-40 blur-2xl"
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
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
            animate={teamInView ? "visible" : "hidden"}
            className="text-center mb-20"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Il Nostro <span className="text-gradient">Team</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Un gruppo di cittadini, professionisti e volontari uniti dalla passione 
              per Bagheria e il suo territorio, impegnati nella valorizzazione culturale.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Giuseppe",
                role: "Presidente Associazione", 
                initials: "GP",
                description: "Impegnato nella valorizzazione del territorio bagherese, coordina i progetti e le collaborazioni istituzionali dell'associazione.",
                gradient: "from-primary to-accent",
                delay: 0
              },
              {
                name: "Maria",
                role: "Responsabile Progetti Culturali",
                initials: "MC", 
                description: "Si occupa dell'organizzazione degli eventi culturali e della promozione dei prodotti tipici locali.",
                gradient: "from-accent to-primary",
                delay: 0.1
              },
              {
                name: "Francesco",
                role: "Coordinatore Rigenerazione Urbana",
                initials: "FR",
                description: "Esperto in progetti di riqualificazione urbana, coordina le iniziative per il recupero degli spazi pubblici.",
                gradient: "from-primary to-accent",
                delay: 0.2
              }
            ].map((member) => (
              <motion.div
                key={member.name}
                variants={{
                  hidden: { opacity: 0, y: 50, rotateY: -15 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotateY: 0,
                    transition: { 
                      duration: 0.8, 
                      delay: member.delay,
                      type: "spring" as const,
                      damping: 20,
                      stiffness: 100
                    }
                  }
                }}
                initial="hidden"
                animate={teamInView ? "visible" : "hidden"}
                whileHover={{ 
                  y: -12,
                  scale: 1.03,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="group perspective-1000"
              >
                <Card className="glass-effect border-white/20 shadow-luxury hover:shadow-hover transition-luxury text-center relative overflow-hidden h-full transform-gpu">
                  {/* Card Glow Effect */}
                  <motion.div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-15 bg-gradient-to-br ${member.gradient} transition-opacity duration-500`}
                  />
                  
                  <CardHeader className="relative z-10 pb-4">
                    {/* Avatar with 3D Effect */}
                    <motion.div 
                      className="relative mx-auto mb-6"
                      whileHover={{ 
                        scale: 1.1,
                        rotateY: 10,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <motion.div 
                        className={`w-24 h-24 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center relative shadow-luxury group-hover:shadow-hover transition-luxury`}
                        whileHover={{ 
                          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
                        }}
                      >
                        <span className="text-2xl font-bold text-white relative z-10">
                          {member.initials}
                        </span>
                        
                        {/* Avatar Glow */}
                        <motion.div
                          className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-60 bg-gradient-to-br ${member.gradient} blur-lg`}
                          whileHover={{ scale: 1.4, opacity: 0.8 }}
                        />
                      </motion.div>

                      {/* Floating Ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-gradient-luxury opacity-0 group-hover:opacity-40"
                        animate={{
                          rotate: [0, 360],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                        }}
                      />
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CardTitle className="text-2xl mb-2 group-hover:text-gradient transition-all duration-300">
                        {member.name}
                      </CardTitle>
                      <CardDescription className="text-lg font-medium text-accent group-hover:text-accent/80 transition-colors duration-300">
                        {member.role}
                      </CardDescription>
                    </motion.div>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 pt-0">
                    <motion.p 
                      className="text-base text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      {member.description}
                    </motion.p>
                  </CardContent>

                  {/* Decorative Corner */}
                  <motion.div
                    className="absolute top-4 right-4 w-2 h-2 bg-gradient-luxury rounded-full opacity-0 group-hover:opacity-100"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      delay: member.delay + 0.5,
                      repeat: Infinity,
                    }}
                  />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Perché Sceglierci */}
      <motion.section 
        ref={whyUsRef}
        className="py-32 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <motion.div
          className="absolute top-32 right-16 w-44 h-44 rounded-full bg-accent/15 opacity-30 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-36 h-36 rounded-full bg-primary/20 opacity-40 blur-2xl"
          animate={{
            x: [0, 25, 0],
            y: [0, -25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={whyUsInView ? "visible" : "hidden"}
            className="text-center mb-20"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Perché Sostenerci <span className="text-gradient">La Piana d'Oro</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Il nostro approccio partecipativo e l'impegno concreto per il territorio 
              ci distinguono, garantendo risultati tangibili per la comunità bagherese.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: Award,
                title: "Riconoscimenti Ufficiali",
                description: "Bagheria è stata designata \"Destinazione del Gusto\" anche grazie ai nostri progetti di valorizzazione territoriale.",
                color: "primary",
                delay: 0
              },
              {
                icon: Users,
                title: "Rete di Collaborazioni",
                description: "Lavoriamo con scuole, istituzioni, enti locali e cittadini per creare progetti condivisi e di impatto duraturo.",
                color: "accent",
                delay: 0.1
              },
              {
                icon: Heart,
                title: "Impegno Autentico",
                description: "Ogni progetto nasce dalla passione per il territorio e dall'impegno concreto per migliorare la nostra comunità.",
                color: "primary",
                delay: 0.2
              }
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={{
                  hidden: { opacity: 0, y: 60, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { 
                      duration: 0.8, 
                      delay: item.delay,
                      type: "spring" as const,
                      damping: 20,
                      stiffness: 100
                    }
                  }
                }}
                initial="hidden"
                animate={whyUsInView ? "visible" : "hidden"}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="group text-center relative"
              >
                {/* Background Glow */}
                <motion.div
                  className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 bg-gradient-to-br ${
                    item.color === 'primary' 
                      ? 'from-primary/30 to-accent/20' 
                      : 'from-accent/30 to-primary/20'
                  } blur-2xl transition-opacity duration-500`}
                  whileHover={{ scale: 1.2, opacity: 0.15 }}
                />
                
                {/* Icon Container */}
                <motion.div 
                  className={`relative w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 glass-effect border-white/20 shadow-luxury group-hover:shadow-hover transition-luxury ${
                    item.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
                  }`}
                  whileHover={{ 
                    scale: 1.15,
                    rotate: 8,
                    transition: { duration: 0.3 }
                  }}
                >
                  <item.icon className={`h-10 w-10 ${
                    item.color === 'primary' ? 'text-primary' : 'text-accent'
                  } group-hover:scale-125 transition-transform duration-300`} />
                  
                  {/* Icon Glow */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-50 ${
                      item.color === 'primary' 
                        ? 'bg-primary/25' 
                        : 'bg-accent/25'
                    } blur-lg`}
                    whileHover={{ scale: 1.4, opacity: 0.7 }}
                  />

                  {/* Floating Ring */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-60 ${
                      item.color === 'primary' ? 'border-primary/40' : 'border-accent/40'
                    }`}
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </motion.div>
                
                <motion.h3 
                  className="font-bold text-2xl mb-6 group-hover:text-gradient transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.title}
                </motion.h3>
                
                <motion.p 
                  className="text-lg text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300"
                  whileHover={{ y: -2 }}
                >
                  {item.description}
                </motion.p>

                {/* Decorative Sparkles */}
                <motion.div
                  className="absolute -top-2 -right-2 w-4 h-4"
                  animate={{
                    scale: [0, 1, 0],
                    rotate: [0, 180, 360],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    delay: item.delay + 1,
                    repeat: Infinity,
                    repeatDelay: 4,
                  }}
                >
                  <Sparkles className={`w-4 h-4 ${
                    item.color === 'primary' ? 'text-primary' : 'text-accent'
                  }`} />
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
        <div className="absolute inset-0 gradient-mesh opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-primary/5 to-background/80" />
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-1/4 w-32 h-32 rounded-full bg-primary/20 opacity-40 blur-xl"
          animate={{
            y: [0, -25, 0],
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-16 right-1/3 w-28 h-28 rounded-full bg-accent/25 opacity-50 blur-lg"
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
                  <span className="block">Pronti a</span>
                  <span className="block text-gradient">Unirvi a Noi?</span>
                </motion.h2>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto"
                >
                  Scoprite come potete partecipare ai nostri progetti e contribuire alla valorizzazione 
                  del territorio bagherese. Contattateci per sapere come diventare volontari.
                </motion.p>
                
                {/* CTA Buttons */}
                <motion.div 
                  variants={itemVariants}
                  className="flex flex-col md:flex-row gap-6 justify-center items-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group"
                  >
                    <Button asChild size="lg" className="gradient-luxury text-accent-foreground shadow-luxury hover:shadow-hover transition-luxury text-lg px-10 py-6 relative overflow-hidden">
                      <Link href="/contatti" className="flex items-center gap-3">
                        <span className="relative z-10">Diventa Volontario</span>
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
                      <Link href="/progetti" className="flex items-center gap-2">
                        <span>Vedi i Nostri Progetti</span>
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
              
              {/* Floating Sparkles */}
              <motion.div
                className="absolute top-16 left-16 w-1 h-1 bg-gradient-luxury rounded-full"
                animate={{
                  scale: [0, 1, 0],
                  y: [0, -20, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  delay: 1,
                  repeat: Infinity,
                  repeatDelay: 4,
                }}
              />
              <motion.div
                className="absolute bottom-20 right-20 w-1 h-1 bg-accent rounded-full"
                animate={{
                  scale: [0, 1, 0],
                  x: [0, 15, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2.5,
                  delay: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}