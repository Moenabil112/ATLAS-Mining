import { useLanguage } from "../i18n/LanguageContext";
import { IndicativeNote, formatUsdM } from "./ui";
import type { BudgetCluster } from "../data/expansionBudget50M";

export function BudgetClusterCard({
  cluster,
  dim = false,
}: {
  cluster: BudgetCluster;
  dim?: boolean;
}) {
  const { t, lang } = useLanguage();
  return (
    <div
      className={`room-card h-full overflow-hidden p-5 transition-opacity ${
        dim ? "opacity-35" : "opacity-100"
      }`}
      style={{ borderTopColor: cluster.color, borderTopWidth: 3 }}
    >
      <div className="flex items-start justify-between gap-3">
        <h4 className="font-600 leading-snug text-white">{cluster.title[lang]}</h4>
        <span
          className="shrink-0 rounded-lg px-2.5 py-1 text-sm font-700"
          style={{ backgroundColor: `${cluster.color}22`, color: cluster.color }}
        >
          {formatUsdM(cluster.amount)}
        </span>
      </div>

      <div className="mt-3">
        <div className="text-[11px] font-600 uppercase tracking-wider text-slate-500">
          {t.common.purpose}
        </div>
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {cluster.purpose.map((pp, idx) => (
            <span
              key={idx}
              className="rounded-md bg-graphite-900/70 px-2 py-0.5 text-[11px] text-slate-300"
            >
              {pp[lang]}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-3">
        <div className="text-[11px] font-600 uppercase tracking-wider text-slate-500">
          {t.common.stakeholders}
        </div>
        <div className="mt-1 text-xs text-slate-400">
          {cluster.stakeholders.join(" · ")}
        </div>
      </div>

      <IndicativeNote />
    </div>
  );
}
