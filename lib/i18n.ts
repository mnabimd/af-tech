import { createContext, useContext, useState } from "react";

export type Language = "en" | "ar";

export const languages = {
  en: "English",
  ar: "العربية",
} as const;

export type I18nContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

export const I18nContext = createContext<I18nContextType | undefined>(
  undefined
);

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
