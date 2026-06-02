import { useEffect, useState } from "react";
import {
  LayoutDashboard,
  Building2,
  MapPin,
  Beaker,
  Target,
  Route,
  Activity,
  FolderLock,
  GitBranch,
  Menu,
  X,
  LogOut,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";
import { roles, type RoleId } from "../data/rolesData";
import type { Translation } from "../i18n/translations.en";

import { ExecutiveExperienceDashboard } from "./ExecutiveExperienceDashboard";
import { AtlasCapabilityRoom } from "./AtlasCapabilityRoom";
import { MoroccoBenefitRoom } from "./MoroccoBenefitRoom";
import { GreenCopperPilotRoom } from "./GreenCopperPilotRoom";
import { StrategicExpansionMap50M } from "./StrategicExpansionMap50M";
import { ThreePathwayMap } from "./ThreePathwayMap";
import { ESGMonitoringDashboard } from "./ESGMonitoringDashboard";
import { EvidenceDocumentRoom } from "./EvidenceDocumentRoom";
import { PartnerDecisionRoom } from "./PartnerDecisionRoom";
import { ClaimsControlFooter } from "./ClaimsControlFooter";

interface NavItem {
  id: string;
  icon: LucideIcon;
  labelKey: keyof Translation["nav"];
}

const navItems: NavItem[] = [
  { id: "dashboard", icon: LayoutDashboard, labelKey: "dashboard" },
  { id: "capability", icon: Building2, labelKey: "capability" },
  { id: "morocco", icon: MapPin, labelKey: "morocco" },
  { id: "pilot", icon: Beaker, labelKey: "pilot" },
  { id: "expansion", icon: Target, labelKey: "expansion" },
  { id: "pathways", icon: Route, labelKey: "pathways" },
  { id: "esg", icon: Activity, labelKey: "esg" },
  { id: "documents", icon: FolderLock, labelKey: "documents" },
  { id: "decision", icon: GitBranch, labelKey: "decision" },
];

export function AppShell({
  role,
  onExit,
}: {
  role: RoleId;
  onExit: () => void;
}) {
  const { t } = useLanguage();
  const [active, setActive] = useState("dashboard");
  const [mobileOpen, setMobileOpen] = useState(false);

  const roleDef = roles.find((r) => r.id === role)!;

  // scroll-spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    navItems.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  return (
    <div className="min-h-screen bg-graphite-950 bg-graphite-radial">
      {/* top bar */}
      <header className="sticky top-0 z-40 border-b border-graphite-800/80 bg-graphite-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-3 px-4 py-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="rounded-lg border border-graphite-700/70 p-2 text-slate-300 lg:hidden"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
            <div className="flex items-center gap-2.5">
              <img src="/atlas-icon.svg" alt="" className="h-8 w-8" />
              <div className="leading-tight">
                <div className="text-sm font-700 text-white">{t.app.name}</div>
                <div className="text-[11px] text-copper-300">{t.app.confidential}</div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span
              className="hidden items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-500 sm:inline-flex"
              style={{
                borderColor: `${roleDef.accent}55`,
                backgroundColor: `${roleDef.accent}18`,
                color: roleDef.accent,
              }}
            >
              <roleDef.icon size={13} />
              {t.roles[roleDef.labelKey]}
            </span>
            <LanguageToggle compact />
            <button
              onClick={onExit}
              className="rounded-lg border border-graphite-700/70 p-2 text-slate-400 transition-colors hover:text-white"
              aria-label={t.common.exit}
              title={t.common.exit}
            >
              <LogOut size={16} className="rtl:rotate-180" />
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1400px] gap-6 px-4 py-6">
        {/* sidebar nav */}
        <nav
          className={`fixed inset-y-0 z-30 w-64 shrink-0 transform border-graphite-800/80 bg-graphite-950/95 p-4 pt-20 transition-transform duration-200 lg:sticky lg:top-[68px] lg:z-0 lg:h-[calc(100vh-92px)] lg:transform-none lg:rounded-2xl lg:border lg:bg-graphite-900/40 lg:p-3 lg:pt-3 ltr:left-0 ltr:border-r rtl:right-0 rtl:border-l ${
            mobileOpen
              ? "translate-x-0"
              : "ltr:-translate-x-full rtl:translate-x-full lg:translate-x-0"
          }`}
        >
          <div className="mb-2 px-2 text-[11px] font-600 uppercase tracking-widest text-slate-500 lg:block">
            {t.common.activeRole}
          </div>
          <ul className="space-y-1">
            {navItems.map((n, i) => {
              const Icon = n.icon;
              const isActive = active === n.id;
              return (
                <li key={n.id}>
                  <button
                    onClick={() => go(n.id)}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-start text-sm transition-colors ${
                      isActive
                        ? "bg-copper-500/15 font-600 text-copper-100"
                        : "text-slate-400 hover:bg-graphite-800/60 hover:text-slate-200"
                    }`}
                  >
                    <span className="text-[11px] font-700 opacity-50">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Icon size={16} />
                    <span className="truncate">{t.nav[n.labelKey]}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* backdrop for mobile */}
        {mobileOpen && (
          <div
            className="fixed inset-0 z-20 bg-black/50 lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}

        {/* main content */}
        <main className="min-w-0 flex-1 space-y-16 pb-16">
          <div id="dashboard" className="scroll-mt-24">
            <ExecutiveExperienceDashboard />
          </div>
          <div id="capability" className="scroll-mt-24">
            <AtlasCapabilityRoom />
          </div>
          <div id="morocco" className="scroll-mt-24">
            <MoroccoBenefitRoom />
          </div>
          <div id="pilot" className="scroll-mt-24">
            <GreenCopperPilotRoom />
          </div>
          <div id="expansion" className="scroll-mt-24">
            <StrategicExpansionMap50M />
          </div>
          <div id="pathways" className="scroll-mt-24">
            <ThreePathwayMap />
          </div>
          <div id="esg" className="scroll-mt-24">
            <ESGMonitoringDashboard />
          </div>
          <div id="documents" className="scroll-mt-24">
            <EvidenceDocumentRoom />
          </div>
          <div id="decision" className="scroll-mt-24">
            <PartnerDecisionRoom />
          </div>
          <ClaimsControlFooter />
        </main>
      </div>
    </div>
  );
}
