import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, Calendar, Tag, User } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import { Button } from "@/components/ui/button";

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = PROJECTS.find(p => p.id === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 max-w-5xl py-12 md:py-24">
      <Link href="/projects" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Retour aux projets
      </Link>

      <header className="mb-12">
        <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground font-mono">
          <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {project.year}</div>
          <div className="w-1 h-1 rounded-full bg-border" />
          <div className="flex items-center gap-1.5"><Tag className="w-4 h-4" /> {project.category}</div>
          <div className="w-1 h-1 rounded-full bg-border" />
          <div className="flex items-center gap-1.5"><User className="w-4 h-4" /> {project.role}</div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">{project.title}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-8">{project.description}</p>
        
        <div className="flex flex-wrap gap-4">
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            <Button className="gap-2">
              <ExternalLink className="w-4 h-4" />
              Voir le projet
            </Button>
          </a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="gap-2">
              <Github className="w-4 h-4" />
              Code source
            </Button>
          </a>
        </div>
      </header>

      <div className="relative aspect-video rounded-2xl overflow-hidden bg-muted mb-16 border border-border/50">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
          priority
        />
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">Contexte</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{project.context}</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">Le Problème</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{project.problem}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">La Solution</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{project.solution}</p>
          </section>
        </div>

        <div className="space-y-12">
          <section className="bg-card p-6 rounded-xl border border-border/40">
            <h3 className="font-bold mb-4 text-lg">Fonctionnalités clés</h3>
            <ul className="space-y-3">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="font-bold mb-4 text-lg">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span key={i} className="px-3 py-1.5 bg-muted text-foreground text-sm font-mono rounded-md border border-border/50">
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
