import { useLanguage } from "../i18n/LanguageContext";
import { roles, type RoleId } from "../data/rolesData";

export function RoleSelector({
  value,
  onChange,
}: {
  value: RoleId | null;
  onChange: (id: RoleId) => void;
}) {
  const { t } = useLanguage();
  return (
    <div>
      <div className="mb-3">
        <div className="text-sm font-600 text-white">{t.roles.title}</div>
        <div className="text-xs text-slate-400">{t.roles.subtitle}</div>
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {roles.map((r) => {
          const Icon = r.icon;
          const active = value === r.id;
          return (
            <button
              key={r.id}
              onClick={() => onChange(r.id)}
              aria-pressed={active}
              className={`group flex items-center gap-3 rounded-xl border p-3 text-start transition-all ${
                active
                  ? "border-copper-400/70 bg-copper-500/10"
                  : "border-graphite-700/70 bg-graphite-900/40 hover:border-graphite-600"
              }`}
            >
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                style={{ backgroundColor: `${r.accent}22`, color: r.accent }}
              >
                <Icon size={18} strokeWidth={2} />
              </span>
              <span className="text-sm font-500 text-slate-200">
                {t.roles[r.labelKey]}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
