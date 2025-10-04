import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Target, Users, Lightbulb, Award } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight">
              Building the future of <span className="text-primary">project management</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              We're on a mission to help teams work smarter, collaborate better, and achieve more together
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10">
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <img
                    src="/modern-office-team.png"
                    alt="Our Team"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </Card>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                ProjectHub was founded in 2020 by a team of experienced project managers and software engineers who were
                frustrated with the complexity of existing project management tools.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believed there had to be a better way—a platform that was powerful enough for enterprise teams yet
                simple enough for anyone to use. Today, we're proud to serve over 10,000 teams worldwide.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our commitment to innovation, user experience, and customer success drives everything we do. We're
                constantly evolving our platform based on feedback from our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Our Values</h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
              The principles that guide our work and shape our culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Customer First</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every decision we make starts with our customers' needs and success in mind
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe the best solutions come from diverse teams working together
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <Lightbulb className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-muted-foreground leading-relaxed">
                We continuously push boundaries to create better tools and experiences
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-muted-foreground leading-relaxed">
                We're committed to delivering the highest quality in everything we do
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">By the Numbers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="text-5xl font-bold text-primary">10k+</div>
              <div className="text-lg text-muted-foreground">Active Teams</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-5xl font-bold text-primary">500k+</div>
              <div className="text-lg text-muted-foreground">Projects Managed</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-5xl font-bold text-primary">150+</div>
              <div className="text-lg text-muted-foreground">Countries</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-5xl font-bold text-primary">99.9%</div>
              <div className="text-lg text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
              Passionate professionals dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={`/professional-headshot.png?height=128&width=128&query=professional headshot ${i}`}
                    alt={`Team Member ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">Team Member</h3>
                <p className="text-muted-foreground mb-4">Position Title</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Passionate about building tools that help teams succeed
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight">Join us on our journey</h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Be part of the future of project management
          </p>
          <Link href="/contact">
            <Button size="lg" className="text-base px-8">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
