import { l, type L } from "../i18n/types";

export interface CapitalLayer {
  id: string;
  stage: number;
  amount: number; // USD millions
  title: L;
  purpose: L;
  stakeholder: L;
  color: string;
}

export const TOTAL_USD_M = 50;

export const capitalLayers: CapitalLayer[] = [
  {
    id: "validation",
    stage: 1,
    amount: 5,
    color: "#36a169",
    title: l("Technical Validation & De-Risking", "Validation Technique & Réduction des Risques", "التحقق التقني وتقليل المخاطر"),
    purpose: l("Sampling, metallurgical testing and environmental baseline.", "Échantillonnage, essais métallurgiques et état de référence environnemental.", "أخذ العينات والاختبار الميتالورجي وخط الأساس البيئي."),
    stakeholder: l("Technical & Environmental", "Technique & Environnemental", "تقني وبيئي"),
  },
  {
    id: "processing",
    stage: 2,
    amount: 15,
    color: "#b86a34",
    title: l("Green Processing Infrastructure", "Infrastructure de Traitement Vert", "بنية المعالجة الخضراء"),
    purpose: l("Modular processing, sorting, washing and cementation circuits.", "Traitement modulaire, tri, lavage et circuits de cémentation.", "معالجة معيارية وفرز وغسل ودوائر ترسيب."),
    stakeholder: l("Industrial Partner", "Partenaire Industriel", "شريك صناعي"),
  },
  {
    id: "water",
    stage: 3,
    amount: 8,
    color: "#1f8a54",
    title: l("Water, Environment & Climate Resilience", "Eau, Environnement & Résilience Climatique", "المياه والبيئة والمرونة المناخية"),
    purpose: l("Water recycling, safeguards and climate-resilient infrastructure.", "Recyclage de l'eau, garanties et infrastructures résilientes au climat.", "إعادة تدوير المياه والضمانات والبنية المرنة مناخياً."),
    stakeholder: l("Development & Climate", "Développement & Climat", "تنمية ومناخ"),
  },
  {
    id: "license",
    stage: 4,
    amount: 7,
    color: "#94703e",
    title: l("License Development & Mineral Expansion", "Développement de Licences & Expansion Minérale", "تطوير الرخص والتوسع المعدني"),
    purpose: l("Exploration, mapping and multi-license portfolio development.", "Exploration, cartographie et développement de portefeuille multi-licences.", "الاستكشاف ورسم الخرائط وتطوير محفظة متعددة الرخص."),
    stakeholder: l("Atlas & Partners", "Atlas & Partenaires", "أطلس والشركاء"),
  },
  {
    id: "esg",
    stage: 5,
    amount: 5,
    color: "#5cb884",
    title: l("Digital ESG & Data Room", "ESG Numérique & Data Room", "الحوكمة الرقمية وغرفة البيانات"),
    purpose: l("ESG monitoring, secure data room and reporting workflow.", "Suivi ESG, data room sécurisée et flux de reporting.", "مراقبة الحوكمة وغرفة بيانات آمنة وسير عمل التقارير."),
    stakeholder: l("Financial Partner", "Partenaire Financier", "شريك مالي"),
  },
  {
    id: "opex",
    stage: 6,
    amount: 10,
    color: "#c8a86a",
    title: l("Operating Capital & Governance", "Capital d'Exploitation & Gouvernance", "رأس المال التشغيلي والحوكمة"),
    purpose: l("Working capital, governance and independent review.", "Fonds de roulement, gouvernance et examen indépendant.", "رأس المال العامل والحوكمة والمراجعة المستقلة."),
    stakeholder: l("Board & Financial", "Conseil & Financier", "المجلس والمالي"),
  },
];
