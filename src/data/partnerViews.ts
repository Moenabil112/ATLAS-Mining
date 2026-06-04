import { l, type L } from "../i18n/types";
import type { SectionId } from "../i18n/translations";
import {
  Factory,
  Building2,
  Landmark,
  FlaskConical,
  Briefcase,
  type LucideIcon,
} from "lucide-react";

export type PartnerViewId =
  | "board"
  | "industrial"
  | "development"
  | "financial"
  | "technical";

/* ---------- Partner pathway cards (Page 3) ---------- */
export interface PartnerPathway {
  id: PartnerViewId;
  icon: LucideIcon;
  name: L;
  badge: L;
  message: L;
  interests: L[];
  nextAction: L;
  button: L;
  accent: string;
}

export const partnerPathways: PartnerPathway[] = [
  {
    id: "industrial",
    icon: Factory,
    accent: "#b86a34",
    name: l("Industrial Partner", "Partenaire Industriel", "الشريك الصناعي"),
    badge: l("Industrial", "Industriel", "صناعي"),
    nextAction: l("Open the industrial partner pathway and processing review.", "Ouvrir le parcours industriel et l'examen du traitement.", "فتح المسار الصناعي ومراجعة المعالجة."),
    message: l(
      "Supports operations, processing, equipment, product quality and the pilot-to-industrial transition.",
      "Soutient les opérations, le traitement, les équipements, la qualité produit et la transition pilote-vers-industriel.",
      "يدعم العمليات والمعالجة والمعدات وجودة المنتج والانتقال من التجريب إلى الصناعة."
    ),
    interests: [
      l("Processing units", "Unités de traitement", "وحدات المعالجة"),
      l("Equipment", "Équipements", "المعدات"),
      l("Cement copper", "Cuivre de cémentation", "النحاس المترسب"),
      l("Production model", "Modèle de production", "نموذج الإنتاج"),
      l("Industrial scale-up", "Montée en échelle industrielle", "التوسع الصناعي"),
    ],
    button: l("View Industrial Pathway", "Voir le Parcours Industriel", "عرض المسار الصناعي"),
  },
  {
    id: "development",
    icon: Building2,
    accent: "#cdb893",
    name: l("Development Partner", "Partenaire Développement", "شريك التنمية"),
    badge: l("Development", "Développement", "تنمية"),
    nextAction: l("Open the development pathway for infrastructure and SMEs.", "Ouvrir le parcours développement pour les infrastructures et PME.", "فتح مسار التنمية للبنية التحتية والمقاولات."),
    message: l(
      "Supports infrastructure, renewable energy, water systems, regional services and SME ecosystem development.",
      "Soutient les infrastructures, les énergies renouvelables, les systèmes d'eau, les services régionaux et le développement de l'écosystème PME.",
      "يدعم البنية التحتية والطاقة المتجددة وأنظمة المياه والخدمات الإقليمية وتطوير منظومة المقاولات."
    ),
    interests: [
      l("Energy", "Énergie", "الطاقة"),
      l("Water", "Eau", "المياه"),
      l("Infrastructure", "Infrastructure", "البنية التحتية"),
      l("Local services", "Services locaux", "الخدمات المحلية"),
      l("Skills", "Compétences", "المهارات"),
      l("Beni Mellal development", "Développement de Béni Mellal", "تنمية بني ملال"),
    ],
    button: l("View Development Pathway", "Voir le Parcours Développement", "عرض مسار التنمية"),
  },
  {
    id: "financial",
    icon: Landmark,
    accent: "#c8a86a",
    name: l("Financial Partner", "Partenaire Financier", "الشريك المالي"),
    badge: l("Finance", "Finance", "تمويل"),
    nextAction: l("Open the financial pathway and USD 50M structuring.", "Ouvrir le parcours financier et la structuration de 50 M USD.", "فتح المسار المالي وهيكلة الـ50 مليون دولار."),
    message: l(
      "Supports green finance structuring, staged capital planning, governance, bankability and risk reduction.",
      "Soutient la structuration de finance verte, la planification échelonnée du capital, la gouvernance, la bancabilité et la réduction des risques.",
      "يدعم هيكلة التمويل الأخضر، والتخطيط الرأسمالي المُرحَّل، والحوكمة، والقابلية المصرفية، وتقليل المخاطر."
    ),
    interests: [
      l("USD 50M map", "Carte 50 M USD", "خريطة الـ50 مليون دولار"),
      l("ESG data", "Données ESG", "بيانات الحوكمة"),
      l("Staged finance", "Finance échelonnée", "تمويل مُرحَّل"),
      l("Risk controls", "Contrôles des risques", "ضوابط المخاطر"),
      l("Governance", "Gouvernance", "الحوكمة"),
    ],
    button: l("View Financial Pathway", "Voir le Parcours Financier", "عرض المسار المالي"),
  },
  {
    id: "technical",
    icon: FlaskConical,
    accent: "#36a169",
    name: l("Technical & Environmental Partner", "Partenaire Technique & Environnemental", "الشريك التقني والبيئي"),
    badge: l("Validation", "Validation", "تحقق"),
    nextAction: l("Launch technical and environmental validation.", "Lancer la validation technique et environnementale.", "إطلاق التحقق التقني والبيئي."),
    message: l(
      "Supports sampling, metallurgical testing, water studies, environmental validation and ESG indicators.",
      "Soutient l'échantillonnage, les essais métallurgiques, les études d'eau, la validation environnementale et les indicateurs ESG.",
      "يدعم أخذ العينات والاختبارات الميتالورجية ودراسات المياه والتحقق البيئي ومؤشرات الحوكمة."
    ),
    interests: [
      l("Ore validation", "Validation du minerai", "التحقق من الخام"),
      l("Bioleaching R&D", "R&D Biolixiviation", "أبحاث النض الحيوي"),
      l("Water", "Eau", "المياه"),
      l("Residues", "Résidus", "المخلفات"),
      l("Environmental baseline", "État de référence environnemental", "خط الأساس البيئي"),
      l("Digital ESG", "ESG numérique", "الحوكمة الرقمية"),
    ],
    button: l("View Validation Pathway", "Voir le Parcours de Validation", "عرض مسار التحقق"),
  },
  {
    id: "board",
    icon: Briefcase,
    accent: "#b08d57",
    name: l("Board / Decision-Makers", "Conseil / Décideurs", "المجلس / صنّاع القرار"),
    badge: l("Strategic", "Stratégique", "استراتيجي"),
    nextAction: l("Approve the platform framing and the next decision pathway.", "Approuver le cadrage de la plateforme et le prochain parcours.", "اعتماد تأطير المنصة ومسار القرار التالي."),
    message: l(
      "Reviews the project as a regional industrial development platform and approves the next decision pathway.",
      "Examine le projet comme une plateforme de développement industriel régional et approuve le prochain parcours de décision.",
      "يراجع المشروع كمنصة تنمية صناعية إقليمية ويعتمد مسار القرار التالي."
    ),
    interests: [
      l("Strategic value", "Valeur stratégique", "القيمة الاستراتيجية"),
      l("Partners", "Partenaires", "الشركاء"),
      l("Risks", "Risques", "المخاطر"),
      l("Capital map", "Carte du capital", "خريطة رأس المال"),
      l("Next steps", "Prochaines étapes", "الخطوات التالية"),
    ],
    button: l("View Board Decision Pathway", "Voir le Parcours de Décision du Conseil", "عرض مسار قرار المجلس"),
  },
];

/* ---------- Partner-view highlight configuration ---------- */
export interface ViewConfig {
  sections: SectionId[];
  docIds: string[];
  decisionIds: string[];
  capitalIds: string[];
}

export const viewConfig: Record<PartnerViewId, ViewConfig> = {
  board: {
    sections: ["executive", "projectMap", "decision"],
    docIds: ["general-brief", "exec-summary", "project-overview"],
    decisionIds: ["approve-platform", "share-documents", "pilot-structuring"],
    capitalIds: ["validation", "opex"],
  },
  industrial: {
    sections: ["technology", "documents"],
    docIds: ["industrial-brief"],
    decisionIds: ["industrial-pathway", "pilot-structuring"],
    capitalIds: ["processing", "license"],
  },
  development: {
    sections: ["projectMap", "documents"],
    docIds: ["development-brief", "regional-sme"],
    decisionIds: ["development-pathway"],
    capitalIds: ["water", "opex"],
  },
  financial: {
    sections: ["capital", "documents"],
    docIds: ["financial-brief", "usd50m-study", "finance-strategy", "esg-governance", "risk-register"],
    decisionIds: ["financial-pathway", "pilot-structuring"],
    capitalIds: ["validation", "processing", "water", "license", "esg", "opex"],
  },
  technical: {
    sections: ["technology", "documents"],
    docIds: ["technical-brief", "sampling-protocol", "metallurgical-plan", "environmental-concept"],
    decisionIds: ["launch-validation"],
    capitalIds: ["validation", "water"],
  },
};
