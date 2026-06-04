import { l, type L } from "../i18n/types";

export type AccessGroup = "general" | "partner" | "validation" | "finance";
export type DocStatus = "draft" | "ready" | "restricted";

export interface DocumentEntry {
  id: string;
  group: AccessGroup;
  title: L;
  audience: L;
  status: DocStatus;
  href: string;
}

// Real, downloadable PDFs live under /docs (see public/docs).
const DOCS = "/docs";

export const documents: DocumentEntry[] = [
  /* ---------- General Access ---------- */
  {
    id: "general-brief",
    group: "general",
    title: l("General Institutional Brief", "Note Institutionnelle Générale", "موجز مؤسسي عام"),
    audience: l("All approved stakeholders", "Toutes parties prenantes approuvées", "جميع الجهات المعتمدة"),
    status: "ready",
    href: "#",
  },
  {
    id: "exec-summary",
    group: "general",
    title: l("Executive Summary", "Résumé Exécutif", "ملخص تنفيذي"),
    audience: l("Board & senior stakeholders", "Conseil & parties prenantes seniors", "المجلس وكبار الجهات المعنية"),
    status: "ready",
    href: "#",
  },
  {
    id: "project-overview",
    group: "general",
    title: l("Project Overview", "Aperçu du Projet", "نظرة عامة على المشروع"),
    audience: l("All approved stakeholders", "Toutes parties prenantes approuvées", "جميع الجهات المعتمدة"),
    status: "ready",
    href: "#",
  },

  /* ---------- Partner Access ---------- */
  {
    id: "industrial-brief",
    group: "partner",
    title: l("Industrial Partner Brief", "Note Partenaire Industriel", "موجز الشريك الصناعي"),
    audience: l("Industrial partners", "Partenaires industriels", "الشركاء الصناعيون"),
    status: "draft",
    href: "#",
  },
  {
    id: "processing-options",
    group: "partner",
    title: l("Green Processing Options Study", "Étude des Options de Traitement Vert", "دراسة خيارات المعالجة الخضراء"),
    audience: l("Industrial & technical partners", "Partenaires industriels & techniques", "الشركاء الصناعيون والتقنيون"),
    status: "ready",
    href: `${DOCS}/ATLAS_GreenCopper_Processing_Options.pdf`,
  },
  {
    id: "development-brief",
    group: "partner",
    title: l("Development Partner Brief", "Note Partenaire Développement", "موجز شريك التنمية"),
    audience: l("Development partners", "Partenaires de développement", "شركاء التنمية"),
    status: "draft",
    href: "#",
  },
  {
    id: "regional-sme",
    group: "partner",
    title: l("Regional & SME Development Brief", "Note de Développement Régional & PME", "موجز التنمية الإقليمية والمقاولات"),
    audience: l("Development partners & regional actors", "Partenaires de développement & acteurs régionaux", "شركاء التنمية والفاعلون الإقليميون"),
    status: "ready",
    href: `${DOCS}/ATLAS_GreenCopper_Regional_SME.pdf`,
  },
  {
    id: "financial-brief",
    group: "partner",
    title: l("Financial Partner Brief", "Note Partenaire Financier", "موجز الشريك المالي"),
    audience: l("Financial partners", "Partenaires financiers", "الشركاء الماليون"),
    status: "draft",
    href: "#",
  },
  {
    id: "technical-brief",
    group: "partner",
    title: l("Technical & Environmental Partner Brief", "Note Partenaire Technique & Environnemental", "موجز الشريك التقني والبيئي"),
    audience: l("Technical & environmental partners", "Partenaires techniques & environnementaux", "الشركاء التقنيون والبيئيون"),
    status: "draft",
    href: "#",
  },

  /* ---------- Validation Access ---------- */
  {
    id: "validation-framework",
    group: "validation",
    title: l("Technical & Environmental Validation Framework", "Cadre de Validation Technique & Environnementale", "إطار التحقق التقني والبيئي"),
    audience: l("Technical & environmental partners", "Partenaires techniques & environnementaux", "الشركاء التقنيون والبيئيون"),
    status: "ready",
    href: `${DOCS}/ATLAS_GreenCopper_Validation_Framework.pdf`,
  },
  {
    id: "sampling-protocol",
    group: "validation",
    title: l("Ore Intelligence & Sampling Protocol", "Intelligence du Minerai & Protocole d'Échantillonnage", "ذكاء الخام وبروتوكول أخذ العينات"),
    audience: l("Technical partners & advisors", "Partenaires techniques & conseillers", "الشركاء التقنيون والمستشارون"),
    status: "ready",
    href: `${DOCS}/ATLAS_GreenCopper_Sampling_Protocol.pdf`,
  },
  {
    id: "metallurgical-plan",
    group: "validation",
    title: l("Metallurgical Test Work Plan", "Plan de Travaux d'Essais Métallurgiques", "خطة أعمال الاختبار الميتالورجي"),
    audience: l("Technical partners & laboratories", "Partenaires techniques & laboratoires", "الشركاء التقنيون والمختبرات"),
    status: "ready",
    href: `${DOCS}/ATLAS_GreenCopper_Metallurgical_Test_Plan.pdf`,
  },
  {
    id: "environmental-concept",
    group: "validation",
    title: l("Environmental & Water Management Concept", "Concept de Gestion Environnementale & de l'Eau", "مفهوم الإدارة البيئية وإدارة المياه"),
    audience: l("Environmental advisors", "Conseillers environnementaux", "المستشارون البيئيون"),
    status: "ready",
    href: `${DOCS}/ATLAS_GreenCopper_Environmental_Water.pdf`,
  },

  /* ---------- Finance Access ---------- */
  {
    id: "usd50m-study",
    group: "finance",
    title: l("USD 50M Financial Envelope Study", "Étude de l'Enveloppe Financière 50 M USD", "دراسة المظروف المالي لـ50 مليون دولار"),
    audience: l("Financial partners & DFIs", "Partenaires financiers & IFD", "الشركاء الماليون ومؤسسات تمويل التنمية"),
    status: "ready",
    href: `${DOCS}/ATLAS_GreenCopper_Financial_Envelope.pdf`,
  },
  {
    id: "finance-strategy",
    group: "finance",
    title: l("Stakeholder Finance & Partnership Strategy", "Stratégie de Finance & Partenariat", "استراتيجية التمويل والشراكة"),
    audience: l("Financial partners", "Partenaires financiers", "الشركاء الماليون"),
    status: "ready",
    href: `${DOCS}/ATLAS_GreenCopper_Partnership_Strategy.pdf`,
  },
  {
    id: "esg-governance",
    group: "finance",
    title: l("Digital ESG & Data Governance", "ESG Numérique & Gouvernance des Données", "الحوكمة الرقمية وإدارة البيانات"),
    audience: l("Financial partners & advisors", "Partenaires financiers & conseillers", "الشركاء الماليون والمستشارون"),
    status: "ready",
    href: `${DOCS}/ATLAS_GreenCopper_ESG_Data_Governance.pdf`,
  },
  {
    id: "risk-register",
    group: "finance",
    title: l("Risk Register & Decision Gate Memo", "Registre des Risques & Note de Jalon de Décision", "سجل المخاطر ومذكرة بوابة القرار"),
    audience: l("Board & financial partners", "Conseil & partenaires financiers", "المجلس والشركاء الماليون"),
    status: "restricted",
    href: "#",
  },
];
