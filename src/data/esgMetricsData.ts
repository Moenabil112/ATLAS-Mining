import {
  Droplets,
  Waves,
  FlaskRound,
  ShieldCheck,
  Zap,
  ScanLine,
  HardHat,
  ClipboardCheck,
  HeartHandshake,
  TrendingUp,
  CloudSun,
  Database,
  type LucideIcon,
} from "lucide-react";

export type MetricTone = "green" | "copper" | "neutral";

export interface EsgMetric {
  id: keyof EsgMetricKeys;
  icon: LucideIcon;
  /** Placeholder display value (clearly mock). */
  value: string;
  tone: MetricTone;
}

// keys must match translations.esg.metrics
interface EsgMetricKeys {
  waterRecycling: true;
  freshWater: true;
  acid: true;
  residue: true;
  energy: true;
  traceability: true;
  safety: true;
  review: true;
  community: true;
  regional: true;
  climate: true;
  completeness: true;
}

export const esgMetrics: EsgMetric[] = [
  { id: "waterRecycling", icon: Droplets, value: "— %", tone: "green" },
  { id: "freshWater", icon: Waves, value: "— m³", tone: "green" },
  { id: "acid", icon: FlaskRound, value: "— kg/t", tone: "copper" },
  { id: "residue", icon: ShieldCheck, value: "—", tone: "neutral" },
  { id: "energy", icon: Zap, value: "— kWh/t", tone: "copper" },
  { id: "traceability", icon: ScanLine, value: "— / 100", tone: "green" },
  { id: "safety", icon: HardHat, value: "—", tone: "neutral" },
  { id: "review", icon: ClipboardCheck, value: "—", tone: "neutral" },
  { id: "community", icon: HeartHandshake, value: "—", tone: "green" },
  { id: "regional", icon: TrendingUp, value: "—", tone: "green" },
  { id: "climate", icon: CloudSun, value: "—", tone: "green" },
  { id: "completeness", icon: Database, value: "— %", tone: "neutral" },
];
