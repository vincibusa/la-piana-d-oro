import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Users, Heart, Award, Target, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ChiSiamo() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/10 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent/20 text-accent-foreground border-accent/30">
              🌟 La Nostra Storia
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Chi Siamo
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              La Piana D'oro nasce dalla passione per l'eccellenza e il desiderio di creare 
              momenti indimenticabili attraverso eventi curati nei minimi dettagli.
            </p>
          </div>
        </div>
      </section>

      {/* Mission e Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">La Nostra Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Come associazione ETS (Ente del Terzo Settore), La Piana D'oro si dedica 
                all'organizzazione di eventi che non solo soddisfano le aspettative, ma 
                creano ricordi duraturi e significativi.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                La nostra mission è trasformare ogni celebrazione in un'esperienza unica, 
                combinando creatività, professionalità e attenzione ai dettagli per 
                realizzare eventi che riflettano la personalità e i desideri dei nostri clienti.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/contatti">
                    Scopri i Nostri Servizi
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Vision</CardTitle>
                  <CardDescription>
                    Essere il punto di riferimento per eventi di qualità che emozionano e ispirano.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Valori</CardTitle>
                  <CardDescription>
                    Passione, eccellenza, innovazione e rispetto per ogni singolo cliente.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Il Nostro Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Un gruppo di professionisti appassionati che lavorano insieme per 
              creare eventi straordinari.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">MC</span>
                </div>
                <CardTitle>Maria Cristina</CardTitle>
                <CardDescription>Fondatrice & Creative Director</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Con oltre 15 anni di esperienza nel settore eventi, Maria Cristina 
                  guida il team con passione e visione creativa.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">AL</span>
                </div>
                <CardTitle>Alessandro</CardTitle>
                <CardDescription>Event Coordinator</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Specializzato in logistica eventi e coordinamento, Alessandro 
                  assicura che ogni dettaglio sia perfettamente orchestrato.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">SF</span>
                </div>
                <CardTitle>Sofia</CardTitle>
                <CardDescription>Wedding Planner</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Esperta in matrimoni e cerimonie, Sofia trasforma i sogni delle 
                  coppie in realtà indimenticabili.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Perché Sceglierci */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Perché Scegliere La Piana D'oro</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              La nostra esperienza e il nostro approccio unico ci distinguono nel settore.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-4">Esperienza Consolidata</h3>
              <p className="text-muted-foreground">
                Oltre 15 anni nel settore con centinaia di eventi di successo alle spalle. 
                La nostra esperienza è garanzia di qualità e professionalità.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-xl mb-4">Team Multidisciplinare</h3>
              <p className="text-muted-foreground">
                Un team di specialisti che copre ogni aspetto dell'organizzazione eventi: 
                dalla creatività alla logistica, dalla comunicazione al coordinamento.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-4">Approccio Personalizzato</h3>
              <p className="text-muted-foreground">
                Ogni cliente è unico e ogni evento racconta una storia diversa. 
                Ascoltiamo, comprendiamo e realizziamo la vostra visione.
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
              Pronti a Conoscerci Meglio?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Scoprite come possiamo trasformare la vostra visione in un evento indimenticabile. 
              Contattateci per una consulenza gratuita.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contatti">
                  Richiedi Consulenza
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/progetti">Vedi i Nostri Progetti</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}