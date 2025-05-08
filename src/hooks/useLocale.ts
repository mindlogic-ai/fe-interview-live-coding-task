import { useEffect, useState } from "react";

// import LanguageStore from '@/store/language';

const STORAGE_KEY = "user-language-preference";

/**
 * Custom hook to get the user's locale safely in Next.js.
 * Ensures compatibility with CSR by checking for the router's availability.
 *
 * @returns {string, changeUserLanguage: (lang: string) => Promise<void>} - The detected locale (e.g., 'en', 'ko') and a function to change the user's language.
 */

const useLocale = (): {
  language: "ko" | "en";
  changeUserLanguage: (lang: "ko" | "en") => Promise<void>;
  getLocaleValue: <T extends Record<"ko" | "en", string>>(obj: T) => string;
} => {
  // const { language, setLanguage } = LanguageStore();
  const [language, setLanguage] = useState<"ko" | "en">("en");
  const changeUserLanguage = async (lang: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, lang);
    }
    setLanguage(lang as "ko" | "en");
  };

  const getLocaleValue = (obj: Record<"ko" | "en", string>) => {
    return obj?.[language as keyof typeof obj] ?? "";
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const storedLanguage = localStorage.getItem(STORAGE_KEY);
        const browserLanguage = navigator.language || "en-US";
        const baseLanguage = (storedLanguage ||
          browserLanguage.split("-")[0]) as "ko" | "en";

        if (!storedLanguage) {
          localStorage.setItem(STORAGE_KEY, baseLanguage);
        }
        setLanguage(baseLanguage);
      } catch (error) {
        console.warn("Router is not available:", error);
      }
    }
  }, [setLanguage]);

  return { language: language ?? "en", changeUserLanguage, getLocaleValue };
};

export default useLocale;
