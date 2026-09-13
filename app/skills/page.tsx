import { SectionHeader } from "@/components/ui/SectionHeader";
import { SKILLS } from "@/lib/data";

export default function Skills() {
  return (
    <div className="container mx-auto px-4 max-w-5xl py-24">
      <SectionHeader 
        title="Compétences Techniques" 
        subtitle="Un aperçu de mon stack technique et des outils que j'utilise au quotidien pour concevoir des applications performantes."
      />

      <div className="space-y-16">
        {SKILLS.map((categoryGroup, index) => (
          <section key={index}>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="text-accent font-mono text-xl">0{index + 1}.</span>
              {categoryGroup.category}
              <div className="flex-1 h-px bg-border/50 ml-4 hidden sm:block" />
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {categoryGroup.items.map((skill, i) => (
                <div 
                  key={i} 
                  className="p-4 rounded-xl border border-border/40 bg-card hover:border-accent/30 hover:bg-muted/30 transition-colors group flex flex-col justify-between"
                >
                  <span className="font-bold text-foreground mb-1 group-hover:text-accent transition-colors">{skill.name}</span>
                  <span className="text-xs text-muted-foreground font-mono">{skill.level}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-24 p-8 rounded-2xl bg-accent/5 border border-accent/20">
        <h4 className="text-xl font-bold mb-2">Autres compétences & Soft skills</h4>
        <p className="text-muted-foreground leading-relaxed">
          Au-delà du code, j'accorde une grande importance à la communication, à la gestion de projet (Méthodologies Agiles / Scrum), et à l'architecture logicielle (Clean Architecture, SOLID). J'ai également une bonne sensibilité UI/UX et je suis capable de m'interfacer efficacement avec les designers sur Figma.
        </p>
      </div>
    </div>
  );
}
