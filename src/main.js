import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import store from "./store";

import defineLocale from "@/utils/defineLocale";

(async function () {
  const browserLocale = defineLocale();
  store.commit("setLocale", browserLocale);
  const messages = await store.dispatch("getLocales");

  const i18n = createI18n({
    locale: browserLocale, // set locale
    fallbackLocale: "en", // set fallback locale
    messages,
  });
  createApp(App).use(store).use(i18n).mount("#app");
})();
