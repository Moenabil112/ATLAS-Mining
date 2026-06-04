import { Lightbulb, FileText, ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { ui } from "../i18n/translations";
import { useView } from "./viewContext";
import type { DecisionEntry } from "../data/decisions";

export function DecisionCard({ entry }: { entry: DecisionEntry }) {
  const { lang } = useLanguage();
  const { isDecisionHighlighted } = useView();
  const highlighted = isDecisionHighlighted(entry.id);

  return (
    <article
      className={`panel flex h-full flex-col p-5 transition-shadow ${
        highlighted ? "ring-1 ring-gold-500/50" : ""
      }`}
    >
      <div className="flex items-start gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gold-500/15 text-sm font-700 text-gold-400">
          {entry.index}
        </span>
        <h3 className="pt-0.5 font-600 leading-snug text-white">{entry.decision[lang]}</h3>
      </div>

      {highlighted && (
        <div className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-md bg-gold-500/10 px-2 py-0.5 text-[11px] font-500 text-gold-400">
          <Sparkles size={12} /> {ui.common.relevantToView[lang]}
        </div>
      )}

      <div className="mt-3 space-y-2.5 text-xs">
        <Row icon={<Lightbulb size={13} />} label={ui.common.whyItMatters[lang]} value={entry.why[lang]} />
        <Row icon={<FileText size={13} />} label={ui.common.supportingDocument[lang]} value={entry.supportingDoc[lang]} />
      </div>

      <div className="mt-auto flex items-start gap-2 border-t border-graphite-700/50 pt-3 text-xs">
        <ArrowRight size={14} className="mt-0.5 shrink-0 text-mineral-300 rtl:rotate-180" />
        <span>
          <span className="font-600 text-slate-500">{ui.common.nextStep[lang]}: </span>
          <span className="text-slate-200">{entry.nextStep[lang]}</span>
        </span>
      </div>
    </article>
  );
}

function Row({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
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
