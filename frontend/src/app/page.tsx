import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Process } from "@/components/Process";
import { Products } from "@/components/Products";
import { Packaging } from "@/components/Packaging";
import { Quality } from "@/components/Quality";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Process />
      <Products />
      <Packaging />
      <Quality />
      <Contact />
      <Footer />
    </main>
  );
}
