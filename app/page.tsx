import Navbar from "@/components/shared/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Experience from "@/components/sections/experience";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Certifications from "@/components/sections/certifications";
import Education from "@/components/sections/education";
import Contact from "@/components/sections/contact";
import Footer from "@/components/shared/footer";
// import LiquidGlass from "@/components/LiquidGlass"; 

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/*<LiquidGlass />  ⬅️ Add here to load once per page */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}