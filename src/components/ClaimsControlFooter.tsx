import { XCircle, CheckCircle2, ShieldCheck } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { SectionHeader } from "./ui";

export function ClaimsControlFooter() {
  const { t } = useLanguage();
  const c = t.claims;

  return (
    <footer className="mt-4">
      <SectionHeader kicker="10" title={c.title} subtitle={c.intro} />

      <div className="grid gap-4 lg:grid-cols-2">
        {/* do not claim */}
        <div className="room-card border-l-4 border-l-red-500/60 p-5">
          <div className="mb-3 flex items-center gap-2 text-sm font-600 text-red-300">
            <XCircle size={16} /> {c.intro}
          </div>
          <ul className="grid gap-2 sm:grid-cols-2">
            {c.doNot.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                <XCircle size={13} className="mt-0.5 shrink-0 text-red-400/80" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* approved wording */}
        <div className="room-card border-l-4 border-l-mineral-500/60 p-5">
          <div className="mb-3 flex items-center gap-2 text-sm font-600 text-mineral-300">
            <CheckCircle2 size={16} /> {c.weUse}
          </div>
          <ul className="grid gap-2 sm:grid-cols-2">
            {c.use.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 size={13} className="mt-0.5 shrink-0 text-mineral-400/80" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-5 flex items-start gap-2 rounded-xl border border-graphite-700/60 bg-graphite-900/60 px-4 py-3 text-xs leading-relaxed text-slate-400">
        <ShieldCheck size={15} className="mt-0.5 shrink-0 text-copper-300" />
        {c.footer}
      </div>
    </footer>
  );
}
