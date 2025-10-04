import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Leaf, Wifi, Database, TrendingUp, Users, Globe } from "lucide-react"
import Link from "next/link"

export default function ProyectoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          {/* Header */}
          <div className="text-center space-y-6 mb-16 animate-fade-in-up">
            <Badge className="bg-primary text-primary-foreground text-lg px-4 py-2">El Proyecto</Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">RE-INNOVA</h1>
            <p className="text-2xl md:text-3xl text-primary font-semibold">
              Transformando la Gestión de Residuos Urbanos
            </p>
          </div>

          {/* Introduction */}
          <Card className="mb-8 border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3">
                <Globe className="w-8 h-8 text-primary" />
                Introducción
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                En la actualidad, la gestión de residuos en Chile enfrenta un desafío creciente: la acumulación excesiva
                de basura en los basureros urbanos. Este problema no solo afecta la limpieza y el orden de los espacios
                públicos, sino que también impacta en la salud de las comunidades, la calidad de vida de los ciudadanos
                y la eficiencia de los sistemas municipales de recolección.
              </p>
              <p>
                Los métodos tradicionales de recolección suelen basarse en rutas fijas y horarios preestablecidos, lo
                que genera ineficiencias significativas. Algunos sectores presentan basureros desbordados antes de la
                llegada del camión recolector, mientras que otros son atendidos pese a no estar llenos, incrementando
                innecesariamente los costos de transporte, tiempo y combustible.
              </p>
              <p className="font-semibold text-foreground text-xl">
                Frente a esta situación, nuestro equipo propone una solución tecnológica innovadora: la implementación
                de sensores inteligentes en los basureros, capaces de registrar en tiempo real el nivel de llenado.
              </p>
              <p>
                Estos datos alimentan un sistema que aprende patrones de uso en cada sector, lo que permite optimizar
                dinámicamente las rutas de recolección, priorizando las zonas con mayor necesidad y reduciendo los
                recorridos innecesarios.
              </p>
            </CardContent>
          </Card>

          {/* Problem Statement */}
          <Card className="mb-8 border-2 border-secondary/20 bg-secondary/5">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-secondary" />
                El Problema
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Impacto Ambiental</h3>
                  <ul className="space-y-3 list-disc list-inside">
                    <li>Basureros desbordados generan focos de insalubridad</li>
                    <li>Contaminación visual en espacios públicos</li>
                    <li>Proliferación de plagas y malos olores</li>
                    <li>Deterioro del entorno urbano</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Ineficiencia Operativa</h3>
                  <ul className="space-y-3 list-disc list-inside">
                    <li>Rutas fijas sin considerar necesidad real</li>
                    <li>Alto consumo de combustible innecesario</li>
                    <li>Costos operativos elevados</li>
                    <li>Tiempo de recolección no optimizado</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Justification */}
          <Card className="mb-8 border-2 border-accent/20">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3">
                <Leaf className="w-8 h-8 text-accent" />
                Justificación
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Como equipo, hemos identificado un problema que afecta directamente a la calidad de vida de las personas
                y a la eficiencia de nuestras ciudades: la mala gestión de los residuos urbanos. A diario somos testigos
                de cómo los basureros se llenan hasta desbordarse, generando focos de insalubridad, contaminación visual
                y malos olores que deterioran el entorno.
              </p>
              <p>
                Este proyecto es importante porque aborda ambas dimensiones del problema: el impacto ambiental y la
                eficiencia operativa. Nuestra propuesta busca modernizar la gestión de residuos mediante un sistema
                inteligente capaz de recopilar datos en tiempo real y aprender de ellos, ajustando las rutas de
                recolección de acuerdo con los sectores que realmente lo necesitan.
              </p>
              <p>
                Además, creemos que este proyecto es relevante porque plantea un cambio de paradigma en la forma en que
                entendemos la recolección de basura. Pasamos de un sistema rígido y poco flexible, a uno dinámico,
                adaptable y basado en evidencia, donde cada decisión se toma a partir de datos concretos.
              </p>
              <p className="font-semibold text-foreground text-xl">
                Llevar a cabo este proyecto significa apostar por la innovación y la sostenibilidad, generando
                soluciones inteligentes para problemas cotidianos que afectan a toda la comunidad.
              </p>
            </CardContent>
          </Card>

          {/* Technology Stack */}
          <Card className="mb-8 border-2">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3">
                <Wifi className="w-8 h-8 text-primary" />
                Tecnologías Implementadas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-3 p-6 bg-primary/5 rounded-lg">
                  <Database className="w-10 h-10 text-primary" />
                  <h3 className="text-xl font-semibold">Sensores IoT</h3>
                  <p className="text-muted-foreground">
                    Dispositivos inteligentes que monitorean el nivel de llenado en tiempo real
                  </p>
                </div>
                <div className="space-y-3 p-6 bg-secondary/5 rounded-lg">
                  <TrendingUp className="w-10 h-10 text-secondary" />
                  <h3 className="text-xl font-semibold">Machine Learning</h3>
                  <p className="text-muted-foreground">
                    Algoritmos que aprenden patrones y predicen necesidades de recolección
                  </p>
                </div>
                <div className="space-y-3 p-6 bg-accent/5 rounded-lg">
                  <Globe className="w-10 h-10 text-accent" />
                  <h3 className="text-xl font-semibold">Optimización de Rutas</h3>
                  <p className="text-muted-foreground">Sistema dinámico que ajusta trayectos según demanda real</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Marco Teórico */}
          <Card className="mb-12 border-2 border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-3">
                <Users className="w-8 h-8 text-primary" />
                Marco Teórico
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                La gestión de residuos sólidos urbanos es un desafío creciente en las ciudades modernas. Según la CEPAL
                (2021), América Latina genera en promedio 1 kg de residuos por habitante al día, y se estima que esta
                cifra seguirá aumentando en los próximos años debido al crecimiento poblacional y la urbanización
                acelerada.
              </p>
              <p>
                El concepto de "ciudades inteligentes" (smart cities) incorpora tecnologías de la información y
                comunicación para optimizar procesos urbanos, entre ellos la recolección de basura. Los sensores IoT
                (Internet of Things) permiten monitorear en tiempo real el nivel de llenado de los contenedores,
                generando datos que, mediante algoritmos de inteligencia artificial y aprendizaje automático,
                posibilitan la creación de rutas dinámicas y más eficientes.
              </p>
              <p>
                Existen antecedentes internacionales de éxito en este ámbito. Ciudades como Barcelona (España) y Seúl
                (Corea del Sur) han implementado sistemas de basureros inteligentes que informan su estado de llenado,
                logrando reducir costos logísticos y mejorar la limpieza urbana significativamente.
              </p>
              <p className="font-semibold text-foreground">
                En este contexto, el presente proyecto busca aplicar estas tendencias globales a la realidad chilena,
                proponiendo un sistema capaz de aprender de los patrones de generación de basura en distintos sectores y
                ajustar las rutas de recolección de manera dinámica.
              </p>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">¿Quieres saber más?</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/objetivos">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Ver Objetivos
                </Button>
              </Link>
              <Link href="/beneficios">
                <Button size="lg" variant="outline">
                  Conocer Beneficios
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
