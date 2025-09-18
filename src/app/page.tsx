import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
// import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      {/* -=============== HEADER =============== */}
      <Header />

      {/* =============== MAIN =============== */}
      <main className="main">
        {/* =============== Hero ===============*/}
        <Hero />

        {/* =============== ABOUT ===============*/}
        <About />

        {/* =============== SKILLS ===============*/}
        <Skills />

        {/* =============== SERVICES ===============*/}
        {/* <Services /> */}

        {/* =============== WORK ===============*/}
        <Work />

        {/* =============== TESTIMONIALS ===============*/}
        <Testimonials />

        {/* =============== CONTACT ===============*/}
        <Contact />
      </main>
    </>
  );
}
