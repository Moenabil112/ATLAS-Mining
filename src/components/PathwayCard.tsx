import { Check } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { IndicativeNote, formatUsdM } from "./ui";
import type { FinancePathway } from "../data/pathwaysData";
import { budgetClusters } from "../data/expansionBudget50M";

export function PathwayCard({ pathway }: { pathway: FinancePathway }) {
  const { t, lang } = useLanguage();
  const p = t.pathways;
  const Icon = pathway.icon;

  const relevant = budgetClusters.filter((c) =>
    pathway.relevantClusterIds.includes(c.id)
  );

  return (
    <article
      className="room-card flex h-full flex-col p-6"
      style={{ borderTopColor: pathway.accent, borderTopWidth: 3 }}
    >
      <div className="flex items-center gap-3">
        <span
          className="flex h-11 w-11 items-center justify-center rounded-xl"
          style={{ backgroundColor: `${pathway.accent}22`, color: pathway.accent }}
        >
          <Icon size={22} />
        </span>
        <div>
          <div className="text-xs font-600 uppercase tracking-wider text-slate-400">
            {pathway.institution[lang]}
          </div>
          <h3 className="font-700 leading-snug text-white">
            {pathway.title[lang]}
          </h3>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-slate-400">
        {pathway.positioning[lang]}
      </p>

      <div
        className="mt-4 rounded-lg border-l-2 px-3 py-2 text-xs italic leading-relaxed text-slate-300"
        style={{ borderColor: pathway.accent, background: `${pathway.accent}10` }}
      >
        {pathway.keyPhrase[lang]}
      </div>

      {/* focus */}
      <div className="mt-4">
        <div className="text-[11px] font-600 uppercase tracking-wider text-slate-500">
          {p.focus}
        </div>
        <ul className="mt-1.5 space-y-1">
          {pathway.focus.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
              <Check size={13} className="mt-0.5 shrink-0" style={{ color: pathway.accent }} />
              {f[lang]}
            </li>
          ))}
        </ul>
      </div>

      {/* relevant clusters */}
      <div className="mt-4">
        <div className="text-[11px] font-600 uppercase tracking-wider text-slate-500">
          {p.relevant}
        </div>
        <div className="mt-1.5 space-y-1">
          {relevant.map((c) => (
            <div
              key={c.id}
              className="flex items-center justify-between rounded-md bg-graphite-900/60 px-2.5 py-1.5"
            >
              <span className="text-xs text-slate-300">{c.title[lang]}</span>
              <span className="text-xs font-700" style={{ color: c.color }}>
                {formatUsdM(c.amount)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* staged (bank pathway) */}
      {pathway.stages && (
        <div className="mt-4">
          <div className="text-[11px] font-600 uppercase tracking-wider text-slate-500">
            {p.stages}
          </div>
          <ol className="mt-1.5 space-y-1">
            {pathway.stages.map((s, i) => (
              <li
                key={i}
                className="flex items-center justify-between rounded-md border border-graphite-700/60 px-2.5 py-1.5 text-xs"
              >
                <span className="text-slate-300">{s.label[lang]}</span>
                <span className="font-700 text-copper-200">
                  {formatUsdM(s.amount)}
                </span>
              </li>
            ))}
          </ol>
        </div>
      )}

      <div className="mt-auto pt-4">
        <div
          className="rounded-lg px-3 py-2 text-xs font-500 leading-relaxed"
          style={{ background: `${pathway.accent}14`, color: "#e2e8f0" }}
        >
          {pathway.visibleTotalLabel[lang]}
        </div>
        <IndicativeNote text={p.notApproved} />
      </div>
    </article>
  );
}
