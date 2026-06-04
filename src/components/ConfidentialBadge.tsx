import { Lock } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { ui } from "../i18n/translations";

export function ConfidentialBadge() {
  const { lang } = useLanguage();
  return (
    <span className="chip border border-gold-500/30 bg-gold-500/10 text-gold-400">
      <Lock size={12} strokeWidth={2.4} />
      {ui.brand.confidential[lang]}
    </span>
  );
}
