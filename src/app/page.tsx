import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Heart, Users, Calendar, Star, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/10 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent/20 text-accent-foreground border-accent/30">
              ✨ Associazione ETS
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Trasformiamo i tuoi sogni in{" "}
              <span className="text-primary">eventi indimenticabili</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              La Piana D&apos;oro è specializzata nell&apos;organizzazione di matrimoni da sogno, 
              eventi corporate di successo e celebrazioni uniche che lasciano il segno.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contatti">
                  Richiedi Preventivo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/progetti">Scopri i Nostri Progetti</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Servizi Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">I Nostri Servizi</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dall'ideazione alla realizzazione, ci occupiamo di ogni dettaglio per 
              rendere ogni evento perfetto e memorabile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Matrimoni</CardTitle>
                <CardDescription>
                  Il giorno più importante della vostra vita merita la perfezione assoluta.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Coordinamento completo</li>
                  <li>• Location da sogno</li>
                  <li>• Catering personalizzato</li>
                  <li>• Fotografia e video</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Eventi Corporate</CardTitle>
                <CardDescription>
                  Conferenze, convention e team building che rafforzano il vostro brand.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Meeting aziendali</li>
                  <li>• Lanci di prodotto</li>
                  <li>• Gala e premiazioni</li>
                  <li>• Team building</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Feste Private</CardTitle>
                <CardDescription>
                  Compleanni, anniversari e celebrazioni speciali su misura per voi.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Feste di compleanno</li>
                  <li>• Anniversari</li>
                  <li>• Cene di gala</li>
                  <li>• Eventi a tema</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/cosa-facciamo">
                Scopri Tutti i Servizi
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Separator />

      {/* Perché Sceglierci */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Perché Scegliere La Piana D'oro</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              La nostra esperienza e passione si traducono in eventi che superano ogni aspettativa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">15+ Anni di Esperienza</h3>
              <p className="text-muted-foreground text-sm">
                Un track record consolidato nell'organizzazione di eventi di successo.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Team Professionale</h3>
              <p className="text-muted-foreground text-sm">
                Professionisti qualificati che curano ogni aspetto del vostro evento.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Approccio Personalizzato</h3>
              <p className="text-muted-foreground text-sm">
                Ogni evento è unico, proprio come le persone che lo vivono.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Gestione Completa</h3>
              <p className="text-muted-foreground text-sm">
                Dall'ideazione alla realizzazione, pensiamo a tutto nei minimi dettagli.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronti a Realizzare il Vostro Evento da Sogno?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Contattateci oggi per una consulenza gratuita e scoprite come possiamo 
              trasformare la vostra visione in realtà.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contatti">
                  Contattaci Ora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/chi-siamo">Scopri Chi Siamo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
