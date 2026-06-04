import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-6 max-w-3xl">
      <h2 className="text-2xl font-700 tracking-tight text-white sm:text-3xl">{title}</h2>
      {subtitle && <p className="mt-2 text-sm leading-relaxed text-slate-400 sm:text-base">{subtitle}</p>}
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
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function formatUsdM(amount: number): string {
  return `USD ${amount}M`;
}
