import { useLanguage } from "../i18n/LanguageContext";
import type { AccessLevel } from "../data/types";
import { Lock } from "lucide-react";

const labels: Record<AccessLevel, { en: string; fr: string; ar: string; cls: string }> = {
  internal: { en: "Internal only", fr: "Interne uniquement", ar: "داخلي فقط", cls: "bg-graphite-700/60 text-slate-300 border-graphite-600/60" },
  partner: { en: "Partner", fr: "Partenaire", ar: "شريك", cls: "bg-earth-200/15 text-earth-100 border-earth-200/30" },
  reviewer: { en: "Reviewer", fr: "Évaluateur", ar: "مُراجع", cls: "bg-mineral-500/15 text-mineral-200 border-mineral-400/30" },
  advisor: { en: "Advisor", fr: "Conseiller", ar: "مستشار", cls: "bg-copper-500/15 text-copper-200 border-copper-400/30" },
  controlled: { en: "Controlled", fr: "Contrôlé", ar: "مُدار", cls: "bg-amber-500/10 text-amber-200 border-amber-400/30" },
};

export function AccessBadge({ level }: { level: AccessLevel }) {
  const { lang } = useLanguage();
  const l = labels[level];
  return (
    <span className={`chip border ${l.cls}`}>
      <Lock size={12} strokeWidth={2.2} />
      {l[lang]}
    </span>
  );
}
