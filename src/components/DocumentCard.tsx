import { FileText, Download, Sparkles, Lock } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { ui } from "../i18n/translations";
import { useView } from "./viewContext";
import type { DocumentEntry, DocStatus } from "../data/documents";

const statusStyle: Record<DocStatus, string> = {
  draft: "bg-graphite-700/60 text-slate-300 border-graphite-600/60",
  ready: "bg-mineral-500/15 text-mineral-200 border-mineral-400/30",
  restricted: "bg-copper-500/15 text-copper-200 border-copper-400/30",
};

export function DocumentCard({ doc }: { doc: DocumentEntry }) {
  const { lang } = useLanguage();
  const { isDocHighlighted } = useView();
  const highlighted = isDocHighlighted(doc.id);
  const hasFile = doc.href !== "#";
  const downloadable = hasFile && doc.status !== "restricted";

  return (
    <article
      className={`panel flex h-full flex-col p-5 transition-shadow ${
        highlighted ? "ring-1 ring-gold-500/50" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-graphite-700/50 text-slate-300">
          <FileText size={18} />
        </span>
        <span className={`chip border ${statusStyle[doc.status]}`}>
          {ui.status[doc.status][lang]}
        </span>
      </div>

      <h3 className="mt-3 font-600 leading-snug text-white">{doc.title[lang]}</h3>

      <div className="mt-2 text-xs text-slate-400">
        <span className="font-600 text-slate-500">{ui.common.targetAudience[lang]}: </span>
        {doc.audience[lang]}
      </div>

      {highlighted && (
        <div className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-md bg-gold-500/10 px-2 py-0.5 text-[11px] font-500 text-gold-400">
          <Sparkles size={12} /> {ui.common.highlighted[lang]}
        </div>
      )}

      <a
        href={doc.href}
        {...(downloadable ? { download: "" } : {})}
        aria-disabled={!downloadable}
        onClick={(e) => {
          if (!downloadable) e.preventDefault();
        }}
        className={`mt-auto flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-600 transition-colors ${
          downloadable
            ? "bg-graphite-700/70 text-white hover:bg-graphite-600"
            : "cursor-not-allowed border border-graphite-700/60 text-slate-500"
        }`}
        style={{ marginTop: "1rem" }}
      >
        {downloadable ? <Download size={16} /> : <Lock size={15} />}
        {ui.common.download[lang]}
      </a>
    </article>
  );
}
