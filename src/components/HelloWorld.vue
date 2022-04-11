<template>
  <header class="header">
    <div class="header-wrap">
      <h1 class="header-title">
        <translataibleText localePath="title" />
      </h1>

      <nav class="header-nav">
        <a @click="goByAnchor" href="#section1"> Section 1 </a>
        <a @click="goByAnchor" href="#section2"> Section 2 </a>
      </nav>

      <button @click="changeLocale">Switch lang: {{ $i18n.locale }}</button>
    </div>
  </header>

  <main>
    <section id="section1">
      <div class="container">
        <h2 class="section-title">
          <translataibleText localePath="section1.title" />
        </h2>
        <p>
          <translataibleText localePath="section1.text.p1" />
        </p>

        <p>
          <translataibleText localePath="section1.text.p2" />
        </p>

        <p>
          <translataibleText localePath="section1.text.p3" />
        </p>
      </div>
    </section>

    <section id="section2">
      <div class="container">
        <h2 class="section-title">
          <translataibleText localePath="section2.title" />
        </h2>
        <p>
          <translataibleText localePath="section2.text.p1" />
        </p>

        <p>
          <translataibleText localePath="section2.text.p2" />
        </p>

        <p>
          <translataibleText localePath="section2.text.p3" />
        </p>
      </div>
    </section>
  </main>
</template>

<script>
import translataibleText from "./translataible-text.vue";

export default {
  components: {
    translataibleText,
  },

  props: {
    msg: String,
  },

  methods: {
    goByAnchor(e) {
      e.preventDefault();
      const $section = document.querySelector(e.target.getAttribute("href"));
      const headerOffset = 80 + 15; // header height + extra offset
      const sectionPosition = $section.getBoundingClientRect().top;
      const offset = sectionPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    },

    changeLocale() {
      const newLocale = this.$i18n.locale === "ru" ? "en" : "ru";
      this.$i18n.locale = newLocale;
      this.$store.commit("setLocale", newLocale);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  padding-top: 80px;
}

.header {
  padding: 15px 0;
  height: 80px;
  background-color: pink;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

.header-wrap {
  max-width: 1280px;
  padding: 0 15px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-title {
  font-weight: 600;
  font-size: 2rem;
  margin: 0 1em 0 0;
}

.header-nav {
  display: flex;
  align-items: center;
}

.header-nav {
  a {
    background-color: #b980f1;
    border: 2px solid #b980f1;
    border-radius: 6px;
    color: #fff;
    font-weight: 500;
    padding: 0.875em 1em;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
      background-color: transparent;
      color: #b980f1;
    }

    &:not(:last-child) {
      margin-right: 1em;
    }
  }
}

.container {
  max-width: 1280px;
  padding: 0 15px;
  width: 100%;
}
</style>
