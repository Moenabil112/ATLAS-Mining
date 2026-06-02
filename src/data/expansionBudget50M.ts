import type { Localized } from "./types";

export type LensKey = "full" | "geff" | "climate" | "bank" | "partner" | "atlas";

export interface BudgetCluster {
  id: string;
  amount: number; // USD millions
  title: Localized;
  purpose: Localized[];
  stakeholders: string[];
  color: string;
  /** Lenses for which this cluster is relevant. */
  lenses: LensKey[];
}

export const TOTAL_USD_M = 50;

export const budgetClusters: BudgetCluster[] = [
  {
    id: "pilot",
    amount: 5,
    color: "#36a169",
    title: {
      en: "Pilot Validation & Technical De-Risking",
      fr: "Validation pilote & Réduction des risques techniques",
      ar: "التحقق التجريبي وتقليل المخاطر التقنية",
    },
    purpose: [
      { en: "Technical confirmation", fr: "Confirmation technique", ar: "تأكيد تقني" },
      { en: "Mineralogy", fr: "Minéralogie", ar: "علم المعادن" },
      { en: "Metallurgical testing", fr: "Essais métallurgiques", ar: "اختبارات ميتالورجية" },
      { en: "Sampling campaigns", fr: "Campagnes d'échantillonnage", ar: "حملات أخذ العينات" },
      { en: "Modular vat leaching validation", fr: "Validation lixiviation en cuves modulaires", ar: "التحقق من النض المعياري بالأحواض" },
      { en: "Cement copper validation", fr: "Validation cuivre de cémentation", ar: "التحقق من النحاس المترسب" },
      { en: "Environmental baseline", fr: "État de référence environnemental", ar: "خط الأساس البيئي" },
      { en: "Early ESG data model", fr: "Modèle de données ESG initial", ar: "نموذج بيانات الحوكمة المبكر" },
    ],
    stakeholders: ["EBRD / GEFF", "Technical advisors", "Moroccan operating partner", "Attijariwafa Bank reviewers"],
    lenses: ["full", "geff", "bank", "partner", "atlas"],
  },
  {
    id: "processing",
    amount: 15,
    color: "#b86a34",
    title: {
      en: "Modular Green Processing Infrastructure",
      fr: "Infrastructure de traitement vert modulaire",
      ar: "بنية المعالجة الخضراء المعيارية",
    },
    purpose: [
      { en: "Modular processing units", fr: "Unités de traitement modulaires", ar: "وحدات معالجة معيارية" },
      { en: "Crushing and screening", fr: "Concassage et criblage", ar: "تكسير وغربلة" },
      { en: "Washing / scrubbing", fr: "Lavage / débourbage", ar: "غسل / تنظيف" },
      { en: "Vat leaching systems", fr: "Systèmes de lixiviation en cuves", ar: "أنظمة النض بالأحواض" },
      { en: "Cementation circuits", fr: "Circuits de cémentation", ar: "دوائر الترسيب" },
      { en: "Water recycling infrastructure", fr: "Infrastructure de recyclage de l'eau", ar: "بنية إعادة تدوير المياه" },
      { en: "Residue containment systems", fr: "Systèmes de confinement des résidus", ar: "أنظمة احتواء المخلفات" },
    ],
    stakeholders: ["EBRD / GEFF", "EBRD Climate Finance", "Moroccan operating partner", "Industrial partner"],
    lenses: ["full", "geff", "climate", "bank", "partner"],
  },
  {
    id: "environment",
    amount: 8,
    color: "#1f8a54",
    title: {
      en: "Environmental, Water & Climate Resilience Systems",
      fr: "Systèmes environnementaux, eau & résilience climatique",
      ar: "أنظمة البيئة والمياه والمرونة المناخية",
    },
    purpose: [
      { en: "Water recycling", fr: "Recyclage de l'eau", ar: "إعادة تدوير المياه" },
      { en: "Reduced footprint design", fr: "Conception à empreinte réduite", ar: "تصميم بصمة مخفّضة" },
      { en: "Environmental safeguards", fr: "Garanties environnementales", ar: "ضمانات بيئية" },
      { en: "Acid handling and containment", fr: "Manutention et confinement de l'acide", ar: "مناولة واحتواء الحمض" },
      { en: "Residue neutralization", fr: "Neutralisation des résidus", ar: "تحييد المخلفات" },
      { en: "Climate-resilient site infrastructure", fr: "Infrastructure de site résiliente au climat", ar: "بنية موقع مرنة مناخياً" },
      { en: "Monitoring and compliance systems", fr: "Systèmes de suivi et de conformité", ar: "أنظمة المراقبة والامتثال" },
    ],
    stakeholders: ["EBRD Climate Finance", "GEFF", "Environmental advisors", "Attijariwafa Bank green structuring"],
    lenses: ["full", "geff", "climate", "bank"],
  },
  {
    id: "exploration",
    amount: 7,
    color: "#94703e",
    title: {
      en: "Exploration & Multi-License Development",
      fr: "Exploration & Développement multi-licences",
      ar: "الاستكشاف وتطوير الرخص المتعددة",
    },
    purpose: [
      { en: "Exploration program", fr: "Programme d'exploration", ar: "برنامج استكشاف" },
      { en: "Mapping", fr: "Cartographie", ar: "رسم الخرائط" },
      { en: "Geophysics", fr: "Géophysique", ar: "الجيوفيزياء" },
      { en: "Sampling", fr: "Échantillonnage", ar: "أخذ العينات" },
      { en: "Drilling preparation", fr: "Préparation du forage", ar: "تحضير الحفر" },
      { en: "Multi-element assays", fr: "Analyses multi-éléments", ar: "تحاليل متعددة العناصر" },
      { en: "Copper, nickel, zinc, gold target screening", fr: "Criblage de cibles cuivre, nickel, zinc, or", ar: "فرز أهداف النحاس والنيكل والزنك والذهب" },
      { en: "Portfolio prioritization", fr: "Priorisation du portefeuille", ar: "ترتيب أولويات المحفظة" },
    ],
    stakeholders: ["Atlas Mining SARL", "Moroccan operating partner", "Strategic mineral investors", "Technical advisors"],
    lenses: ["full", "partner", "atlas"],
  },
  {
    id: "esg",
    amount: 5,
    color: "#5cb884",
    title: {
      en: "Digital ESG, Data Room & Stakeholder Console",
      fr: "ESG numérique, Data Room & Console parties prenantes",
      ar: "الحوكمة الرقمية وغرفة البيانات ولوحة الجهات المعنية",
    },
    purpose: [
      { en: "Digital ESG monitoring", fr: "Suivi ESG numérique", ar: "مراقبة رقمية للحوكمة" },
      { en: "Stakeholder console", fr: "Console parties prenantes", ar: "لوحة الجهات المعنية" },
      { en: "Secure data room", fr: "Data room sécurisée", ar: "غرفة بيانات آمنة" },
      { en: "AI-assisted project knowledge", fr: "Connaissance projet assistée par IA", ar: "معرفة مشروع بمساعدة الذكاء الاصطناعي" },
      { en: "Claims-control system", fr: "Système de contrôle des affirmations", ar: "نظام ضبط الادعاءات" },
      { en: "Document governance", fr: "Gouvernance documentaire", ar: "حوكمة الوثائق" },
      { en: "Monitoring dashboard", fr: "Tableau de bord de suivi", ar: "لوحة مراقبة" },
      { en: "Reporting workflow", fr: "Flux de reporting", ar: "سير عمل التقارير" },
    ],
    stakeholders: ["Attijariwafa Bank", "EBRD / GEFF", "EBRD Climate Finance", "Internal Atlas / Akanil", "DFI reviewers"],
    lenses: ["full", "geff", "climate", "bank", "atlas"],
  },
  {
    id: "working-capital",
    amount: 10,
    color: "#d6905f",
    title: {
      en: "Working Capital, Governance & Independent Review",
      fr: "Fonds de roulement, Gouvernance & Examen indépendant",
      ar: "رأس المال العامل والحوكمة والمراجعة المستقلة",
    },
    purpose: [
      { en: "Pilot-to-expansion working capital", fr: "Fonds de roulement pilote-vers-expansion", ar: "رأس مال عامل من التجريب إلى التوسع" },
      { en: "Governance", fr: "Gouvernance", ar: "الحوكمة" },
      { en: "Independent technical review", fr: "Examen technique indépendant", ar: "مراجعة تقنية مستقلة" },
      { en: "Environmental review", fr: "Examen environnemental", ar: "مراجعة بيئية" },
      { en: "Compliance support", fr: "Soutien à la conformité", ar: "دعم الامتثال" },
      { en: "Partner due diligence", fr: "Diligence raisonnable des partenaires", ar: "العناية الواجبة للشركاء" },
      { en: "Operational readiness", fr: "Préparation opérationnelle", ar: "الجاهزية التشغيلية" },
      { en: "Contingency", fr: "Provision pour imprévus", ar: "احتياطي للطوارئ" },
    ],
    stakeholders: ["Attijariwafa Bank", "Moroccan operating partner", "Strategic partner", "DFIs"],
    lenses: ["full", "climate", "bank", "partner"],
  },
];

/** Sum of cluster amounts visible for a given lens. */
export function lensTotal(lens: LensKey): number {
  return budgetClusters
    .filter((c) => c.lenses.includes(lens))
    .reduce((sum, c) => sum + c.amount, 0);
}
