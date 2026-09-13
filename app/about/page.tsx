import { SectionHeader } from "@/components/ui/SectionHeader";
import { PROFILE } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function About() {
  const steps = [
    { title: "Comprendre le besoin", desc: "Analyse approfondie des objectifs métier et des contraintes techniques." },
    { title: "Concevoir la solution", desc: "Architecture système, choix des technologies et prototypage UI/UX." },
    { title: "Développer", desc: "Écriture d'un code propre, modulaire, documenté et testé." },
    { title: "Tester", desc: "Tests unitaires, d'intégration et E2E pour garantir la robustesse." },
    { title: "Déployer", desc: "Mise en production sécurisée via des pipelines CI/CD automatisés." },
    { title: "Améliorer", desc: "Monitoring, analyse des retours et itérations continues." },
  ];

  return (
    <div className="container mx-auto px-4 max-w-7xl py-24">
      <SectionHeader 
        title="À propos de moi" 
        subtitle="Développeur passionné par la création de produits numériques exceptionnels, avec une approche centrée sur la qualité et l'expérience utilisateur."
      />

      <div className="grid md:grid-cols-2 gap-12 items-start mb-24">
        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
          <p>
            Je suis {PROFILE.name}, {PROFILE.role} avec plus de 5 ans d'expérience dans la conception et le développement d'applications web et de plateformes SaaS.
          </p>
          <p>
            Mon parcours m'a amené à travailler sur des projets variés, allant de la startup innovante à l'entreprise établie, en passant par des agences digitales créatives. J'ai acquis une solide expertise sur l'ensemble de la stack technique, avec une affinité particulière pour l'écosystème JavaScript/TypeScript (React, Next.js, Node.js).
          </p>
          <p>
            Ce qui me motive au quotidien, c'est de résoudre des problèmes complexes par des solutions simples, élégantes et maintenables. Je crois fermement qu'un bon code doit être lisible, testé et pensé pour évoluer.
          </p>
        </div>
        <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-muted border border-border/50">
          <Image 
            src="https://picsum.photos/seed/developer/800/800" 
            alt="Alexandre Dubois - Espace de travail" 
            fill 
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      <div className="mb-24">
        <h3 className="text-3xl font-bold mb-12 text-center">Ma façon de travailler</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4 p-6 rounded-xl bg-card border border-border/40 hover:border-accent/30 transition-colors">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center font-mono font-bold">
                {index + 1}
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-card/50 rounded-3xl p-8 md:p-12 border border-border/40">
        <h3 className="text-2xl font-bold mb-8">Ce qui me distingue</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Vision Produit : Je ne me contente pas d'écrire du code, je m'investis dans la réussite du produit final.",
            "Sens du détail : Perfectionniste sur les finitions UI, les animations et la typographie.",
            "Performance First : Optimisation systématique du temps de chargement et de la fluidité.",
            "Veille technologique : Toujours à jour sur les dernières avancées de l'écosystème web (Server Components, Edge computing)."
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
              <p className="text-muted-foreground leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
