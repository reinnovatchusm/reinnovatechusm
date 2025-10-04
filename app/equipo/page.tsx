import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"
import Link from "next/link"

export default function EquipoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center space-y-6 mb-16 animate-fade-in-up">
            <Badge className="bg-primary text-primary-foreground text-lg px-4 py-2">Nuestro Equipo</Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">Quiénes Somos</h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Estudiantes comprometidos con la innovación y la sostenibilidad
            </p>
          </div>

          {/* Team Members */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                name: "Basti",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Basti2-SXnMTQxWc1KXX4S7LNkAVU48yf8bBz.jpeg",
                description:
                  "Integrante del equipo RE-INNOVA, comprometido con el desarrollo de soluciones tecnológicas para la gestión inteligente de residuos urbanos.",
                instagram: "https://www.instagram.com/soo077.7?igsh=b2R0c3g0dG51ejFx",
              },
              {
                name: "Cristóbal",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cris-op6FcyjAquqmXG9QFK70Hkx9kA27zP.jpeg",
                description:
                  "Integrante del equipo RE-INNOVA, enfocado en crear tecnología que conecte la innovación con un futuro más verde y sostenible.",
                instagram: "https://www.instagram.com/ct0baal.rp_____?igsh=MWQ2NnI4bzNseWdwcA==",
              },
              {
                name: "Feña",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fe%C3%B1a-Rcgb62wWxe1Nw4s0RAjr1AY5982yGr.jpeg",
                description:
                  "Integrante del equipo RE-INNOVA, trabajando en el desarrollo de sistemas inteligentes para optimizar la recolección de residuos en las ciudades.",
                instagram: "https://www.instagram.com/1m_sh1t._?igsh=MWJtNWltbjZ5NGRiOA==",
              },
            ].map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all border-2">
                <div className="aspect-square relative bg-gradient-to-br from-primary/10 to-secondary/10">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
                  <div className="flex gap-3 pt-2">
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-lg transition-colors"
                      title="Instagram"
                    >
                      <Instagram className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* About the Team */}
          <Card className="mb-16 border-2 border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-3xl text-center">Sobre Nuestro Equipo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Somos un equipo de estudiantes de la Universidad Técnica Federico Santa María, unidos por la pasión por
                la tecnología y el compromiso con el medio ambiente. Nuestro proyecto nace de la convicción de que la
                innovación tecnológica puede y debe estar al servicio de la sociedad y el planeta.
              </p>
              <p>
                A través del programa TechTalent, hemos desarrollado RE-INNOVA como una respuesta concreta a los
                desafíos de gestión de residuos que enfrentan nuestras ciudades. Combinamos conocimientos en IoT,
                ciencia de datos, desarrollo de software y diseño de experiencia de usuario para crear una solución
                integral e innovadora.
              </p>
              <p className="font-semibold text-foreground">
                Creemos firmemente que las ciudades inteligentes del futuro serán aquellas que sepan integrar
                tecnología, sostenibilidad y bienestar ciudadano en cada una de sus decisiones.
              </p>
            </CardContent>
          </Card>

          {/* University Section */}
          <Card className="mb-16 border-2">
            <CardContent className="p-8">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold">Universidad Técnica Federico Santa María</h3>
                <p className="text-lg text-muted-foreground">
                  Proyecto desarrollado en el marco del programa{" "}
                  <span className="font-semibold text-primary">TechTalent</span>
                </p>
                <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  TechTalent es un programa de la USM que fomenta el desarrollo de proyectos tecnológicos innovadores
                  con impacto social y ambiental, preparando a los estudiantes para los desafíos del futuro.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">¿Quieres colaborar con nosotros?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estamos abiertos a colaboraciones, feedback y oportunidades para llevar RE-INNOVA a más ciudades
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Link href="/contacto">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Contactar al Equipo
                </Button>
              </Link>
              <Link href="/proyecto">
                <Button size="lg" variant="outline">
                  Ver el Proyecto
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
