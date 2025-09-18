import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Newspaper, Download, Camera, Video, ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Press() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/10 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-accent/20 text-accent-foreground border-accent/30">
              📰 Area Press
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Press & Media
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Scoprite le ultime notizie su La Piana D'oro, i nostri comunicati stampa, 
              la rassegna mediatica e il materiale per giornalisti e media partner.
            </p>
          </div>
        </div>
      </section>

      {/* Contenuti Press */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="comunicati" className="w-full">
            <TabsList className="grid w-full grid-cols-4 lg:w-[800px] mx-auto mb-12">
              <TabsTrigger value="comunicati">Comunicati</TabsTrigger>
              <TabsTrigger value="rassegna">Rassegna</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
              <TabsTrigger value="media-kit">Media Kit</TabsTrigger>
            </TabsList>

            {/* Comunicati Stampa */}
            <TabsContent value="comunicati" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Comunicati Stampa</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Le ultime novità e annunci ufficiali de La Piana D'oro, 
                  dai progetti più recenti alle collaborazioni strategiche.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="group hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge>Comunicato Stampa</Badge>
                          <span className="text-sm text-muted-foreground">15 Dicembre 2024</span>
                        </div>
                        <CardTitle className="group-hover:text-primary transition-colors">
                          La Piana D'oro annuncia la partnership con Villa Romantica per il 2025
                        </CardTitle>
                        <CardDescription className="mt-2">
                          Nuova collaborazione strategica per offrire location esclusive 
                          per matrimoni e eventi di lusso nella campagna toscana.
                        </CardDescription>
                      </div>
                      <Button variant="ghost" size="sm" className="ml-4">
                        <Download className="h-4 w-4 mr-2" />
                        PDF
                      </Button>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="group hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge>Comunicato Stampa</Badge>
                          <span className="text-sm text-muted-foreground">28 Novembre 2024</span>
                        </div>
                        <CardTitle className="group-hover:text-primary transition-colors">
                          La Piana D'oro vince il premio "Excellence in Event Planning 2024"
                        </CardTitle>
                        <CardDescription className="mt-2">
                          Riconoscimento prestigioso assegnato dall'Associazione Italiana 
                          Event Planners per l'innovazione nel settore matrimoni.
                        </CardDescription>
                      </div>
                      <Button variant="ghost" size="sm" className="ml-4">
                        <Download className="h-4 w-4 mr-2" />
                        PDF
                      </Button>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="group hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge>Comunicato Stampa</Badge>
                          <span className="text-sm text-muted-foreground">10 Ottobre 2024</span>
                        </div>
                        <CardTitle className="group-hover:text-primary transition-colors">
                          Lancio dei nuovi servizi sostenibili per eventi eco-friendly
                        </CardTitle>
                        <CardDescription className="mt-2">
                          La Piana D'oro introduce una linea completa di servizi 
                          per eventi a impatto zero, nel rispetto dell'ambiente.
                        </CardDescription>
                      </div>
                      <Button variant="ghost" size="sm" className="ml-4">
                        <Download className="h-4 w-4 mr-2" />
                        PDF
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              </div>
            </TabsContent>

            {/* Rassegna Stampa */}
            <TabsContent value="rassegna" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Rassegna Stampa</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Articoli, interviste e menzioni de La Piana D'oro sui principali 
                  media nazionali e di settore.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="group hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">Vogue Sposa</Badge>
                      <span className="text-sm text-muted-foreground">Dicembre 2024</span>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      "I migliori wedding planner d'Italia"
                    </CardTitle>
                    <CardDescription className="mt-2">
                      La Piana D'oro inserita nella top 10 dei wedding planner 
                      più innovativi d'Italia secondo Vogue Sposa.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" size="sm" className="w-full">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Leggi Articolo
                    </Button>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">Corriere della Sera</Badge>
                      <span className="text-sm text-muted-foreground">Novembre 2024</span>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      "Il boom dei matrimoni post-pandemia"
                    </CardTitle>
                    <CardDescription className="mt-2">
                      Intervista alla fondatrice Maria Cristina sui trend 
                      matrimoniali e la ripresa del settore eventi.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" size="sm" className="w-full">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Leggi Articolo
                    </Button>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">Event Report</Badge>
                      <span className="text-sm text-muted-foreground">Ottobre 2024</span>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      "Sostenibilità negli eventi: il caso La Piana D'oro"
                    </CardTitle>
                    <CardDescription className="mt-2">
                      Focus sui nuovi servizi eco-friendly e l'impegno 
                      dell'associazione per eventi sostenibili.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" size="sm" className="w-full">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Leggi Articolo
                    </Button>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">Luxury Wedding</Badge>
                      <span className="text-sm text-muted-foreground">Settembre 2024</span>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      "Tendenze matrimoni 2025: parla l'esperta"
                    </CardTitle>
                    <CardDescription className="mt-2">
                      Analisi delle tendenze matrimoniali per il 2025 
                      con insights dal team La Piana D'oro.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" size="sm" className="w-full">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Leggi Articolo
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Gallery Media */}
            <TabsContent value="gallery" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Gallery Media</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Foto e video alta risoluzione dei nostri eventi più significativi, 
                  disponibili per uso editoriale.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="group hover:shadow-lg transition-all">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-t-lg mb-4 flex items-center justify-center">
                    <Camera className="h-12 w-12 text-primary" />
                  </div>
                  <CardHeader>
                    <CardTitle>Matrimonio Villa Toscana</CardTitle>
                    <CardDescription>
                      Set fotografico completo del matrimonio Elena & Marco
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                      <Button variant="ghost" size="sm">
                        Preview
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-all">
                  <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 rounded-t-lg mb-4 flex items-center justify-center">
                    <Video className="h-12 w-12 text-accent" />
                  </div>
                  <CardHeader>
                    <CardTitle>Tech Innovation Summit</CardTitle>
                    <CardDescription>
                      Video highlights della conferenza internazionale
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                      <Button variant="ghost" size="sm">
                        Preview
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg transition-all">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-t-lg mb-4 flex items-center justify-center">
                    <Camera className="h-12 w-12 text-primary" />
                  </div>
                  <CardHeader>
                    <CardTitle>Corporate Retreat</CardTitle>
                    <CardDescription>
                      Reportage fotografico del team building aziendale
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                      <Button variant="ghost" size="sm">
                        Preview
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Media Kit */}
            <TabsContent value="media-kit" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Media Kit</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Tutto il materiale necessario per giornalisti e media partner: 
                  loghi, biografia, fact sheet e materiale promozionale.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-6">Materiale Aziendale</h3>
                  <div className="space-y-4">
                    <Card>
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle className="text-lg">Logo Pack</CardTitle>
                            <CardDescription>Logo in vari formati e colorazioni</CardDescription>
                          </div>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            ZIP
                          </Button>
                        </div>
                      </CardHeader>
                    </Card>

                    <Card>
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle className="text-lg">Fact Sheet</CardTitle>
                            <CardDescription>Dati aziendali e informazioni chiave</CardDescription>
                          </div>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            PDF
                          </Button>
                        </div>
                      </CardHeader>
                    </Card>

                    <Card>
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle className="text-lg">Biografia Fondatrice</CardTitle>
                            <CardDescription>Bio professionale Maria Cristina</CardDescription>
                          </div>
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            DOC
                          </Button>
                        </div>
                      </CardHeader>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-6">Informazioni di Contatto</h3>
                  <Card>
                    <CardHeader>
                      <CardTitle>Ufficio Stampa</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Maria Cristina Rossi</h4>
                        <p className="text-sm text-muted-foreground mb-1">
                          Fondatrice & Creative Director
                        </p>
                        <p className="text-sm">
                          <strong>Email:</strong> press@lapianaoro.it
                        </p>
                        <p className="text-sm">
                          <strong>Tel:</strong> +39 312 345 6789
                        </p>
                      </div>

                      <Separator />

                      <div>
                        <h4 className="font-medium mb-2">Alessandro Bianchi</h4>
                        <p className="text-sm text-muted-foreground mb-1">
                          Marketing & Communication
                        </p>
                        <p className="text-sm">
                          <strong>Email:</strong> marketing@lapianaoro.it
                        </p>
                        <p className="text-sm">
                          <strong>Tel:</strong> +39 312 345 6790
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="mt-6">
                    <Button asChild size="lg" className="w-full">
                      <Link href="/contatti">
                        Richiedi Intervista
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Newspaper className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Resta Aggiornato</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Iscriviti alla nostra newsletter per ricevere i comunicati stampa 
              e le ultime novità direttamente nella tua inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="La tua email"
                className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary hover:bg-primary/90">
                Iscriviti
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hai Bisogno di Materiale Aggiuntivo?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Il nostro ufficio stampa è a vostra disposizione per fornire 
              ulteriori informazioni, materiali o organizzare interviste.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contatti">
                  Contatta Ufficio Stampa
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="mailto:press@lapianaoro.it">Email Diretta</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}