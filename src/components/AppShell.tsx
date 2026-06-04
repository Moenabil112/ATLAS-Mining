import { type ComponentType } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { ui, type SectionId } from "../i18n/translations";
import { LanguageToggle } from "./LanguageToggle";
import { ConfidentialBadge } from "./ConfidentialBadge";
import { PartnerViewSelector } from "./PartnerViewSelector";
import { Sidebar } from "./Sidebar";
import { BottomNav } from "./BottomNav";
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
  const Active = sections[activeSection];

  return (
    <div className="min-h-screen bg-graphite-950">
      {/* top bar */}
      <header className="sticky top-0 z-30 border-b border-graphite-800/80 bg-graphite-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-2 px-4 py-2.5 sm:px-6">
          <div className="flex min-w-0 items-center gap-2.5">
            <img src="/akanil-logo.svg" alt="Akanil" className="h-8 w-11 shrink-0 sm:h-9 sm:w-12" />
            <div className="min-w-0 leading-tight">
              <div className="truncate text-[13px] font-700 text-white sm:text-base">
                {ui.brand.name[lang]}
              </div>
              <div className="hidden text-[11px] text-gold-400 sm:block">{ui.brand.short[lang]}</div>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <div className="hidden xl:block">
              <ConfidentialBadge />
            </div>
            <PartnerViewSelector />
            <LanguageToggle compact />
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1400px] gap-6 px-4 sm:px-6 lg:px-8">
        {/* sidebar — desktop only */}
        <aside className="sticky top-[68px] hidden h-[calc(100vh-92px)] w-[264px] shrink-0 py-6 lg:block">
          <div className="h-full rounded-2xl border border-graphite-800/70 bg-graphite-900/40 p-3">
            <Sidebar />
          </div>
        </aside>

        {/* main canvas */}
        <main className="min-w-0 flex-1 pb-28 pt-5 sm:pt-6 lg:pb-10">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <Active />
          </motion.div>

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

      {/* bottom navigation — mobile + tablet */}
      <BottomNav />
    </div>
  );
}
