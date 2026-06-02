import {
  Factory,
  GraduationCap,
  Wrench,
  Droplets,
  LineChart,
  Recycle,
  Boxes,
  Landmark,
  Copy,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { SectionHeader, FadeIn } from "./ui";
import type { Translation } from "../i18n/translations.en";

const items: { key: keyof Translation["morocco"]["items"]; icon: LucideIcon }[] = [
  { key: "hub", icon: Factory },
  { key: "technical", icon: GraduationCap },
  { key: "services", icon: Wrench },
  { key: "water", icon: Droplets },
  { key: "esg", icon: LineChart },
  { key: "recovery", icon: Recycle },
  { key: "valueChain", icon: Boxes },
  { key: "finance", icon: Landmark },
  { key: "replication", icon: Copy },
];

export function MoroccoBenefitRoom() {
  const { t } = useLanguage();
  const m = t.morocco;

  return (
    <section>
      <SectionHeader kicker="03" title={m.title} subtitle={m.subtitle} />

      <FadeIn>
        <div className="room-card mb-5 border-l-4 border-l-earth-300 p-5">
          <p className="text-sm leading-relaxed text-slate-300">{m.intro}</p>
        </div>
      </FadeIn>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => {
          const Icon = it.icon;
          return (
            <FadeIn key={it.key} delay={0.03 * i}>
              <div className="flex h-full items-center gap-3 rounded-xl border border-graphite-700/60 bg-graphite-850/70 p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-earth-200/15 text-earth-100">
                  <Icon size={18} />
                </span>
                <span className="text-sm font-500 text-slate-200">
                  {m.items[it.key]}
                </span>
              </div>
            </FadeIn>
          );
        })}
      </div>

      <FadeIn delay={0.1}>
        <p className="mt-5 rounded-lg border border-graphite-700/60 bg-graphite-900/50 px-4 py-3 text-xs leading-relaxed text-slate-400">
          {m.careful}
        </p>
      </FadeIn>
    </section>
  );
}
