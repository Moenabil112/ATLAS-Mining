import { l, type L } from "../i18n/types";
import {
  Gem,
  Factory,
  CloudSun,
  Users,
  Layers,
  Cpu,
  MapPin,
  Landmark,
  Satellite,
  Brain,
  Pickaxe,
  Droplets,
  FlaskConical,
  Microscope,
  Boxes,
  RefreshCw,
  LineChart,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

/* ---------- Page 1: Executive Gateway key cards ---------- */
export interface ExecCard {
  id: string;
  icon: LucideIcon;
  title: L;
  text: L;
  accent: string;
}

export const execCards: ExecCard[] = [
  {
    id: "green-copper",
    icon: Gem,
    accent: "#36a169",
    title: l("Green Copper", "Cuivre Vert", "النحاس الأخضر"),
    text: l(
      "Responsible recovery of oxidized copper through a low-impact, modular platform.",
      "Récupération responsable du cuivre oxydé via une plateforme modulaire à faible impact.",
      "استرجاع مسؤول للنحاس المؤكسد عبر منصة معيارية منخفضة الأثر."
    ),
  },
  {
    id: "beni-mellal",
    icon: Factory,
    accent: "#b86a34",
    title: l("Beni Mellal Industrial Development", "Développement Industriel de Béni Mellal", "التنمية الصناعية ببني ملال"),
    text: l(
      "A regional industrial anchor connecting processing, services and infrastructure.",
      "Un ancrage industriel régional reliant traitement, services et infrastructures.",
      "مرتكز صناعي إقليمي يربط المعالجة والخدمات والبنية التحتية."
    ),
  },
  {
    id: "climate",
    icon: CloudSun,
    accent: "#5cb884",
    title: l("Climate-Resilient Processing", "Traitement Résilient au Climat", "معالجة مرنة مناخياً"),
    text: l(
      "Water recycling, renewable energy and controlled processing designed for resilience.",
      "Recyclage de l'eau, énergies renouvelables et traitement contrôlé conçus pour la résilience.",
      "إعادة تدوير المياه والطاقة المتجددة والمعالجة المتحكَّمة مصممة للمرونة."
    ),
  },
  {
    id: "skills-sme",
    icon: Users,
    accent: "#cdb893",
    title: l("Skills & SME Ecosystem", "Compétences & Écosystème PME", "المهارات ومنظومة المقاولات"),
    text: l(
      "Technical skills, local services and an SME ecosystem rooted in the region.",
      "Compétences techniques, services locaux et un écosystème de PME ancré dans la région.",
      "مهارات تقنية وخدمات محلية ومنظومة مقاولات صغيرة ومتوسطة متجذرة في المنطقة."
    ),
  },
];

/* ---------- Page 2: Project Map layers ---------- */
export interface ProjectLayer {
  id: string;
  icon: LucideIcon;
  index: number;
  title: L;
  text: L;
  poweredByAkanil?: boolean;
  color: string;
}

export const projectLayers: ProjectLayer[] = [
  {
    id: "mineral",
    icon: Layers,
    index: 1,
    color: "#94703e",
    title: l("Mineral Asset Layer", "Couche Actif Minéral", "طبقة الأصل المعدني"),
    text: l(
      "Copper license base, oxidized copper potential and a wider mineral development pathway.",
      "Base de licences cuivre, potentiel de cuivre oxydé et un parcours de développement minéral élargi.",
      "قاعدة رخص النحاس وإمكانات النحاس المؤكسد ومسار تطوير معدني أوسع."
    ),
  },
  {
    id: "processing",
    icon: Factory,
    index: 2,
    color: "#b86a34",
    title: l("Industrial Processing Layer", "Couche Traitement Industriel", "طبقة المعالجة الصناعية"),
    text: l(
      "Ore sorting, washing, controlled processing and cement copper validation.",
      "Tri du minerai, lavage, traitement contrôlé et validation du cuivre de cémentation.",
      "فرز الخام والغسل والمعالجة المتحكَّمة والتحقق من النحاس المترسب."
    ),
  },
  {
    id: "innovation",
    icon: Cpu,
    index: 3,
    color: "#36a169",
    poweredByAkanil: true,
    title: l("Innovation Layer", "Couche Innovation", "طبقة الابتكار"),
    text: l(
      "AI ore intelligence, bioleaching R&D, digital ESG and data governance.",
      "Intelligence du minerai par IA, R&D de biolixiviation, ESG numérique et gouvernance des données.",
      "ذكاء الخام بالذكاء الاصطناعي، وأبحاث النض الحيوي، والحوكمة الرقمية، وإدارة البيانات."
    ),
  },
  {
    id: "regional",
    icon: MapPin,
    index: 4,
    color: "#cdb893",
    title: l("Regional Development Layer", "Couche Développement Régional", "طبقة التنمية الإقليمية"),
    text: l(
      "Beni Mellal, local SMEs, skills, services, infrastructure and water discipline.",
      "Béni Mellal, PME locales, compétences, services, infrastructures et discipline de l'eau.",
      "بني ملال، والمقاولات المحلية، والمهارات، والخدمات، والبنية التحتية، وانضباط المياه."
    ),
  },
  {
    id: "finance",
    icon: Landmark,
    index: 5,
    color: "#c8a86a",
    title: l("Finance & Governance Layer", "Couche Finance & Gouvernance", "طبقة التمويل والحوكمة"),
    text: l(
      "USD 50M staged envelope, partner alignment, risk reduction and validation gates.",
      "Enveloppe échelonnée de 50 M USD, alignement des partenaires, réduction des risques et jalons de validation.",
      "مظروف مُرحَّل بقيمة 50 مليون دولار، ومواءمة الشركاء، وتقليل المخاطر، وبوابات التحقق."
    ),
  },
];

/* ---------- Page 4: Technology Architecture steps ---------- */
export interface TechStep {
  id: string;
  icon: LucideIcon;
  index: number;
  title: L;
  text: L;
}

export const techSteps: TechStep[] = [
  { id: "field", icon: Satellite, index: 1, title: l("Field Data Capture", "Capture de Données de Terrain", "التقاط بيانات الميدان"), text: l("Structured field and geological data capture.", "Capture structurée de données de terrain et géologiques.", "التقاط منظم لبيانات الميدان والجيولوجيا.") },
  { id: "ai", icon: Brain, index: 2, title: l("AI Ore Intelligence", "Intelligence du Minerai par IA", "ذكاء الخام بالذكاء الاصطناعي"), text: l("AI-assisted ore classification and targeting.", "Classification et ciblage du minerai assistés par IA.", "تصنيف واستهداف الخام بمساعدة الذكاء الاصطناعي.") },
  { id: "mining", icon: Pickaxe, index: 3, title: l("Selective Low-Impact Mining", "Extraction Sélective à Faible Impact", "تعدين انتقائي منخفض الأثر"), text: l("Selective extraction that limits disturbance.", "Extraction sélective limitant les perturbations.", "استخراج انتقائي يحدّ من الاضطراب.") },
  { id: "washing", icon: Droplets, index: 4, title: l("Washing & Sorting", "Lavage & Tri", "الغسل والفرز"), text: l("Washing and sorting to upgrade feed quality.", "Lavage et tri pour améliorer la qualité d'alimentation.", "الغسل والفرز لرفع جودة التغذية.") },
  { id: "processing", icon: FlaskConical, index: 5, title: l("Controlled Processing", "Traitement Contrôlé", "معالجة متحكَّمة"), text: l("Controlled processing with managed chemistry.", "Traitement contrôlé avec chimie maîtrisée.", "معالجة متحكَّمة بكيمياء مُدارة.") },
  { id: "bioleaching", icon: Microscope, index: 6, title: l("Bioleaching / Bio-Assisted R&D", "R&D Biolixiviation / Bio-Assistée", "أبحاث النض الحيوي والمدعوم حيوياً"), text: l("Research into bio-assisted recovery pathways.", "Recherche sur les voies de récupération bio-assistées.", "أبحاث في مسارات الاسترجاع المدعوم حيوياً.") },
  { id: "cement", icon: Boxes, index: 7, title: l("Cement Copper Validation", "Validation du Cuivre de Cémentation", "التحقق من النحاس المترسب"), text: l("Validation of cement copper product quality.", "Validation de la qualité du cuivre de cémentation.", "التحقق من جودة منتج النحاس المترسب.") },
  { id: "water", icon: RefreshCw, index: 8, title: l("Water Recycling Loop", "Boucle de Recyclage de l'Eau", "حلقة إعادة تدوير المياه"), text: l("Closed-loop water recycling to reduce draw.", "Recyclage de l'eau en circuit fermé pour réduire le prélèvement.", "إعادة تدوير المياه في دورة مغلقة لتقليل السحب.") },
  { id: "esg", icon: LineChart, index: 9, title: l("Digital ESG Monitoring", "Suivi ESG Numérique", "مراقبة رقمية للحوكمة البيئية"), text: l("Continuous digital ESG and traceability data.", "Données ESG numériques et traçabilité en continu.", "بيانات حوكمة رقمية وتتبع مستمر.") },
  { id: "expansion", icon: TrendingUp, index: 10, title: l("Expansion Decision", "Décision d'Expansion", "قرار التوسع"), text: l("Data-driven decision to scale responsibly.", "Décision fondée sur les données pour une montée en échelle responsable.", "قرار مبني على البيانات للتوسع بمسؤولية.") },
];
