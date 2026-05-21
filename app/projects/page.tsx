import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Case studies by Jesser Abbassi across full-stack platforms, AI/ML systems, and Unity interactive products."
};

export default function ProjectsPage() {
  const categories = Array.from(new Set(projects.map((project) => project.category)));

  return (
    <main className="pt-24">
      <Section
        eyebrow="Case studies"
        title="A portfolio that reads like shipped product work"
        description="The projects are organized by outcomes and engineering decisions, not just screenshots. Each case study explains the problem, solution, impact, stack, and key implementation details."
      >
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.slice(0, 8).map((category) => (
            <a key={category} href={`#${projects.find((project) => project.category === category)?.slug}`} className="ghost-button">
              {category}
            </a>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={Math.min(index * 0.025, 0.18)} className="scroll-mt-28">
              <div id={project.slug}>
                <ProjectCard project={project} compact />
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </main>
  );
}
