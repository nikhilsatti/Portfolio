import { Landing } from "@/components/sections/Landing";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { TechStack } from "@/components/sections/TechStack";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="w-full max-w-5xl px-4 md:px-8 space-y-24 md:space-y-32">
        <Landing />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <TechStack />
        <Contact />
      </div>
    </main>
  );
}
