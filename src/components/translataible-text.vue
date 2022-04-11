<script>
import { changeTranslate } from "@/api/locales";

export default {
  props: {
    localePath: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      mode: "text", // text, edit

      newTransalte: "",
    };
  },

  methods: {
    openTranslateEditor() {
      this.mode = "edit";
    },

    async updateTranslate() {
      const lang = this.$store.state.locale;
      const path = this.localePath;
      const translation = this.newTransalte;
      const messages = this.$i18n.messages;

      await changeTranslate({ lang, path, translation, messages });
      const newLocales = await this.$store.dispatch("getLocales");
      this.$i18n.messages[lang] = newLocales[lang];

      this.mode = "text";
    },
  },
};
</script>

<template>
  <span
    v-if="mode === 'text'"
    @dblclick="(mode = edit), (newTransalte = $t(localePath))"
  >
    {{ $t(localePath) }}
  </span>
  <form class="form" @submit.prevent="updateTranslate" v-else>
    <textarea :placeholder="$t(localePath)" v-model="newTransalte"></textarea>
    <div class="controls">
      <button type="submit">Save</button>
      <button type="reset" @click="mode = 'text'">Cancel</button>
    </div>
  </form>
</template>

<style lang="scss">
.form {
  display: flex;
  flex-direction: column;

  .controls {
    display: flex;
    justify-content: space-between;

    button {
      width: calc(50% - 5px);
    }
  }
}
</style>
