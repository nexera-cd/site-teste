import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    technologies: string[];
    demoUrl: string;
    githubUrl: string;
  };
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <div className={cn("group flex flex-col bg-card border border-border/50 rounded-lg overflow-hidden transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_30px_-15px_var(--color-accent)]", className)}>
      <div className="relative aspect-video overflow-hidden bg-muted">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
      </div>
      
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-mono text-accent">{project.category}</span>
          <div className="flex items-center gap-2 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
        
        <Link href={`/projects/${project.id}`} className="block">
          <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
        </Link>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-md border border-border/50">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 text-xs font-medium bg-background text-muted-foreground rounded-md border border-border/50">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
