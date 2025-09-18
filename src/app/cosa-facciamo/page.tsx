"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
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
                🎆 Le Nostre Attività
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
              Dalla valorizzazione dei prodotti tipici alla rigenerazione urbana, 
              ecco le cinque aree principali in cui opera La Piana d'Oro per il territorio bagherese.
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
              Le Nostre <span className="text-gradient">Attività</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Cinque aree di intervento che caratterizzano il nostro impegno 
              per la valorizzazione culturale e territoriale di Bagheria.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
            {/* Eventi e manifestazioni */}
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
                {/* Background Image */}
                <div className="absolute inset-0">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: "url(https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&h=600&fit=crop&crop=entropy&auto=format)",
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
                  <CardTitle className="text-2xl mb-3 text-white group-hover:text-gradient transition-all duration-300">
                    Eventi e Manifestazioni
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed text-white/90 mb-4">
                    Festival, fiere e sagre che valorizzano i prodotti locali e rafforzano l'identità culturale del territorio.
                  </CardDescription>
                  
                  <ul className="space-y-2">
                    {[
                      "Sfincione Fest",
                      "Verdello Fest", 
                      "Sagre tradizionali",
                      "Eventi culturali"
                    ].map((feature, i) => (
                      <motion.li 
                        key={feature}
                        className="flex items-center text-sm text-white/80 group-hover:text-white transition-colors duration-300"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <motion.div
                          className="w-2 h-2 rounded-full mr-3 bg-primary"
                          whileHover={{ scale: 1.5 }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>

            {/* Educazione e formazione */}
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
                {/* Background Image */}
                <div className="absolute inset-0">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: "url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop&crop=entropy&auto=format)",
                    }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                </div>
                
                {/* Card Glow Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-accent/30 to-primary/20 transition-opacity duration-500"
                />
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  <CardTitle className="text-2xl mb-3 text-white group-hover:text-gradient transition-all duration-300">
                    Educazione e Formazione
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed text-white/90 mb-4">
                    Laboratori e attività nelle scuole, seminari e workshop per trasmettere 
                    la conoscenza del territorio e delle tradizioni alle nuove generazioni.
                  </CardDescription>
                  
                  <ul className="space-y-2">
                    {[
                      "Laboratori nelle scuole",
                      "Workshop culturali", 
                      "Seminari territorio",
                      "Educazione alimentare"
                    ].map((feature, i) => (
                      <motion.li 
                        key={feature}
                        className="flex items-center text-sm text-white/80 group-hover:text-white transition-colors duration-300"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <motion.div
                          className="w-2 h-2 rounded-full mr-3 bg-accent"
                          whileHover={{ scale: 1.5 }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>

            {/* Valorizzazione prodotti tipici */}
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
                {/* Background Image */}
                <div className="absolute inset-0">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: "url(https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&h=600&fit=crop&crop=entropy&auto=format)",
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
                  <CardTitle className="text-2xl mb-3 text-white group-hover:text-gradient transition-all duration-300">
                    Valorizzazione Prodotti Tipici
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed text-white/90 mb-4">
                    Promozione di sfincione bianco, limone verdello e altre eccellenze locali 
                    attraverso certificazioni, eventi dedicati e percorsi gastronomici.
                  </CardDescription>
                  
                  <ul className="space-y-2">
                    {[
                      "Sfincione bianco",
                      "Limone verdello", 
                      "Certificazioni prodotti",
                      "Percorsi gastronomici"
                    ].map((feature, i) => (
                      <motion.li 
                        key={feature}
                        className="flex items-center text-sm text-white/80 group-hover:text-white transition-colors duration-300"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <motion.div
                          className="w-2 h-2 rounded-full mr-3 bg-primary"
                          whileHover={{ scale: 1.5 }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>

            {/* Rigenerazione urbana */}
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
                {/* Background Image */}
                <div className="absolute inset-0">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: "url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop&crop=entropy&auto=format)",
                    }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                </div>
                
                {/* Card Glow Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-accent/30 to-primary/20 transition-opacity duration-500"
                />
                
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  <CardTitle className="text-2xl mb-3 text-white group-hover:text-gradient transition-all duration-300">
                    Rigenerazione Urbana
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed text-white/90 mb-4">
                    Recupero e cura di spazi pubblici degradati per restituirli alla comunità 
                    attraverso progetti partecipati e sostenibili.
                  </CardDescription>
                  
                  <ul className="space-y-2">
                    {[
                      "Riqualificazione spazi",
                      "Progetti partecipati", 
                      "Crowdfunding",
                      "Manutenzione continua"
                    ].map((feature, i) => (
                      <motion.li 
                        key={feature}
                        className="flex items-center text-sm text-white/80 group-hover:text-white transition-colors duration-300"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <motion.div
                          className="w-2 h-2 rounded-full mr-3 bg-accent"
                          whileHover={{ scale: 1.5 }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>

            {/* Marketing territoriale */}
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
                {/* Background Image */}
                <div className="absolute inset-0">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: "url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=entropy&auto=format)",
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
                  <CardTitle className="text-2xl mb-3 text-white group-hover:text-gradient transition-all duration-300">
                    Marketing Territoriale
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed text-white/90 mb-4">
                    Promozione di Bagheria come destinazione del gusto e della cultura 
                    attraverso collaborazioni strategiche e comunicazione integrata.
                  </CardDescription>
                  
                  <ul className="space-y-2">
                    {[
                      "Destinazione del gusto",
                      "Promozione turistica", 
                      "Collaborazioni enti",
                      "Comunicazione digitale"
                    ].map((feature, i) => (
                      <motion.li 
                        key={feature}
                        className="flex items-center text-sm text-white/80 group-hover:text-white transition-colors duration-300"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <motion.div
                          className="w-2 h-2 rounded-full mr-3 bg-primary"
                          whileHover={{ scale: 1.5 }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
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
                  <span className="block">Pronti a Collaborare</span>
                  <span className="block text-gradient">con Noi?</span>
                </motion.h2>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto"
                >
                  Unitevi a noi nelle nostre attività per valorizzare Bagheria e rafforzare 
                  la sua identità culturale e territoriale. Contattateci per partecipare.
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
                        <span className="relative z-10">Partecipa alle Attività</span>
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
