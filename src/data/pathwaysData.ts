import type { Localized } from "./types";
import { Recycle, ThermometerSun, Landmark, type LucideIcon } from "lucide-react";

export interface FinancePathway {
  id: "geff" | "climate" | "bank";
  icon: LucideIcon;
  institution: Localized;
  title: Localized;
  positioning: Localized;
  keyPhrase: Localized;
  focus: Localized[];
  /** Cluster ids visible / relevant for this pathway. */
  relevantClusterIds: string[];
  visibleTotalLabel: Localized;
  /** Optional staged financing (used by the bank pathway). */
  stages?: { amount: number; label: Localized }[];
  accent: string;
}

export const financePathways: FinancePathway[] = [
  {
    id: "geff",
    icon: Recycle,
    accent: "#36a169",
    institution: { en: "EBRD / GEFF Morocco", fr: "BERD / GEFF Maroc", ar: "البنك الأوروبي / GEFF المغرب" },
    title: {
      en: "Resource-Efficient Pilot Plant Pathway",
      fr: "Parcours d'usine pilote économe en ressources",
      ar: "مسار مصنع تجريبي كفؤ في الموارد",
    },
    positioning: {
      en: "Atlas is presented as a Moroccan Green Copper platform framed as a resource-efficient pilot plant and scalable processing model.",
      fr: "Atlas est présenté comme une plateforme marocaine de cuivre vert, cadrée comme une usine pilote économe en ressources et un modèle de traitement évolutif.",
      ar: "يُقدَّم أطلس كمنصة نحاس أخضر مغربية مؤطّرة كمصنع تجريبي كفؤ في الموارد ونموذج معالجة قابل للتوسع.",
    },
    keyPhrase: {
      en: "Atlas is positioned as a resource-efficient green processing platform, not a conventional mining finance request.",
      fr: "Atlas est positionné comme une plateforme de traitement vert économe en ressources, et non comme une demande de financement minier conventionnelle.",
      ar: "يُموضع أطلس كمنصة معالجة خضراء كفؤة في الموارد، لا كطلب تمويل تعديني تقليدي.",
    },
    focus: [
      { en: "Water recycling", fr: "Recyclage de l'eau", ar: "إعادة تدوير المياه" },
      { en: "Controlled leaching", fr: "Lixiviation contrôlée", ar: "نض متحكَّم" },
      { en: "Reduced footprint", fr: "Empreinte réduite", ar: "بصمة مخفّضة" },
      { en: "Resource-efficient equipment", fr: "Équipement économe en ressources", ar: "معدات كفؤة في الموارد" },
      { en: "Digital ESG monitoring", fr: "Suivi ESG numérique", ar: "مراقبة رقمية للحوكمة" },
      { en: "Green technology components", fr: "Composants de technologie verte", ar: "مكونات تقنية خضراء" },
      { en: "Lower-impact processing", fr: "Traitement à faible impact", ar: "معالجة أقل أثراً" },
    ],
    relevantClusterIds: ["pilot", "processing", "environment", "esg"],
    visibleTotalLabel: {
      en: "Up to USD 33M of the expansion envelope may be relevant to resource efficiency and green technology review, subject to eligibility assessment.",
      fr: "Jusqu'à 33 M USD de l'enveloppe peuvent être pertinents pour l'examen d'efficacité des ressources et de technologie verte, sous réserve d'évaluation d'éligibilité.",
      ar: "حتى 33 مليون دولار من مظروف التوسع قد تكون ذات صلة بمراجعة كفاءة الموارد والتقنية الخضراء، خاضعة لتقييم الأهلية.",
    },
  },
  {
    id: "climate",
    icon: ThermometerSun,
    accent: "#5cb884",
    institution: { en: "EBRD Climate Finance", fr: "Finance Climat BERD", ar: "تمويل المناخ بالبنك الأوروبي" },
    title: {
      en: "Decarbonisation + Resource Efficiency + Climate-Resilient Processing",
      fr: "Décarbonation + Efficacité des ressources + Traitement résilient au climat",
      ar: "إزالة الكربون + كفاءة الموارد + معالجة مرنة مناخياً",
    },
    positioning: {
      en: "Atlas is framed as climate-resilient processing infrastructure for oxidized copper recovery and cement copper production.",
      fr: "Atlas est cadré comme une infrastructure de traitement résiliente au climat pour la récupération du cuivre oxydé et la production de cuivre de cémentation.",
      ar: "يُؤطَّر أطلس كبنية معالجة مرنة مناخياً لاسترجاع النحاس المؤكسد وإنتاج النحاس المترسب.",
    },
    keyPhrase: {
      en: "Atlas should be framed as climate-resilient processing infrastructure, not a conventional mine expansion request.",
      fr: "Atlas doit être cadré comme une infrastructure de traitement résiliente au climat, et non comme une demande d'expansion minière conventionnelle.",
      ar: "ينبغي تأطير أطلس كبنية معالجة مرنة مناخياً، لا كطلب توسع منجم تقليدي.",
    },
    focus: [
      { en: "Decarbonisation logic", fr: "Logique de décarbonation", ar: "منطق إزالة الكربون" },
      { en: "Resource efficiency", fr: "Efficacité des ressources", ar: "كفاءة الموارد" },
      { en: "Climate-resilient processing", fr: "Traitement résilient au climat", ar: "معالجة مرنة مناخياً" },
      { en: "Environmental safeguards", fr: "Garanties environnementales", ar: "ضمانات بيئية" },
      { en: "Controlled residue management", fr: "Gestion contrôlée des résidus", ar: "إدارة متحكَّمة للمخلفات" },
      { en: "Water and energy efficiency", fr: "Efficacité de l'eau et de l'énergie", ar: "كفاءة المياه والطاقة" },
      { en: "Pilot-to-bankable pathway", fr: "Parcours pilote-vers-bancable", ar: "مسار من التجريب إلى القابلية المصرفية" },
      { en: "Technical assistance readiness", fr: "Préparation à l'assistance technique", ar: "الجاهزية للمساعدة التقنية" },
    ],
    relevantClusterIds: ["processing", "environment", "esg", "working-capital"],
    visibleTotalLabel: {
      en: "Up to USD 38M of the expansion envelope may support climate-resilient processing and institutional de-risking, subject to review.",
      fr: "Jusqu'à 38 M USD de l'enveloppe peuvent soutenir le traitement résilient au climat et la réduction des risques institutionnels, sous réserve d'examen.",
      ar: "حتى 38 مليون دولار من مظروف التوسع قد تدعم المعالجة المرنة مناخياً وتقليل المخاطر المؤسسية، خاضعة للمراجعة.",
    },
  },
  {
    id: "bank",
    icon: Landmark,
    accent: "#b86a34",
    institution: {
      en: "Attijariwafa Bank / GCF-Oriented Structuring",
      fr: "Attijariwafa Bank / Structuration orientée GCF",
      ar: "التجاري وفا بنك / هيكلة موجهة لصندوق المناخ الأخضر",
    },
    title: {
      en: "Moroccan Green Finance & Beni Mellal Development Pathway",
      fr: "Parcours de finance verte marocaine & développement de Béni Mellal",
      ar: "مسار التمويل الأخضر المغربي وتنمية بني ملال",
    },
    positioning: {
      en: "Atlas is framed as a candidate green pilot and expansion platform that may be structured through a Moroccan banking channel with Green Climate Fund accreditation, subject to eligibility review, bank approval, and technical validation.",
      fr: "Atlas est cadré comme un pilote vert candidat et une plateforme d'expansion pouvant être structurés via un canal bancaire marocain accrédité GCF, sous réserve d'examen d'éligibilité, d'approbation bancaire et de validation technique.",
      ar: "يُؤطَّر أطلس كمشروع تجريبي أخضر مرشح ومنصة توسع يمكن هيكلتها عبر قناة مصرفية مغربية معتمدة لدى صندوق المناخ الأخضر، خاضعة لمراجعة الأهلية وموافقة البنك والتحقق التقني.",
    },
    keyPhrase: {
      en: "The project may be prepared for GCF-oriented green finance structuring through an accredited Moroccan banking channel, subject to review. Atlas is never claimed to be GCF accredited.",
      fr: "Le projet peut être préparé pour une structuration de finance verte orientée GCF via un canal bancaire marocain accrédité, sous réserve d'examen. Atlas n'est jamais présenté comme accrédité GCF.",
      ar: "قد يُعد المشروع لهيكلة تمويل أخضر موجهة لصندوق المناخ الأخضر عبر قناة مصرفية مغربية معتمدة، خاضعة للمراجعة. لا يُدَّعى أبداً أن أطلس معتمد لدى الصندوق.",
    },
    focus: [
      { en: "Green finance structuring", fr: "Structuration de finance verte", ar: "هيكلة التمويل الأخضر" },
      { en: "Beni Mellal regional development", fr: "Développement régional de Béni Mellal", ar: "التنمية الإقليمية لبني ملال" },
      { en: "Moroccan institutional confidence", fr: "Confiance institutionnelle marocaine", ar: "الثقة المؤسسية المغربية" },
      { en: "Bankable project governance", fr: "Gouvernance de projet bancable", ar: "حوكمة مشروع قابل للتمويل" },
      { en: "Digital data room", fr: "Data room numérique", ar: "غرفة بيانات رقمية" },
      { en: "ESG transparency", fr: "Transparence ESG", ar: "شفافية الحوكمة" },
      { en: "Regional development model", fr: "Modèle de développement régional", ar: "نموذج تنمية إقليمية" },
      { en: "Soft economic diplomacy", fr: "Diplomatie économique douce", ar: "دبلوماسية اقتصادية ناعمة" },
    ],
    relevantClusterIds: ["pilot", "processing", "environment", "exploration", "esg", "working-capital"],
    visibleTotalLabel: {
      en: "USD 50M Bankable Green Copper Expansion Facility — shown as a staged financing envelope, not an immediate single disbursement.",
      fr: "Facilité d'expansion cuivre vert bancable de 50 M USD — présentée comme une enveloppe échelonnée, et non un décaissement unique immédiat.",
      ar: "تسهيل توسع نحاس أخضر قابل للتمويل بقيمة 50 مليون دولار — مُقدَّم كمظروف تمويل مُرحَّل، لا كصرف فوري واحد.",
    },
    stages: [
      { amount: 5, label: { en: "Stage 1 — Validation & de-risking", fr: "Étape 1 — Validation & réduction des risques", ar: "المرحلة 1 — التحقق وتقليل المخاطر" } },
      { amount: 15, label: { en: "Stage 2 — Modular processing infrastructure", fr: "Étape 2 — Infrastructure de traitement modulaire", ar: "المرحلة 2 — بنية المعالجة المعيارية" } },
      { amount: 8, label: { en: "Stage 3 — Environmental & climate systems", fr: "Étape 3 — Systèmes environnementaux & climatiques", ar: "المرحلة 3 — الأنظمة البيئية والمناخية" } },
      { amount: 7, label: { en: "Stage 4 — Exploration & portfolio development", fr: "Étape 4 — Exploration & développement du portefeuille", ar: "المرحلة 4 — الاستكشاف وتطوير المحفظة" } },
      { amount: 5, label: { en: "Stage 5 — Digital ESG & data room systems", fr: "Étape 5 — Systèmes ESG numériques & data room", ar: "المرحلة 5 — أنظمة الحوكمة الرقمية وغرفة البيانات" } },
      { amount: 10, label: { en: "Stage 6 — Working capital, governance, independent review", fr: "Étape 6 — Fonds de roulement, gouvernance, examen indépendant", ar: "المرحلة 6 — رأس المال العامل والحوكمة والمراجعة المستقلة" } },
    ],
  },
];
