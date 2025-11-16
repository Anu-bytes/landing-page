"use client";

import Link from "next/link";
import { Mail, Linkedin, ArrowRight, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-foreground text-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 pb-20 border-b border-background/10">
          <div>
            <h3 className="text-4xl md:text-5xl font-bold text-background mb-6">
              Ready to Build Something <span className="text-secondary">Extraordinary</span>?
            </h3>
            <p className="text-background/70 text-lg leading-relaxed">
              Let's collaborate on your next digital project and bring your vision to reality.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all font-bold flex items-center justify-center gap-2 group">
              Get in Touch
              <ArrowRight size={20} className="group-hover:translate-x-1" />
            </button>
            <p className="text-background/60 text-sm">or email us at hello@anubyte.com</p>
          </div>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-6">
          <div>
            <h3 className="text-2xl font-bold text-background mb-4">Anubyte</h3>
            <p className="text-background/70 leading-relaxed">Premium software solutions for innovative businesses.</p>
          </div>

          {[
            {
              title: "Services",
              items: [
                { label: "Mobile App Development", href: "#tech-stack" },
                { label: "Web Development", href: "#tech-stack" },
              ],
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#about" },
                { label: "Contact", href: "#contact" },
              ],
            },
            {
              title: "Connect",
              items: [],
            },
          ].map((col, idx) => (
            <div key={idx}>
              {col.items.length > 0 ? (
                <>
                  <h4 className="font-bold text-background mb-6">{col.title}</h4>
                  <ul className="space-y-3 text-background/70">
                    {col.items.map((item) => {
                      const itemLabel = typeof item === "string" ? item : item.label;
                      const itemHref = typeof item === "string" ? "#" : item.href;
                      return (
                        <li key={itemLabel}>
                          <Link
                            href={itemHref}
                            className="hover:text-background transition-colors flex items-center gap-1 group"
                            onClick={(e) => {
                              e.preventDefault();
                              const target = document.querySelector(itemHref);
                              if (target) {
                                const headerOffset = 80;
                                const elementPosition = target.getBoundingClientRect().top;
                                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                                window.scrollTo({
                                  top: offsetPosition,
                                  behavior: "smooth",
                                });
                              }
                            }}
                          >
                            {itemLabel}
                            <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </>
              ) : (
                <>
                  <h4 className="font-bold text-background mb-6">{col.title}</h4>
                  <div className="flex gap-4">
                    {[
                      { icon: Mail, label: "Email", href: "mailto:info.anubyte@gmail.com" },
                      {
                        icon: Linkedin,
                        label: "LinkedIn",
                        href: "https://www.linkedin.com/company/anubyte/about/",
                      },
                      {
                        icon: Facebook,
                        label: "Facebook",
                        href: "https://www.facebook.com/people/Anubyte/61583833083742/",
                      },
                      // { icon: Github, label: "GitHub" },
                    ].map(({ icon: Icon, label, href }) => (
                      <a
                        key={label}
                        href={href}
                        className="p-3 rounded-lg bg-background/10 hover:bg-background/20 transition-colors hover:text-primary"
                        title={label}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon size={20} />
                      </a>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center text-background/60 text-sm gap-4">
          <p>&copy; 2025 Anubyte. Crafted with precision.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-background transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-background transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
