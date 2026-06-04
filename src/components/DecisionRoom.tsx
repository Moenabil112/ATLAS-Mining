import { useLanguage } from "../i18n/LanguageContext";
import { ui } from "../i18n/translations";
import { decisions } from "../data/decisions";
import { DecisionCard } from "./DecisionCard";
import { SectionHeader, FadeIn } from "./ui";

export function DecisionRoom() {
  const { lang } = useLanguage();
  const p = ui.pages.decision;

  return (
    <section>
      <SectionHeader title={p.title[lang]} subtitle={p.subtitle[lang]} />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {decisions.map((d, i) => (
          <FadeIn key={d.id} delay={0.03 * i}>
            <DecisionCard entry={d} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
