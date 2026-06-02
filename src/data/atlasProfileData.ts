import type { Localized, EvidenceKey } from "./types";
import {
  Building2,
  Microscope,
  Mountain,
  Handshake,
  Users,
  Layers,
  Gem,
  FlaskConical,
  type LucideIcon,
} from "lucide-react";

export interface CapabilityCard {
  id: string;
  icon: LucideIcon;
  title: Localized;
  summary: Localized;
  evidence: EvidenceKey;
  document: Localized;
  disclosure: "requiresDoc" | "internalOnly" | "partnerReady";
}

export const capabilityCards: CapabilityCard[] = [
  {
    id: "evolution",
    icon: Building2,
    title: {
      en: "Company evolution",
      fr: "Évolution de l'entreprise",
      ar: "تطور الشركة",
    },
    summary: {
      en: "Began in Morocco in 2012, evolving from strategic commodities trading into mining investment across Morocco, Sudan and Saudi Arabia.",
      fr: "Débuts au Maroc en 2012, passant du négoce stratégique de matières premières à l'investissement minier au Maroc, au Soudan et en Arabie saoudite.",
      ar: "بدأت في المغرب عام 2012، متطورة من تجارة السلع الاستراتيجية إلى الاستثمار التعديني عبر المغرب والسودان والسعودية.",
    },
    evidence: "profile",
    document: {
      en: "Company profile & incorporation records",
      fr: "Profil d'entreprise & actes de constitution",
      ar: "ملف الشركة ووثائق التأسيس",
    },
    disclosure: "partnerReady",
  },
  {
    id: "geology",
    icon: Microscope,
    title: {
      en: "Geological studies & technical evaluation",
      fr: "Études géologiques & évaluation technique",
      ar: "الدراسات الجيولوجية والتقييم التقني",
    },
    summary: {
      en: "A specialized geological studies office with capability in geological and economic evaluation, exploration and resource assessment.",
      fr: "Un bureau d'études géologiques spécialisé, capable d'évaluation géologique et économique, d'exploration et d'évaluation des ressources.",
      ar: "مكتب متخصص للدراسات الجيولوجية بقدرة على التقييم الجيولوجي والاقتصادي والاستكشاف وتقييم الموارد.",
    },
    evidence: "validation",
    document: {
      en: "Geological studies reports & methodology",
      fr: "Rapports d'études géologiques & méthodologie",
      ar: "تقارير الدراسات الجيولوجية والمنهجية",
    },
    disclosure: "requiresDoc",
  },
  {
    id: "mining",
    icon: Mountain,
    title: {
      en: "Mining & quarry management",
      fr: "Gestion minière & de carrières",
      ar: "إدارة التعدين والمحاجر",
    },
    summary: {
      en: "Experience in quarry and mineral exploitation, with operational know-how in extraction and site management.",
      fr: "Expérience dans l'exploitation de carrières et de minéraux, avec un savoir-faire opérationnel en extraction et gestion de site.",
      ar: "خبرة في استغلال المحاجر والمعادن، مع دراية تشغيلية في الاستخراج وإدارة المواقع.",
    },
    evidence: "profile",
    document: {
      en: "Quarry permits & operational records",
      fr: "Permis de carrière & registres opérationnels",
      ar: "تراخيص المحاجر والسجلات التشغيلية",
    },
    disclosure: "requiresDoc",
  },
  {
    id: "partnerships",
    icon: Handshake,
    title: {
      en: "Strategic partnerships",
      fr: "Partenariats stratégiques",
      ar: "الشراكات الاستراتيجية",
    },
    summary: {
      en: "Relationships with operating partners, technical advisors, European technical networks and development finance actors.",
      fr: "Relations avec partenaires opérationnels, conseillers techniques, réseaux techniques européens et acteurs de la finance de développement.",
      ar: "علاقات مع شركاء تشغيليين ومستشارين تقنيين وشبكات تقنية أوروبية وجهات تمويل تنموي.",
    },
    evidence: "internal",
    document: {
      en: "Partnership MoUs & engagement letters",
      fr: "Protocoles d'accord & lettres d'engagement",
      ar: "مذكرات تفاهم الشراكة وخطابات الالتزام",
    },
    disclosure: "internalOnly",
  },
  {
    id: "leadership",
    icon: Users,
    title: {
      en: "Leadership & expert network",
      fr: "Direction & réseau d'experts",
      ar: "القيادة وشبكة الخبراء",
    },
    summary: {
      en: "Led by Eng. Abubaker El Refaey (Chairman / General Director) with Saudi investment vision and senior geological expertise, incl. Prof./Dr. Abdelbagi Gilani as referenced in the company profile.",
      fr: "Dirigée par l'Ing. Abubaker El Refaey (Président / Directeur Général) avec une vision d'investissement saoudienne et une expertise géologique senior, dont le Prof./Dr. Abdelbagi Gilani selon le profil de l'entreprise.",
      ar: "بقيادة المهندس أبوبكر الرفاعي (الرئيس / المدير العام) برؤية استثمارية سعودية وخبرة جيولوجية رفيعة، بما في ذلك البروفيسور/د. عبد الباقي جيلاني كما ورد في ملف الشركة.",
    },
    evidence: "profile",
    document: {
      en: "Leadership CVs & profile references",
      fr: "CV de la direction & références du profil",
      ar: "السير الذاتية للقيادة ومراجع الملف",
    },
    disclosure: "partnerReady",
  },
  {
    id: "portfolio",
    icon: Layers,
    title: {
      en: "Moroccan copper portfolio",
      fr: "Portefeuille cuprifère marocain",
      ar: "محفظة النحاس المغربية",
    },
    summary: {
      en: "Four Moroccan copper mining licenses, subject to updated documentation and renewal status confirmation.",
      fr: "Quatre licences minières cuprifères marocaines, sous réserve de documentation actualisée et de confirmation du statut de renouvellement.",
      ar: "أربعة رخص تعدين نحاس مغربية، خاضعة لتحديث الوثائق وتأكيد حالة التجديد.",
    },
    evidence: "validation",
    document: {
      en: "License titles & renewal correspondence",
      fr: "Titres de licence & correspondance de renouvellement",
      ar: "سندات الرخص ومراسلات التجديد",
    },
    disclosure: "requiresDoc",
  },
  {
    id: "saudi-gold",
    icon: Gem,
    title: {
      en: "Saudi gold exploration expansion",
      fr: "Expansion d'exploration aurifère saoudienne",
      ar: "توسع استكشاف الذهب السعودي",
    },
    summary: {
      en: "Saudi gold exploration expansion through submitted exploration licenses and partnerships — study stage.",
      fr: "Expansion d'exploration aurifère saoudienne via des licences d'exploration soumises et des partenariats — stade d'étude.",
      ar: "توسع استكشاف الذهب السعودي عبر رخص استكشاف مُقدَّمة وشراكات — مرحلة الدراسة.",
    },
    evidence: "docRequired",
    document: {
      en: "Exploration license applications",
      fr: "Demandes de licences d'exploration",
      ar: "طلبات رخص الاستكشاف",
    },
    disclosure: "requiresDoc",
  },
  {
    id: "industrial",
    icon: FlaskConical,
    title: {
      en: "Study-stage industrial projects",
      fr: "Projets industriels au stade d'étude",
      ar: "مشاريع صناعية في مرحلة الدراسة",
    },
    summary: {
      en: "Study-stage industrial projects such as silica carbonate, paints, and Riyadh stone supply.",
      fr: "Projets industriels au stade d'étude tels que carbonate de silice, peintures et fourniture de pierre de Riyad.",
      ar: "مشاريع صناعية في مرحلة الدراسة مثل كربونات السيليكا والدهانات وتوريد حجر الرياض.",
    },
    evidence: "internal",
    document: {
      en: "Pre-feasibility study notes",
      fr: "Notes d'étude de préfaisabilité",
      ar: "ملاحظات دراسة الجدوى الأولية",
    },
    disclosure: "internalOnly",
  },
];
