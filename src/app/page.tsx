import TopNav from "@/components/TopNav";
import Hero from "@/components/Hero";
import ProjectsRail from "@/components/ProjectsRail";
import {
  About,
  Experience,
  Skills,
  Involvement,
  Now,
  Contact,
  Footer,
} from "@/components/Sections";

export default function Home() {
  return (
    <div id="top" className="notebook-page notebook-margin min-h-screen">
      <TopNav />
      <main className="mx-auto max-w-[54rem] px-6 sm:px-10">
        <Hero />
        <About />
        <ProjectsRail />
        <Experience />
        <Skills />
        <Involvement />
        <Now />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
