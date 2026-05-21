import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { capabilities, education, experienceHighlights, profile, projects, skillGroups } from "@/lib/data";

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 4);
  const EducationIcon = education.icon;

  return (
    <main>
      <Hero />

      <Section
        eyebrow="Technical range"
        title="A stack built around real product work"
        description="The skill section is intentionally compact: senior portfolios should make the capabilities obvious without becoming a technology wall."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <Reveal key={group.title} delay={index * 0.04}>
                <div className="premium-panel h-full p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-copper/10 text-copper">
                      <Icon size={18} />
                    </span>
                    <h3 className="font-display text-lg font-semibold text-ivory">{group.title}</h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-xs font-medium text-mist">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section eyebrow="About" title="Engineering discipline with product taste">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <Reveal>
            <div className="premium-panel overflow-hidden p-3">
              <Image
                src={profile.portrait}
                alt="Professional portrait of Jesser Abbassi"
                width={900}
                height={1100}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid gap-4">
              <div className="premium-panel p-6 md:p-8">
                <p className="text-lg leading-8 text-mist">
                  I am a software engineering student focused on backend and full-stack development. My work centers on maintainable systems that connect solid backend logic with useful, polished interfaces.
                </p>
                <p className="mt-5 text-lg leading-8 text-mist">
                  I have hands-on experience with REST APIs, JWT authentication, role-based authorization, PostgreSQL, Docker, ASP.NET Core, React, Python ML workflows, and Unity systems.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {experienceHighlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="premium-panel p-5">
                      <Icon className="text-signal" size={20} />
                      <h3 className="mt-4 font-display font-semibold text-ivory">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-mist">{item.text}</p>
                    </div>
                  );
                })}
              </div>
              <div className="premium-panel p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-violet/10 text-violet">
                    <EducationIcon size={18} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ivory">{education.title}</h3>
                    <p className="text-sm text-mist">{education.school}</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section
        eyebrow="What changes"
        title="From portfolio page to product signal"
        description="The redesign shifts the site away from a long visual list and toward a recruiter-friendly case-study experience: clearer positioning, stronger hierarchy, better performance, and content that explains engineering judgment."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <div className="premium-panel h-full p-6 transition hover:border-signal/35 hover:bg-white/[0.065]">
                  <div className="mb-5 grid h-11 w-11 place-items-center rounded-lg bg-signal/10 text-signal">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ivory">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-mist">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section
        eyebrow="Selected case studies"
        title="Projects presented like products"
        description="Each project is now framed around the real problem, implementation choices, and business or technical impact."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.06}>
              <ProjectCard project={project} compact />
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="/projects" className="primary-button group">
            Explore all projects
            <ArrowUpRight className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" size={18} />
          </Link>
        </div>
      </Section>
    </main>
  );
}
