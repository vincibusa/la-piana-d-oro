"use client"

import Link from "next/link"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Heart, Users, Calendar, Star, ArrowRight, Sparkles } from "lucide-react"

export default function Home() {
  const [heroRef, heroInView] = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  })
  
  const [servicesRef, servicesInView] = useInView({ 
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
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-luxury rounded-full opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="relative min-h-[100vh] flex items-center justify-center overflow-hidden"
      >
        {/* Dynamic Background */}
        <div className="absolute inset-0 gradient-mesh opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/40" />
        
        {/* Floating Elements */}
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
        <motion.div
          className="absolute bottom-32 right-16 w-24 h-24 rounded-full bg-accent/20 opacity-30 blur-lg"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
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


            {/* Main Title */}
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-tight"
            >
              <span className="block">Trasformiamo i tuoi</span>
              <span className="block text-gradient">sogni in eventi</span>
              <span className="block">indimenticabili</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto"
            >
              La Piana D'oro è specializzata nell'organizzazione di matrimoni da sogno, 
              eventi corporate di successo e celebrazioni uniche che lasciano il segno.
            </motion.p>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Button asChild size="lg" className="gradient-luxury text-accent-foreground shadow-luxury hover:shadow-hover transition-luxury text-lg px-8 py-6">
                <Link href="/contatti" className="flex items-center gap-3">
                  <span>Richiedi Preventivo</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="glass-effect border-primary/30 text-primary hover:bg-primary/10 transition-luxury text-lg px-8 py-6">
                <Link href="/progetti" className="flex items-center gap-2">
                  <span>Scopri i Nostri Progetti</span>
                </Link>
              </Button>
            </div>

          </motion.div>
        </div>
      </motion.section>

      {/* Servizi Overview */}
      <motion.section 
        ref={servicesRef}
        className="py-32 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        
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
              I Nostri <span className="text-gradient">Servizi</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Dall'ideazione alla realizzazione, ci occupiamo di ogni dettaglio per 
              rendere ogni evento perfetto e memorabile.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Matrimoni",
                description: "Il giorno più importante della vostra vita merita la perfezione assoluta.",
                features: ["Coordinamento completo", "Location da sogno", "Catering personalizzato", "Fotografia e video"],
                color: "primary"
              },
              {
                icon: Users,
                title: "Eventi Corporate",
                description: "Conferenze, convention e team building che rafforzano il vostro brand.",
                features: ["Meeting aziendali", "Lanci di prodotto", "Gala e premiazioni", "Team building"],
                color: "accent"
              },
              {
                icon: Calendar,
                title: "Feste Private",
                description: "Compleanni, anniversari e celebrazioni speciali su misura per voi.",
                features: ["Feste di compleanno", "Anniversari", "Cene di gala", "Eventi a tema"],
                color: "primary"
              }
            ].map((service) => (
              <motion.div
                key={service.title}
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
                    className={`absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br ${
                      service.color === 'primary' 
                        ? 'from-primary to-accent' 
                        : 'from-accent to-primary'
                    } transition-opacity duration-500`}
                  />
                  
                  <CardHeader className="relative z-10">
                    <motion.div 
                      className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 relative ${
                        service.color === 'primary' 
                          ? 'bg-primary/10' 
                          : 'bg-accent/10'
                      }`}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <service.icon className={`h-8 w-8 ${
                        service.color === 'primary' ? 'text-primary' : 'text-accent'
                      }`} />
                      <motion.div
                        className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 ${
                          service.color === 'primary' 
                            ? 'bg-primary/20' 
                            : 'bg-accent/20'
                        } blur-lg`}
                        whileHover={{ scale: 1.5, opacity: 0.5 }}
                      />
                    </motion.div>
                    
                    <CardTitle className="text-2xl mb-4 group-hover:text-gradient transition-all duration-300">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <motion.li 
                          key={feature}
                          className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <motion.div
                            className={`w-2 h-2 rounded-full mr-3 ${
                              service.color === 'primary' ? 'bg-primary' : 'bg-accent'
                            }`}
                            whileHover={{ scale: 1.5 }}
                          />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            variants={itemVariants}
            className="text-center mt-16"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button asChild size="lg" className="glass-effect border-primary/30 text-primary hover:bg-primary/10 transition-luxury text-lg px-8 py-4">
                <Link href="/cosa-facciamo" className="flex items-center gap-3">
                  <span>Scopri Tutti i Servizi</span>
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
        </div>
      </motion.section>

      <Separator />

      {/* Perché Sceglierci */}
      <motion.section 
        ref={whyUsRef}
        className="py-32 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-primary/10 to-background" />
        <motion.div
          className="absolute top-20 right-10 w-40 h-40 rounded-full bg-accent/10 opacity-30 blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 20, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-40 left-16 w-32 h-32 rounded-full bg-primary/20 opacity-40 blur-xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
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
              La nostra esperienza e passione si traducono in eventi che 
              superano ogni aspettativa e rimangono impressi per sempre.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Star,
                title: "15+ Anni di Esperienza",
                description: "Un track record consolidato nell'organizzazione di eventi di successo.",
                color: "primary",
                delay: 0
              },
              {
                icon: Users,
                title: "Team Professionale",
                description: "Professionisti qualificati che curano ogni aspetto del vostro evento.",
                color: "accent",
                delay: 0.1
              },
              {
                icon: Heart,
                title: "Approccio Personalizzato",
                description: "Ogni evento è unico, proprio come le persone che lo vivono.",
                color: "primary",
                delay: 0.2
              },
              {
                icon: Calendar,
                title: "Gestione Completa",
                description: "Dall'ideazione alla realizzazione, pensiamo a tutto nei minimi dettagli.",
                color: "accent",
                delay: 0.3
              }
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { 
                      duration: 0.6, 
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
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group text-center relative"
              >
                {/* Glow Effect */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 bg-gradient-to-br ${
                    item.color === 'primary' 
                      ? 'from-primary/30 to-accent/20' 
                      : 'from-accent/30 to-primary/20'
                  } blur-xl transition-opacity duration-500`}
                  whileHover={{ scale: 1.1 }}
                />
                
                {/* Icon Container */}
                <motion.div 
                  className={`relative w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 glass-effect border-white/20 shadow-luxury group-hover:shadow-hover transition-luxury ${
                    item.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
                  }`}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <item.icon className={`h-10 w-10 ${
                    item.color === 'primary' ? 'text-primary' : 'text-accent'
                  } group-hover:scale-110 transition-transform duration-300`} />
                  
                  {/* Icon Glow */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-40 ${
                      item.color === 'primary' 
                        ? 'bg-primary/20' 
                        : 'bg-accent/20'
                    } blur-md`}
                    whileHover={{ scale: 1.3, opacity: 0.6 }}
                  />
                </motion.div>
                
                <motion.h3 
                  className="font-bold text-xl mb-4 group-hover:text-gradient transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.title}
                </motion.h3>
                <motion.p 
                  className="text-muted-foreground text-base leading-relaxed group-hover:text-foreground transition-colors duration-300"
                  whileHover={{ y: -2 }}
                >
                  {item.description}
                </motion.p>

                {/* Sparkle Effects */}
                <motion.div
                  className="absolute -top-2 -right-2 w-3 h-3"
                  animate={{
                    scale: [0, 1, 0],
                    rotate: [0, 180, 360],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: item.delay + 1,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                >
                  <Sparkles className={`w-3 h-3 ${
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
                  className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                >
                  <span className="block">Pronti a Realizzare</span>
                  <span className="block text-gradient">il Vostro Evento</span>
                  <span className="block">da Sogno?</span>
                </motion.h2>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto"
                >
                  Contattateci oggi per una consulenza gratuita e scoprite come possiamo 
                  trasformare la vostra visione in una realtà indimenticabile.
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
                        <span className="relative z-10">Contattaci Ora</span>
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
                      <Link href="/chi-siamo" className="flex items-center gap-2">
                        <span>Scopri Chi Siamo</span>
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Decorative Elements */}
              <motion.div
                className="absolute top-6 right-6 w-2 h-2 bg-accent rounded-full"
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
                className="absolute bottom-8 left-8 w-3 h-3 bg-primary rounded-full"
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
