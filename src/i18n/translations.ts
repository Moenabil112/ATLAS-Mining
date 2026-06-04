import { l, type L } from "./types";

export type SectionId =
  | "executive"
  | "projectMap"
  | "pathways"
  | "technology"
  | "capital"
  | "documents"
  | "decision";

export interface NavEntry {
  id: SectionId;
  label: L;
}

export const ui = {
  brand: {
    name: l(
      "ATLAS Green Copper Strategic Gateway",
      "ATLAS Green Copper — Portail Stratégique",
      "أطلس للنحاس الأخضر — البوابة الاستراتيجية"
    ),
    short: l("Strategic Gateway", "Portail Stratégique", "البوابة الاستراتيجية"),
    confidential: l(
      "Confidential Stakeholder Access",
      "Accès Confidentiel des Parties Prenantes",
      "وصول سري للجهات المعنية"
    ),
    poweredBy: l("Powered by Akanil", "Propulsé par Akanil", "مدعوم من أكانيل"),
  },

  nav: [
    { id: "executive", label: l("Executive Gateway", "Portail Exécutif", "البوابة التنفيذية") },
    { id: "projectMap", label: l("Project Map", "Carte du Projet", "خريطة المشروع") },
    { id: "pathways", label: l("Partner Pathways", "Parcours Partenaires", "مسارات الشركاء") },
    { id: "technology", label: l("Technology Architecture", "Architecture Technologique", "البنية التقنية") },
    { id: "capital", label: l("USD 50M Map", "Carte 50 M USD", "خريطة الـ50 مليون دولار") },
    { id: "documents", label: l("Document Package Room", "Salle des Documents", "غرفة حزم الوثائق") },
    { id: "decision", label: l("Decision Room", "Salle de Décision", "غرفة القرار") },
  ] as NavEntry[],

  partnerView: {
    title: l("Partner View", "Vue Partenaire", "عرض الشريك"),
    board: l("Board View", "Vue Conseil", "عرض المجلس"),
    industrial: l("Industrial Partner View", "Vue Partenaire Industriel", "عرض الشريك الصناعي"),
    development: l("Development Partner View", "Vue Partenaire Développement", "عرض شريك التنمية"),
    financial: l("Financial Partner View", "Vue Partenaire Financier", "عرض الشريك المالي"),
    technical: l("Technical & Environmental View", "Vue Technique & Environnementale", "العرض التقني والبيئي"),
  },

  common: {
    confidentialNote: l(
      "Private institutional gateway for approved stakeholders.",
      "Portail institutionnel privé pour les parties prenantes approuvées.",
      "بوابة مؤسسية خاصة للجهات المعنية المعتمدة."
    ),
    download: l("Download", "Télécharger", "تنزيل"),
    targetAudience: l("Target audience", "Public cible", "الجمهور المستهدف"),
    accessLevel: l("Access level", "Niveau d'accès", "مستوى الوصول"),
    status: l("Status", "Statut", "الحالة"),
    keyInterests: l("Key interests", "Intérêts clés", "الاهتمامات الرئيسية"),
    whyItMatters: l("Why it matters", "Pourquoi c'est important", "لماذا يهم"),
    supportingDocument: l("Supporting document", "Document de soutien", "الوثيقة الداعمة"),
    nextStep: l("Next step", "Prochaine étape", "الخطوة التالية"),
    highlighted: l("Highlighted for your view", "Mis en avant pour votre vue", "مميّز لعرضك"),
    relevantToView: l("Relevant to your view", "Pertinent pour votre vue", "ذو صلة بعرضك"),
  },

  status: {
    draft: l("Draft", "Brouillon", "مسودة"),
    ready: l("Ready", "Prêt", "جاهز"),
    restricted: l("Restricted", "Restreint", "مقيّد"),
  },

  access: {
    general: l("General Access", "Accès Général", "وصول عام"),
    partner: l("Partner Access", "Accès Partenaire", "وصول الشركاء"),
    validation: l("Validation Access", "Accès Validation", "وصول التحقق"),
    finance: l("Finance Access", "Accès Finance", "وصول التمويل"),
  },

  pages: {
    executive: {
      title: l(
        "ATLAS Green Copper Strategic Gateway",
        "ATLAS Green Copper — Portail Stratégique",
        "أطلس للنحاس الأخضر — البوابة الاستراتيجية"
      ),
      subtitle: l(
        "Regional Industrial Development Platform — Beni Mellal",
        "Plateforme de Développement Industriel Régional — Béni Mellal",
        "منصة تنمية صناعية إقليمية — بني ملال"
      ),
      body: l(
        "Atlas Mining presents a Moroccan green copper platform in Beni Mellal, designed to connect responsible mineral processing with climate resilience, renewable energy, technical skills, and a local SME ecosystem.",
        "Atlas Mining présente une plateforme marocaine de cuivre vert à Béni Mellal, conçue pour relier le traitement responsable des minéraux à la résilience climatique, aux énergies renouvelables, aux compétences techniques et à un écosystème local de PME.",
        "تقدّم أطلس ماينينغ منصة نحاس أخضر مغربية في بني ملال، مصممة لربط المعالجة المسؤولة للمعادن بالمرونة المناخية والطاقة المتجددة والمهارات التقنية ومنظومة محلية للمقاولات الصغيرة والمتوسطة."
      ),
    },
    projectMap: {
      title: l(
        "Project Map — A Layered Development Ecosystem",
        "Carte du Projet — Un Écosystème de Développement en Couches",
        "خريطة المشروع — منظومة تنمية متعددة الطبقات"
      ),
      subtitle: l(
        "Atlas is structured as five connected layers, not a single mining asset.",
        "Atlas est structuré en cinq couches connectées, et non comme un actif minier unique.",
        "تُبنى أطلس على خمس طبقات مترابطة، لا كأصل تعديني واحد."
      ),
    },
    pathways: {
      title: l("Partner Pathways", "Parcours Partenaires", "مسارات الشركاء"),
      subtitle: l(
        "Each partner sees exactly where they fit in the platform.",
        "Chaque partenaire voit exactement où il s'inscrit dans la plateforme.",
        "يرى كل شريك بالضبط موضعه في المنصة."
      ),
    },
    technology: {
      title: l(
        "Technology & Green Processing Architecture",
        "Architecture Technologique & de Traitement Vert",
        "البنية التقنية ومعالجة النحاس الخضراء"
      ),
      subtitle: l(
        "An intelligent, low-impact processing flow — from field data to expansion decision.",
        "Un flux de traitement intelligent et à faible impact — des données de terrain à la décision d'expansion.",
        "تدفق معالجة ذكي ومنخفض الأثر — من بيانات الميدان إلى قرار التوسع."
      ),
    },
    capital: {
      title: l(
        "USD 50M Strategic Development Envelope",
        "Enveloppe de Développement Stratégique de 50 M USD",
        "مظروف التنمية الاستراتيجي بقيمة 50 مليون دولار"
      ),
      subtitle: l(
        "A staged strategic development map across six layers.",
        "Une carte de développement stratégique échelonnée sur six couches.",
        "خريطة تنمية استراتيجية مُرحَّلة عبر ست طبقات."
      ),
      footer: l(
        "Indicative staged development envelope subject to technical, environmental, and financial validation.",
        "Enveloppe de développement échelonnée indicative, sous réserve de validation technique, environnementale et financière.",
        "مظروف تنمية مُرحَّل استرشادي خاضع للتحقق التقني والبيئي والمالي."
      ),
      total: l("Total Envelope", "Enveloppe Totale", "المظروف الإجمالي"),
      allocation: l("Layer allocation", "Répartition par couche", "توزيع الطبقات"),
    },
    documents: {
      title: l("Document Package Room", "Salle des Packages Documentaires", "غرفة حزم الوثائق"),
      subtitle: l(
        "Project documents organized by stakeholder access category.",
        "Documents du projet organisés par catégorie d'accès des parties prenantes.",
        "وثائق المشروع منظمة حسب فئة وصول الجهات المعنية."
      ),
    },
    decision: {
      title: l("Decision Room", "Salle de Décision", "غرفة القرار"),
      subtitle: l(
        "Board-level decision pathways and their next steps.",
        "Parcours de décision au niveau du conseil et leurs prochaines étapes.",
        "مسارات القرار على مستوى المجلس وخطواتها التالية."
      ),
    },
  },

  footer: l(
    "Confidential institutional material. All figures and indicators are indicative and subject to technical, environmental, and financial validation.",
    "Matériel institutionnel confidentiel. Tous les chiffres et indicateurs sont indicatifs et sous réserve de validation technique, environnementale et financière.",
    "مادة مؤسسية سرية. جميع الأرقام والمؤشرات استرشادية وخاضعة للتحقق التقني والبيئي والمالي."
  ),
};
