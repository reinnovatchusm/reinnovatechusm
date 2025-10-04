import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Instagram, Linkedin, Github, MapPin } from "lucide-react"

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center space-y-6 mb-16 animate-fade-in-up">
            <Badge className="bg-secondary text-secondary-foreground text-lg px-4 py-2">Contacto</Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">Conecta con Nosotros</h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-pretty">
              ¿Interesado en nuestro proyecto? ¡Hablemos!
            </p>
          </div>

          {/* Contact Information */}
          <Card className="mb-8 border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Información de Contacto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* 
                ⚠️ EDITAR AQUÍ: Email de contacto
                Reemplaza con tu email real del proyecto
              */}
              <div className="flex items-start gap-4 p-6 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg mb-1">Email</p>
                  <a href="mailto:contacto@re-innova.cl" className="text-primary hover:underline text-lg">
                    contacto@re-innova.cl
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">
                    Para consultas generales, colaboraciones o más información sobre el proyecto
                  </p>
                </div>
              </div>

              {/* 
                ⚠️ EDITAR AQUÍ: Teléfono (opcional)
                Descomenta y agrega si tienes un número de contacto
              */}
              {/* 
              <div className="flex items-start gap-4 p-6 bg-secondary/5 rounded-lg hover:bg-secondary/10 transition-colors">
                <Phone className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg mb-1">Teléfono</p>
                  <a href="tel:+56912345678" className="text-secondary hover:underline text-lg">
                    +56 9 1234 5678
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">
                    Horario de atención: Lunes a Viernes, 9:00 - 18:00
                  </p>
                </div>
              </div>
              */}

              {/* 
                ⚠️ EDITAR AQUÍ: Ubicación
                Agrega la ubicación de tu universidad o laboratorio
              */}
              <div className="flex items-start gap-4 p-6 bg-accent/5 rounded-lg">
                <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-lg mb-1">Ubicación</p>
                  <p className="text-lg">Universidad Técnica Federico Santa María</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Av. España 1680, Valparaíso, Chile
                    <br />
                    Programa TechTalent
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Media */}
          <Card className="mb-8 border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Síguenos en Redes Sociales</CardTitle>
            </CardHeader>
            <CardContent>
              {/* 
                ⚠️ EDITAR AQUÍ: Enlaces de redes sociales
                Reemplaza los enlaces con tus perfiles reales
                Puedes agregar o quitar redes según necesites
              */}
              <div className="grid md:grid-cols-2 gap-4">
                <a
                  href="https://instagram.com/tu_usuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-gradient-to-r from-pink-500/10 to-purple-500/10 hover:from-pink-500/20 hover:to-purple-500/20 rounded-lg transition-all border-2 border-transparent hover:border-pink-500/20"
                >
                  <Instagram className="w-8 h-8 text-pink-600" />
                  <div>
                    <p className="font-semibold text-lg">Instagram</p>
                    <p className="text-sm text-muted-foreground">@re_innova_usm</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/company/tu_empresa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-blue-500/10 hover:bg-blue-500/20 rounded-lg transition-all border-2 border-transparent hover:border-blue-500/20"
                >
                  <Linkedin className="w-8 h-8 text-blue-600" />
                  <div>
                    <p className="font-semibold text-lg">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">RE-INNOVA</p>
                  </div>
                </a>

                <a
                  href="https://github.com/tu_usuario/re-innova"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-gray-500/10 hover:bg-gray-500/20 rounded-lg transition-all border-2 border-transparent hover:border-gray-500/20"
                >
                  <Github className="w-8 h-8 text-gray-700 dark:text-gray-300" />
                  <div>
                    <p className="font-semibold text-lg">GitHub</p>
                    <p className="text-sm text-muted-foreground">Código del proyecto</p>
                  </div>
                </a>

                {/* 
                  ⚠️ EDITAR AQUÍ: Agregar más redes sociales
                  Puedes agregar Twitter, Facebook, YouTube, etc.
                  Ejemplo de Twitter:
                */}
                {/* 
                <a
                  href="https://twitter.com/tu_usuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-sky-500/10 hover:bg-sky-500/20 rounded-lg transition-all border-2 border-transparent hover:border-sky-500/20"
                >
                  <Twitter className="w-8 h-8 text-sky-600" />
                  <div>
                    <p className="font-semibold text-lg">Twitter</p>
                    <p className="text-sm text-muted-foreground">@re_innova</p>
                  </div>
                </a>
                */}
              </div>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <Card className="mb-8 border-2 border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-2xl">¿Por qué contactarnos?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Para Municipalidades</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Si representas a una municipalidad interesada en implementar RE-INNOVA, contáctanos para conocer más
                    sobre el proyecto y sus beneficios.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Para Colaboradores</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    ¿Eres estudiante, investigador o profesional interesado en colaborar? Nos encantaría conocer tus
                    ideas y experiencia.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Para Inversionistas</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Si estás interesado en apoyar el desarrollo y escalamiento de RE-INNOVA, contáctanos para conocer
                    nuestro plan de crecimiento.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Para Medios</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    ¿Quieres cubrir nuestro proyecto? Estamos disponibles para entrevistas y material de prensa.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* University Info */}
          <Card className="border-2">
            <CardContent className="p-8">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold">Proyecto TechTalent USM</h3>
                <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  RE-INNOVA es un proyecto desarrollado en el marco del programa TechTalent de la Universidad Técnica
                  Federico Santa María, que busca fomentar la innovación tecnológica con impacto social y ambiental.
                </p>
                <div className="pt-4">
                  <Badge className="text-base px-4 py-2">TechTalent 2025</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
