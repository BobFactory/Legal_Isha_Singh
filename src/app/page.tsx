import About from "@/components/about";
import { CTASection } from "@/components/cta_section";
import Footer from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Practices } from "@/components/practises";
import { Testimonials } from "@/components/testimonials";
import { WhyChooseUs } from "@/components/why_choose_us";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full ">
      <div id="home">
        <Navbar />
        <Hero />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="practices">
        <Practices />
      </div>

      <div id="choose_us">
        <WhyChooseUs />
      </div>

      <div id="testimonials">
        <Testimonials />
      </div>

      <div id="cta">
        <CTASection />
      </div>

      <Footer />
    </div>
  );
}
