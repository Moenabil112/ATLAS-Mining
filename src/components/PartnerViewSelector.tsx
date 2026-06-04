import { useState, useRef, useEffect } from "react";
import { ChevronDown, Eye, Check } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { ui } from "../i18n/translations";
import { useView } from "./viewContext";
import type { PartnerViewId } from "../data/partnerViews";

const order: { id: PartnerViewId; key: keyof typeof ui.partnerView }[] = [
  { id: "board", key: "board" },
  { id: "industrial", key: "industrial" },
  { id: "development", key: "development" },
  { id: "financial", key: "financial" },
  { id: "technical", key: "technical" },
];

export function PartnerViewSelector() {
  const { lang, dir } = useLanguage();
  const { partnerView, setPartnerView } = useView();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const current = order.find((o) => o.id === partnerView)!;

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-xl border border-graphite-700/70 bg-graphite-900/60 px-3 py-2 text-xs font-500 text-slate-200 transition-colors hover:border-graphite-600"
      >
        <Eye size={14} className="text-gold-400" />
        <span className="hidden text-slate-400 sm:inline">{ui.partnerView.title[lang]}:</span>
        <span className="font-600">{ui.partnerView[current.key][lang]}</span>
        <ChevronDown size={14} className={`text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          className={`absolute z-50 mt-2 w-64 overflow-hidden rounded-xl border border-graphite-700/70 bg-graphite-900 shadow-room ${
            dir === "rtl" ? "start-0" : "end-0"
          }`}
          style={dir === "rtl" ? { left: 0 } : { right: 0 }}
        >
          {order.map((o) => {
            const active = o.id === partnerView;
            return (
              <button
                key={o.id}
                onClick={() => {
                  setPartnerView(o.id);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between gap-2 px-4 py-2.5 text-start text-sm transition-colors ${
                  active ? "bg-gold-500/12 text-gold-400" : "text-slate-300 hover:bg-graphite-800"
                }`}
              >
                {ui.partnerView[o.key][lang]}
                {active && <Check size={15} />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
