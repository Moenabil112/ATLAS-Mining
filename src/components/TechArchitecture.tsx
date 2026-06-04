import { ChevronRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { ui } from "../i18n/translations";
import { techSteps } from "../data/content";
import { SectionHeader, FadeIn } from "./ui";

export function TechArchitecture() {
  const { lang } = useLanguage();
  const p = ui.pages.technology;

  return (
    <section>
      <SectionHeader title={p.title[lang]} subtitle={p.subtitle[lang]} />

      <FadeIn>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5">
          <img src="/akanil-logo.svg" alt="Akanil" className="h-5 w-7" />
          <span className="text-sm font-600 text-gold-400">{ui.brand.poweredBy[lang]}</span>
        </div>
      </FadeIn>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {techSteps.map((step, i) => {
          const Icon = step.icon;
          const last = i === techSteps.length - 1;
          return (
            <FadeIn key={step.id} delay={0.03 * i}>
              <div className="relative h-full">
                <div className="panel h-full p-4">
                  <div className="flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-mineral-500/15 text-mineral-300">
                      <Icon size={18} />
                    </span>
                    <span className="text-[11px] font-700 text-slate-600">
                      {String(step.index).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-2.5 text-sm font-600 leading-snug text-white">
                    {step.title[lang]}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-400">{step.text[lang]}</p>
                </div>
                {!last && (
                  <ChevronRight
                    size={16}
                    className={`absolute -bottom-3 left-1/2 -translate-x-1/2 text-slate-600 xl:bottom-1/2 xl:left-auto xl:translate-x-0 xl:translate-y-1/2 ltr:xl:-right-2.5 rtl:xl:-left-2.5 rtl:rotate-180`}
                  />
                )}
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
