// English (LTR) translation dictionary.
// This file also defines the canonical shape (Translation) that the
// Arabic and French dictionaries must satisfy.

export const en = {
  meta: {
    code: "EN",
    name: "English",
    dir: "ltr" as "ltr" | "rtl",
  },

  app: {
    name: "ATLAS Green Copper Finance Console",
    confidential: "Confidential Stakeholder Access",
    tagline: "Experience-led Green Copper Platform",
    company: "Atlas Mining SARL",
    location: "Morocco · Beni Mellal · Isseksi",
    expansionTarget: "Strategic Expansion Target: USD 50M",
  },

  common: {
    indicative: "Indicative planning figure — subject to validation",
    subjectToValidation: "Subject to validation",
    confidential: "Confidential",
    next: "Next",
    back: "Back",
    close: "Close",
    total: "Total",
    amount: "Amount",
    purpose: "Purpose",
    stakeholders: "Stakeholders",
    status: "Status",
    selectRole: "Select a role to continue",
    enterConsole: "Enter Controlled Console",
    openStakeholderView: "Open Stakeholder View",
    reviewPathways: "Review Strategic Pathways",
    exit: "Exit console",
    activeRole: "Active role",
  },

  nav: {
    dashboard: "Executive Dashboard",
    capability: "Atlas Capability Room",
    morocco: "Morocco / Beni Mellal Value",
    pilot: "Green Copper Pilot",
    expansion: "USD 50M Expansion Map",
    pathways: "Finance Pathways",
    esg: "ESG Monitoring",
    documents: "Evidence & Documents",
    decision: "Partner Decision Room",
  },

  roles: {
    title: "Mock Role Selector",
    subtitle: "Choose a stakeholder lens — controlled access, no public investment view.",
    internal: "Internal Atlas / Akanil",
    partner: "Moroccan Operating Partner",
    geff: "EBRD / GEFF Reviewer",
    climate: "EBRD Climate Finance Reviewer",
    bank: "Attijariwafa Bank / Green Finance Structuring",
    advisor: "Technical / Environmental Advisor",
  },

  entry: {
    badge: "Private · Institutional · Confidential",
    intro:
      "A controlled stakeholder console presenting accumulated mining experience, a Moroccan copper base, a green processing model, and a scalable platform for responsible critical copper recovery.",
    notOffer:
      "This is not a public fundraising offer. All figures are indicative and subject to technical, environmental, legal and financial validation.",
  },

  dashboard: {
    title: "Executive Experience Dashboard",
    subtitle:
      "An executive command view — Atlas strength first, financing pathway last.",
    since: "Atlas since 2012",
    sinceDesc: "Moroccan-rooted mining and mineral investment platform.",
    geology: "Geological studies capability",
    geologyDesc: "Specialized geological studies office and economic evaluation.",
    licenses: "Four Moroccan copper licenses",
    licensesDesc: "Profile-based portfolio, subject to renewal confirmation.",
    leadership: "Saudi investment leadership",
    leadershipDesc: "Saudi-Moroccan investment vision with institutional discipline.",
    expertise: "Senior geological expertise",
    expertiseDesc: "Access to technical experts and European technical networks.",
    partnerships: "Strategic partnerships",
    partnershipsDesc: "Operating partners, advisors and development finance actors.",
    platform: "Moroccan Green Copper Platform",
    platformDesc: "Modular processing of oxidized copper ore — pilot to expansion.",
    target: "USD 50M indicative strategic expansion target",
    targetDesc:
      "Expansion envelope to scale from pilot validation to a green copper processing platform.",
    narrativeTitle: "Narrative order",
    narrative:
      "Experience → Morocco Value → Green Pilot → USD 50M Expansion Map → Finance Pathways → Stakeholder Decision",
  },

  capability: {
    title: "Atlas Capability Room",
    subtitle:
      "Accumulated experience, geological capability, portfolio and leadership — structured for review.",
    evidenceLabel: "Evidence status",
    documentLabel: "Required support document",
    disclosureLabel: "External disclosure status",
  },

  evidence: {
    profile: "Profile-based statement",
    docRequired: "Supporting document required",
    validation: "Subject to validation",
    partnerReady: "Partner-ready",
    internal: "Internal only",
  },

  disclosure: {
    requiresDoc: "Requires supporting documentation for external disclosure",
    internalOnly: "Internal only",
    partnerReady: "Partner-ready for controlled disclosure",
  },

  morocco: {
    title: "Morocco Value & Beni Mellal Development Model",
    subtitle:
      "A development opportunity for Morocco — presented before any financing request.",
    intro:
      "A Moroccan green copper platform with potential to contribute to regional development in Beni Mellal and responsible critical minerals processing.",
    items: {
      hub: "Regional green processing hub potential",
      technical: "Beni Mellal technical development",
      services: "Local services and skills",
      water: "Water discipline in mineral processing",
      esg: "ESG monitoring culture",
      recovery: "Responsible copper recovery",
      valueChain: "Critical minerals value chain",
      finance: "Moroccan green finance leadership",
      replication: "Replication potential across mineral regions",
    },
    careful:
      "Wording is deliberate: potential to contribute · designed to support · subject to implementation · pilot-to-expansion model.",
  },

  pilot: {
    title: "Green Copper Pilot Room",
    subtitle:
      "Modular processing of oxidized copper ore — from selective mining to expansion decision.",
    flowTitle: "Process flow",
    steps: {
      selectiveMining: "Selective Mining",
      oreSorting: "Ore Sorting",
      crushing: "Crushing",
      screening: "Screening",
      washing: "Washing / Scrubbing",
      vatLeaching: "Modular Vat Leaching",
      pls: "Pregnant Leach Solution",
      cementation: "Iron Cementation",
      cementCopper: "Cement Copper",
      esgLog: "ESG Data Log",
      expansion: "Expansion Decision",
    },
    cards: {
      oxidized: "Oxidized Copper",
      oxidizedDesc: "Oxidized ore suited to controlled hydrometallurgical recovery.",
      controlled: "Controlled Leaching",
      controlledDesc: "Modular vat leaching with managed solution chemistry.",
      waterRecycling: "Water Recycling",
      waterRecyclingDesc: "Closed-loop water discipline reduces fresh-water draw.",
      footprint: "Reduced Footprint",
      footprintDesc: "Modular design lowers land and infrastructure impact.",
      cementCopper: "Cement Copper",
      cementCopperDesc: "Iron cementation yields cement copper product.",
      digitalEsg: "Digital ESG Monitoring",
      digitalEsgDesc: "Batch traceability and environmental data logging.",
      pilotExpansion: "Pilot-to-Expansion Logic",
      pilotExpansionDesc: "Validate at pilot scale, then scale responsibly.",
    },
  },

  expansion: {
    title: "USD 50M Strategic Expansion Map",
    subtitle:
      "Indicative expansion envelope for pilot validation, modular processing, environmental systems, multi-license development, ESG digitization, and institutional de-risking — subject to validation.",
    definition:
      "An indicative strategic expansion envelope designed to support the transition from pilot validation to a scalable Moroccan green copper processing platform — subject to technical, environmental, legal and financial validation. Not secured funding. Not a public offering.",
    chartTitle: "Capital cluster allocation",
    tabs: {
      full: "Full Expansion Envelope",
      geff: "EBRD / GEFF Lens",
      climate: "EBRD Climate Lens",
      bank: "Attijariwafa Bank Lens",
      partner: "Moroccan Partner Lens",
      atlas: "Atlas Contribution Lens",
    },
    lensTotal: "Lens-relevant indicative envelope",
    lensNote: "Subject to eligibility assessment and review — not approved.",
  },

  pathways: {
    title: "Three Institutional Finance Pathways",
    subtitle:
      "Three structured routes — Atlas is positioned by stakeholder logic, not as a conventional mining finance request.",
    focus: "Focus",
    keyPhrase: "Key positioning",
    relevant: "Relevant USD 50M clusters",
    visibleTotal: "Visible envelope logic",
    notApproved: "Subject to eligibility review — not approved.",
    stages: "Staged financing envelope",
  },

  esg: {
    title: "ESG Monitoring MVP",
    subtitle:
      "A mock ESG command view — every metric is a placeholder pending pilot data.",
    placeholder: "MVP placeholder — requires pilot data",
    metrics: {
      waterRecycling: "Water recycling rate",
      freshWater: "Fresh water avoided",
      acid: "Acid consumption per ton",
      residue: "Residue containment status",
      energy: "Energy use per ton",
      traceability: "Batch traceability score",
      safety: "Safety incidents",
      review: "Independent review status",
      community: "Community benefit indicators",
      regional: "Regional development indicators",
      climate: "Climate resilience checklist",
      completeness: "ESG data completeness",
    },
  },

  documents: {
    title: "Evidence & Document Room",
    subtitle:
      "Controlled documentation — purpose, status and next action for each evidence item.",
    purpose: "Purpose",
    docStatus: "Status",
    access: "Access level",
    type: "Evidence type",
    nextAction: "Next action",
    categories: {
      profile: "Company Profile",
      licenses: "Licenses & Renewal",
      assays: "Assays",
      photos: "Field Photos",
      engineering: "Engineering",
      greenFinance: "Green Finance",
      esg: "ESG Monitoring",
      banking: "Banking Structuring",
      partner: "Partner Engagement",
      claims: "Claims Control",
    },
  },

  decision: {
    title: "Partner Decision Room",
    subtitle: "Structured decision pathways — each with evidence, owner and next output.",
    requiredEvidence: "Required evidence",
    requiredDecision: "Required decision",
    responsible: "Responsible party",
    riskReduced: "Risk reduced",
    nextOutput: "Next output",
    suggestedAccess: "Suggested access level",
  },

  claims: {
    title: "Claims Control",
    intro:
      "This console enforces disciplined language. The following are never claimed:",
    doNot: [
      "Proven reserves",
      "Commercially recoverable resources",
      "Guaranteed production",
      "Confirmed green certification",
      "Atlas GCF accreditation",
      "Fully renewed licenses",
      "Guaranteed funding",
      "Guaranteed regional impact",
      "Guaranteed employment numbers",
      "USD 50M secured funding",
    ],
    weUse: "Approved wording",
    use: [
      "Preliminary evidence",
      "Subject to verification",
      "Pilot-stage",
      "Under renewal",
      "Indicative expansion target",
      "Proposed modular processing model",
      "Potential regional contribution",
      "Profile-based company statement",
      "Subject to eligibility review",
      "Subject to bank approval",
    ],
    footer:
      "Confidential — prepared for controlled stakeholder review. Not a public fundraising offer. All figures indicative and subject to validation.",
  },
};

export type Translation = typeof en;
