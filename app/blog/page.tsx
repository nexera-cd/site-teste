import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ARTICLES } from "@/lib/data";
import { Clock, Calendar, ArrowRight } from "lucide-react";

export default function Blog() {
  return (
    <div className="container mx-auto px-4 max-w-5xl py-24">
      <SectionHeader 
        title="Blog & Ressources" 
        subtitle="Mes réflexions, retours d'expérience et tutoriels sur le développement web et l'ingénierie logicielle."
      />

      <div className="space-y-12 mt-16">
        {ARTICLES.map((article) => (
          <article key={article.id} className="group relative grid md:grid-cols-4 gap-4 md:gap-8 items-start p-6 rounded-2xl border border-transparent hover:border-border/40 hover:bg-card/50 transition-colors">
            <div className="md:col-span-1 flex flex-col gap-2 text-sm text-muted-foreground pt-1">
              <span className="flex items-center gap-1.5 font-mono"><Calendar className="w-4 h-4" /> {article.date}</span>
              <span className="flex items-center gap-1.5 font-mono"><Clock className="w-4 h-4" /> {article.readingTime}</span>
            </div>
            
            <div className="md:col-span-3">
              <Link href={`/blog/${article.id}`} className="absolute inset-0 z-10">
                <span className="sr-only">Lire l'article</span>
              </Link>
              <div className="flex gap-2 mb-3">
                <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-md">
                  {article.category}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                {article.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {article.excerpt}
              </p>
              <div className="flex items-center text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                Lire la suite <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
