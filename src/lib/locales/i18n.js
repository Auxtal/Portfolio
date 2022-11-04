import { derived, writable } from "svelte/store";
import translations from "$json/Translations.json";

export const locale = writable("en");
export const locales = Object.keys(translations);

function translate(locale, key, vars) {
  if (!key) throw new Error("No key provided to $t()");
  if (!locale) throw new Error(`No translation for key "${key}"`);

  let text = translations[locale][key];
  if (!text) throw new Error(`No translation found for ${locale}.${key}`);

  Object.keys(vars).map((k) => {
    const regex = new RegExp(`{{${k}}}`, "g");
    text = text.replace(regex, vars[k]);
  });

  return text;
}

export const t = derived(
  locale,
  ($locale) =>
    (key, vars = {}) =>
      translate($locale, key, vars)
);