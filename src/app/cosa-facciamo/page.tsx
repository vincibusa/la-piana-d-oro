import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Heart, Users, Calendar, Utensils, Camera, Music, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function CosaFacciamo() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/10 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent/20 text-accent-foreground border-accent/30">
              🎯 I Nostri Servizi
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Cosa Facciamo
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Dalla pianificazione alla realizzazione, offriamo servizi completi 
              per ogni tipo di evento, curandone ogni singolo dettaglio.
            </p>
          </div>
        </div>
      </section>

      {/* Servizi Principali */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">I Nostri Servizi Principali</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ogni evento è unico e richiede un approccio personalizzato. 
              Ecco i nostri servizi specializzati.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Matrimoni */}
            <Card className="group hover:shadow-xl transition-all" id="matrimoni">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Matrimoni</CardTitle>
                <CardDescription className="text-lg">
                  Il giorno più importante della vostra vita merita la perfezione assoluta. 
                  Ci occupiamo di ogni dettaglio per realizzare il matrimonio dei vostri sogni.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Wedding Planning completo</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Selezione location</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Coordinamento cerimonia</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Gestione fornitori</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Allestimenti floreali</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Timeline giornata</span>
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link href="/contatti">
                    Richiedi Preventivo Matrimonio
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Eventi Corporate */}
            <Card className="group hover:shadow-xl transition-all" id="corporate">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-2xl">Eventi Corporate</CardTitle>
                <CardDescription className="text-lg">
                  Conferenze, convention e team building professionali che rafforzano 
                  l'identità aziendale e creano valore per il vostro business.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-sm">Conferenze & Meeting</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-sm">Lanci di prodotto</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-sm">Team building</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-sm">Gala aziendali</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-sm">Convention</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span className="text-sm">Incentive travel</span>
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/contatti">
                    Richiedi Preventivo Corporate
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Feste Private */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="group hover:shadow-xl transition-all" id="feste">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Feste Private</CardTitle>
                <CardDescription className="text-lg">
                  Compleanni, anniversari e celebrazioni speciali personalizzate 
                  per rendere ogni momento unico e memorabile.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Feste di compleanno</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Anniversari</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Cene di gala</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Eventi a tema</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Feste di laurea</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Celebrazioni familiari</span>
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link href="/contatti">
                    Organizza la Tua Festa
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

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
      </section>

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