import { useLanguage } from "../i18n/LanguageContext";
import { ui } from "../i18n/translations";
import { documents, type AccessGroup } from "../data/documents";
import { DocumentCard } from "./DocumentCard";
import { SectionHeader, FadeIn } from "./ui";

const groups: { id: AccessGroup; key: keyof typeof ui.access }[] = [
  { id: "general", key: "general" },
  { id: "partner", key: "partner" },
  { id: "validation", key: "validation" },
  { id: "finance", key: "finance" },
];

export function DocumentRoom() {
  const { lang } = useLanguage();
  const p = ui.pages.documents;

  return (
    <section>
      <SectionHeader title={p.title[lang]} subtitle={p.subtitle[lang]} />

      <div className="space-y-8">
        {groups.map((g) => {
          const docs = documents.filter((d) => d.group === g.id);
          return (
            <div key={g.id}>
              <div className="mb-3 flex items-center gap-3">
                <h3 className="text-sm font-700 uppercase tracking-wider text-gold-400">
                  {ui.access[g.key][lang]}
                </h3>
                <span className="h-px flex-1 bg-graphite-700/60" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {docs.map((doc, i) => (
                  <FadeIn key={doc.id} delay={0.03 * i}>
                    <DocumentCard doc={doc} />
                  </FadeIn>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
