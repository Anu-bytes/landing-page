'use client'

import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at TechStart',
    quote: 'Anubyte transformed our vision into reality with exceptional craftsmanship.',
    rating: 5,
    initials: 'SJ'
  },
  {
    name: 'Mike Chen',
    role: 'Founder at GrowthCo',
    quote: 'Outstanding quality and attention to detail in every aspect of delivery.',
    rating: 5,
    initials: 'MC'
  },
  {
    name: 'Emma Davis',
    role: 'Product Manager at InnovateLabs',
    quote: 'True partnership that exceeded all expectations. Highly recommended.',
    rating: 5,
    initials: 'ED'
  }
]

export default function Testimonials() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-card relative overflow-hidden section-divider">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            What Clients <span className="text-secondary">Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Trusted by innovative companies worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-8 border border-border hover:border-primary hover:shadow-lg hover:-translate-y-1 transition-all animate-slide-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                  <span className="text-xs font-bold text-primary">{testimonial.initials}</span>
                </div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed italic">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
