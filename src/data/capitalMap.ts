import { l, type L } from "../i18n/types";

export interface CapitalLayer {
  id: string;
  amount: number; // USD millions
  title: L;
  color: string;
}

export const TOTAL_USD_M = 50;

export const capitalLayers: CapitalLayer[] = [
  {
    id: "validation",
    amount: 5,
    color: "#36a169",
    title: l("Technical Validation & De-Risking", "Validation Technique & Réduction des Risques", "التحقق التقني وتقليل المخاطر"),
  },
  {
    id: "processing",
    amount: 15,
    color: "#b86a34",
    title: l("Green Processing Infrastructure", "Infrastructure de Traitement Vert", "بنية المعالجة الخضراء"),
  },
  {
    id: "water",
    amount: 8,
    color: "#1f8a54",
    title: l("Water, Environment & Climate Resilience", "Eau, Environnement & Résilience Climatique", "المياه والبيئة والمرونة المناخية"),
  },
  {
    id: "license",
    amount: 7,
    color: "#94703e",
    title: l("License Development & Mineral Expansion", "Développement de Licences & Expansion Minérale", "تطوير الرخص والتوسع المعدني"),
  },
  {
    id: "esg",
    amount: 5,
    color: "#5cb884",
    title: l("Digital ESG & Data Room", "ESG Numérique & Data Room", "الحوكمة الرقمية وغرفة البيانات"),
  },
  {
    id: "opex",
    amount: 10,
    color: "#c8a86a",
    title: l("Operating Capital & Governance", "Capital d'Exploitation & Gouvernance", "رأس المال التشغيلي والحوكمة"),
  },
];
