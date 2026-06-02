import {
  CalendarClock,
  Microscope,
  Layers,
  Landmark,
  Users,
  Handshake,
  Factory,
  Target,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { SectionHeader, FadeIn, IndicativeNote } from "./ui";

interface Stat {
  icon: LucideIcon;
  titleKey: keyof ReturnType<typeof useLanguage>["t"]["dashboard"];
  descKey: keyof ReturnType<typeof useLanguage>["t"]["dashboard"];
  accent: string;
}

const stats: Stat[] = [
  { icon: CalendarClock, titleKey: "since", descKey: "sinceDesc", accent: "#d6905f" },
  { icon: Microscope, titleKey: "geology", descKey: "geologyDesc", accent: "#5cb884" },
  { icon: Layers, titleKey: "licenses", descKey: "licensesDesc", accent: "#b86a34" },
  { icon: Landmark, titleKey: "leadership", descKey: "leadershipDesc", accent: "#cdb893" },
  { icon: Users, titleKey: "expertise", descKey: "expertiseDesc", accent: "#36a169" },
  { icon: Handshake, titleKey: "partnerships", descKey: "partnershipsDesc", accent: "#94703e" },
];

export function ExecutiveExperienceDashboard() {
  const { t } = useLanguage();
  const d = t.dashboard;

  return (
    <section>
      <SectionHeader kicker="01" title={d.title} subtitle={d.subtitle} />

      {/* hero strip — platform + target */}
      <div className="mb-6 grid gap-4 lg:grid-cols-3">
        <FadeIn className="lg:col-span-2">
          <div className="room-card flex h-full flex-col justify-between gap-4 overflow-hidden p-6">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-mineral-500/15 text-mineral-300">
                <Factory size={24} />
              </span>
              <div>
                <h3 className="text-xl font-700 text-white">{d.platform}</h3>
                <p className="mt-1 text-sm text-slate-400">{d.platformDesc}</p>
              </div>
            </div>
            <div className="rounded-xl border border-graphite-700/60 bg-graphite-900/50 p-4">
              <div className="text-xs font-600 uppercase tracking-widest text-copper-300">
                {d.narrativeTitle}
              </div>
              <p className="mt-1.5 text-sm font-500 leading-relaxed text-slate-300">
                {d.narrative}
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="room-card flex h-full flex-col justify-between bg-gradient-to-br from-copper-700/25 to-graphite-850 p-6">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-copper-500/20 text-copper-200">
              <Target size={24} />
            </span>
            <div className="mt-4">
              <div className="text-4xl font-800 text-white">USD 50M</div>
              <div className="mt-1 text-sm font-600 text-copper-200">{d.target}</div>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                {d.targetDesc}
              </p>
              <IndicativeNote />
            </div>
          </div>
        </FadeIn>
      </div>

      {/* stat grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <FadeIn key={s.titleKey} delay={0.05 * i}>
              <div className="room-card h-full p-5">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `${s.accent}1f`, color: s.accent }}
                >
                  <Icon size={20} />
                </span>
                <h4 className="mt-3 font-600 text-white">{d[s.titleKey]}</h4>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">
                  {d[s.descKey]}
                </p>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
