import type { Localized, AccessLevel } from "./types";

const L = (en: string, fr: string, ar: string): Localized => ({ en, fr, ar });

export interface DecisionPathway {
  id: string;
  index: number;
  title: Localized;
  requiredEvidence: Localized;
  requiredDecision: Localized;
  responsible: Localized;
  riskReduced: Localized;
  nextOutput: Localized;
  access: AccessLevel;
}

export const decisionPathways: DecisionPathway[] = [
  {
    id: "geff-eligibility",
    index: 1,
    title: L("Proceed to EBRD / GEFF eligibility review", "Procéder à l'examen d'éligibilité BERD / GEFF", "المضي إلى مراجعة أهلية البنك الأوروبي / GEFF"),
    requiredEvidence: L("Resource-efficiency brief & concept note", "Note d'efficacité des ressources & concept", "موجز كفاءة الموارد ومذكرة المفهوم"),
    requiredDecision: L("Confirm GEFF positioning and submit", "Confirmer le positionnement GEFF et soumettre", "تأكيد تموضع GEFF والتقديم"),
    responsible: L("Akanil / Atlas + technical advisor", "Akanil / Atlas + conseiller technique", "أكانيل / أطلس + المستشار التقني"),
    riskReduced: L("Eligibility uncertainty", "Incertitude d'éligibilité", "عدم يقين الأهلية"),
    nextOutput: L("Eligibility assessment response", "Réponse d'évaluation d'éligibilité", "رد تقييم الأهلية"),
    access: "reviewer",
  },
  {
    id: "climate-prescreen",
    index: 2,
    title: L("Proceed to EBRD climate finance pre-screening", "Procéder au pré-examen Finance Climat BERD", "المضي إلى الفحص المسبق لتمويل المناخ بالبنك الأوروبي"),
    requiredEvidence: L("Climate-resilience & decarbonisation narrative", "Récit de résilience climatique & décarbonation", "سرد المرونة المناخية وإزالة الكربون"),
    requiredDecision: L("Confirm climate framing", "Confirmer le cadrage climatique", "تأكيد التأطير المناخي"),
    responsible: L("Akanil / Atlas + environmental advisor", "Akanil / Atlas + conseiller environnemental", "أكانيل / أطلس + المستشار البيئي"),
    riskReduced: L("Climate-fit misalignment", "Désalignement d'adéquation climatique", "عدم توافق الملاءمة المناخية"),
    nextOutput: L("Pre-screening feedback", "Retour de pré-examen", "تغذية راجعة للفحص المسبق"),
    access: "reviewer",
  },
  {
    id: "bank-meeting",
    index: 3,
    title: L("Proceed to Attijariwafa Bank green structuring meeting", "Procéder à la réunion de structuration verte Attijariwafa Bank", "المضي إلى اجتماع الهيكلة الخضراء مع التجاري وفا بنك"),
    requiredEvidence: L("Bankable structuring outline (staged USD 50M)", "Schéma de structuration bancable (50 M USD échelonné)", "مخطط هيكلة قابلة للتمويل (50 مليون دولار مُرحَّل)"),
    requiredDecision: L("Confirm staged facility logic", "Confirmer la logique de facilité échelonnée", "تأكيد منطق التسهيل المُرحَّل"),
    responsible: L("Akanil / Atlas leadership", "Direction Akanil / Atlas", "قيادة أكانيل / أطلس"),
    riskReduced: L("Financing structure ambiguity", "Ambiguïté de la structure de financement", "غموض هيكل التمويل"),
    nextOutput: L("Indicative structuring term sheet", "Feuille de termes indicative", "ورقة شروط هيكلة استرشادية"),
    access: "internal",
  },
  {
    id: "partner-shortlist",
    index: 4,
    title: L("Proceed to Moroccan operating partner shortlist", "Procéder à la liste restreinte de partenaires opérationnels marocains", "المضي إلى القائمة المختصرة للشركاء التشغيليين المغاربة"),
    requiredEvidence: L("Partner engagement tracker", "Suivi d'engagement des partenaires", "متتبع إشراك الشركاء"),
    requiredDecision: L("Approve shortlist & outreach", "Approuver la liste & la prise de contact", "اعتماد القائمة والتواصل"),
    responsible: L("Akanil / Atlas + legal", "Akanil / Atlas + juridique", "أكانيل / أطلس + القانوني"),
    riskReduced: L("Operational capacity gap", "Écart de capacité opérationnelle", "فجوة القدرة التشغيلية"),
    nextOutput: L("Shortlist & confidential NDAs", "Liste restreinte & NDA confidentiels", "قائمة مختصرة واتفاقيات سرية"),
    access: "internal",
  },
  {
    id: "metallurgical",
    index: 5,
    title: L("Proceed to metallurgical validation", "Procéder à la validation métallurgique", "المضي إلى التحقق الميتالورجي"),
    requiredEvidence: L("Sample set & test protocol", "Jeu d'échantillons & protocole d'essai", "مجموعة عينات وبروتوكول اختبار"),
    requiredDecision: L("Authorize test campaign", "Autoriser la campagne d'essais", "اعتماد حملة الاختبار"),
    responsible: L("Technical advisor + lab", "Conseiller technique + laboratoire", "المستشار التقني + المختبر"),
    riskReduced: L("Recovery & process risk", "Risque de récupération & de procédé", "مخاطر الاسترجاع والعملية"),
    nextOutput: L("Metallurgical test report", "Rapport d'essais métallurgiques", "تقرير الاختبارات الميتالورجية"),
    access: "advisor",
  },
  {
    id: "environmental-note",
    index: 6,
    title: L("Proceed to environmental safeguards note", "Procéder à la note de garanties environnementales", "المضي إلى مذكرة الضمانات البيئية"),
    requiredEvidence: L("Environmental baseline & risk screen", "État de référence environnemental & criblage des risques", "خط الأساس البيئي وفحص المخاطر"),
    requiredDecision: L("Adopt safeguards framework", "Adopter le cadre de garanties", "اعتماد إطار الضمانات"),
    responsible: L("Environmental advisor", "Conseiller environnemental", "المستشار البيئي"),
    riskReduced: L("Environmental compliance risk", "Risque de conformité environnementale", "مخاطر الامتثال البيئي"),
    nextOutput: L("Environmental safeguards note", "Note de garanties environnementales", "مذكرة الضمانات البيئية"),
    access: "advisor",
  },
  {
    id: "esg-mvp",
    index: 7,
    title: L("Proceed to digital ESG monitoring MVP", "Procéder au MVP de suivi ESG numérique", "المضي إلى النموذج الأولي للمراقبة الرقمية للحوكمة"),
    requiredEvidence: L("ESG data model & metric definitions", "Modèle de données ESG & définitions d'indicateurs", "نموذج بيانات الحوكمة وتعريفات المقاييس"),
    requiredDecision: L("Approve MVP scope", "Approuver le périmètre du MVP", "اعتماد نطاق النموذج الأولي"),
    responsible: L("Akanil / Atlas digital", "Akanil / Atlas numérique", "أكانيل / أطلس الرقمي"),
    riskReduced: L("Transparency & reporting risk", "Risque de transparence & reporting", "مخاطر الشفافية والتقارير"),
    nextOutput: L("Working ESG monitoring MVP", "MVP de suivi ESG fonctionnel", "نموذج أولي عامل لمراقبة الحوكمة"),
    access: "controlled",
  },
  {
    id: "staged-structuring",
    index: 8,
    title: L("Proceed to USD 50M staged expansion structuring", "Procéder à la structuration échelonnée d'expansion de 50 M USD", "المضي إلى هيكلة التوسع المُرحَّل بقيمة 50 مليون دولار"),
    requiredEvidence: L("Cluster-by-cluster expansion map", "Carte d'expansion grappe par grappe", "خريطة توسع مجموعة بمجموعة"),
    requiredDecision: L("Confirm staging & sequencing", "Confirmer l'échelonnement & le séquencement", "تأكيد المراحل والتسلسل"),
    responsible: L("Akanil / Atlas + bank", "Akanil / Atlas + banque", "أكانيل / أطلس + البنك"),
    riskReduced: L("Capital sequencing risk", "Risque de séquencement du capital", "مخاطر تسلسل رأس المال"),
    nextOutput: L("Staged expansion structuring plan", "Plan de structuration d'expansion échelonnée", "خطة هيكلة التوسع المُرحَّل"),
    access: "internal",
  },
  {
    id: "governance-model",
    index: 9,
    title: L("Proceed to pilot-to-expansion governance model", "Procéder au modèle de gouvernance pilote-vers-expansion", "المضي إلى نموذج حوكمة التجريب إلى التوسع"),
    requiredEvidence: L("Governance & independent review framework", "Cadre de gouvernance & d'examen indépendant", "إطار الحوكمة والمراجعة المستقلة"),
    requiredDecision: L("Adopt governance model", "Adopter le modèle de gouvernance", "اعتماد نموذج الحوكمة"),
    responsible: L("Akanil / Atlas board", "Conseil Akanil / Atlas", "مجلس أكانيل / أطلس"),
    riskReduced: L("Governance & oversight risk", "Risque de gouvernance & de supervision", "مخاطر الحوكمة والإشراف"),
    nextOutput: L("Governance & oversight charter", "Charte de gouvernance & de supervision", "ميثاق الحوكمة والإشراف"),
    access: "internal",
  },
];
