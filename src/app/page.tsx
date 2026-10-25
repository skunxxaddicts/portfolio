import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { GithubRepos } from "@/components/sections/github-repos";
import { Hero } from "@/components/sections/hero";
import { Work } from "@/components/sections/work";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Work />
      <GithubRepos />
      <Experience />
      <Contact />
    </main>
  );
}
