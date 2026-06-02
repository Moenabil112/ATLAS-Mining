import {
  ShieldCheck,
  Handshake,
  Recycle,
  ThermometerSun,
  Landmark,
  Microscope,
  type LucideIcon,
} from "lucide-react";
import type { Translation } from "../i18n/translations.en";

export type RoleId =
  | "internal"
  | "partner"
  | "geff"
  | "climate"
  | "bank"
  | "advisor";

export interface RoleDef {
  id: RoleId;
  icon: LucideIcon;
  labelKey: keyof Translation["roles"];
  accent: string;
}

export const roles: RoleDef[] = [
  { id: "internal", icon: ShieldCheck, labelKey: "internal", accent: "#d6905f" },
  { id: "partner", icon: Handshake, labelKey: "partner", accent: "#94703e" },
  { id: "geff", icon: Recycle, labelKey: "geff", accent: "#36a169" },
  { id: "climate", icon: ThermometerSun, labelKey: "climate", accent: "#5cb884" },
  { id: "bank", icon: Landmark, labelKey: "bank", accent: "#b86a34" },
  { id: "advisor", icon: Microscope, labelKey: "advisor", accent: "#cdb893" },
];
