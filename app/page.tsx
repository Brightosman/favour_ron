import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Insights from "@/components/Insights";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
  <div className="min-h-1 bg-primary/10">
    <Navbar />
    <Hero />
    <Insights />
    <Stats />
    <Pricing />
    <Testimonials />
    <Faq />
    <Footer />
  </div>
  );
}
