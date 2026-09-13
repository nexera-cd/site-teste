import { SectionHeader } from "@/components/ui/SectionHeader";
import { EXPERIENCES } from "@/lib/data";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  return (
    <div className="container mx-auto px-4 max-w-4xl py-24">
      <SectionHeader 
        title="Parcours Professionnel" 
        subtitle="Mon évolution à travers différentes entreprises et projets, démontrant ma capacité à m'adapter et à livrer de la valeur."
      />

      <div className="relative border-l border-border/60 ml-4 md:ml-6 mt-16 space-y-16">
        {EXPERIENCES.map((exp, index) => (
          <div key={exp.id} className="relative pl-8 md:pl-12">
            {/* Timeline Dot */}
            <div className="absolute left-0 top-0 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-2 border-accent flex items-center justify-center">
              <Briefcase className="w-4 h-4 text-accent" />
            </div>

            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
              <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
              <span className="flex items-center gap-1.5 text-sm font-mono text-accent mt-1 md:mt-0">
                <Calendar className="w-4 h-4" />
                {exp.period}
              </span>
            </div>
            
            <h4 className="text-lg font-medium text-muted-foreground mb-4">{exp.company}</h4>
            
            <p className="text-foreground/80 mb-6 leading-relaxed">
              {exp.description}
            </p>

            <div className="mb-6">
              <h5 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wider">Réalisations principales</h5>
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-accent mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                    {resp}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, i) => (
                <span key={i} className="px-2.5 py-1 text-xs font-mono bg-muted text-foreground rounded-md border border-border/50">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
