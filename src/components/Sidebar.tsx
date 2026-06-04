import {
  LayoutDashboard,
  Layers,
  Route,
  Cpu,
  Target,
  FolderLock,
  GitBranch,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { ui, type SectionId } from "../i18n/translations";
import { useView } from "./viewContext";

const icons: Record<SectionId, LucideIcon> = {
  executive: LayoutDashboard,
  projectMap: Layers,
  pathways: Route,
  technology: Cpu,
  capital: Target,
  documents: FolderLock,
  decision: GitBranch,
};

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const { lang } = useLanguage();
  const { activeSection, goTo, isSectionHighlighted } = useView();

  return (
    <nav className="flex h-full flex-col">
      <ul className="space-y-1">
        {ui.nav.map((entry, i) => {
          const Icon = icons[entry.id];
          const active = activeSection === entry.id;
          const highlighted = isSectionHighlighted(entry.id);
          return (
            <li key={entry.id}>
              <button
                onClick={() => {
                  goTo(entry.id);
                  onNavigate?.();
                }}
                className={`group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-start text-sm transition-colors ${
                  active
                    ? "bg-gold-500/15 font-600 text-gold-400"
                    : "text-slate-400 hover:bg-graphite-800/60 hover:text-slate-200"
                }`}
              >
                <span className="text-[11px] font-700 opacity-50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Icon size={17} />
                <span className="flex-1 truncate">{entry.label[lang]}</span>
                {highlighted && !active && (
                  <Sparkles size={13} className="shrink-0 text-gold-400/70" />
                )}
              </button>
            </li>
          );
        })}
      </ul>

      <div className="mt-auto pt-4">
        <div className="flex items-center gap-2 rounded-lg border border-graphite-700/50 bg-graphite-900/40 px-3 py-2">
          <img src="/akanil-logo.svg" alt="Akanil" className="h-6 w-8 opacity-80" />
          <span className="text-[11px] text-slate-500">{ui.brand.poweredBy[lang]}</span>
        </div>
      </div>
    </nav>
  );
}
