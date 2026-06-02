import { Info } from "lucide-react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useLanguage } from "../i18n/LanguageContext";

export function SectionHeader({
  title,
  subtitle,
  kicker,
}: {
  title: string;
  subtitle?: string;
  kicker?: string;
}) {
  return (
    <div className="mb-6 max-w-3xl">
      {kicker && (
        <div className="mb-2 text-xs font-600 uppercase tracking-[0.2em] text-copper-300">
          {kicker}
        </div>
      )}
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-sm leading-relaxed text-slate-400 sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}

/** "Indicative planning figure — subject to validation" note. */
export function IndicativeNote({ text }: { text?: string }) {
  const { t } = useLanguage();
  return (
    <div className="mt-3 inline-flex items-start gap-2 rounded-lg border border-amber-400/25 bg-amber-500/5 px-3 py-1.5 text-xs text-amber-200/90">
      <Info size={14} className="mt-0.5 shrink-0" />
      <span>{text ?? t.common.indicative}</span>
    </div>
  );
}

export function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function formatUsdM(amount: number): string {
  return `USD ${amount}M`;
}
