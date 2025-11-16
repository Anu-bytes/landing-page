import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Portfolio from "@/components/portfolio";
import About from "@/components/about";
import Technologies from "@/components/technologies";
import Testimonials from "@/components/testimonials";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      {/* <Portfolio /> */}
      <About />
      <Technologies />
      {/* <Testimonials /> */}
      <CTA />
      <Footer />
    </main>
  );
}
