import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, BarChart3, Leaf, TrendingDown, Clock, Shield, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BeneficiosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center space-y-6 mb-16 animate-fade-in-up">
            <Badge className="bg-accent text-accent-foreground text-lg px-4 py-2">Beneficios</Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">Impacto Real en las Ciudades</h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Tecnología al servicio del medio ambiente y la comunidad
            </p>
          </div>

          {/* Main Benefits with Images */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="overflow-hidden hover:shadow-2xl transition-all border-2">
              <div className="aspect-video relative bg-gradient-to-br from-primary/20 to-secondary/20">
                <img
                  src="/smart-city-with-iot-sensors-and-green-technology.jpg"
                  alt="Ciudad inteligente con sensores IoT"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <MapPin className="w-7 h-7 text-primary" />
                  Rutas Optimizadas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Sistema inteligente que ajusta las rutas de recolección en tiempo real, priorizando zonas con mayor
                  necesidad y reduciendo distancias innecesarias.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <TrendingDown className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Reducción de hasta 40% en distancias recorridas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Ahorro de 30% en tiempo de recolección</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Priorización dinámica por necesidad real</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-all border-2">
              <div className="aspect-video relative bg-gradient-to-br from-secondary/20 to-accent/20">
                <img
                  src="/data-analytics-dashboard.png"
                  alt="Dashboard de análisis de datos"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <BarChart3 className="w-7 h-7 text-secondary" />
                  Análisis Predictivo
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Machine learning que aprende patrones de generación de residuos, permitiendo anticipar necesidades y
                  planificar recursos de manera eficiente.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <BarChart3 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Predicción de llenado con 95% de precisión</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Identificación de patrones temporales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                    <span>Prevención proactiva de desbordes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-2xl transition-all border-2">
              <div className="aspect-video relative bg-gradient-to-br from-accent/20 to-primary/20">
                <img
                  src="/clean-green-urban-park-with-happy-people.jpg"
                  alt="Parque urbano limpio y verde"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Leaf className="w-7 h-7 text-accent" />
                  Impacto Sostenible
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Reducción significativa de emisiones de CO₂, menor consumo de combustible y ciudades más limpias que
                  mejoran la calidad de vida de todos.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Leaf className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Reducción de 35% en emisiones de CO₂</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingDown className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Menor consumo de combustible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Ciudades más limpias y saludables</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Additional Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Beneficios Adicionales</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-3">
                    <TrendingDown className="w-6 h-6 text-primary" />
                    Reducción de Costos Operativos
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                  <p>
                    La optimización de rutas y la recolección basada en necesidad real genera ahorros significativos en
                    combustible, mantenimiento vehicular y horas de trabajo.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <p className="text-2xl font-bold text-primary">25-40%</p>
                    <p className="text-sm">Reducción en costos operativos</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-3">
                    <Clock className="w-6 h-6 text-secondary" />
                    Mayor Eficiencia Temporal
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                  <p>
                    Los camiones recolectores optimizan su tiempo al visitar solo los contenedores que realmente lo
                    necesitan, permitiendo atender más zonas en menos tiempo.
                  </p>
                  <div className="bg-secondary/5 p-4 rounded-lg">
                    <p className="text-2xl font-bold text-secondary">30%</p>
                    <p className="text-sm">Ahorro en tiempo de recolección</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-3">
                    <Shield className="w-6 h-6 text-accent" />
                    Prevención de Problemas Sanitarios
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                  <p>
                    Al evitar desbordes de basura, se previenen focos de insalubridad, proliferación de plagas y malos
                    olores que afectan la salud pública.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Reducción de quejas ciudadanas</li>
                    <li>• Menor riesgo de enfermedades</li>
                    <li>• Mejora en la imagen urbana</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-3">
                    <Sparkles className="w-6 h-6 text-primary" />
                    Datos para Toma de Decisiones
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                  <p>
                    Los municipios obtienen información valiosa sobre patrones de generación de residuos, permitiendo
                    planificar mejor los recursos y servicios.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Reportes detallados por sector</li>
                    <li>• Identificación de zonas críticas</li>
                    <li>• Planificación estratégica basada en datos</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Clean Route Section */}
          <Card className="mb-16 border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-04%20at%2010.28.41%20AM-jmBNCoovZm6hCLTEDQJuV4cQYuEUJP.jpeg"
                    alt="Clean Route - For a greener future"
                    width={300}
                    height={300}
                    className="logo-no-bg w-64 md:w-80 h-auto"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-bold">Clean Route</h3>
                  <p className="text-xl text-primary font-semibold">For a greener future</p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Nuestro sistema de optimización de rutas no solo mejora la eficiencia operativa, sino que también
                    contribuye directamente a la construcción de un futuro más verde y sostenible para nuestras
                    ciudades. Cada ruta optimizada es un paso hacia un planeta más limpio.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="bg-background p-4 rounded-lg">
                      <p className="text-2xl font-bold text-primary">-35%</p>
                      <p className="text-sm text-muted-foreground">Emisiones CO₂</p>
                    </div>
                    <div className="bg-background p-4 rounded-lg">
                      <p className="text-2xl font-bold text-secondary">-40%</p>
                      <p className="text-sm text-muted-foreground">Distancia recorrida</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Impact Statistics */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Impacto Proyectado</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="text-center p-6 border-2 hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-primary mb-2">40%</div>
                <p className="text-sm text-muted-foreground">Reducción en distancias</p>
              </Card>
              <Card className="text-center p-6 border-2 hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-secondary mb-2">35%</div>
                <p className="text-sm text-muted-foreground">Menos emisiones CO₂</p>
              </Card>
              <Card className="text-center p-6 border-2 hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-accent mb-2">30%</div>
                <p className="text-sm text-muted-foreground">Ahorro de tiempo</p>
              </Card>
              <Card className="text-center p-6 border-2 hover:shadow-lg transition-shadow">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <p className="text-sm text-muted-foreground">Precisión predictiva</p>
              </Card>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">¿Quieres ser parte del cambio?</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/equipo">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Conocer al Equipo
                </Button>
              </Link>
              <Link href="/contacto">
                <Button size="lg" variant="outline">
                  Contactar
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
