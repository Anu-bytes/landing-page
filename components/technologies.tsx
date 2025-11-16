"use client";

export default function Technologies() {
  const categories = {
    Mobile: ["Flutter", "React Native", "Ionic"],
    Frontend: ["React", "Next.js", "Vue.js", "Angular"],
    Backend: ["Node.js", ".NET", "Flask", "Laravel"],
    AI: ["OpenAI", "Google AI", "Azure AI", "AWS AI"],
    Database: ["SQL", "MySQL", "MongoDB", "Redis", "Supabase", "Firebase", "PostgreSQL"],
  };

  return (
    <section
      id="tech-stack"
      className="py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden section-divider"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Tech <span className="text-primary">Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Built with industry-leading technologies and best practices
          </p>
        </div>

        <div className="space-y-16">
          {Object.entries(categories).map(([category, techs], catIndex) => (
            <div key={category} className="animate-slide-in-up" style={{ animationDelay: `${catIndex * 0.1}s` }}>
              <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                <span className="w-2 h-8 bg-gradient-to-b from-primary to-secondary rounded-full" />
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {techs.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl p-6 border border-border hover:border-primary hover:shadow-lg hover:bg-primary/5 transition-all text-center font-semibold text-foreground group cursor-pointer hover:-translate-y-1"
                  >
                    <span className="group-hover:text-primary transition-colors">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
