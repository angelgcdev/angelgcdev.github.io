import Header from "@/components/header";
import Hero from "@/components/hero";
import AboutMe from "@/components/about-me";
import Portfolio from "@/components/portfolio";
import Skills from "@/components/skills";
import Languages from "@/components/languages";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <AboutMe />
        <Portfolio />
        <Skills />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
