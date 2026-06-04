import { useLanguage } from "../i18n/LanguageContext";
import { ui } from "../i18n/translations";
import { partnerPathways } from "../data/partnerViews";
import { PartnerPathwayCard } from "./PartnerPathwayCard";
import { SectionHeader, FadeIn } from "./ui";

export function PartnerPathways() {
  const { lang } = useLanguage();
  const p = ui.pages.pathways;

  return (
    <section>
      <SectionHeader title={p.title[lang]} subtitle={p.subtitle[lang]} />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {partnerPathways.map((pw, i) => (
          <FadeIn key={pw.id} delay={0.05 * i}>
            <PartnerPathwayCard pathway={pw} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
