import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import { ARTICLES } from "@/lib/data";

export default async function ArticleDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = ARTICLES.find(a => a.id === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 max-w-3xl py-12 md:py-24">
      <Link href="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Retour aux articles
      </Link>

      <header className="mb-12">
        <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground font-mono">
          <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {article.date}</div>
          <div className="w-1 h-1 rounded-full bg-border" />
          <div className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {article.readingTime}</div>
          <div className="w-1 h-1 rounded-full bg-border" />
          <div className="flex items-center gap-1.5 text-accent">{article.category}</div>
        </div>
        
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">{article.title}</h1>
        
        <div className="flex flex-wrap gap-2 mt-6">
          {article.tags.map((tag, i) => (
            <span key={i} className="px-2.5 py-1 bg-muted text-xs font-medium rounded-md border border-border/50">
              #{tag}
            </span>
          ))}
        </div>
      </header>

      {/* Fake Article Content */}
      <article className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-a:text-accent hover:prose-a:text-accent/80">
        <p className="lead text-xl text-muted-foreground mb-8">
          {article.excerpt}
        </p>
        
        <h2>Introduction</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.
        </p>
        
        <h3>1. L'importance de l'architecture</h3>
        <p>
          Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.
        </p>
        
        <pre className="bg-muted p-4 rounded-xl border border-border/50 overflow-x-auto my-6 font-mono text-sm">
          <code>
{`// Exemple de code
export default function Component() {
  return (
    <div className="container">
      <h1>Hello World</h1>
    </div>
  )
}`}
          </code>
        </pre>

        <h3>2. Gestion des performances</h3>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
        
        <h2>Conclusion</h2>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </p>
      </article>
    </div>
  );
}
