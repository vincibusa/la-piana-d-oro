import Link from "next/link"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/30 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo e Descrizione */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/laPianaLogo.png"
                alt="La Piana D'oro"
                width={180}
                height={45}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              La Piana D'oro è un'associazione ETS specializzata nell'organizzazione di eventi 
              indimenticabili, matrimoni da sogno e celebrazioni uniche.
            </p>
            <div className="flex space-x-3">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Navigazione */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Navigazione</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-muted-foreground hover:text-primary text-sm">Home</Link></li>
              <li><Link href="/chi-siamo" className="text-muted-foreground hover:text-primary text-sm">Chi Siamo</Link></li>
              <li><Link href="/progetti" className="text-muted-foreground hover:text-primary text-sm">Progetti</Link></li>
              <li><Link href="/cosa-facciamo" className="text-muted-foreground hover:text-primary text-sm">Cosa Facciamo</Link></li>
              <li><Link href="/press" className="text-muted-foreground hover:text-primary text-sm">Press</Link></li>
            </ul>
          </div>

          {/* Servizi */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Servizi</h3>
            <ul className="space-y-3">
              <li><Link href="/cosa-facciamo#matrimoni" className="text-muted-foreground hover:text-primary text-sm">Matrimoni</Link></li>
              <li><Link href="/cosa-facciamo#corporate" className="text-muted-foreground hover:text-primary text-sm">Eventi Corporate</Link></li>
              <li><Link href="/cosa-facciamo#feste" className="text-muted-foreground hover:text-primary text-sm">Feste Private</Link></li>
              <li><Link href="/cosa-facciamo#catering" className="text-muted-foreground hover:text-primary text-sm">Catering</Link></li>
              <li><Link href="/cosa-facciamo#consulenza" className="text-muted-foreground hover:text-primary text-sm">Consulenza Eventi</Link></li>
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contatti</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:info@lapianaoro.it" className="text-muted-foreground hover:text-primary text-sm">
                  info@lapianaoro.it
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="tel:+393123456789" className="text-muted-foreground hover:text-primary text-sm">
                  +39 312 345 6789
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Via Roma 123<br />
                  00100 Roma (RM)
                </span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© 2024 La Piana D'oro Associazione ETS. Tutti i diritti riservati.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link href="/cookie" className="hover:text-primary">Cookie Policy</Link>
            <Link href="/termini" className="hover:text-primary">Termini di Servizio</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}