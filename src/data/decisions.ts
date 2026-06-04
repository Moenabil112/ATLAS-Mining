import { l, type L } from "../i18n/types";

export interface DecisionEntry {
  id: string;
  index: number;
  decision: L;
  why: L;
  supportingDoc: L;
  nextStep: L;
}

export const decisions: DecisionEntry[] = [
  {
    id: "approve-platform",
    index: 1,
    decision: l(
      "Approve Atlas as a regional industrial development platform",
      "Approuver Atlas comme plateforme de développement industriel régional",
      "اعتماد أطلس كمنصة تنمية صناعية إقليمية"
    ),
    why: l(
      "Anchors the project beyond a single mining asset and frames regional value.",
      "Ancre le projet au-delà d'un actif minier unique et cadre la valeur régionale.",
      "يرسّخ المشروع بما يتجاوز أصلاً تعدينياً واحداً ويؤطّر القيمة الإقليمية."
    ),
    supportingDoc: l("General Institutional Brief", "Note Institutionnelle Générale", "الموجز المؤسسي العام"),
    nextStep: l("Endorse the platform framing and mandate.", "Valider le cadrage et le mandat de la plateforme.", "إقرار تأطير المنصة وتفويضها."),
  },
  {
    id: "industrial-pathway",
    index: 2,
    decision: l("Open the industrial partner pathway", "Ouvrir le parcours partenaire industriel", "فتح مسار الشريك الصناعي"),
    why: l(
      "Brings processing capability, equipment and a route to industrial scale.",
      "Apporte la capacité de traitement, les équipements et une voie vers l'échelle industrielle.",
      "يجلب قدرة المعالجة والمعدات ومساراً نحو النطاق الصناعي."
    ),
    supportingDoc: l("Industrial Partner Brief", "Note Partenaire Industriel", "موجز الشريك الصناعي"),
    nextStep: l("Initiate confidential industrial partner outreach.", "Lancer une prise de contact confidentielle.", "بدء تواصل سري مع الشريك الصناعي."),
  },
  {
    id: "development-pathway",
    index: 3,
    decision: l("Open the development partner pathway", "Ouvrir le parcours partenaire développement", "فتح مسار شريك التنمية"),
    why: l(
      "Mobilizes energy, water, infrastructure and SME ecosystem support.",
      "Mobilise l'énergie, l'eau, les infrastructures et le soutien à l'écosystème PME.",
      "يحشد دعم الطاقة والمياه والبنية التحتية ومنظومة المقاولات."
    ),
    supportingDoc: l("Development Partner Brief", "Note Partenaire Développement", "موجز شريك التنمية"),
    nextStep: l("Map regional development and infrastructure partners.", "Cartographier les partenaires de développement régional.", "رسم خريطة شركاء التنمية الإقليمية والبنية التحتية."),
  },
  {
    id: "financial-pathway",
    index: 4,
    decision: l("Open the financial partner pathway", "Ouvrir le parcours partenaire financier", "فتح مسار الشريك المالي"),
    why: l(
      "Structures the staged USD 50M envelope with governance and risk controls.",
      "Structure l'enveloppe échelonnée de 50 M USD avec gouvernance et contrôles des risques.",
      "يهيكل مظروف الـ50 مليون دولار المُرحَّل مع الحوكمة وضوابط المخاطر."
    ),
    supportingDoc: l("Financial Partner Brief", "Note Partenaire Financier", "موجز الشريك المالي"),
    nextStep: l("Prepare green finance structuring discussions.", "Préparer les discussions de structuration de finance verte.", "التحضير لمناقشات هيكلة التمويل الأخضر."),
  },
  {
    id: "launch-validation",
    index: 5,
    decision: l("Launch technical and environmental validation", "Lancer la validation technique et environnementale", "إطلاق التحقق التقني والبيئي"),
    why: l(
      "Reduces core technical and environmental risk before scaling.",
      "Réduit le risque technique et environnemental fondamental avant la montée en échelle.",
      "يقلل المخاطر التقنية والبيئية الأساسية قبل التوسع."
    ),
    supportingDoc: l("Technical & Environmental Validation Framework", "Cadre de Validation Technique & Environnementale", "إطار التحقق التقني والبيئي"),
    nextStep: l("Authorize sampling and metallurgical test work.", "Autoriser l'échantillonnage et les essais métallurgiques.", "اعتماد أخذ العينات وأعمال الاختبار الميتالورجي."),
  },
  {
    id: "share-documents",
    index: 6,
    decision: l(
      "Define which documents can be shared with each partner",
      "Définir quels documents peuvent être partagés avec chaque partenaire",
      "تحديد الوثائق التي يمكن مشاركتها مع كل شريك"
    ),
    why: l(
      "Maintains confidentiality discipline and controlled disclosure.",
      "Maintient la discipline de confidentialité et une divulgation contrôlée.",
      "يحافظ على انضباط السرية والإفصاح المُدار."
    ),
    supportingDoc: l("Document Package Room access matrix", "Matrice d'accès de la salle des documents", "مصفوفة وصول غرفة الوثائق"),
    nextStep: l("Approve per-partner document access levels.", "Approuver les niveaux d'accès documentaire par partenaire.", "اعتماد مستويات الوصول للوثائق لكل شريك."),
  },
  {
    id: "pilot-structuring",
    index: 7,
    decision: l("Move to pilot structuring", "Passer à la structuration du pilote", "الانتقال إلى هيكلة المشروع التجريبي"),
    why: l(
      "Converts strategy into a structured pilot with clear gates.",
      "Convertit la stratégie en un pilote structuré avec des jalons clairs.",
      "يحوّل الاستراتيجية إلى مشروع تجريبي منظم ببوابات واضحة."
    ),
    supportingDoc: l("Risk Register & Decision Gate Memo", "Registre des Risques & Note de Jalon", "سجل المخاطر ومذكرة بوابة القرار"),
    nextStep: l("Define pilot scope, gates and governance.", "Définir le périmètre, les jalons et la gouvernance du pilote.", "تحديد نطاق المشروع التجريبي وبواباته وحوكمته."),
  },
];
