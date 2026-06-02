import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, ArrowRight, ShieldCheck } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";
import { RoleSelector } from "./RoleSelector";
import type { RoleId } from "../data/rolesData";

export function ConfidentialEntry({
  onEnter,
}: {
  onEnter: (role: RoleId) => void;
}) {
  const { t } = useLanguage();
  const [role, setRole] = useState<RoleId | null>(null);

  return (
    <div className="relative min-h-screen overflow-hidden bg-graphite-950 bg-graphite-radial">
      {/* subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-5 py-6">
        {/* top bar */}
        <div className="flex items-center justify-between">
          <span className="chip border border-copper-400/30 bg-copper-500/10 text-copper-200">
            <Lock size={12} /> {t.entry.badge}
          </span>
          <LanguageToggle />
        </div>

        <div className="grid flex-1 items-center gap-10 py-10 lg:grid-cols-2">
          {/* left — narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="mb-4 flex items-center gap-2 text-mineral-300">
              <ShieldCheck size={18} />
              <span className="text-xs font-600 uppercase tracking-[0.25em]">
                {t.app.confidential}
              </span>
            </div>
            <h1 className="text-3xl font-800 leading-tight text-white sm:text-4xl lg:text-5xl">
              {t.app.name}
            </h1>
            <p className="mt-3 text-lg font-500 text-copper-200">
              {t.app.tagline}
            </p>
            <div className="mt-5 space-y-1 text-sm text-slate-300">
              <div className="font-600 text-white">{t.app.company}</div>
              <div className="text-slate-400">{t.app.location}</div>
              <div className="mt-3 inline-flex rounded-lg border border-mineral-400/30 bg-mineral-500/10 px-3 py-1.5 font-600 text-mineral-200">
                {t.app.expansionTarget}
              </div>
            </div>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-slate-400">
              {t.entry.intro}
            </p>
            <p className="mt-4 max-w-xl rounded-lg border border-graphite-700/60 bg-graphite-900/50 px-4 py-3 text-xs leading-relaxed text-slate-400">
              {t.entry.notOffer}
            </p>
          </motion.div>

          {/* right — access panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="room-card p-6"
          >
            <RoleSelector value={role} onChange={setRole} />

            <div className="mt-6 space-y-2">
              <button
                disabled={!role}
                onClick={() => role && onEnter(role)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-copper-500 px-4 py-3 font-600 text-graphite-950 transition-colors enabled:hover:bg-copper-400 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {t.common.enterConsole}
                <ArrowRight size={18} className="rtl:rotate-180" />
              </button>
              <div className="grid grid-cols-2 gap-2">
                <button
                  disabled={!role}
                  onClick={() => role && onEnter(role)}
                  className="rounded-xl border border-graphite-700/70 px-3 py-2 text-xs font-500 text-slate-300 transition-colors enabled:hover:border-graphite-600 disabled:opacity-40"
                >
                  {t.common.openStakeholderView}
                </button>
                <button
                  disabled={!role}
                  onClick={() => role && onEnter(role)}
                  className="rounded-xl border border-graphite-700/70 px-3 py-2 text-xs font-500 text-slate-300 transition-colors enabled:hover:border-graphite-600 disabled:opacity-40"
                >
                  {t.common.reviewPathways}
                </button>
              </div>
              {!role && (
                <p className="pt-1 text-center text-xs text-slate-500">
                  {t.common.selectRole}
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
