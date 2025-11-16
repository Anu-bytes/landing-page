"use client";

import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen pt-24 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center bg-background">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        {/* Left Column - Content */}
        <div className="animate-slide-in-up">
          {/* <div className="inline-block mb-6 px-4 py-2 bg-secondary/15 rounded-full border border-secondary/30">
            <span className="text-sm font-bold text-secondary">Creative Innovation</span>
          </div> */}

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
            Transform Ideas into <span className="text-primary">Digital Excellence</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-xl">
            We craft bespoke digital experiences that captivate, engage, and convert. From concept to deployment,
            excellence is our standard.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all font-bold flex items-center justify-center gap-2 group">
              Start Your Project
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            {/* <button className="px-8 py-4 border-2 border-primary text-foreground rounded-lg hover:bg-primary/5 transition-all font-bold flex items-center justify-center gap-2 group">
              <Play size={18} />
              View Our Work
            </button> */}
          </div>
        </div>

        {/* Right Column - Visual */}
        <div className="relative hidden lg:block animate-scale-in" style={{ animationDelay: "0.2s" }}>
          <div className="relative w-full aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent rounded-3xl" />
            <div className="absolute top-0 right-0 w-72 h-72 bg-secondary/20 rounded-full blur-2xl" />
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

            {/* Central focus element */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 bg-gradient-to-br from-primary to-secondary rounded-2xl rotate-45 shadow-2xl shadow-primary/20 flex items-center justify-center">
                <div className="text-white text-6xl font-bold rotate-[-45deg]">∞</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
