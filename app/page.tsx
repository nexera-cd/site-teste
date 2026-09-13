import Link from "next/link";
import { ArrowRight, Code2, Terminal, Database, Server, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PROFILE, PROJECTS, SERVICES, EXPERIENCES } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Subtle background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-mono mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              {PROFILE.availability}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              {PROFILE.role.split(' ').map((word, i) => 
                word === '&' ? <span key={i} className="text-muted-foreground font-light mx-2">&</span> : <span key={i}>{word} </span>
              )}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              {PROFILE.headline}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link href="/projects" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto gap-2 group text-base h-12 px-8">
                  Voir mes projets
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-base h-12 px-8">
                  Me contacter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-border/40 bg-card/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border/40">
            {PROFILE.stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center text-center px-4">
                <span className="text-4xl md:text-5xl font-bold font-mono text-foreground mb-2">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Projects */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeader 
            title="Projets Récents" 
            subtitle="Une sélection de mes travaux récents, démontrant mon expertise technique et mon approche centrée sur l'utilisateur."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {PROJECTS.slice(0, 3).map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="flex justify-center">
            <Link href="/projects">
              <Button variant="outline" size="lg" className="gap-2">
                Voir tous les projets
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Expertise & Skills Preview */}
      <section className="py-24 bg-card/30 border-y border-border/40">
        <div className="container mx-auto px-4 max-w-7xl">
          <SectionHeader 
            title="Domaines d'Expertise" 
            subtitle="De la conception de l'architecture à l'intégration pixel-perfect, je couvre l'ensemble du cycle de développement."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-border/40 bg-background hover:border-accent/30 transition-colors">
              <Terminal className="w-10 h-10 text-accent mb-6" />
              <h3 className="text-xl font-bold mb-4">Front-End</h3>
              <p className="text-muted-foreground mb-6">
                Création d'interfaces modernes, réactives et accessibles avec React, Next.js et Tailwind CSS.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'Tailwind'].map(tech => (
                  <span key={tech} className="px-2 py-1 text-xs font-mono bg-muted rounded">{tech}</span>
                ))}
              </div>
            </div>
            
            <div className="p-8 rounded-2xl border border-border/40 bg-background hover:border-accent/30 transition-colors">
              <Server className="w-10 h-10 text-accent mb-6" />
              <h3 className="text-xl font-bold mb-4">Back-End</h3>
              <p className="text-muted-foreground mb-6">
                Développement d'APIs robustes et d'architectures serveurs scalables avec Node.js.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express', 'NestJS', 'REST/GraphQL'].map(tech => (
                  <span key={tech} className="px-2 py-1 text-xs font-mono bg-muted rounded">{tech}</span>
                ))}
              </div>
            </div>
            
            <div className="p-8 rounded-2xl border border-border/40 bg-background hover:border-accent/30 transition-colors">
              <Database className="w-10 h-10 text-accent mb-6" />
              <h3 className="text-xl font-bold mb-4">Base de données & DevOps</h3>
              <p className="text-muted-foreground mb-6">
                Modélisation de données et déploiement continu pour des applications performantes.
              </p>
              <div className="flex flex-wrap gap-2">
                {['PostgreSQL', 'MongoDB', 'Docker', 'CI/CD'].map(tech => (
                  <span key={tech} className="px-2 py-1 text-xs font-mono bg-muted rounded">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vous avez un projet ? <br/>
            <span className="text-muted-foreground font-normal">Construisons-le ensemble.</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Je suis disponible pour de nouvelles missions en freelance ou des opportunités à temps plein. Discutons de vos besoins.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="h-14 px-8 text-lg w-full sm:w-auto">
                Démarrer une conversation
              </Button>
            </Link>
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg gap-2 w-full sm:w-auto">
                <Download className="w-5 h-5" />
                Télécharger mon CV
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
