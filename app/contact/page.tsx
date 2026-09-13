"use client";
import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PROFILE } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState<"initial" | "loading" | "success" | "error">("initial");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    budget: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    
    // Simulate API call
    setTimeout(() => {
      // In a real app, we would send this data to an API endpoint
      if (formData.name && formData.email && formData.message) {
        setFormState("success");
      } else {
        setFormState("error");
      }
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 max-w-7xl py-24">
      <SectionHeader 
        title="Me Contacter" 
        subtitle="Un projet en tête ou simplement envie de discuter ? N'hésitez pas à m'envoyer un message, je vous répondrai dans les plus brefs délais."
      />

      <div className="grid lg:grid-cols-5 gap-12 mt-16">
        {/* Contact Info */}
        <div className="lg:col-span-2 space-y-8">
          <div className="p-8 rounded-2xl bg-card border border-border/40">
            <h3 className="text-xl font-bold mb-6">Informations directes</h3>
            
            <div className="space-y-6">
              <a href={`mailto:${PROFILE.email}`} className="flex items-start gap-4 text-muted-foreground hover:text-accent transition-colors group">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:bg-accent/10 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Email</p>
                  <p className="break-all">{PROFILE.email}</p>
                </div>
              </a>
              
              <div className="flex items-start gap-4 text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Localisation</p>
                  <p>{PROFILE.location}</p>
                </div>
              </div>
            </div>
            
            <hr className="my-8 border-border/50" />
            
            <h3 className="text-xl font-bold mb-6">Réseaux</h3>
            <div className="flex gap-4">
              <a href={PROFILE.socials.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href={PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3">
          <div className="p-8 md:p-10 rounded-2xl bg-card border border-border/40">
            {formState === "success" ? (
              <div className="flex flex-col items-center justify-center text-center py-16 space-y-6">
                <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold">Message envoyé !</h3>
                <p className="text-muted-foreground text-lg max-w-md mx-auto">
                  Merci de m'avoir contacté. Je prendrai connaissance de votre message et vous répondrai d'ici 24 à 48 heures.
                </p>
                <Button onClick={() => setFormState("initial")} variant="outline" className="mt-4">
                  Envoyer un autre message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {formState === "error" && (
                  <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 flex items-start gap-3 text-red-500">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <p className="text-sm">Une erreur est survenue. Veuillez vérifier que tous les champs obligatoires sont remplis.</p>
                  </div>
                )}
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Nom complet <span className="text-accent">*</span></label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled={formState === "loading"}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors disabled:opacity-50"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email <span className="text-accent">*</span></label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={formState === "loading"}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors disabled:opacity-50"
                      placeholder="jean@exemple.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">Entreprise</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      disabled={formState === "loading"}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors disabled:opacity-50"
                      placeholder="Nom de l'entreprise"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-sm font-medium">Budget indicatif</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      disabled={formState === "loading"}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors disabled:opacity-50 appearance-none"
                    >
                      <option value="">Sélectionner une option</option>
                      <option value="< 3k€">Moins de 3 000 €</option>
                      <option value="3k€ - 10k€">3 000 € - 10 000 €</option>
                      <option value="10k€ - 30k€">10 000 € - 30 000 €</option>
                      <option value="> 30k€">Plus de 30 000 €</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Votre message <span className="text-accent">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={formState === "loading"}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors disabled:opacity-50 resize-y"
                    placeholder="Parlez-moi de votre projet, de vos objectifs, etc."
                  ></textarea>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full h-14 text-lg gap-2"
                  disabled={formState === "loading"}
                >
                  {formState === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Envoyer le message
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
