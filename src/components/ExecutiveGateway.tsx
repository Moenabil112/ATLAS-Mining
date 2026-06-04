import { ArrowRight } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { ui } from "../i18n/translations";
import { execCards } from "../data/content";
import { FadeIn } from "./ui";
import { useView } from "./viewContext";

export function ExecutiveGateway() {
  const { lang } = useLanguage();
  const { goTo } = useView();
  const p = ui.pages.executive;

  return (
    <section>
      {/* hero */}
      <FadeIn>
        <div className="panel relative overflow-hidden p-8 sm:p-10">
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(900px 380px at 12% -20%, rgba(176,141,87,0.12), transparent 60%), radial-gradient(700px 360px at 100% 0%, rgba(31,138,84,0.10), transparent 60%)",
            }}
          />
          <div className="relative">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-mineral-400/30 bg-mineral-500/10 px-3 py-1 text-xs font-600 text-mineral-200">
              {p.subtitle[lang]}
            </div>
            <h1 className="max-w-3xl text-3xl font-800 leading-tight text-white sm:text-4xl lg:text-5xl">
              {p.title[lang]}
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
              {p.body[lang]}
            </p>
            <button
              onClick={() => goTo("projectMap")}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gold-500 px-5 py-2.5 font-600 text-graphite-950 transition-colors hover:bg-gold-400"
            >
              {ui.nav[1].label[lang]}
              <ArrowRight size={17} className="rtl:rotate-180" />
            </button>
          </div>
        </div>
      </FadeIn>

      {/* key cards */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {execCards.map((c, i) => {
          const Icon = c.icon;
          return (
            <FadeIn key={c.id} delay={0.06 * (i + 1)}>
              <div className="panel h-full p-5" style={{ borderTopColor: c.accent, borderTopWidth: 3 }}>
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${c.accent}1f`, color: c.accent }}
                >
                  <Icon size={22} />
                </span>
                <h3 className="mt-3 font-600 leading-snug text-white">{c.title[lang]}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{c.text[lang]}</p>
              </div>
            </FadeIn>
          );
        })}
      </div>

      <FadeIn delay={0.4}>
        <p className="mt-6 inline-flex rounded-lg border border-graphite-700/60 bg-graphite-900/50 px-4 py-2.5 text-xs text-slate-400">
          {ui.common.confidentialNote[lang]}
        </p>
      </FadeIn>
    </section>
  );
}
