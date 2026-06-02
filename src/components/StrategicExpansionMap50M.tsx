import { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  LabelList,
} from "recharts";
import { useLanguage } from "../i18n/LanguageContext";
import { SectionHeader, FadeIn, IndicativeNote, formatUsdM } from "./ui";
import {
  budgetClusters,
  lensTotal,
  TOTAL_USD_M,
  type LensKey,
} from "../data/expansionBudget50M";
import { BudgetClusterCard } from "./BudgetClusterCard";
import { StakeholderLensTabs } from "./StakeholderLensTabs";

export function StrategicExpansionMap50M() {
  const { t, lang } = useLanguage();
  const e = t.expansion;
  const [lens, setLens] = useState<LensKey>("full");

  const visible = budgetClusters.filter((c) => c.lenses.includes(lens));
  const total = lens === "full" ? TOTAL_USD_M : lensTotal(lens);

  const pieData = visible.map((c) => ({
    name: c.title[lang],
    value: c.amount,
    color: c.color,
  }));

  return (
    <section>
      <SectionHeader kicker="05" title={e.title} subtitle={e.subtitle} />

      <FadeIn>
        <div className="room-card mb-5 border-l-4 border-l-copper-400 p-5">
          <p className="text-sm leading-relaxed text-slate-300">{e.definition}</p>
        </div>
      </FadeIn>

      {/* lens tabs */}
      <div className="mb-5">
        <StakeholderLensTabs value={lens} onChange={setLens} />
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {/* chart panel */}
        <FadeIn>
          <div className="room-card p-5">
            <div className="mb-2 flex items-baseline justify-between">
              <div className="text-xs font-600 uppercase tracking-widest text-copper-300">
                {e.chartTitle}
              </div>
              <div className="text-2xl font-800 text-white">
                {formatUsdM(total)}
              </div>
            </div>

            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={55}
                    outerRadius={90}
                    paddingAngle={2}
                    stroke="none"
                  >
                    {pieData.map((entry, idx) => (
                      <Cell key={idx} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      background: "#161c22",
                      border: "1px solid #2a343d",
                      borderRadius: 10,
                      color: "#e8ecef",
                      fontSize: 12,
                    }}
                    formatter={(value: number, name: string) => [
                      formatUsdM(value),
                      name,
                    ]}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="h-44">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={pieData}
                  layout="vertical"
                  margin={{ left: 0, right: 28, top: 4, bottom: 4 }}
                >
                  <XAxis type="number" hide domain={[0, "dataMax"]} />
                  <YAxis type="category" dataKey="name" hide />
                  <Tooltip
                    cursor={{ fill: "#ffffff08" }}
                    contentStyle={{
                      background: "#161c22",
                      border: "1px solid #2a343d",
                      borderRadius: 10,
                      color: "#e8ecef",
                      fontSize: 12,
                    }}
                    formatter={(value: number) => [formatUsdM(value), ""]}
                  />
                  <Bar dataKey="value" radius={[4, 4, 4, 4]} barSize={16}>
                    {pieData.map((entry, idx) => (
                      <Cell key={idx} fill={entry.color} />
                    ))}
                    <LabelList
                      dataKey="value"
                      position="right"
                      formatter={(v: number) => formatUsdM(v)}
                      fill="#cbd5e1"
                      fontSize={11}
                    />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {lens !== "full" && (
              <div className="mt-2 rounded-lg border border-graphite-700/60 bg-graphite-900/50 px-3 py-2">
                <div className="text-xs text-slate-400">{e.lensTotal}</div>
                <div className="text-lg font-700 text-white">
                  {formatUsdM(total)}
                </div>
                <div className="text-[11px] text-amber-200/80">{e.lensNote}</div>
              </div>
            )}
            <IndicativeNote />
          </div>
        </FadeIn>

        {/* cluster legend list */}
        <FadeIn delay={0.1}>
          <div className="space-y-2">
            {budgetClusters.map((c) => {
              const inLens = c.lenses.includes(lens);
              return (
                <div
                  key={c.id}
                  className={`flex items-center justify-between gap-3 rounded-xl border px-4 py-3 transition-opacity ${
                    inLens
                      ? "border-graphite-700/70 bg-graphite-850/70"
                      : "border-graphite-800/50 bg-graphite-900/30 opacity-40"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="h-3 w-3 shrink-0 rounded-full"
                      style={{ backgroundColor: c.color }}
                    />
                    <span className="text-sm font-500 text-slate-200">
                      {c.title[lang]}
                    </span>
                  </div>
                  <span className="shrink-0 text-sm font-700 text-white">
                    {formatUsdM(c.amount)}
                  </span>
                </div>
              );
            })}
            <div className="flex items-center justify-between rounded-xl border border-copper-400/40 bg-copper-500/10 px-4 py-3">
              <span className="text-sm font-700 text-copper-100">
                {t.common.total}
              </span>
              <span className="text-lg font-800 text-copper-100">
                {formatUsdM(TOTAL_USD_M)}
              </span>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* detailed cards */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {budgetClusters.map((c) => (
          <BudgetClusterCard key={c.id} cluster={c} dim={!c.lenses.includes(lens)} />
        ))}
      </div>
    </section>
  );
}
