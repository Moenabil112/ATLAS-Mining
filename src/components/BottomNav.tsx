import {
  LayoutDashboard,
  Layers,
  Route,
  Cpu,
  Target,
  FolderLock,
  GitBranch,
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

/** Mobile + tablet bottom navigation (hidden on lg+ where the sidebar shows). */
export function BottomNav() {
  const { lang } = useLanguage();
  const { activeSection, goTo, isSectionHighlighted } = useView();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-graphite-800/80 bg-graphite-950/95 backdrop-blur lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-label="Primary"
    >
      <ul className="mx-auto flex max-w-2xl items-stretch justify-between gap-0.5 overflow-x-auto px-1.5 py-1.5">
        {ui.nav.map((entry) => {
          const Icon = icons[entry.id];
          const active = activeSection === entry.id;
          const highlighted = isSectionHighlighted(entry.id);
          return (
            <li key={entry.id} className="flex-1">
              <button
                onClick={() => goTo(entry.id)}
                aria-current={active ? "page" : undefined}
                className={`relative flex min-h-[52px] w-full min-w-[44px] flex-col items-center justify-center gap-1 rounded-xl px-1 py-1.5 transition-colors ${
                  active
                    ? "bg-gold-500/15 text-gold-400"
                    : "text-slate-400 active:bg-graphite-800/60"
                }`}
              >
                {highlighted && !active && (
                  <span className="absolute right-2 top-1.5 h-1.5 w-1.5 rounded-full bg-gold-400/80" />
                )}
                <Icon size={19} strokeWidth={active ? 2.4 : 2} />
                <span className="text-[10px] font-500 leading-none">{entry.short[lang]}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
