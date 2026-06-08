import Sidebar from "@/components/Sidebar";
import ProjectsRail from "@/components/ProjectsRail";
import {
  About,
  Experience,
  Skills,
  Contact,
  Footer,
} from "@/components/Sections";

export default function Home() {
  return (
    <div className="bg-glow min-h-screen">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
        <div className="lg:flex lg:justify-between lg:gap-12">
          <Sidebar />
          <main className="pt-16 lg:w-[56%] lg:py-24">
            <About />
            <Experience />
            <ProjectsRail />
            <Skills />
            <Contact />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
