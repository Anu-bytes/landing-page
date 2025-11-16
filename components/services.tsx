"use client";

import { Globe, Smartphone, Cloud, Palette, Zap, Shield } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Scalable, responsive applications built with cutting-edge frameworks",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Native and cross-platform solutions delivering seamless experiences",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Robust infrastructure built on leading cloud platforms",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Human-centered design that captivates and converts",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Lightning-fast optimization for peak user experience",
  },
  {
    icon: Shield,
    title: "Security",
    description: "Enterprise-grade protection and compliance standards",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-4 sm:px-6 lg:px-8 bg-card relative overflow-hidden section-divider">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            What We <span className="text-primary">Deliver</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A complete suite of services designed to elevate your digital presence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isLarge = index % 6 === 0 || index % 6 === 4;

            return (
              <div
                key={index}
                className={`group relative animate-slide-in-up ${isLarge ? "lg:col-span-1 lg:row-span-1" : ""}`}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="h-full bg-background rounded-2xl p-8 border border-border hover:border-primary transition-all duration-300 hover:shadow-lg group-hover:-translate-y-2">
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Icon size={28} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
