import { useLanguage } from "../i18n/LanguageContext";
import { SectionHeader, FadeIn } from "./ui";
import { financePathways } from "../data/pathwaysData";
import { PathwayCard } from "./PathwayCard";

export function ThreePathwayMap() {
  const { t } = useLanguage();
  return (
    <section>
      <SectionHeader kicker="06" title={t.pathways.title} subtitle={t.pathways.subtitle} />
      <div className="grid gap-5 lg:grid-cols-3">
        {financePathways.map((p, i) => (
          <FadeIn key={p.id} delay={0.08 * i}>
            <PathwayCard pathway={p} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
