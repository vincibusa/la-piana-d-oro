"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"

export default function Contatti() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/10 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent/20 text-accent-foreground border-accent/30">
              📞 Parliamo del Vostro Evento
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Contatti
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Siamo qui per trasformare le vostre idee in eventi indimenticabili. 
              Contattateci per una consulenza gratuita e personalizzata.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Richiedi un Preventivo</h2>
              <p className="text-muted-foreground mb-8">
                Compilate il modulo con i dettagli del vostro evento e vi ricontatteremo 
                entro 24 ore con una proposta personalizzata.
              </p>

              <Card>
                <CardHeader>
                  <CardTitle>Dettagli Evento</CardTitle>
                  <CardDescription>
                    Più informazioni ci fornite, più accurato sarà il nostro preventivo.
                  </CardDescription>
                </CardHeader>
                <CardContent>
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

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90"
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
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Informazioni di Contatto</h2>
              <p className="text-muted-foreground mb-8">
                Preferite il contatto diretto? Ecco come raggiungerci attraverso 
                i nostri canali ufficiali.
              </p>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle>Sede Principale</CardTitle>
                        <CardDescription>Dove siamo ubicati</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Via Roma 123<br />
                      00100 Roma (RM)<br />
                      Italia
                    </p>
                    <Button variant="outline" size="sm" className="mt-3">
                      Visualizza su Mappa
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Phone className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <CardTitle>Telefono</CardTitle>
                        <CardDescription>Chiamateci direttamente</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-2">
                      <strong>Principale:</strong> +39 312 345 6789
                    </p>
                    <p className="text-sm mb-3">
                      <strong>Emergenze:</strong> +39 312 345 6790
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="tel:+393123456789">Chiama Ora</a>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle>Email</CardTitle>
                        <CardDescription>Scriveteci una email</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-2">
                      <strong>Generale:</strong> info@lapianaoro.it
                    </p>
                    <p className="text-sm mb-2">
                      <strong>Matrimoni:</strong> matrimoni@lapianaoro.it
                    </p>
                    <p className="text-sm mb-3">
                      <strong>Corporate:</strong> corporate@lapianaoro.it
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <a href="mailto:info@lapianaoro.it">Invia Email</a>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Clock className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <CardTitle>Orari di Apertura</CardTitle>
                        <CardDescription>Quando siamo disponibili</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm space-y-1">
                      <p><strong>Lunedì - Venerdì:</strong> 09:00 - 18:00</p>
                      <p><strong>Sabato:</strong> 10:00 - 16:00</p>
                      <p><strong>Domenica:</strong> Su appuntamento</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-3">
                      * Durante gli eventi siamo disponibili 24/7
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Domande Frequenti</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ecco le risposte alle domande che riceviamo più spesso dai nostri clienti.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quanto tempo prima devo contattarvi?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Per matrimoni consigliamo 12-18 mesi di anticipo, per eventi corporate 
                  3-6 mesi, ma possiamo organizzare eventi anche con tempi più ristretti.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Offrite servizi in tutta Italia?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Sì, organizziamo eventi in tutta Italia e anche all'estero. 
                  Contattateci per discutere i dettagli del vostro evento.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Qual è il costo di una consulenza?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  La prima consulenza è sempre gratuita e senza impegno. 
                  Durante l'incontro discuteremo le vostre esigenze e il budget.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Posso modificare il contratto?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Assolutamente sì. I nostri contratti sono flessibili e possono 
                  essere modificati in base all'evolversi delle vostre esigenze.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Non Vedete l'Ora di Iniziare?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Il vostro evento da sogno è a un passo dalla realtà. 
              Contattateci oggi e iniziamo questo viaggio insieme.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href="tel:+393123456789">
                  <Phone className="mr-2 h-4 w-4" />
                  Chiamaci Ora
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="mailto:info@lapianaoro.it">
                  <Mail className="mr-2 h-4 w-4" />
                  Scrivici
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}