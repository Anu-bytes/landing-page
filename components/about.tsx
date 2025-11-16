"use client";

export default function About() {
  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 bg-card relative overflow-hidden section-divider">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="animate-slide-in-up">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
              About <span className="text-primary">Anubyte</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Anubyte is a forward-thinking software studio delivering next-generation digital solutions. We blend
              artistry with engineering excellence to create products that inspire and transform.
            </p>

            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Since our inception, we've partnered with ambitious companies worldwide, empowering them to lead their
              industries through innovative technology and creative vision.
            </p>

            {/* Stats Grid */}
            {/* <div className="grid grid-cols-3 gap-6">
              <div className="animate-slide-in-up" style={{ animationDelay: "0.1s" }}>
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <div className="animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
                <div className="text-4xl font-bold text-secondary mb-2">30+</div>
                <p className="text-sm text-muted-foreground">Clients</p>
              </div>
              <div className="animate-slide-in-up" style={{ animationDelay: "0.3s" }}>
                <div className="text-4xl font-bold text-primary mb-2">12+</div>
                <p className="text-sm text-muted-foreground">Team</p>
              </div>
            </div> */}
          </div>

          {/* Right - Values */}
          <div className="space-y-6 animate-scale-in" style={{ animationDelay: "0.2s" }}>
            {[
              { icon: "🎯", title: "Our Mission", desc: "Empower businesses with transformative software" },
              { icon: "💡", title: "Our Vision", desc: "Define the future of digital innovation" },
              { icon: "⚡", title: "Our Values", desc: "Innovation, Excellence, Integrity, Partnership" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-background rounded-2xl p-8 border border-border hover:border-primary transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
