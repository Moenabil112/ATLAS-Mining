import { useLanguage } from "../i18n/LanguageContext";
import type { EvidenceKey } from "../data/types";
import { FileCheck2, FileWarning, FlaskConical, Handshake, Lock } from "lucide-react";

const styles: Record<EvidenceKey, { cls: string; icon: typeof Lock }> = {
  profile: { cls: "bg-earth-200/15 text-earth-100 border-earth-200/30", icon: FileCheck2 },
  docRequired: { cls: "bg-copper-500/15 text-copper-200 border-copper-400/30", icon: FileWarning },
  validation: { cls: "bg-amber-500/10 text-amber-200 border-amber-400/30", icon: FlaskConical },
  partnerReady: { cls: "bg-mineral-500/15 text-mineral-200 border-mineral-400/30", icon: Handshake },
  internal: { cls: "bg-graphite-700/60 text-slate-300 border-graphite-600/60", icon: Lock },
};

export function EvidenceStatusBadge({ status }: { status: EvidenceKey }) {
  const { t } = useLanguage();
  const s = styles[status];
  const Icon = s.icon;
  return (
    <span className={`chip border ${s.cls}`}>
      <Icon size={13} strokeWidth={2.2} />
      {t.evidence[status]}
    </span>
  );
}
