import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import type { Translation } from "../i18n/translations.en";

const order: (keyof Translation["pilot"]["steps"])[] = [
  "selectiveMining",
  "oreSorting",
  "crushing",
  "screening",
  "washing",
  "vatLeaching",
  "pls",
  "cementation",
  "cementCopper",
  "esgLog",
  "expansion",
];

export function ProcessFlow() {
  const { t, dir } = useLanguage();
  const steps = t.pilot.steps;
  // highlight the value-defining steps
  const accentKeys = new Set(["vatLeaching", "cementCopper", "expansion"]);

  return (
    <div className="flex flex-wrap items-center gap-2">
      {order.map((key, i) => (
        <div key={key} className="flex items-center gap-2">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
            className={`rounded-lg border px-3 py-1.5 text-xs font-500 ${
              accentKeys.has(key)
                ? "border-mineral-400/40 bg-mineral-500/15 text-mineral-200"
                : "border-graphite-700/70 bg-graphite-900/60 text-slate-300"
            }`}
          >
            {steps[key]}
          </motion.span>
          {i < order.length - 1 && (
            <ChevronRight
              size={15}
              className={`text-slate-600 ${dir === "rtl" ? "rotate-180" : ""}`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
