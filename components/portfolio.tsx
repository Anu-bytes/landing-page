'use client'

import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Next-generation marketplace with AI recommendations',
    bg: 'bg-gradient-to-br from-primary/20 to-secondary/10'
  },
  {
    title: 'Fitness Tracking App',
    category: 'Mobile Development',
    description: 'Native fitness companion with real-time analytics',
    bg: 'bg-gradient-to-br from-secondary/20 to-primary/10'
  },
  {
    title: 'Cloud Analytics',
    category: 'Cloud Solutions',
    description: 'Real-time data visualization with ML insights',
    bg: 'bg-gradient-to-br from-accent/20 to-primary/10'
  },
  {
    title: 'Enterprise SaaS',
    category: 'Web Development',
    description: 'Workflow automation for enterprise teams',
    bg: 'bg-gradient-to-br from-primary/20 to-accent/10'
  }
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden section-divider">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Showcase of <span className="text-secondary">Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Real projects that demonstrate our expertise and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[300px]">
          {projects.map((project, index) => {
            const colSpan = index === 0 ? 'lg:col-span-2' : ''
            const rowSpan = index === 0 ? 'lg:row-span-2' : ''
            
            return (
              <div
                key={index}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-border hover:border-primary transition-all duration-300 hover:shadow-xl ${colSpan} ${rowSpan} animate-slide-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 ${project.bg}`} />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
                
                <div className="relative h-full p-8 flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-lg bg-primary/20 text-primary text-xs font-bold mb-4 border border-primary/30">
                      {project.category}
                    </span>
                  </div>
                  <div className="group-hover:translate-y-0 translate-y-4 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      {project.description}
                    </p>
                    <button className="flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all">
                      View Case
                      <ArrowUpRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
