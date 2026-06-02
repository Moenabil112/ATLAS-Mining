import { useLanguage } from "../i18n/LanguageContext";
import type { LensKey } from "../data/expansionBudget50M";
import type { Translation } from "../i18n/translations.en";

const lensOrder: LensKey[] = ["full", "geff", "climate", "bank", "partner", "atlas"];

export function StakeholderLensTabs({
  value,
  onChange,
}: {
  value: LensKey;
  onChange: (lens: LensKey) => void;
}) {
  const { t } = useLanguage();
  return (
    <div className="flex flex-wrap gap-2">
      {lensOrder.map((l) => {
        const active = l === value;
        const key = l as keyof Translation["expansion"]["tabs"];
        return (
          <button
            key={l}
            onClick={() => onChange(l)}
            aria-pressed={active}
            className={`rounded-full border px-4 py-1.5 text-xs font-600 transition-colors ${
              active
                ? "border-copper-400 bg-copper-500 text-graphite-950"
                : "border-graphite-700/70 text-slate-300 hover:border-graphite-600"
            }`}
          >
            {t.expansion.tabs[key]}
          </button>
        );
      })}
    </div>
  );
}
