import "server-only";
const isBrowser = typeof window !== "undefined";

const dictionaries = {
  en: () => import("./lang/en.json").then((module) => module.default),
  de: () => import("./lang/de.json").then((module) => module.default),
  fr: () => import("./lang/fr.json").then((module) => module.default),
};

export const getDictionary = async (locale) => {
  if (isBrowser) {
    console.log("is workign");
    localStorage.setItem("lang", JSON.stringify(locale));
  }
  return dictionaries[locale]?.() ?? dictionaries.en();
};
