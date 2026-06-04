import { useState, type ComponentType } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { ui, type SectionId } from "../i18n/translations";
import { LanguageToggle } from "./LanguageToggle";
import { ConfidentialBadge } from "./ConfidentialBadge";
import { PartnerViewSelector } from "./PartnerViewSelector";
import { Sidebar } from "./Sidebar";
import { useView } from "./viewContext";

import { ExecutiveGateway } from "./ExecutiveGateway";
import { ProjectMap } from "./ProjectMap";
import { PartnerPathways } from "./PartnerPathways";
import { TechArchitecture } from "./TechArchitecture";
import { CapitalMap } from "./CapitalMap";
import { DocumentRoom } from "./DocumentRoom";
import { DecisionRoom } from "./DecisionRoom";

const sections: Record<SectionId, ComponentType> = {
  executive: ExecutiveGateway,
  projectMap: ProjectMap,
  pathways: PartnerPathways,
  technology: TechArchitecture,
  capital: CapitalMap,
  documents: DocumentRoom,
  decision: DecisionRoom,
};

export function AppShell() {
  const { lang } = useLanguage();
  const { activeSection } = useView();
  const [mobileOpen, setMobileOpen] = useState(false);

  const Active = sections[activeSection];

  return (
    <div className="min-h-screen bg-graphite-950">
      {/* top bar */}
      <header className="sticky top-0 z-40 border-b border-graphite-800/80 bg-graphite-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-3 px-4 py-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="rounded-lg border border-graphite-700/70 p-2 text-slate-300 lg:hidden"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
            <img src="/akanil-logo.svg" alt="Akanil" className="h-9 w-12" />
            <div className="leading-tight">
              <div className="text-sm font-700 text-white sm:text-base">{ui.brand.name[lang]}</div>
              <div className="hidden text-[11px] text-gold-400 sm:block">{ui.brand.short[lang]}</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden lg:block">
              <ConfidentialBadge />
            </div>
            <PartnerViewSelector />
            <LanguageToggle compact />
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1500px] gap-6 px-4 py-6">
        {/* sidebar */}
        <aside
          className={`fixed inset-y-0 z-30 w-64 shrink-0 transform border-graphite-800/80 bg-graphite-950/95 p-4 pt-20 transition-transform duration-200 lg:sticky lg:top-[76px] lg:z-0 lg:h-[calc(100vh-100px)] lg:transform-none lg:rounded-2xl lg:border lg:bg-graphite-900/40 lg:p-3 lg:pt-3 ltr:left-0 ltr:border-r rtl:right-0 rtl:border-l ${
            mobileOpen
              ? "translate-x-0"
              : "ltr:-translate-x-full rtl:translate-x-full lg:translate-x-0"
          }`}
        >
          <Sidebar onNavigate={() => setMobileOpen(false)} />
        </aside>

        {mobileOpen && (
          <div
            className="fixed inset-0 z-20 bg-black/50 lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}

        {/* main canvas */}
        <main className="min-w-0 flex-1">
          <Active />

          <footer className="mt-12 border-t border-graphite-800/70 pt-5">
            <div className="flex flex-col items-start gap-2 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
              <span className="max-w-3xl leading-relaxed">{ui.footer[lang]}</span>
              <span className="flex items-center gap-1.5 whitespace-nowrap">
                <img src="/akanil-logo.svg" alt="" className="h-4 w-6 opacity-70" />
                {ui.brand.poweredBy[lang]}
              </span>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
