import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { en, type Translation } from "./translations.en";
import { fr } from "./translations.fr";
import { ar } from "./translations.ar";

export type LangCode = "en" | "fr" | "ar";

const dictionaries: Record<LangCode, Translation> = { en, fr, ar };

interface LanguageContextValue {
  lang: LangCode;
  dir: "ltr" | "rtl";
  t: Translation;
  setLang: (lang: LangCode) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "atlas-console-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LangCode>(() => {
    if (typeof window === "undefined") return "en";
    const stored = window.localStorage.getItem(STORAGE_KEY) as LangCode | null;
    return stored && stored in dictionaries ? stored : "en";
  });

  const t = dictionaries[lang];
  const dir = t.meta.dir;

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = dir;
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang, dir]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      dir,
      t,
      setLang: setLangState,
    }),
    [lang, dir, t]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
