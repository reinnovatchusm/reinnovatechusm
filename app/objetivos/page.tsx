import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Target, Wifi, Database, Brain, DollarSign, Leaf, Users, Lightbulb, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function ObjetivosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center space-y-6 mb-16 animate-fade-in-up">
            <Badge className="bg-secondary text-secondary-foreground text-lg px-4 py-2">Objetivos</Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">Nuestras Metas</h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Un enfoque integral para revolucionar la gestión de residuos urbanos en Chile
            </p>
          </div>

          {/* General Objective */}
          <Card className="mb-12 border-2 border-primary bg-gradient-to-br from-primary/10 to-secondary/10">
            <CardHeader>
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="space-y-4">
                  <CardTitle className="text-3xl md:text-4xl">Objetivo General</CardTitle>
                  <CardDescription className="text-lg md:text-xl leading-relaxed text-foreground">
                    Desarrollar e implementar un sistema inteligente de gestión de residuos urbanos que, mediante el uso
                    de sensores y análisis de datos, optimice las rutas de recolección para mejorar la eficiencia
                    operativa, reducir costos y contribuir a la sostenibilidad ambiental en las ciudades de Chile.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 pt-6">
                <div className="flex items-center gap-3 p-4 bg-background/50 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-sm font-semibold">Eficiencia Operativa</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-background/50 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-sm font-semibold">Reducción de Costos</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-background/50 rounded-lg">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-sm font-semibold">Sostenibilidad Ambiental</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Specific Objectives */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Objetivos Específicos</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Objective 1 */}
              <Card className="hover:shadow-xl transition-shadow border-2">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Wifi className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="border-primary text-primary">
                          01
                        </Badge>
                        <CardTitle className="text-xl">Sensores Inteligentes</CardTitle>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        Diseñar e instalar sensores inteligentes en basureros para medir en tiempo real el nivel de
                        llenado.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Monitoreo continuo 24/7</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Transmisión de datos en tiempo real</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Bajo consumo energético</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Objective 2 */}
              <Card className="hover:shadow-xl transition-shadow border-2">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Database className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="border-secondary text-secondary">
                          02
                        </Badge>
                        <CardTitle className="text-xl">Análisis de Datos</CardTitle>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        Recopilar y analizar datos de uso de los distintos sectores, identificando patrones de
                        generación de residuos.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Identificación de patrones temporales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Análisis por sectores geográficos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Reportes y visualizaciones</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Objective 3 */}
              <Card className="hover:shadow-xl transition-shadow border-2">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Brain className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="border-accent text-accent">
                          03
                        </Badge>
                        <CardTitle className="text-xl">Machine Learning</CardTitle>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        Implementar un sistema de aprendizaje automático que permita ajustar dinámicamente las rutas de
                        recolección según la demanda real de cada zona.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Predicción de llenado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Optimización automática de rutas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Mejora continua del sistema</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Objective 4 */}
              <Card className="hover:shadow-xl transition-shadow border-2">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <DollarSign className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="border-primary text-primary">
                          04
                        </Badge>
                        <CardTitle className="text-xl">Reducción de Costos</CardTitle>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        Reducir los costos operativos y tiempos de recolección, evitando recorridos innecesarios y
                        maximizando la eficiencia de los camiones recolectores.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Menor consumo de combustible</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Optimización de recursos humanos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Reducción de mantenimiento vehicular</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Objective 5 */}
              <Card className="hover:shadow-xl transition-shadow border-2">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Leaf className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="border-secondary text-secondary">
                          05
                        </Badge>
                        <CardTitle className="text-xl">Impacto Ambiental</CardTitle>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        Contribuir a la disminución de la contaminación urbana, evitando desbordes de basura en espacios
                        públicos.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Reducción de emisiones de CO₂</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Prevención de desbordes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Espacios públicos más limpios</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Objective 6 */}
              <Card className="hover:shadow-xl transition-shadow border-2">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="border-accent text-accent">
                          06
                        </Badge>
                        <CardTitle className="text-xl">Calidad de Vida</CardTitle>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        Mejorar la calidad de vida de la comunidad, ofreciendo entornos urbanos más limpios, ordenados y
                        sostenibles.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Ciudades más limpias y saludables</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Reducción de malos olores</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Mayor satisfacción ciudadana</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Objective 7 */}
              <Card className="hover:shadow-xl transition-shadow border-2 md:col-span-2">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="border-primary text-primary">
                          07
                        </Badge>
                        <CardTitle className="text-xl">Innovación Tecnológica</CardTitle>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        Promover la innovación tecnológica en la gestión municipal, fomentando el uso de soluciones
                        inteligentes para problemas sociales y ambientales.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Modelo replicable en otras ciudades</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Impulso a ciudades inteligentes</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">Transferencia tecnológica</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center space-y-6 mt-16">
            <h2 className="text-3xl font-bold">Conoce cómo lo lograremos</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/beneficios">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Ver Beneficios
                </Button>
              </Link>
              <Link href="/equipo">
                <Button size="lg" variant="outline">
                  Conocer al Equipo
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
