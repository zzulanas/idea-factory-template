import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const features = [
    { name: "Next.js 15", description: "App Router with Server Components" },
    { name: "TypeScript", description: "Full type safety" },
    { name: "tRPC", description: "End-to-end type-safe APIs" },
    { name: "Drizzle ORM", description: "Lightweight, type-safe database client" },
    { name: "PostgreSQL", description: "Powerful relational database" },
    { name: "Redis", description: "Caching and pub/sub" },
    { name: "MinIO", description: "S3-compatible object storage" },
    { name: "Shadcn/ui", description: "Beautiful, accessible components" },
    { name: "Tailwind CSS", description: "Utility-first styling" },
  ];

  const services = [
    { name: "PostgreSQL", url: "http://192.168.1.197:5050", description: "pgAdmin" },
    { name: "Redis", url: "http://192.168.1.197:8082", description: "Redis Commander" },
    { name: "MinIO", url: "http://192.168.1.197:9001", description: "Console" },
    { name: "Coolify", url: "http://100.99.86.40:8000", description: "Deployment Platform" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <main className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="outline">
            Idea Factory Template
          </Badge>
          <h1 className="text-5xl font-bold tracking-tight mb-4">
            Build Full-Stack Apps in{" "}
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Minutes
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A modern Next.js template with everything you need for rapid prototyping.
            From database to deployment, all pre-configured and ready to go.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature) => (
              <Card key={feature.name}>
                <CardHeader>
                  <CardTitle className="text-lg">{feature.name}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Infrastructure Services */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">Infrastructure Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service) => (
              <Card key={service.name}>
                <CardHeader>
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href={service.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm"
                  >
                    {service.url} →
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <Card className="bg-gradient-to-br from-blue-50 to-violet-50 dark:from-blue-950 dark:to-violet-950 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>Everything you need to start building</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <h3 className="font-semibold mb-2">📚 Documentation</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Check out <code className="bg-white dark:bg-gray-900 px-2 py-1 rounded">CLAUDE_CODE.md</code> for comprehensive guides on:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">
                <li>Database operations with Drizzle ORM</li>
                <li>Building type-safe APIs with tRPC</li>
                <li>Caching strategies with Redis</li>
                <li>File storage with S3/MinIO</li>
                <li>Adding authentication (Clerk)</li>
                <li>Deployment guides</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">🚀 Quick Commands</h3>
              <div className="space-y-2 text-sm">
                <div className="bg-white dark:bg-gray-900 p-3 rounded font-mono">
                  npm run dev <span className="text-gray-500"># Start development</span>
                </div>
                <div className="bg-white dark:bg-gray-900 p-3 rounded font-mono">
                  npm run db:studio <span className="text-gray-500"># Open database GUI</span>
                </div>
                <div className="bg-white dark:bg-gray-900 p-3 rounded font-mono">
                  npm run db:push <span className="text-gray-500"># Sync database schema</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">💡 What to Build</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                This template is perfect for SaaS MVPs, internal tools, dashboards,
                API-first applications, and more. Start with the example schema in{" "}
                <code className="bg-white dark:bg-gray-900 px-2 py-1 rounded">db/schema.ts</code> and
                the tRPC routers in{" "}
                <code className="bg-white dark:bg-gray-900 px-2 py-1 rounded">lib/server/routers/</code>.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-16 text-center text-sm text-gray-500">
          <p>Built with Next.js, tRPC, Drizzle, and Shadcn/ui</p>
          <p className="mt-2">
            Ready to deploy? Use Coolify for local hosting or Vercel for cloud deployment.
          </p>
        </div>
      </main>
    </div>
  );
}
