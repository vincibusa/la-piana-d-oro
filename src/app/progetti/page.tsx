import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Users, Calendar, Award, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Progetti() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/10 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent/20 text-accent-foreground border-accent/30">
              📸 Portfolio
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              I Nostri Progetti
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Scoprite alcuni dei nostri eventi più significativi e lasciatevi ispirare 
              dalle storie che abbiamo contribuito a creare.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="matrimoni" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:w-[600px] mx-auto mb-12">
              <TabsTrigger value="matrimoni">Matrimoni</TabsTrigger>
              <TabsTrigger value="corporate">Corporate</TabsTrigger>
              <TabsTrigger value="private">Private</TabsTrigger>
            </TabsList>

            {/* Matrimoni */}
            <TabsContent value="matrimoni" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Matrimoni da Sogno</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Ogni matrimonio è unico, proprio come l'amore che celebra. 
                  Ecco alcuni dei nostri progetti più emozionanti.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="group hover:shadow-lg transition-all">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-t-lg mb-4"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">Matrimonio</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        Villa Toscana
                      </div>
                    </div>
                    <CardTitle>Elena & Marco</CardTitle>
                    <CardDescription>
                      Un matrimonio intimo in una villa storica toscana, con 120 invitati 
                      e una cerimonia all'aperto seguita da una cena elegante.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        Giugno 2024
                      </div>
                      <Button variant="ghost" size="sm">
                        Dettagli <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-all">
                  <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 rounded-t-lg mb-4"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">Matrimonio</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        Castello Romano
                      </div>
                    </div>
                    <CardTitle>Giulia & Alessandro</CardTitle>
                    <CardDescription>
                      Celebrazione sontuosa in un castello medievale con 200 invitati, 
                      coordinamento completo e spettacolo pirotecnico finale.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        Settembre 2024
                      </div>
                      <Button variant="ghost" size="sm">
                        Dettagli <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-all">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-t-lg mb-4"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">Matrimonio</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        Spiaggia Amalfi
                      </div>
                    </div>
                    <CardTitle>Sofia & Luca</CardTitle>
                    <CardDescription>
                      Matrimonio sulla costa amalfitana con cerimonia al tramonto, 
                      80 invitati e cena vista mare con musica dal vivo.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        Agosto 2024
                      </div>
                      <Button variant="ghost" size="sm">
                        Dettagli <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Eventi Corporate */}
            <TabsContent value="corporate" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Eventi Corporate</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Conferenze, lanci di prodotto e team building che rafforzano 
                  l'identità aziendale e creano connessioni durature.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="group hover:shadow-lg transition-all">
                  <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 rounded-t-lg mb-4"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">Conferenza</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mr-1" />
                        500 partecipanti
                      </div>
                    </div>
                    <CardTitle>Tech Innovation Summit</CardTitle>
                    <CardDescription>
                      Conferenza internazionale su innovazione tecnologica con 
                      speaker internazionali, networking e workshop interattivi.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        Novembre 2024
                      </div>
                      <Button variant="ghost" size="sm">
                        Dettagli <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-all">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-t-lg mb-4"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">Lancio Prodotto</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mr-1" />
                        300 invitati
                      </div>
                    </div>
                    <CardTitle>Luxury Brand Launch</CardTitle>
                    <CardDescription>
                      Evento esclusivo per il lancio di una nuova linea di prodotti 
                      luxury con show multimediale e cocktail di gala.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        Ottobre 2024
                      </div>
                      <Button variant="ghost" size="sm">
                        Dettagli <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-all">
                  <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 rounded-t-lg mb-4"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">Team Building</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mr-1" />
                        150 dipendenti
                      </div>
                    </div>
                    <CardTitle>Corporate Retreat</CardTitle>
                    <CardDescription>
                      Weekend di team building per multinazionale con attività 
                      outdoor, workshop motivazionali e cena aziendale.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        Settembre 2024
                      </div>
                      <Button variant="ghost" size="sm">
                        Dettagli <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Eventi Private */}
            <TabsContent value="private" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Feste Private</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Compleanni, anniversari e celebrazioni speciali che rendono 
                  ogni momento unico e memorabile.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="group hover:shadow-lg transition-all">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-t-lg mb-4"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">Compleanno</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        50° Compleanno
                      </div>
                    </div>
                    <CardTitle>Festa Elegante</CardTitle>
                    <CardDescription>
                      Celebrazione di 50° compleanno in villa privata con 
                      80 invitati, tema Great Gatsby e orchestra dal vivo.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        Dicembre 2024
                      </div>
                      <Button variant="ghost" size="sm">
                        Dettagli <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-all">
                  <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 rounded-t-lg mb-4"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">Anniversario</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Heart className="h-4 w-4 mr-1" />
                        25° Anniversario
                      </div>
                    </div>
                    <CardTitle>Nozze d'Argento</CardTitle>
                    <CardDescription>
                      Celebrazione di 25° anniversario di matrimonio con 
                      rinnovo delle promesse e festa con famiglia e amici.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        Luglio 2024
                      </div>
                      <Button variant="ghost" size="sm">
                        Dettagli <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-all">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-t-lg mb-4"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">Laurea</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Award className="h-4 w-4 mr-1" />
                        Graduation Party
                      </div>
                    </div>
                    <CardTitle>Festa di Laurea</CardTitle>
                    <CardDescription>
                      Celebrazione di laurea magistrale con tema universitario, 
                      giochi a squadre e buffet informale per giovani laureati.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        Luglio 2024
                      </div>
                      <Button variant="ghost" size="sm">
                        Dettagli <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Statistiche */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">I Nostri Numeri</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Anni di esperienza si traducono in risultati concreti e clienti soddisfatti.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Eventi Organizzati</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">15+</div>
              <div className="text-muted-foreground">Anni di Esperienza</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Clienti Soddisfatti</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">50+</div>
              <div className="text-muted-foreground">Partner Affidabili</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ispirato dai Nostri Progetti?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contattateci per scoprire come possiamo realizzare insieme 
              il vostro evento da sogno.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contatti">
                  Inizia il Tuo Progetto
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/cosa-facciamo">Scopri i Nostri Servizi</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}