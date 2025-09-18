"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"
import dynamic from "next/dynamic"

export default function Contatti() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [heroRef, heroInView] = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  })
  
  const [formRef, formInView] = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  })


  const [mapRef, mapInView] = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  })

  const [ctaRef, ctaInView] = useInView({ 
    threshold: 0.1, 
    triggerOnce: true 
  })

  const Map = dynamic(() => import("@/components/Map"), {
    ssr: false,
    loading: () => (
      <div className="w-full h-96 bg-muted/20 rounded-2xl flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Caricamento mappa...</div>
      </div>
    )
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <div className="flex flex-col relative">
      {/* Floating Particles Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => {
          // Deterministic positions based on index to avoid hydration mismatch
          const positions = [
            { left: 89.11, top: 91.77 },
            { left: 90.41, top: 6.67 },
            { left: 4.39, top: 12.46 },
            { left: 59.93, top: 28.49 },
            { left: 90.35, top: 53.02 },
            { left: 16.82, top: 67.49 },
            { left: 10.17, top: 94.71 },
            { left: 34.23, top: 67.34 },
            { left: 74.96, top: 37.64 },
            { left: 49.72, top: 48.84 },
            { left: 93.07, top: 16.21 },
            { left: 40.96, top: 66.97 },
            { left: 3.34, top: 37.25 },
            { left: 92.79, top: 8.71 },
            { left: 69.06, top: 22.66 }
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


            {/* Main Title */}
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-tight"
            >
              <span className="block text-gradient">Contatti</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto"
            >
              Siamo qui per trasformare le vostre idee in eventi indimenticabili. 
              Contattateci per una consulenza gratuita e personalizzata.
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

      {/* Contact Form & Info */}
      <motion.section 
        ref={formRef}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={formInView ? "visible" : "hidden"}
            >
              <motion.h2 
                variants={itemVariants}
                className="text-4xl md:text-6xl font-bold mb-8"
              >
                Richiedi un <span className="text-gradient">Preventivo</span>
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-xl text-muted-foreground mb-12 leading-relaxed"
              >
                Compilate il modulo con i dettagli del vostro evento e vi ricontatteremo 
                entro 24 ore con una proposta personalizzata.
              </motion.p>

              <motion.div variants={itemVariants}>
                <Card className="glass-effect border-white/20 shadow-luxury hover:shadow-hover transition-luxury relative overflow-hidden">
                  {/* Card Glow Effect */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-primary/30 to-accent/20 transition-opacity duration-500"
                  />
                  
                  <CardHeader className="relative z-10">
                    <CardTitle className="text-2xl mb-2">Dettagli Evento</CardTitle>
                    <CardDescription className="text-base">
                      Più informazioni ci fornite, più accurato sarà il nostro preventivo.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Nome *</Label>
                        <Input
                          id="firstName"
                          placeholder="Il vostro nome"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Cognome *</Label>
                        <Input
                          id="lastName"
                          placeholder="Il vostro cognome"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="vostra@email.com"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefono</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+39 123 456 7890"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="eventType">Tipo di Evento *</Label>
                      <select
                        id="eventType"
                        className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      >
                        <option value="">Selezionate il tipo di evento</option>
                        <option value="matrimonio">Matrimonio</option>
                        <option value="corporate">Evento Corporate</option>
                        <option value="festa-privata">Festa Privata</option>
                        <option value="consulenza">Consulenza</option>
                        <option value="altro">Altro</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="eventDate">Data Evento</Label>
                        <Input
                          id="eventDate"
                          type="date"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="guestCount">Numero Invitati</Label>
                        <Input
                          id="guestCount"
                          type="number"
                          placeholder="es. 100"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Indicativo</Label>
                      <select
                        id="budget"
                        className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Selezionate una fascia</option>
                        <option value="5000-10000">€5.000 - €10.000</option>
                        <option value="10000-20000">€10.000 - €20.000</option>
                        <option value="20000-50000">€20.000 - €50.000</option>
                        <option value="50000+">€50.000+</option>
                        <option value="da-valutare">Da valutare insieme</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Messaggio *</Label>
                      <Textarea
                        id="message"
                        placeholder="Raccontateci di più sul vostro evento ideale..."
                        rows={4}
                        required
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="privacy"
                        className="h-4 w-4 text-primary border-border rounded focus:ring-primary"
                        required
                      />
                      <Label htmlFor="privacy" className="text-sm">
                        Accetto la <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a> *
                      </Label>
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full gradient-luxury text-accent-foreground shadow-luxury hover:shadow-hover transition-luxury relative overflow-hidden"
                        disabled={isSubmitted}
                      >
                        {isSubmitted ? (
                          <>
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Messaggio Inviato!
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Invia Richiesta
                          </>
                        )}
                        <motion.div
                          className="absolute inset-0 bg-white/20 rounded"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={formInView ? "visible" : "hidden"}
            >
              <motion.h2 
                variants={itemVariants}
                className="text-4xl md:text-6xl font-bold mb-8"
              >
                Informazioni di <span className="text-gradient">Contatto</span>
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-xl text-muted-foreground mb-12 leading-relaxed"
              >
                Preferite il contatto diretto? Ecco come raggiungerci attraverso 
                i nostri canali ufficiali.
              </motion.p>

              <div className="space-y-8">
                <motion.div variants={itemVariants} whileHover={{ y: -5, scale: 1.02 }} className="group">
                  <Card className="glass-effect border-white/20 shadow-luxury hover:shadow-hover transition-luxury relative overflow-hidden">
                    {/* Card Glow Effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-primary/30 to-accent/20 transition-opacity duration-500"
                    />
                    
                    <CardHeader className="relative z-10">
                      <div className="flex items-center space-x-4">
                        <motion.div 
                          className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center glass-effect border-white/20"
                          whileHover={{ 
                            scale: 1.1,
                            rotate: 5,
                            transition: { duration: 0.3 }
                          }}
                        >
                          <MapPin className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                          <motion.div
                            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-40 bg-primary/20 blur-md"
                            whileHover={{ scale: 1.3, opacity: 0.6 }}
                          />
                        </motion.div>
                        <div>
                          <CardTitle className="text-xl group-hover:text-gradient transition-all duration-300">Sede Principale</CardTitle>
                          <CardDescription className="group-hover:text-foreground transition-colors duration-300">Dove siamo ubicati</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <p className="text-base mb-3">
                        Via Roma 123<br />
                        00100 Roma (RM)<br />
                        Italia
                      </p>
                      <Button variant="outline" size="sm" className="glass-effect border-primary/30">
                        Visualizza su Mappa
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={itemVariants} whileHover={{ y: -5, scale: 1.02 }} className="group">
                  <Card className="glass-effect border-white/20 shadow-luxury hover:shadow-hover transition-luxury relative overflow-hidden">
                    {/* Card Glow Effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-accent/30 to-primary/20 transition-opacity duration-500"
                    />
                    
                    <CardHeader className="relative z-10">
                      <div className="flex items-center space-x-4">
                        <motion.div 
                          className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center glass-effect border-white/20"
                          whileHover={{ 
                            scale: 1.1,
                            rotate: -5,
                            transition: { duration: 0.3 }
                          }}
                        >
                          <Phone className="h-6 w-6 text-accent group-hover:scale-110 transition-transform duration-300" />
                          <motion.div
                            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-40 bg-accent/20 blur-md"
                            whileHover={{ scale: 1.3, opacity: 0.6 }}
                          />
                        </motion.div>
                        <div>
                          <CardTitle className="text-xl group-hover:text-gradient transition-all duration-300">Telefono</CardTitle>
                          <CardDescription className="group-hover:text-foreground transition-colors duration-300">Chiamateci direttamente</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <p className="text-base mb-2">
                        <strong>Principale:</strong> +39 312 345 6789
                      </p>
                      <p className="text-base mb-3">
                        <strong>Emergenze:</strong> +39 312 345 6790
                      </p>
                      <Button variant="outline" size="sm" asChild className="glass-effect border-accent/30">
                        <a href="tel:+393123456789">Chiama Ora</a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={itemVariants} whileHover={{ y: -5, scale: 1.02 }} className="group">
                  <Card className="glass-effect border-white/20 shadow-luxury hover:shadow-hover transition-luxury relative overflow-hidden">
                    {/* Card Glow Effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-primary/30 to-accent/20 transition-opacity duration-500"
                    />
                    
                    <CardHeader className="relative z-10">
                      <div className="flex items-center space-x-4">
                        <motion.div 
                          className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center glass-effect border-white/20"
                          whileHover={{ 
                            scale: 1.1,
                            rotate: 5,
                            transition: { duration: 0.3 }
                          }}
                        >
                          <Mail className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                          <motion.div
                            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-40 bg-primary/20 blur-md"
                            whileHover={{ scale: 1.3, opacity: 0.6 }}
                          />
                        </motion.div>
                        <div>
                          <CardTitle className="text-xl group-hover:text-gradient transition-all duration-300">Email</CardTitle>
                          <CardDescription className="group-hover:text-foreground transition-colors duration-300">Scriveteci una email</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <p className="text-base mb-2">
                        <strong>Generale:</strong> info@lapianaoro.it
                      </p>
                      <p className="text-base mb-2">
                        <strong>Matrimoni:</strong> matrimoni@lapianaoro.it
                      </p>
                      <p className="text-base mb-3">
                        <strong>Corporate:</strong> corporate@lapianaoro.it
                      </p>
                      <Button variant="outline" size="sm" asChild className="glass-effect border-primary/30">
                        <a href="mailto:info@lapianaoro.it">Invia Email</a>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div variants={itemVariants} whileHover={{ y: -5, scale: 1.02 }} className="group">
                  <Card className="glass-effect border-white/20 shadow-luxury hover:shadow-hover transition-luxury relative overflow-hidden">
                    {/* Card Glow Effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-accent/30 to-primary/20 transition-opacity duration-500"
                    />
                    
                    <CardHeader className="relative z-10">
                      <div className="flex items-center space-x-4">
                        <motion.div 
                          className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center glass-effect border-white/20"
                          whileHover={{ 
                            scale: 1.1,
                            rotate: -5,
                            transition: { duration: 0.3 }
                          }}
                        >
                          <Clock className="h-6 w-6 text-accent group-hover:scale-110 transition-transform duration-300" />
                          <motion.div
                            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-40 bg-accent/20 blur-md"
                            whileHover={{ scale: 1.3, opacity: 0.6 }}
                          />
                        </motion.div>
                        <div>
                          <CardTitle className="text-xl group-hover:text-gradient transition-all duration-300">Orari di Apertura</CardTitle>
                          <CardDescription className="group-hover:text-foreground transition-colors duration-300">Quando siamo disponibili</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="text-base space-y-2">
                        <p><strong>Lunedì - Venerdì:</strong> 09:00 - 18:00</p>
                        <p><strong>Sabato:</strong> 10:00 - 16:00</p>
                        <p><strong>Domenica:</strong> Su appuntamento</p>
                      </div>
                      <p className="text-sm text-muted-foreground mt-3">
                        * Durante gli eventi siamo disponibili 24/7
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <Separator />

      {/* Map Section */}
      <motion.section 
        ref={mapRef}
        className="py-32 relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5"
      >
        {/* Background Elements */}
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
            animate={mapInView ? "visible" : "hidden"}
            className="text-center mb-20"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Dove <span className="text-gradient">Siamo</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Venite a trovarci nella nostra sede principale a Roma per una consulenza 
              personalizzata e scoprire come possiamo realizzare il vostro evento da sogno.
            </motion.p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto"
          >
            <Map />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <motion.p 
              className="text-lg text-muted-foreground mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <strong>Indirizzo:</strong> Via Roma 123, 00100 Roma (RM)
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                asChild 
                className="glass-effect border-primary/30 text-primary hover:bg-primary/10 transition-luxury"
              >
                <a 
                  href="https://maps.google.com/?q=Via+Roma+123,+00100+Roma+RM" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MapPin className="h-4 w-4" />
                  Apri in Google Maps
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Final CTA */}
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
                  <span className="block">Non Vedete l'Ora</span>
                  <span className="block text-gradient">di Iniziare?</span>
                </motion.h2>
                
                <motion.p 
                  variants={itemVariants}
                  className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto"
                >
                  Il vostro evento da sogno è a un passo dalla realtà. 
                  Contattateci oggi e iniziamo questo viaggio insieme.
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
                      <a href="tel:+393123456789" className="flex items-center gap-3">
                        <span className="relative z-10">Chiamaci Ora</span>
                        <motion.div
                          className="relative z-10"
                          initial={{ x: 0 }}
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Phone className="h-5 w-5" />
                        </motion.div>
                        <motion.div
                          className="absolute inset-0 bg-white/20 rounded"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                      </a>
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button asChild variant="outline" size="lg" className="glass-effect border-primary/30 text-primary hover:bg-primary/10 transition-luxury text-lg px-10 py-6">
                      <a href="mailto:info@lapianaoro.it" className="flex items-center gap-2">
                        <span>Scrivici</span>
                        <Mail className="h-5 w-5" />
                      </a>
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