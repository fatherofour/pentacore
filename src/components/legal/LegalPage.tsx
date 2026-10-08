import { HeroFX } from "@/components/ui/HeroFX";
import { Reveal } from "@/components/ui/Reveal";

export type LegalSection = { heading: string; body: string[]; list?: string[] };

export const CONTACT_EMAIL = "info@pentacoresystems.com.ng";
export const CONTACT_PHONE = "+234 8137996917";

/** Shared layout for Privacy / Terms / Cookie pages. */
export function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <section className="relative pt-40 pb-16 overflow-hidden">
        <HeroFX />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="heading-display text-ink text-6xl sm:text-7xl mb-5">{title}</h1>
          <p className="text-body text-lg max-w-2xl mx-auto mb-4">{intro}</p>
          <p className="label-mono text-mute">Last updated: {updated}</p>
        </div>
      </section>

      <section className="pb-16 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-6 sm:p-10 space-y-10">
            {sections.map((s, i) => (
              <Reveal key={s.heading}>
                <h2 className="heading-secondary text-xl sm:text-2xl text-ink mb-4">
                  <span className="text-accent mr-2">{String(i + 1).padStart(2, "0")}</span>
                  {s.heading}
                </h2>
                <div className="space-y-3">
                  {s.body.map((p) => (
                    <p key={p} className="text-body leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
                {s.list && (
                  <ul className="mt-4 space-y-2">
                    {s.list.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-body">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
