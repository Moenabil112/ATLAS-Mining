import { ArrowRight, ShieldAlert, Target, FileOutput, User } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { SectionHeader, FadeIn } from "./ui";
import { decisionPathways } from "../data/decisionPathwaysData";
import { AccessBadge } from "./AccessBadge";

export function PartnerDecisionRoom() {
  const { t, lang } = useLanguage();
  const d = t.decision;

  return (
    <section>
      <SectionHeader kicker="09" title={d.title} subtitle={d.subtitle} />
      <div className="grid gap-4 lg:grid-cols-2">
        {decisionPathways.map((p, i) => (
          <FadeIn key={p.id} delay={0.04 * i}>
            <article className="room-card flex h-full flex-col p-5">
              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-copper-500/15 text-sm font-700 text-copper-200">
                  {p.index}
                </span>
                <h3 className="pt-0.5 font-600 leading-snug text-white">
                  {p.title[lang]}
                </h3>
              </div>

              <div className="mt-4 grid gap-2.5 text-xs sm:grid-cols-2">
                <Field icon={<FileOutput size={13} />} label={d.requiredEvidence} value={p.requiredEvidence[lang]} />
                <Field icon={<Target size={13} />} label={d.requiredDecision} value={p.requiredDecision[lang]} />
                <Field icon={<User size={13} />} label={d.responsible} value={p.responsible[lang]} />
                <Field icon={<ShieldAlert size={13} />} label={d.riskReduced} value={p.riskReduced[lang]} />
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-graphite-700/50 pt-3">
                <div className="flex items-center gap-2 text-xs">
                  <ArrowRight size={14} className="text-mineral-300 rtl:rotate-180" />
                  <span className="font-600 text-slate-500">{d.nextOutput}:</span>
                  <span className="text-slate-200">{p.nextOutput[lang]}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] text-slate-500">{d.suggestedAccess}:</span>
                  <AccessBadge level={p.access} />
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function Field({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg bg-graphite-900/50 p-2.5">
      <div className="flex items-center gap-1.5 text-[11px] font-600 uppercase tracking-wider text-slate-500">
        {icon}
        {label}
      </div>
      <div className="mt-1 text-slate-200">{value}</div>
    </div>
  );
}
