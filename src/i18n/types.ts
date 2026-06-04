import type { Lang } from "./LanguageContext";

/** A string available in all three gateway languages. */
export type L = Record<Lang, string>;

/** Build a Localized string quickly: l("en", "fr", "ar"). */
export const l = (en: string, fr: string, ar: string): L => ({ en, fr, ar });
