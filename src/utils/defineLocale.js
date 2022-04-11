export default function browserLocale() {
  if (!window) return null;
  const browserLocale =
    (navigator.languages && navigator.languages[0]) ||
    window.navigator.userLanguage ||
    window.navigator.language;
  let locale = browserLocale ? browserLocale.substr(3, 4).toLowerCase() : null;
  if (locale === "") locale = browserLocale.substr(0, 2).toLowerCase();
  return locale;
}
