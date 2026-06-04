import { Check, ArrowRight, CornerDownRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { ui } from "../i18n/translations";
import { useView } from "./viewContext";
import type { PartnerPathway } from "../data/partnerViews";

export function PartnerPathwayCard({ pathway }: { pathway: PartnerPathway }) {
  const { lang } = useLanguage();
  const { partnerView, setPartnerView } = useView();
  const Icon = pathway.icon;
  const active = partnerView === pathway.id;

  return (
    <article
      className={`accent-top panel flex h-full flex-col p-5 transition-shadow sm:p-6 ${
        active ? "ring-1 ring-gold-500/50" : "hover:shadow-room"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <span
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
            style={{ backgroundColor: `${pathway.accent}22`, color: pathway.accent }}
          >
            <Icon size={22} />
          </span>
          <h3 className="truncate font-700 leading-snug text-white">{pathway.name[lang]}</h3>
        </div>
        <span
          className="chip shrink-0 border"
          style={{
            borderColor: `${pathway.accent}55`,
            backgroundColor: `${pathway.accent}18`,
            color: pathway.accent,
          }}
        >
          {pathway.badge[lang]}
        </span>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-slate-400">{pathway.message[lang]}</p>

      <div className="mt-4">
        <div className="text-[11px] font-600 uppercase tracking-wider text-slate-500">
          {ui.common.keyInterests[lang]}
        </div>
        <ul className="mt-2 space-y-1.5">
          {pathway.interests.slice(0, 3).map((it, i) => (
            <li key={i} className="flex items-start gap-2 text-[13px] text-slate-300">
              <Check size={14} className="mt-0.5 shrink-0" style={{ color: pathway.accent }} />
              {it[lang]}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 rounded-lg bg-graphite-900/50 p-3">
        <div className="flex items-center gap-1.5 text-[11px] font-600 uppercase tracking-wider text-slate-500">
          <CornerDownRight size={12} className="rtl:rotate-180" />
          {ui.common.suggestedNextAction[lang]}
        </div>
        <div className="mt-1 text-[13px] leading-relaxed text-slate-200">
          {pathway.nextAction[lang]}
        </div>
      </div>

      <button
        onClick={() => setPartnerView(pathway.id)}
        className="touch mt-5 flex items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-600 transition-colors"
        style={{
          borderColor: `${pathway.accent}66`,
          color: pathway.accent,
          backgroundColor: active ? `${pathway.accent}1f` : "transparent",
        }}
      >
        {pathway.button[lang]}
        <ArrowRight size={16} className="rtl:rotate-180" />
      </button>
    </article>
  );
}
