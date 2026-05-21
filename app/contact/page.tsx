import type { Metadata } from "next";
import { ContactPanel } from "@/components/ContactPanel";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Jesser Abbassi for full-stack development, AI-assisted products, dashboards, and interactive systems."
};

export default function ContactPage() {
  return (
    <main className="pt-24">
      <Section
        eyebrow="Contact"
        title="Have a product, dashboard, or platform idea?"
        description="I can help scope the workflow, design the architecture, and turn it into a polished web application or interactive prototype."
      >
        <ContactPanel />
      </Section>
    </main>
  );
}
