import { Globe } from "lucide-react";
import { useLanguage, type LangCode } from "../i18n/LanguageContext";

const options: { code: LangCode; label: string }[] = [
  { code: "ar", label: "AR" },
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
];

export function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useLanguage();
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-graphite-700/70 bg-graphite-900/70 p-1">
      {!compact && (
        <Globe size={15} className="mx-1 text-slate-400" strokeWidth={2} />
      )}
      {options.map((o) => {
        const active = o.code === lang;
        return (
          <button
            key={o.code}
            onClick={() => setLang(o.code)}
            aria-pressed={active}
            className={`rounded-full px-3 py-1 text-xs font-600 transition-colors ${
              active
                ? "bg-copper-500 text-graphite-950"
                : "text-slate-300 hover:bg-graphite-800"
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}
