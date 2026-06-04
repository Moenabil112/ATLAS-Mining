import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Sparkles } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { ui } from "../i18n/translations";
import { capitalLayers, TOTAL_USD_M } from "../data/capitalMap";
import { useView } from "./viewContext";
import { SectionHeader, FadeIn, formatUsdM } from "./ui";

export function CapitalMap() {
  const { lang } = useLanguage();
  const { isCapitalHighlighted } = useView();
  const p = ui.pages.capital;

  const data = capitalLayers.map((c) => ({ name: c.title[lang], value: c.amount, color: c.color }));

  return (
    <section>
      <SectionHeader title={p.title[lang]} subtitle={p.subtitle[lang]} />

      <div className="grid gap-5 lg:grid-cols-2">
        {/* chart */}
        <FadeIn>
          <div className="panel flex flex-col items-center p-6">
            <div className="mb-2 self-start text-xs font-600 uppercase tracking-widest text-gold-400">
              {p.allocation[lang]}
            </div>
            <div className="relative h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={68}
                    outerRadius={104}
                    paddingAngle={2}
                    stroke="none"
                  >
                    {data.map((entry, idx) => (
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
                    formatter={(value: number, name: string) => [formatUsdM(value), name]}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-800 text-white">{formatUsdM(TOTAL_USD_M)}</span>
                <span className="text-[11px] uppercase tracking-widest text-slate-500">
                  {p.total[lang]}
                </span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* six capital cards */}
        <FadeIn delay={0.1}>
          <div className="grid gap-3 sm:grid-cols-2">
            {capitalLayers.map((c) => {
              const hl = isCapitalHighlighted(c.id);
              return (
                <div
                  key={c.id}
                  className={`panel p-4 transition-shadow ${hl ? "ring-1 ring-gold-500/50" : ""}`}
                  style={{ borderInlineStartColor: c.color, borderInlineStartWidth: 3 }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-sm font-500 leading-snug text-slate-200">
                      {c.title[lang]}
                    </span>
                    {hl && <Sparkles size={13} className="shrink-0 text-gold-400/80" />}
                  </div>
                  <div className="mt-2 text-xl font-800" style={{ color: c.color }}>
                    {formatUsdM(c.amount)}
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.2}>
        <p className="mt-5 rounded-lg border border-graphite-700/60 bg-graphite-900/50 px-4 py-3 text-xs leading-relaxed text-slate-400">
          {p.footer[lang]}
        </p>
      </FadeIn>
    </section>
  );
}
