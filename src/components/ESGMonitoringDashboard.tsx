import { useLanguage } from "../i18n/LanguageContext";
import { SectionHeader, FadeIn } from "./ui";
import { esgMetrics, type MetricTone } from "../data/esgMetricsData";

const toneCls: Record<MetricTone, string> = {
  green: "text-mineral-300 bg-mineral-500/12",
  copper: "text-copper-200 bg-copper-500/12",
  neutral: "text-slate-300 bg-graphite-700/50",
};

export function ESGMonitoringDashboard() {
  const { t } = useLanguage();
  const e = t.esg;

  return (
    <section>
      <SectionHeader kicker="07" title={e.title} subtitle={e.subtitle} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {esgMetrics.map((m, i) => {
          const Icon = m.icon;
          return (
            <FadeIn key={m.id} delay={0.03 * i}>
              <div className="room-card flex h-full flex-col p-4">
                <div className="flex items-center justify-between">
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${toneCls[m.tone]}`}
                  >
                    <Icon size={18} />
                  </span>
                  <span className="text-2xl font-800 text-white">{m.value}</span>
                </div>
                <div className="mt-3 text-sm font-500 text-slate-200">
                  {e.metrics[m.id]}
                </div>
                <div className="mt-2 inline-flex w-fit rounded-md border border-amber-400/25 bg-amber-500/5 px-2 py-0.5 text-[10px] font-500 text-amber-200/90">
                  {e.placeholder}
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
