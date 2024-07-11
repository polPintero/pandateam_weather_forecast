<template>
  <div class="lang">
    <div class="lang__selected" @click="expandSelect">{{ userLang }}</div>
    <ul v-if="isExpanded" class="lang__select">
      <li
        v-for="lang in langList.filter((i) => i !== userLang)"
        :key="lang"
        class="lang__select__item"
        @click="choiceLang(lang)"
      >
        {{ lang }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LangSelect',
  data() {
    return {
      langList: ['en', 'uk'],
      isExpanded: false
    };
  },
  created() {
    this.$store.commit('SET_LANG', this.langList[0]);
  },
  computed: {
    userLang() {
      return this.$store.getters['userLang'];
    }
  },
  methods: {
    expandSelect() {
      this.isExpanded = !this.isExpanded;
    },
    choiceLang(lang) {
      this.$root.$i18n.locale = lang;
      console.log(this.$root.$i18n);
      this.$store.dispatch('setLang', lang);
      this.expandSelect();
      console.log(this.$root.$i18n.locale);
    }
  }
};
</script>

<style lang="scss" scoped>
.lang {
  font-size: 1.5rem;
  cursor: pointer;

  &__select {
    list-style-type: none;

    &__item {
      &:hover {
        color: #1c1b33;
      }
    }
  }
}
</style>
