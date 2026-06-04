import { Check, ArrowRight } from "lucide-react";
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
      className={`panel flex h-full flex-col p-6 transition-shadow ${
        active ? "ring-1 ring-gold-500/50" : ""
      }`}
      style={{ borderTopColor: pathway.accent, borderTopWidth: 3 }}
    >
      <div className="flex items-center gap-3">
        <span
          className="flex h-11 w-11 items-center justify-center rounded-xl"
          style={{ backgroundColor: `${pathway.accent}22`, color: pathway.accent }}
        >
          <Icon size={22} />
        </span>
        <h3 className="font-700 leading-snug text-white">{pathway.name[lang]}</h3>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-slate-400">{pathway.message[lang]}</p>

      <div className="mt-4">
        <div className="text-[11px] font-600 uppercase tracking-wider text-slate-500">
          {ui.common.keyInterests[lang]}
        </div>
        <ul className="mt-2 space-y-1">
          {pathway.interests.map((it, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
              <Check size={13} className="mt-0.5 shrink-0" style={{ color: pathway.accent }} />
              {it[lang]}
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={() => setPartnerView(pathway.id)}
        className="mt-auto flex items-center justify-center gap-2 rounded-xl border px-4 py-2.5 pt-2.5 text-sm font-600 transition-colors"
        style={{
          marginTop: "1.25rem",
          borderColor: `${pathway.accent}66`,
          color: pathway.accent,
          backgroundColor: active ? `${pathway.accent}1a` : "transparent",
        }}
      >
        {pathway.button[lang]}
        <ArrowRight size={16} className="rtl:rotate-180" />
      </button>
    </article>
  );
}
