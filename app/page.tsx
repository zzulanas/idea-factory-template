import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Home() {
  const features = [
    { name: "Next.js 15", description: "App Router with Server Components", icon: "⚡" },
    { name: "TypeScript", description: "Full type safety", icon: "🔷" },
    { name: "tRPC", description: "End-to-end type-safe APIs", icon: "🔗" },
    { name: "Drizzle ORM", description: "Lightweight, type-safe database client", icon: "💧" },
    { name: "PostgreSQL", description: "Powerful relational database", icon: "🐘" },
    { name: "Redis", description: "Caching and pub/sub", icon: "🔴" },
    { name: "MinIO", description: "S3-compatible object storage", icon: "📦" },
    { name: "Shadcn/ui", description: "Beautiful, accessible components", icon: "🎨" },
    { name: "Tailwind CSS", description: "Utility-first styling", icon: "💨" },
  ];

  const services = [
    { name: "PostgreSQL", url: "http://192.168.1.197:5050", description: "pgAdmin", icon: "🐘" },
    { name: "Redis", url: "http://192.168.1.197:8082", description: "Redis Commander", icon: "🔴" },
    { name: "MinIO", url: "http://192.168.1.197:9001", description: "Console", icon: "📦" },
    { name: "Dokploy", url: "http://192.168.1.197:3000", description: "Deployment Platform", icon: "🚀" },
  ];

  return (
    <div className="min-h-screen bg-gradient-mesh">
      <main className="container mx-auto px-4 py-20 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge variant="glass" className="mb-6 px-4 py-1.5">
            ✨ Idea Factory Template
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Build Full-Stack Apps in{" "}
            <span className="text-gradient">Minutes</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            A modern Next.js template with everything you need for rapid prototyping.
            From database to deployment, all pre-configured and ready to go.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="gradient" size="lg">
              Get Started
            </Button>
            <Button variant="glass" size="lg">
              View Documentation
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <Badge variant="outline" className="mb-3">Tech Stack</Badge>
            <h2 className="text-3xl font-bold tracking-tight">Everything You Need</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature) => (
              <Card key={feature.name} variant="glass">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{feature.icon}</span>
                    <div>
                      <CardTitle className="text-lg">{feature.name}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Infrastructure Services */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <Badge variant="outline" className="mb-3">Infrastructure</Badge>
            <h2 className="text-3xl font-bold tracking-tight">Connected Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((service) => (
              <Card key={service.name} variant="glass">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{service.icon}</span>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{service.name}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </div>
                    <a
                      href={service.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm">
                        Open →
                      </Button>
                    </a>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <Card variant="glass-intense" className="mb-20">
          <CardHeader>
            <Badge variant="gradient" className="w-fit mb-2">Quick Start</Badge>
            <CardTitle className="text-2xl">Getting Started</CardTitle>
            <CardDescription className="text-base">Everything you need to start building</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <span className="text-lg">📚</span> Documentation
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Check out <code className="glass px-2 py-1 rounded-lg text-xs">CLAUDE_CODE.md</code> for guides on:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><span className="text-primary">•</span> Database operations with Drizzle ORM</li>
                  <li className="flex items-center gap-2"><span className="text-primary">•</span> Building type-safe APIs with tRPC</li>
                  <li className="flex items-center gap-2"><span className="text-primary">•</span> Caching strategies with Redis</li>
                  <li className="flex items-center gap-2"><span className="text-primary">•</span> File storage with S3/MinIO</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <span className="text-lg">🚀</span> Quick Commands
                </h3>
                <div className="space-y-2 text-sm font-mono">
                  <div className="glass glass-border p-3 rounded-xl flex items-center justify-between">
                    <span>npm run dev</span>
                    <span className="text-muted-foreground text-xs">Start dev</span>
                  </div>
                  <div className="glass glass-border p-3 rounded-xl flex items-center justify-between">
                    <span>npm run db:studio</span>
                    <span className="text-muted-foreground text-xs">DB GUI</span>
                  </div>
                  <div className="glass glass-border p-3 rounded-xl flex items-center justify-between">
                    <span>npm run db:push</span>
                    <span className="text-muted-foreground text-xs">Sync schema</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center">
          <Card variant="glass-subtle" className="inline-block">
            <CardContent className="py-6 px-8">
              <p className="text-sm text-muted-foreground">
                Built with Next.js, tRPC, Drizzle, and Shadcn/ui
              </p>
              <p className="text-xs text-muted-foreground/70 mt-2">
                Deploy with Dokploy (local) or Vercel (cloud)
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
