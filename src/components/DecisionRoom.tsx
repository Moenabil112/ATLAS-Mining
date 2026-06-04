import { Sparkles, ArrowRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { ui } from "../i18n/translations";
import { decisions } from "../data/decisions";
import { viewConfig } from "../data/partnerViews";
import { DecisionCard } from "./DecisionCard";
import { SectionHeader, FadeIn } from "./ui";
import { useView } from "./viewContext";

export function DecisionRoom() {
  const { lang } = useLanguage();
  const { partnerView } = useView();
  const p = ui.pages.decision;

  // Recommended decision = first decision suggested for the active partner view.
  const recommendedId = viewConfig[partnerView].decisionIds[0];
  const recommended = decisions.find((d) => d.id === recommendedId) ?? decisions[0];

  return (
    <section>
      <SectionHeader title={p.title[lang]} subtitle={p.subtitle[lang]} />

      <FadeIn>
        <div className="accent-top panel mb-6 flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold-500/15 text-gold-400">
              <Sparkles size={18} />
            </span>
            <div>
              <div className="text-[11px] font-600 uppercase tracking-wider text-gold-400">
                {ui.common.recommendedNextStep[lang]}
              </div>
              <div className="mt-0.5 font-600 text-white">{recommended.decision[lang]}</div>
            </div>
          </div>
          <div className="flex items-center gap-2 ps-12 text-xs text-slate-400 sm:ps-0">
            <ArrowRight size={14} className="shrink-0 text-mineral-300 rtl:rotate-180" />
            <span>{recommended.nextStep[lang]}</span>
          </div>
        </div>
      </FadeIn>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {decisions.map((d, i) => (
          <FadeIn key={d.id} delay={0.03 * i}>
            <DecisionCard entry={d} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
