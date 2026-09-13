import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SERVICES, TESTIMONIALS } from "@/lib/data";
import { Code2, Layout, Zap, Server, CheckCircle2, MessageSquareQuote } from "lucide-react";
import { Button } from "@/components/ui/button";

const iconMap = {
  code: Code2,
  layout: Layout,
  zap: Zap,
  server: Server
};

export default function Services() {
  return (
    <div className="container mx-auto px-4 max-w-7xl py-24">
      <SectionHeader 
        title="Mes Services" 
        subtitle="Je vous accompagne dans la réalisation de vos projets web, de la conception à la mise en production."
        align="center"
      />

      <div className="grid md:grid-cols-2 gap-8 mt-16 mb-32">
        {SERVICES.map((service, index) => {
          const Icon = iconMap[service.icon as keyof typeof iconMap] || Code2;
          return (
            <div key={index} className="p-8 rounded-2xl bg-card border border-border/40 hover:border-accent/40 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Testimonials */}
      <div className="mb-32">
        <SectionHeader title="Ils m'ont fait confiance" align="center" />
        <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
          {TESTIMONIALS.map(testimonial => (
            <div key={testimonial.id} className="p-8 rounded-2xl bg-muted/30 border border-border/40 relative">
              <MessageSquareQuote className="absolute top-8 right-8 w-8 h-8 text-accent/20" />
              <p className="text-lg leading-relaxed text-foreground/90 italic mb-6">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role} @ {testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center bg-accent/5 border border-accent/20 rounded-3xl p-12 md:p-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à donner vie à votre projet ?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Contactez-moi pour discuter de vos besoins techniques et voir comment nous pouvons collaborer.
        </p>
        <Link href="/contact">
          <Button size="lg" className="h-14 px-8 text-lg">
            Me contacter maintenant
          </Button>
        </Link>
      </div>
    </div>
  );
}
