import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  LayoutDashboard,
  CheckSquare,
  Users,
  BarChart3,
  Calendar,
  MessageSquare,
  FileText,
  Clock,
  Target,
  Workflow,
  Bell,
  Lock,
} from "lucide-react"
import Link from "next/link"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight">
            Powerful features for <span className="text-primary">every team</span>
          </h1>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Everything you need to plan, track, and deliver successful projects in one integrated platform
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <LayoutDashboard className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Project Dashboard</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Centralized view of all your projects with real-time status updates, progress tracking, and key metrics
                at a glance.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Customizable widgets</li>
                <li>• Real-time data sync</li>
                <li>• Multiple view options</li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CheckSquare className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Task Management</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Create, assign, and organize tasks with subtasks, dependencies, priorities, and custom fields for
                complete control.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Drag-and-drop interface</li>
                <li>• Task dependencies</li>
                <li>• Custom workflows</li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Team Collaboration</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Built-in communication tools including comments, mentions, file sharing, and real-time updates keep
                everyone aligned.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• @mentions and notifications</li>
                <li>• File attachments</li>
                <li>• Activity feeds</li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <BarChart3 className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Analytics & Reporting</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Generate comprehensive reports with customizable charts, graphs, and data exports to track team
                performance.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Custom report builder</li>
                <li>• Export to PDF/Excel</li>
                <li>• Automated scheduling</li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <Calendar className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Timeline & Gantt</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Visualize project schedules with interactive Gantt charts, timeline views, and milestone tracking for
                better planning.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Interactive Gantt charts</li>
                <li>• Milestone tracking</li>
                <li>• Resource allocation</li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <MessageSquare className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-3">Real-time Chat</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Integrated messaging system for quick discussions, team channels, and direct messages without leaving
                the platform.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Team channels</li>
                <li>• Direct messaging</li>
                <li>• Message history</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Additional Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-6 rounded-lg border border-border hover:bg-muted/50 transition-colors">
              <FileText className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Document Management</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Store, organize, and share project documents with version control and access permissions
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-lg border border-border hover:bg-muted/50 transition-colors">
              <Clock className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Time Tracking</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Track time spent on tasks and projects with built-in timers and manual entry options
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-lg border border-border hover:bg-muted/50 transition-colors">
              <Target className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Goal Setting</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Define and track team goals with progress indicators and achievement milestones
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-lg border border-border hover:bg-muted/50 transition-colors">
              <Workflow className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Workflow Automation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Automate repetitive tasks with custom rules, triggers, and actions to save time
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-lg border border-border hover:bg-muted/50 transition-colors">
              <Bell className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Smart Notifications</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Customizable alerts via email, push, and in-app notifications to stay informed
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-lg border border-border hover:bg-muted/50 transition-colors">
              <Lock className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Advanced Security</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Enterprise-grade security with SSO, 2FA, role-based access, and data encryption
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-balance leading-tight">
            Experience all features with a free trial
          </h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            No credit card required. Start managing your projects better today.
          </p>
          <Link href="/contact">
            <Button size="lg" className="text-base px-8">
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
