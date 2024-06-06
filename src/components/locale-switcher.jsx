"use client";

import { i18n } from "@/localization/i18n-config";
import { LanguagesSupport } from "@/localization/languages-support";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const router = useRouter();
  const [selectedLocale, setSelectedLocale] = useState(i18n.defaultLocale);

  useEffect(() => {
    const currentLocale = pathName.split("/")[1];
    setSelectedLocale(currentLocale);
  }, [pathName]);

  const handleLocaleChange = (event) => {
    const newLocale = event.target.value;
    const redirectedPathName = (locale) => {
      if (!pathName) return "/";
      const segments = pathName.split("/");
      segments[1] = locale;
      return segments.join("/");
    };
    router.push(redirectedPathName(newLocale));
  };

  return (
    <li>
      <select value={selectedLocale} onChange={handleLocaleChange}>
        {Object.entries(LanguagesSupport).map((locale, i) => {
          return (
            <option key={locale[0]} value={locale[0]}>
              {locale[1]}
            </option>
          );
        })}
      </select>
    </li>
  );
}
