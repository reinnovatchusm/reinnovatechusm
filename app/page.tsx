import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, Leaf, Zap, Recycle, MapPin, BarChart3 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-12 animate-fade-in-up">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-8">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-04%20at%2010.28.40%20AM-Fr4RzXHuL3PGc2XLlGfHWaiplN32d0.jpeg"
                  alt="RE-INNOVA Logo"
                  fill
                  className="object-contain drop-shadow-2xl"
                  style={{ mixBlendMode: "multiply" }}
                  priority
                />
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-foreground drop-shadow-sm">RE-INNOVA</h1>

            <div className="flex items-center justify-center gap-3">
              <div className="h-1 w-16 bg-gradient-to-r from-transparent to-primary rounded-full" />
              <Recycle className="w-8 h-8 text-primary animate-pulse" />
              <div className="h-1 w-16 bg-gradient-to-l from-transparent to-primary rounded-full" />
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-balance leading-tight text-foreground">
              Conectando Innovación
              <br />
              <span className="text-primary font-bold">con un Futuro más Verde</span>
            </h2>

            <p className="text-xl md:text-2xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              Transformamos la gestión de residuos urbanos con tecnología inteligente para ciudades más limpias y
              sostenibles
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link href="/proyecto">
                <Button
                  size="lg"
                  className="text-lg px-10 py-7 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
                >
                  Descubre el Proyecto
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/equipo">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-10 py-7 border-2 hover:bg-primary/5 bg-transparent"
                >
                  Conoce al Equipo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 px-4 bg-gradient-to-b from-background via-accent/5 to-background overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center space-y-16">
            <div className="space-y-6">
              <div className="inline-block px-6 py-2 bg-accent/10 rounded-full border border-accent/20">
                <span className="text-accent font-semibold">Nuestra Solución</span>
              </div>

              <div className="relative w-full max-w-2xl h-48 md:h-64 mx-auto">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-04%20at%2011.00.04%20AM%20%281%29-aQiepdD7HX0jSJ11xnal9lTGaq5pgY.jpeg"
                  alt="Clean Route Illustration"
                  fill
                  className="object-contain drop-shadow-2xl"
                  style={{ mixBlendMode: "multiply" }}
                />
              </div>

              <div className="relative w-full max-w-xl h-20 mx-auto">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-04%20at%2011.00.05%20AM-7tjlmUU34jy6vJNiEttDY9JPdqIuJv.jpeg"
                  alt="Clean Route Text"
                  fill
                  className="object-contain"
                  style={{ mixBlendMode: "multiply" }}
                />
              </div>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-balance text-foreground">
                Optimización Inteligente de Rutas de Recolección
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
                Sistema avanzado que utiliza datos en tiempo real para crear las rutas más eficientes, reduciendo costos
                operativos y emisiones de CO₂
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-4 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-20">
            <div className="inline-block px-6 py-2 bg-primary/10 rounded-full border border-primary/20">
              <span className="text-primary font-semibold">Cómo Funciona</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-balance text-foreground">Una Solución Completa</h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              Tecnología de punta al servicio del medio ambiente y la eficiencia urbana
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group relative p-10 rounded-3xl bg-card border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute top-6 right-6 text-8xl font-bold text-primary/10">01</div>
              <div className="relative z-10 space-y-6">
                <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Zap className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Sensores IoT</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Monitoreo continuo del nivel de llenado en cada contenedor mediante sensores ultrasónicos de alta
                  precisión
                </p>
              </div>
            </div>

            <div className="group relative p-10 rounded-3xl bg-card border-2 border-accent/20 hover:border-accent/40 transition-all hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute top-6 right-6 text-8xl font-bold text-accent/10">02</div>
              <div className="relative z-10 space-y-6">
                <div className="w-20 h-20 rounded-2xl bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <BarChart3 className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Inteligencia Artificial</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Algoritmos de machine learning que predicen patrones y optimizan la recolección de forma automática
                </p>
              </div>
            </div>

            <div className="group relative p-10 rounded-3xl bg-card border-2 border-secondary/20 hover:border-secondary/40 transition-all hover:shadow-2xl hover:-translate-y-2">
              <div className="absolute top-6 right-6 text-8xl font-bold text-secondary/10">03</div>
              <div className="relative z-10 space-y-6">
                <div className="w-20 h-20 rounded-2xl bg-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <MapPin className="w-10 h-10 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Rutas Dinámicas</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Generación automática de rutas óptimas que se adaptan en tiempo real a las necesidades de cada zona
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/20">
            <div className="text-center space-y-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-background/80 backdrop-blur-sm rounded-full border border-primary/20">
                <Leaf className="w-6 h-6 text-primary" />
                <span className="font-semibold text-lg text-foreground">Impacto Esperado</span>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="space-y-3">
                  <div className="text-5xl md:text-6xl font-bold text-primary">30%</div>
                  <div className="text-lg text-muted-foreground">Reducción en costos operativos</div>
                </div>
                <div className="space-y-3">
                  <div className="text-5xl md:text-6xl font-bold text-accent">25%</div>
                  <div className="text-lg text-muted-foreground">Menos emisiones de CO₂</div>
                </div>
                <div className="space-y-3">
                  <div className="text-5xl md:text-6xl font-bold text-secondary">40%</div>
                  <div className="text-lg text-muted-foreground">Mejora en eficiencia</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold text-balance text-foreground">¿Listo para conocer más?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/proyecto">
                <Button
                  size="lg"
                  className="text-lg px-10 py-7 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
                >
                  Ver Proyecto Completo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/objetivos">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-10 py-7 border-2 hover:bg-primary/5 bg-transparent"
                >
                  Explorar Objetivos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
