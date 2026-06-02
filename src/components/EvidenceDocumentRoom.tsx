import { useState } from "react";
import { FileText } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { SectionHeader, FadeIn } from "./ui";
import {
  documentItems,
  type DocCategoryKey,
} from "../data/documentRoomData";
import { EvidenceStatusBadge } from "./EvidenceStatusBadge";
import { AccessBadge } from "./AccessBadge";

const categoryOrder: DocCategoryKey[] = [
  "profile",
  "licenses",
  "assays",
  "photos",
  "engineering",
  "greenFinance",
  "esg",
  "banking",
  "partner",
  "claims",
];

export function EvidenceDocumentRoom() {
  const { t, lang } = useLanguage();
  const d = t.documents;
  const [filter, setFilter] = useState<DocCategoryKey | "all">("all");

  const visible =
    filter === "all"
      ? documentItems
      : documentItems.filter((doc) => doc.category === filter);

  return (
    <section>
      <SectionHeader kicker="08" title={d.title} subtitle={d.subtitle} />

      {/* category filter */}
      <div className="mb-5 flex flex-wrap gap-2">
        <button
          onClick={() => setFilter("all")}
          className={`rounded-full border px-3 py-1 text-xs font-600 transition-colors ${
            filter === "all"
              ? "border-copper-400 bg-copper-500 text-graphite-950"
              : "border-graphite-700/70 text-slate-300 hover:border-graphite-600"
          }`}
        >
          {t.common.total}
        </button>
        {categoryOrder.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`rounded-full border px-3 py-1 text-xs font-600 transition-colors ${
              filter === cat
                ? "border-copper-400 bg-copper-500 text-graphite-950"
                : "border-graphite-700/70 text-slate-300 hover:border-graphite-600"
            }`}
          >
            {d.categories[cat]}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((doc, i) => (
          <FadeIn key={doc.id} delay={0.03 * i}>
            <article className="room-card flex h-full flex-col p-5">
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-graphite-700/50 text-slate-300">
                  <FileText size={18} />
                </span>
                <div>
                  <div className="text-[11px] font-600 uppercase tracking-wider text-copper-300">
                    {d.categories[doc.category]}
                  </div>
                  <h3 className="font-600 leading-snug text-white">
                    {doc.title[lang]}
                  </h3>
                </div>
              </div>

              <p className="mt-3 text-xs leading-relaxed text-slate-400">
                <span className="font-600 text-slate-500">{d.purpose}: </span>
                {doc.purpose[lang]}
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                <EvidenceStatusBadge status={doc.status} />
                <AccessBadge level={doc.access} />
              </div>

              <div className="mt-3 grid gap-2 border-t border-graphite-700/50 pt-3 text-xs">
                <div>
                  <span className="font-600 text-slate-500">{d.type}: </span>
                  <span className="text-slate-300">{doc.evidenceType[lang]}</span>
                </div>
                <div>
                  <span className="font-600 text-slate-500">{d.nextAction}: </span>
                  <span className="text-slate-300">{doc.nextAction[lang]}</span>
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
