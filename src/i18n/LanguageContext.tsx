import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "fr" | "ar";

interface LanguageContextValue {
  lang: Lang;
  dir: "ltr" | "rtl";
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "atlas-gateway-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    return stored && ["en", "fr", "ar"].includes(stored) ? stored : "en";
  });

  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = dir;
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang, dir]);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, dir, setLang: setLangState }),
    [lang, dir]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
