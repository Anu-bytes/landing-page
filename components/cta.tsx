"use client";

import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden section-divider">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
              Ready to Build Something <span className="text-primary">Extraordinary</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Let's partner on your next ambitious project. Our team is ready to bring your vision to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all font-bold flex items-center justify-center gap-2 group">
                Schedule Consultation
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-primary text-foreground rounded-lg hover:bg-primary/5 transition-all font-bold">
                Get in Touch
              </button>
            </div>
          </div>

          <div className="relative hidden lg:block animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-secondary/10 to-transparent rounded-3xl" />
              <div className="absolute top-0 left-0 w-80 h-80 bg-primary/15 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/15 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
