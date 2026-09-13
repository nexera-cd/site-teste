import Link from "next/link";
import { PROFILE } from "@/lib/data";

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background py-12 mt-auto">
      <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex flex-col gap-2">
          <Link href="/" className="font-mono text-xl font-bold tracking-tighter">
            &lt;Alexandre /&gt;
          </Link>
          <p className="text-sm text-muted-foreground max-w-xs">
            {PROFILE.headline}
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="flex flex-col gap-2">
            <h4 className="font-medium">Navigation</h4>
            <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projets</Link>
            <Link href="/skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Compétences</Link>
            <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-medium">Contact</h4>
            <a href={`mailto:${PROFILE.email}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{PROFILE.email}</a>
            <a href={PROFILE.socials.github} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">GitHub</a>
            <a href={PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {PROFILE.name}. Tous droits réservés.
        </p>
        <p className="text-xs text-muted-foreground/50 tracking-wide">
          Site développé par Nexera
        </p>
      </div>
    </footer>
  );
}
