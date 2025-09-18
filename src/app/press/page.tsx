"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Press() {
  const [heroRef, heroInView] = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  })
  
  const [articlesRef, articlesInView] = useInView({ 
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
            { left: 25.12, top: 15.34 }, { left: 78.45, top: 65.89 }, { left: 12.78, top: 89.23 },
            { left: 67.34, top: 23.56 }, { left: 91.28, top: 45.67 }, { left: 34.78, top: 78.91 },
            { left: 56.89, top: 12.34 }, { left: 89.12, top: 56.78 }, { left: 23.45, top: 67.34 },
            { left: 45.67, top: 91.28 }, { left: 78.91, top: 34.78 }, { left: 12.34, top: 56.89 },
            { left: 65.78, top: 23.45 }, { left: 89.23, top: 67.34 }, { left: 34.56, top: 45.67 }
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
                📰 Rassegna Stampa
              </Badge>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-tight"
            >
              <span className="block text-gradient">Press</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto"
            >
              Scopri come i media raccontano La Piana d'Oro: articoli, interviste e 
              menzioni che testimoniano il nostro impegno per il territorio bagherese.
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

      {/* Articoli di Stampa */}
      <motion.section 
        ref={articlesRef}
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
            animate={articlesInView ? "visible" : "hidden"}
            className="text-center mb-20"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Articoli di <span className="text-gradient">Stampa</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Come i media raccontano il nostro impegno per Bagheria: 
              riconoscimenti, progetti e storie che testimoniano la nostra missione.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {[
              {
                title: 'Un giardino per Bagheria"',
                source: "Produzioni dal Basso",
                description: "La scelta ricaduta su piazza Carlo Doglio, nasce perché questo spazio è privo di qualità, con criteri non inclusivi, con una concezione del verde pubblico non integrato al contesto urbano, senza alcuna attenzione ai materiali minerari e vegetali, né alla funzione sociale e ambientale. La piazza/giardino non è mai stata fruita dagli abitanti ma è diventata luogo respingente, da vandalizzare, isolare, un posto vocato all’abbandono dei rifiuti. In questo progetto abbiamo previsto di ripulirlo e metterlo in sicurezza, intervento con la manutenzione di alcune parti andate in rovina.",
                image: "https://www.produzionidalbasso.com/media/ckeuploads/amministrazione%40puntosud.org/2019/10/30/piazza-carlo-doglio.jpg",
                link: "https://www.produzionidalbasso.com/project/un-giardino-per-bagheria/"
              },
              {
                title: "Storia, cultura e tradizione dello sfincione di Bagheria",
                source: "All Food Sicily",
                description: "l'associazione bagherese La Piana d'Oro che insieme a gran parte dei panificatori della Piana chiedono la certificazione di qualità per lo sfincione bagherese.",
                image: "https://www.allfoodsicily.it/wp-content/uploads/2025/05/sfincione-di-bagheria--1536x1024.jpeg",
                link: "hhttps://www.allfoodsicily.it/storia-cultura-e-tradizione-dello-sfincione-di-bagheria/"
              },
              {
                title: 'La Piana di Baaria, un progetto per la promozione turistica-culturale-enogastronomica del comprensorio della Città delle Ville e del Gusto.',
                source: "Comune di Bagheria",
                description: "Presentato a Palazzo Butera a Bagheria il progetto La Piana di Baaria volto alla promozione e allo sviluppo del circuito turistico-culturale-gastronomico della Piana del comprensorio bagherese, quella porzione di territorio che a oriente della Città delle Ville e del Gusto si estende sino a Trabia, comprendendo anche i comuni di: Santa Flavia, Casteldaccia e Altavilla Milicia.",
                image: "https://bagheria-api.municipiumapp.it/s3/448/media/presentazione-3.jpg",
                link: "https://www.comune.bagheria.pa.it/it/news/132885/la-piana-di-baaria-un-progetto-per-la-promozione-turistica-culturale-enogastronomica-del-comprensorio-della-citta-delle-ville-e-del-gusto?utm_source=chatgpt.com"
              },
       
            
            ].map((article, index) => (
              <motion.div
                key={article.title}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="group perspective-1000"
              >
                <a 
                  href={article.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="glass-effect border-white/20 shadow-luxury hover:shadow-hover transition-luxury h-full relative overflow-hidden group-hover:scale-105 transform-gpu cursor-pointer">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <div 
                        className="w-full h-full bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${article.image})`,
                        }}
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                    </div>
                    
                    {/* Card Glow Effect */}
                    <motion.div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${
                        index % 2 === 0 
                          ? 'bg-gradient-to-br from-primary/30 to-accent/20'
                          : 'bg-gradient-to-br from-accent/30 to-primary/20'
                      }`}
                    />
                    
                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-between p-6 min-h-[400px]">
                      {/* Source */}
                      <div className="flex items-center justify-start mb-4">
                        <Badge variant="outline" className="bg-white/10 border-white/30 text-white">
                          {article.source}
                        </Badge>
                      </div>
                      
                      {/* Main Content */}
                      <div className="flex-1 flex flex-col justify-end">
                        <CardTitle className="text-2xl mb-3 text-white group-hover:text-gradient transition-all duration-300">
                          {article.title}
                        </CardTitle>
                        <CardDescription className="text-base leading-relaxed text-white/90 mb-6">
                          {article.description}
                        </CardDescription>
                        
                        {/* Read More Button */}
                        <div className="flex items-center text-white/80 group-hover:text-white transition-colors duration-300">
                          <span className="text-sm font-medium mr-2">Leggi articolo</span>
                          <motion.div
                            whileHover={{ x: 3 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </a>
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
                  <span className="block">Vuoi Conoscere</span>
                  <span className="block text-gradient">la Nostra Storia?</span>
                </motion.h2>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto"
                >
                  Scopri di più sui nostri progetti e su come stiamo valorizzando 
                  il territorio bagherese attraverso cultura e tradizione.
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
                        <span className="relative z-10">Contattaci</span>
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