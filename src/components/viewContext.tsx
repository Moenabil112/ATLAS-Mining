import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { SectionId } from "../i18n/translations";
import type { PartnerViewId } from "../data/partnerViews";
import { viewConfig } from "../data/partnerViews";

interface ViewContextValue {
  partnerView: PartnerViewId;
  setPartnerView: (v: PartnerViewId) => void;
  activeSection: SectionId;
  goTo: (s: SectionId) => void;
  /** Highlight helpers driven by the active partner view. */
  isSectionHighlighted: (s: SectionId) => boolean;
  isDocHighlighted: (id: string) => boolean;
  isDecisionHighlighted: (id: string) => boolean;
  isCapitalHighlighted: (id: string) => boolean;
}

const ViewContext = createContext<ViewContextValue | null>(null);

export function ViewProvider({ children }: { children: ReactNode }) {
  const [partnerView, setPartnerView] = useState<PartnerViewId>("board");
  const [activeSection, setActiveSection] = useState<SectionId>("executive");

  const value = useMemo<ViewContextValue>(() => {
    const cfg = viewConfig[partnerView];
    return {
      partnerView,
      setPartnerView,
      activeSection,
      goTo: (s) => {
        setActiveSection(s);
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      },
      isSectionHighlighted: (s) => cfg.sections.includes(s),
      isDocHighlighted: (id) => cfg.docIds.includes(id),
      isDecisionHighlighted: (id) => cfg.decisionIds.includes(id),
      isCapitalHighlighted: (id) => cfg.capitalIds.includes(id),
    };
  }, [partnerView, activeSection]);

  return <ViewContext.Provider value={value}>{children}</ViewContext.Provider>;
}

export function useView(): ViewContextValue {
  const ctx = useContext(ViewContext);
  if (!ctx) throw new Error("useView must be used within a ViewProvider");
  return ctx;
}
