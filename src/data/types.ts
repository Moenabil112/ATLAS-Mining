import type { LangCode } from "../i18n/LanguageContext";

/** A string available in all three console languages. */
export type Localized = Record<LangCode, string>;

/** Resolve a Localized value for the active language. */
export function loc(value: Localized, lang: LangCode): string {
  return value[lang];
}

export type EvidenceKey =
  | "profile"
  | "docRequired"
  | "validation"
  | "partnerReady"
  | "internal";

export type AccessLevel =
  | "internal"
  | "partner"
  | "reviewer"
  | "advisor"
  | "controlled";
