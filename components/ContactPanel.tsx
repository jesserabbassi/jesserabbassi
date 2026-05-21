import { contactLinks, profile } from "@/lib/data";

export function ContactPanel() {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
      <div className="premium-panel p-6 md:p-8">
        <p className="eyebrow">Direct lines</p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-ivory">Let&apos;s build something useful.</h2>
        <p className="mt-4 leading-8 text-mist">
          Send a project brief, product idea, internship opportunity, or technical collaboration. I usually respond with clear next steps.
        </p>
        <div className="mt-8 grid gap-3">
          {contactLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a key={item.href} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="group flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.035] p-4 transition hover:border-signal/35 hover:bg-white/[0.06]">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-signal/10 text-signal">
                  <Icon size={18} />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ivory">{item.label}</span>
                  <span className="text-sm text-mist">{item.value}</span>
                </span>
              </a>
            );
          })}
        </div>
      </div>

      <form action="https://formspree.io/f/mojnyqen" method="POST" className="premium-panel p-6 md:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium text-ivory">
            Name
            <input name="name" required className="form-field" placeholder="Your name" />
          </label>
          <label className="grid gap-2 text-sm font-medium text-ivory">
            Email
            <input name="email" type="email" required className="form-field" placeholder={profile.email} />
          </label>
        </div>
        <label className="mt-5 grid gap-2 text-sm font-medium text-ivory">
          Project details
          <textarea name="message" required rows={7} className="form-field resize-none" placeholder="Tell me what you want to build, improve, or launch." />
        </label>
        <button type="submit" className="primary-button mt-6 w-full justify-center">
          Send message
        </button>
      </form>
    </div>
  );
}
