import { Github, Linkedin, Mail, MessageCircle, Network } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const collaborationAreas = [
  'formalized mathematical AI and Lean-based domain libraries',
  'auditable AI evaluation and benchmark design',
  'RAG, MCP, and agent-readable knowledge systems',
  'applied AI products in education, science, medicine, and public institutions',
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <Navigation />
      <main className="px-6 pt-32 pb-24">
        <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <Badge className="bg-slate-900 text-white hover:bg-slate-800">contact</Badge>
            <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">Talk to me if the domain is messy.</h1>
            <p className="text-lg leading-8 text-slate-600">
              I am most interested in projects where knowledge needs to become operational: formalized, searchable, verifiable, or useful enough to become a real product.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-slate-200 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-blue-600" />
                  Public contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button asChild size="lg" className="w-full justify-start gap-3 bg-slate-900 text-white hover:bg-slate-800">
                  <a href="mailto:bjh3641@gmail.com">
                    <Mail className="h-5 w-5" />
                    bjh3641@gmail.com
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full justify-start gap-3">
                  <a href="https://github.com/LeGenAI" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    GitHub / LeGenAI
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full justify-start gap-3">
                  <a href="https://www.linkedin.com/in/jae-hyun-baek-516899227" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-blue-100 bg-blue-50 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Network className="h-5 w-5 text-blue-700" />
                  Good reasons to reach out
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm leading-6 text-slate-700">
                  {collaborationAreas.map((area) => (
                    <li key={area} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
