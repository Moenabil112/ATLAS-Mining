import { useLanguage } from "../i18n/LanguageContext";
import { SectionHeader, FadeIn } from "./ui";
import { capabilityCards } from "../data/atlasProfileData";
import { EvidenceStatusBadge } from "./EvidenceStatusBadge";

export function AtlasCapabilityRoom() {
  const { t, lang } = useLanguage();
  const c = t.capability;

  return (
    <section>
      <SectionHeader kicker="02" title={c.title} subtitle={c.subtitle} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {capabilityCards.map((card, i) => {
          const Icon = card.icon;
          return (
            <FadeIn key={card.id} delay={0.04 * i}>
              <article className="room-card flex h-full flex-col p-5">
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-copper-500/15 text-copper-200">
                    <Icon size={20} />
                  </span>
                  <h3 className="pt-1 font-600 leading-snug text-white">
                    {card.title[lang]}
                  </h3>
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                  {card.summary[lang]}
                </p>
                <div className="mt-4 space-y-2 border-t border-graphite-700/50 pt-3">
                  <div>
                    <div className="text-[11px] font-600 uppercase tracking-wider text-slate-500">
                      {c.evidenceLabel}
                    </div>
                    <div className="mt-1">
                      <EvidenceStatusBadge status={card.evidence} />
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] font-600 uppercase tracking-wider text-slate-500">
                      {c.documentLabel}
                    </div>
                    <div className="mt-0.5 text-xs text-slate-300">
                      {card.document[lang]}
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] font-600 uppercase tracking-wider text-slate-500">
                      {c.disclosureLabel}
                    </div>
                    <div className="mt-0.5 text-xs text-slate-400">
                      {t.disclosure[card.disclosure]}
                    </div>
                  </div>
                </div>
              </article>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
