"use client"

import Link from "next/link"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import { Separator } from "@/components/ui/separator"
import { Users, Heart, Award, Target, ArrowRight, Sparkles } from "lucide-react"

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
              La Piana D'oro nasce dalla passione per l'eccellenza e il desiderio di creare 
              momenti indimenticabili attraverso eventi curati nei minimi dettagli.
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
                La Nostra <span className="text-gradient">Mission</span>
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
              >
                Come associazione ETS (Ente del Terzo Settore), La Piana D'oro si dedica 
                all'organizzazione di eventi che non solo soddisfano le aspettative, ma 
                creano ricordi duraturi e significativi.
              </motion.p>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg text-muted-foreground mb-12 leading-relaxed"
              >
                La nostra mission è trasformare ogni celebrazione in un'esperienza unica, 
                combinando creatività, professionalità e attenzione ai dettagli per 
                realizzare eventi che riflettano la personalità e i desideri dei nostri clienti.
              </motion.p>
              
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button asChild className="gradient-luxury text-accent-foreground shadow-luxury hover:shadow-hover transition-luxury text-lg px-8 py-6">
                    <Link href="/contatti" className="flex items-center gap-3">
                      <span>Scopri i Nostri Servizi</span>
                      <motion.div
                        initial={{ x: 0 }}
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="h-5 w-5" />
                      </motion.div>
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Vision & Values Cards */}
            <motion.div 
              variants={itemVariants}
              className="space-y-8"
            >
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <Card className="glass-effect border-white/20 shadow-luxury hover:shadow-hover transition-luxury relative overflow-hidden">
                  {/* Card Glow Effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-primary/30 to-accent/20 transition-opacity duration-500"
                  />
                  
                  <CardHeader className="relative z-10">
                    <motion.div 
                      className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 glass-effect border-white/20"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <Target className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <motion.div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-40 bg-primary/20 blur-md"
                        whileHover={{ scale: 1.3, opacity: 0.6 }}
                      />
                    </motion.div>
                    
                    <CardTitle className="text-2xl mb-4 group-hover:text-gradient transition-all duration-300">
                      Vision
                    </CardTitle>
                    <CardDescription className="text-lg leading-relaxed group-hover:text-foreground transition-colors duration-300">
                      Essere il punto di riferimento per eventi di qualità che emozionano e ispirano, 
                      creando esperienze che rimangono nel cuore per sempre.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <Card className="glass-effect border-white/20 shadow-luxury hover:shadow-hover transition-luxury relative overflow-hidden">
                  {/* Card Glow Effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-accent/30 to-primary/20 transition-opacity duration-500"
                  />
                  
                  <CardHeader className="relative z-10">
                    <motion.div 
                      className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 glass-effect border-white/20"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: -5,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <Heart className="h-8 w-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                      <motion.div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-40 bg-accent/20 blur-md"
                        whileHover={{ scale: 1.3, opacity: 0.6 }}
                      />
                    </motion.div>
                    
                    <CardTitle className="text-2xl mb-4 group-hover:text-gradient transition-all duration-300">
                      Valori
                    </CardTitle>
                    <CardDescription className="text-lg leading-relaxed group-hover:text-foreground transition-colors duration-300">
                      Passione, eccellenza, innovazione e rispetto per ogni singolo cliente. 
                      La qualità e l'autenticità guidano ogni nostro progetto.
                    </CardDescription>
                  </CardHeader>

                  {/* Sparkle Effect */}
                  <motion.div
                    className="absolute top-4 right-4 w-3 h-3"
                    animate={{
                      scale: [0, 1, 0],
                      rotate: [0, 180, 360],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      delay: 1,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  >
                    <Sparkles className="w-3 h-3 text-accent" />
                  </motion.div>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <Separator />

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
              Un gruppo di professionisti appassionati che lavorano insieme per 
              creare eventi straordinari e momenti indimenticabili.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Cristina",
                role: "Fondatrice & Creative Director", 
                initials: "MC",
                description: "Con oltre 15 anni di esperienza nel settore eventi, Maria Cristina guida il team con passione e visione creativa.",
                gradient: "from-primary to-accent",
                delay: 0
              },
              {
                name: "Alessandro",
                role: "Event Coordinator",
                initials: "AL", 
                description: "Specializzato in logistica eventi e coordinamento, Alessandro assicura che ogni dettaglio sia perfettamente orchestrato.",
                gradient: "from-accent to-primary",
                delay: 0.1
              },
              {
                name: "Sofia",
                role: "Wedding Planner",
                initials: "SF",
                description: "Esperta in matrimoni e cerimonie, Sofia trasforma i sogni delle coppie in realtà indimenticabili.",
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
              Perché Scegliere <span className="text-gradient">La Piana D'oro</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              La nostra esperienza e il nostro approccio unico ci distinguono nel settore, 
              garantendo risultati che superano ogni aspettativa.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: Award,
                title: "Esperienza Consolidata",
                description: "Oltre 15 anni nel settore con centinaia di eventi di successo alle spalle. La nostra esperienza è garanzia di qualità e professionalità.",
                color: "primary",
                delay: 0
              },
              {
                icon: Users,
                title: "Team Multidisciplinare",
                description: "Un team di specialisti che copre ogni aspetto dell'organizzazione eventi: dalla creatività alla logistica, dalla comunicazione al coordinamento.",
                color: "accent",
                delay: 0.1
              },
              {
                icon: Heart,
                title: "Approccio Personalizzato",
                description: "Ogni cliente è unico e ogni evento racconta una storia diversa. Ascoltiamo, comprendiamo e realizziamo la vostra visione.",
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
                  <span className="block text-gradient">Conoscerci Meglio?</span>
                </motion.h2>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto"
                >
                  Scoprite come possiamo trasformare la vostra visione in un evento indimenticabile. 
                  Contattateci per una consulenza gratuita e personalizzata.
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
                        <span className="relative z-10">Richiedi Consulenza</span>
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