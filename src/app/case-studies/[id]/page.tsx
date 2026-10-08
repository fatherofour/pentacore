import type { Metadata } from "next";
import { ScrollText } from "@/components/ui/ScrollText";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, Phone } from "@/components/ui/icons";
import { HeroFX } from "@/components/ui/HeroFX";
import { Reveal } from "@/components/ui/Reveal";
import { CTA } from "@/components/home/CTA";
import { caseStudies, getCaseStudy } from "@/data/case-studies";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ id: c.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const cs = getCaseStudy(id);
  if (!cs) return {};
  return { title: `${cs.client} Case Study`, description: cs.overview };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const cs = getCaseStudy(id);
  if (!cs) notFound();

  const index = caseStudies.findIndex((c) => c.id === cs.id);
  const more = [1, 2].map((n) => caseStudies[(index + n) % caseStudies.length]);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-12 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={cs.photo}
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero-photo object-cover opacity-40 saturate-[1.2]"
          />
          <div className={`absolute inset-0 bg-gradient-to-b ${cs.accent} to-page opacity-60`} />
          <div className="absolute inset-0 bg-gradient-to-b from-page/70 via-page/85 to-page" />
        </div>
        <HeroFX />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-mute hover:text-ink transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            All Case Studies
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl glass flex items-center justify-center text-ink font-bold text-lg">
                {cs.logo}
              </div>
              <div>
                <p className="text-ink font-semibold">{cs.client}</p>
                <p className="label-mono text-accent">{cs.industry}</p>
              </div>
            </div>
            <h1 className="heading-display text-ink text-5xl sm:text-6xl lg:text-7xl mb-6 text-balance">
              {cs.title}
            </h1>
            <p className="text-body text-xl leading-relaxed">{cs.overview}</p>
          </div>

          {/* At a glance */}
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl">
            {cs.glance.map(({ label, value }) => (
              <div key={label} className="glass-card p-5">
                <p className="label-mono text-mute mb-1">{label}</p>
                <p className="text-ink font-semibold leading-snug">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-10">
            <ScrollText className="heading-secondary text-3xl sm:text-4xl text-ink" text={"Measurable"} accent={"outcomes"} />
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {cs.results.map(({ metric, label }, i) => (
              <Reveal key={label} delay={i * 0.08}>
                <div className="glass-card glass-card-hover text-center p-6 h-full">
                  <p className="heading-secondary text-3xl sm:text-4xl gradient-text mb-2">{metric}</p>
                  <p className="text-body text-sm leading-snug">{label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Background + challenge */}
      <section className="py-12 md:py-14 relative overflow-hidden">
        <div className="glow-orb glow-purple w-[420px] h-[420px] top-10 -right-52 opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-12">
          <Reveal className="lg:col-span-2">
            <h2 className="heading-secondary text-3xl text-ink mb-6">
              Where <span className="gradient-text">{cs.client}</span> started
            </h2>
            <div className="space-y-4">
              {cs.background.map((p) => (
                <p key={p} className="text-body leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4 content-start">
            {cs.painPoints.map((pp, i) => (
              <Reveal key={pp.title} delay={i * 0.08}>
                <div className="glass-card glass-card-hover p-6 h-full">
                  <span className="label-mono text-accent">0{i + 1}</span>
                  <h3 className="font-bold text-ink mt-2 mb-2">{pp.title}</h3>
                  <p className="text-mute text-sm leading-relaxed">{pp.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach timeline */}
      <section className="py-12 md:py-14 relative overflow-hidden">
        <div className="absolute inset-0 grid-dots pointer-events-none opacity-60" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-10">
            <ScrollText className="heading-secondary text-3xl sm:text-4xl text-ink mb-4 text-balance" text={"How we"} accent={"delivered it"} />
            <p className="text-body max-w-2xl mx-auto">{cs.solution}</p>
          </Reveal>

          <div className="relative">
            <div className="absolute left-5 sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-[#0078D4] via-[#06B6D4]/60 to-transparent" />
            <div className="space-y-8">
              {cs.approach.map((step, i) => (
                <Reveal key={step.title} delay={0.05}>
                  <div className="relative pl-14 sm:pl-16">
                    <div className="absolute left-0 top-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#0078D4] to-[#06B6D4] text-white font-bold flex items-center justify-center shadow-lg shadow-[#0078D4]/30 label-mono !text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="glass-card p-6 sm:p-7">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h3 className="font-bold text-ink text-xl">{step.title}</h3>
                        <span className="glass-chip !text-accent-soft">{step.timing}</span>
                      </div>
                      <p className="text-body leading-relaxed mb-4">{step.desc}</p>
                      <ul className="space-y-2">
                        {step.points.map((pt) => (
                          <li key={pt} className="flex items-start gap-2.5 text-sm text-body">
                            <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes + tech */}
      <section className="py-12 md:py-14 relative overflow-hidden">
        <div className="glow-orb glow-cyan w-[420px] h-[420px] top-20 -left-52 opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Reveal>
            <h2 className="heading-secondary text-3xl text-ink mb-6">
              What changed for <span className="gradient-text">{cs.client}</span>
            </h2>
            <ul className="space-y-4 mb-8">
              {cs.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-body leading-relaxed">{o}</span>
                </li>
              ))}
            </ul>
            <p className="text-mute leading-relaxed border-l-2 border-[#0078D4]/60 pl-4">{cs.closing}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass-card p-8">
              <h3 className="label-mono text-mute mb-4">Technologies used</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {cs.tech.map((t) => (
                  <span key={t} className="glass-chip !text-sm !px-4 !py-2">
                    {t}
                  </span>
                ))}
              </div>
              <div className="rule-glow mb-8" />
              <h3 className="font-bold text-ink text-xl mb-2">Facing a similar challenge?</h3>
              <p className="text-body text-sm leading-relaxed mb-6">
                Talk to our team about your own project. We&apos;ll share what we&apos;ve learned and
                map out what a plan could look like for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="btn-filled group text-sm !py-3 !px-5">
                  Book a Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="tel:+2348137996917" className="btn-ghost text-sm !py-3 !px-5">
                  <Phone className="w-4 h-4" />
                  Call Us
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* More case studies */}
      <section className="py-12 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="flex items-end justify-between mb-8">
            <h2 className="heading-secondary text-2xl sm:text-3xl text-ink">More case studies</h2>
            <Link
              href="/case-studies"
              className="text-accent text-sm font-medium hover:text-ink transition-colors hidden sm:inline-flex items-center gap-1"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {more.map((m, i) => (
              <Reveal key={m.id} delay={i * 0.1}>
                <Link href={`/case-studies/${m.id}`} className="group block h-full">
                  <div className="glass-card glass-card-hover relative overflow-hidden p-7 h-full min-h-[200px] flex flex-col justify-end">
                    <Image src={m.photo} alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-30 group-hover:opacity-45 group-hover:scale-105 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-page via-page/70 to-transparent" />
                    <div className="relative">
                      <p className="label-mono text-accent mb-2">{m.industry}</p>
                      <h3 className="font-bold text-ink text-lg leading-snug mb-3 group-hover:text-accent-soft transition-colors">
                        {m.title}
                      </h3>
                      <span className="inline-flex items-center gap-1 text-sm text-body group-hover:text-ink transition-colors">
                        Read case study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
