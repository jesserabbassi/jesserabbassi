import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { education, experienceHighlights, profile, skillGroups } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: "About Jesser Abbassi, a software engineering student focused on full-stack engineering, AI workflows, and Unity-based game and interactive systems."
};

export default function AboutPage() {
  const EducationIcon = education.icon;

  return (
    <main className="pt-24">
      <Section
        eyebrow="About Jesser"
        title="I build systems that make the product easier to trust."
        description="My strongest work sits where backend architecture, product workflows, game systems, and polished interaction meet."
      >
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal>
            <div className="premium-panel overflow-hidden p-3">
              <Image
                src={profile.portrait}
                alt="Jesser Abbassi portrait"
                width={900}
                height={1100}
                priority
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="premium-panel p-6 md:p-8">
              <p className="text-lg leading-8 text-mist">
                I am a software engineering student at ENSI focused on backend, full-stack, and game development. I care about clear data models, understandable API contracts, thoughtful UX, and features that solve real workflow problems.
              </p>
              <p className="mt-5 text-lg leading-8 text-mist">
                My portfolio covers secure web platforms, internship management workflows, AI/ML prediction systems, Unity simulations, gameplay prototypes, visual systems, and product-style websites. The common thread is practical software: systems that can be explained, extended, tested, and shipped.
              </p>
              <div className="mt-8 grid gap-3">
                {[
                  "REST APIs, JWT authentication, role-based access, and relational database design",
                  "React and Next.js interfaces with accessible, responsive product UX",
                  "Python AI/ML workflows with validation and usable prediction interfaces",
                  "Unity game and interactive systems that combine state, UI, gameplay logic, simulation, VFX, and API integration"
                ].map((item) => (
                  <div key={item} className="flex gap-3 text-mist">
                    <CheckCircle2 className="mt-1 shrink-0 text-signal" size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section eyebrow="Operating style" title="How I approach product engineering">
        <div className="grid gap-4 md:grid-cols-3">
          {experienceHighlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <div className="premium-panel h-full p-6">
                  <Icon className="text-signal" size={22} />
                  <h3 className="mt-5 font-display text-xl font-semibold text-ivory">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-mist">{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section eyebrow="Education & stack" title="Strong fundamentals, modern implementation">
        <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal>
            <div className="premium-panel p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-violet/10 text-violet">
                  <EducationIcon size={20} />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-ivory">{education.title}</h3>
                  <p className="text-mist">{education.school}</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {education.coursework.map((course) => (
                  <span key={course} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-sm text-mist">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid gap-4 sm:grid-cols-2">
              {skillGroups.map((group) => {
                const Icon = group.icon;
                return (
                  <div key={group.title} className="premium-panel p-5">
                    <div className="flex items-center gap-3">
                      <Icon className="text-copper" size={18} />
                      <h3 className="font-display font-semibold text-ivory">{group.title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-mist">{group.items.join(" / ")}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </Section>
    </main>
  );
}
