import { createStore } from "vuex";
import { getLocales } from "@/api/locales";

export default createStore({
  state: {
    locale: "",
  },
  getters: {},
  mutations: {
    setLocale(state, payload) {
      state.locale = payload;
    },
  },
  actions: {
    async getLocales() {
      const messages = await getLocales();
      return messages;
    },
  },
  modules: {},
});
