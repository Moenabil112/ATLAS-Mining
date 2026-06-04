import { useLanguage } from "../i18n/LanguageContext";
import { ui } from "../i18n/translations";
import { projectLayers } from "../data/content";
import { SectionHeader, FadeIn } from "./ui";

export function ProjectMap() {
  const { lang } = useLanguage();
  const p = ui.pages.projectMap;

  return (
    <section>
      <SectionHeader title={p.title[lang]} subtitle={p.subtitle[lang]} />

      <div className="layer-rail relative space-y-4 ps-0">
        {projectLayers.map((layer, i) => {
          const Icon = layer.icon;
          return (
            <FadeIn key={layer.id} delay={0.06 * i}>
              <div className="relative flex gap-4">
                {/* node */}
                <div className="relative z-10 shrink-0">
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-2xl border-2"
                    style={{
                      borderColor: layer.color,
                      backgroundColor: `${layer.color}1a`,
                      color: layer.color,
                    }}
                  >
                    <Icon size={24} />
                  </span>
                </div>
                {/* card */}
                <div className="panel flex-1 p-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-[11px] font-700 text-slate-500">
                      {String(layer.index).padStart(2, "0")}
                    </span>
                    <h3 className="font-600 text-white">{layer.title[lang]}</h3>
                    {layer.poweredByAkanil && (
                      <span className="chip border border-gold-500/30 bg-gold-500/10 text-gold-400">
                        <img src="/akanil-logo.svg" alt="" className="h-3.5 w-5" />
                        {ui.brand.poweredBy[lang]}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{layer.text[lang]}</p>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
