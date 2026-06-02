import type { Localized, AccessLevel, EvidenceKey } from "./types";

export type DocCategoryKey =
  | "profile"
  | "licenses"
  | "assays"
  | "photos"
  | "engineering"
  | "greenFinance"
  | "esg"
  | "banking"
  | "partner"
  | "claims";

export interface DocumentItem {
  id: string;
  category: DocCategoryKey;
  title: Localized;
  purpose: Localized;
  status: EvidenceKey;
  access: AccessLevel;
  evidenceType: Localized;
  nextAction: Localized;
}

const L = (en: string, fr: string, ar: string): Localized => ({ en, fr, ar });

export const documentItems: DocumentItem[] = [
  {
    id: "doc-profile",
    category: "profile",
    title: L("Atlas Mining company profile", "Profil d'entreprise Atlas Mining", "ملف شركة أطلس ماينينغ"),
    purpose: L("Establish accumulated experience since 2012.", "Établir l'expérience accumulée depuis 2012.", "إثبات الخبرة المتراكمة منذ 2012."),
    status: "partnerReady",
    access: "partner",
    evidenceType: L("Corporate document", "Document corporatif", "وثيقة مؤسسية"),
    nextAction: L("Confirm latest version for disclosure.", "Confirmer la dernière version pour divulgation.", "تأكيد أحدث نسخة للإفصاح."),
  },
  {
    id: "doc-licenses",
    category: "licenses",
    title: L("Four copper license titles & renewal status", "Titres de quatre licences cuivre & statut de renouvellement", "سندات أربع رخص نحاس وحالة التجديد"),
    purpose: L("Confirm portfolio base and renewal position.", "Confirmer la base du portefeuille et la position de renouvellement.", "تأكيد قاعدة المحفظة وموقف التجديد."),
    status: "validation",
    access: "reviewer",
    evidenceType: L("Legal title", "Titre juridique", "سند قانوني"),
    nextAction: L("Obtain renewal confirmation before external use.", "Obtenir la confirmation de renouvellement avant usage externe.", "الحصول على تأكيد التجديد قبل الاستخدام الخارجي."),
  },
  {
    id: "doc-assays",
    category: "assays",
    title: L("Copper assay & sampling results", "Résultats d'analyses & d'échantillonnage cuivre", "نتائج تحاليل وعينات النحاس"),
    purpose: L("Support preliminary mineralization evidence.", "Soutenir les preuves préliminaires de minéralisation.", "دعم أدلة التمعدن الأولية."),
    status: "validation",
    access: "advisor",
    evidenceType: L("Laboratory data", "Données de laboratoire", "بيانات مختبرية"),
    nextAction: L("Commission certified assay campaign.", "Commander une campagne d'analyses certifiées.", "تكليف حملة تحاليل معتمدة."),
  },
  {
    id: "doc-photos",
    category: "photos",
    title: L("Field & site photographs", "Photographies de terrain & de site", "صور ميدانية وموقعية"),
    purpose: L("Visual context of sites and outcrops.", "Contexte visuel des sites et affleurements.", "سياق بصري للمواقع والانكشافات."),
    status: "profile",
    access: "internal",
    evidenceType: L("Visual record", "Enregistrement visuel", "سجل بصري"),
    nextAction: L("Geo-tag and catalogue for data room.", "Géolocaliser et cataloguer pour la data room.", "وسم جغرافي وفهرسة لغرفة البيانات."),
  },
  {
    id: "doc-engineering",
    category: "engineering",
    title: L("Modular processing concept note", "Note de concept de traitement modulaire", "مذكرة مفهوم المعالجة المعيارية"),
    purpose: L("Describe proposed modular vat leaching flow.", "Décrire le flux de lixiviation en cuves modulaires proposé.", "وصف تدفق النض المعياري بالأحواض المقترح."),
    status: "docRequired",
    access: "advisor",
    evidenceType: L("Engineering study", "Étude d'ingénierie", "دراسة هندسية"),
    nextAction: L("Develop pre-feasibility engineering package.", "Développer un dossier d'ingénierie de préfaisabilité.", "تطوير حزمة هندسة الجدوى الأولية."),
  },
  {
    id: "doc-green",
    category: "greenFinance",
    title: L("Green finance eligibility brief", "Note d'éligibilité finance verte", "موجز أهلية التمويل الأخضر"),
    purpose: L("Map resource-efficiency and climate logic to pathways.", "Cartographier l'efficacité des ressources et la logique climatique vers les parcours.", "ربط كفاءة الموارد ومنطق المناخ بالمسارات."),
    status: "docRequired",
    access: "reviewer",
    evidenceType: L("Positioning brief", "Note de positionnement", "موجز تموضع"),
    nextAction: L("Align with EBRD / GEFF eligibility criteria.", "Aligner sur les critères d'éligibilité BERD / GEFF.", "المواءمة مع معايير أهلية البنك الأوروبي / GEFF."),
  },
  {
    id: "doc-esg",
    category: "esg",
    title: L("ESG monitoring data model", "Modèle de données de suivi ESG", "نموذج بيانات مراقبة الحوكمة"),
    purpose: L("Define metrics, baselines and reporting workflow.", "Définir les indicateurs, références et flux de reporting.", "تعريف المقاييس وخطوط الأساس وسير عمل التقارير."),
    status: "docRequired",
    access: "controlled",
    evidenceType: L("Data specification", "Spécification de données", "مواصفة بيانات"),
    nextAction: L("Populate with pilot data once available.", "Renseigner avec les données pilote dès disponibilité.", "تعبئتها ببيانات التجريب عند توفرها."),
  },
  {
    id: "doc-banking",
    category: "banking",
    title: L("Bankable structuring outline", "Schéma de structuration bancable", "مخطط هيكلة قابلة للتمويل"),
    purpose: L("Outline staged USD 50M facility logic for a banking channel.", "Esquisser la logique de facilité échelonnée de 50 M USD pour un canal bancaire.", "بيان منطق تسهيل 50 مليون دولار المُرحَّل لقناة مصرفية."),
    status: "internal",
    access: "internal",
    evidenceType: L("Financial outline", "Schéma financier", "مخطط مالي"),
    nextAction: L("Prepare for Attijariwafa Bank green structuring meeting.", "Préparer la réunion de structuration verte Attijariwafa Bank.", "التحضير لاجتماع الهيكلة الخضراء مع التجاري وفا بنك."),
  },
  {
    id: "doc-partner",
    category: "partner",
    title: L("Moroccan operating partner shortlist", "Liste restreinte de partenaires opérationnels marocains", "قائمة مختصرة لشركاء تشغيليين مغاربة"),
    purpose: L("Track candidate operating partners and engagement status.", "Suivre les partenaires opérationnels candidats et le statut d'engagement.", "تتبع الشركاء التشغيليين المرشحين وحالة الإشراك."),
    status: "internal",
    access: "internal",
    evidenceType: L("Engagement tracker", "Suivi d'engagement", "متتبع الإشراك"),
    nextAction: L("Initiate confidential partner discussions.", "Lancer des discussions confidentielles avec les partenaires.", "بدء مناقشات سرية مع الشركاء."),
  },
  {
    id: "doc-claims",
    category: "claims",
    title: L("Claims-control register", "Registre de contrôle des affirmations", "سجل ضبط الادعاءات"),
    purpose: L("Govern approved wording and disclosure discipline.", "Régir la formulation approuvée et la discipline de divulgation.", "حوكمة الصياغة المعتمدة وانضباط الإفصاح."),
    status: "partnerReady",
    access: "controlled",
    evidenceType: L("Governance register", "Registre de gouvernance", "سجل حوكمة"),
    nextAction: L("Review before every external presentation.", "Réviser avant chaque présentation externe.", "المراجعة قبل كل عرض خارجي."),
  },
];
