<template>
  <div class="search" :class="{ isOpen: isOpenSearch }">
    <div class="search__close" @click="closeSearchModal" />
    <div class="search__wrap">
      <label class="search__input">
        <img class="search__input--icon" src="@/assets/search.svg" alt="search-icon" />
        <input
          v-model="searchValue"
          @input="getSearchResullt"
          type="text"
          placeholder="Input 2 or more characters"
        />
      </label>
      <ul v-if="!selectedResult" class="search__result">
        <li
          v-for="searchItem in searchResult"
          :key="searchItem.name + searchItem.country + searchItem.state"
          class="search__result__item"
          @click="selectResultItem(searchItem)"
        >
          {{ getLabel(searchItem) }}
        </li>
      </ul>
      <ChoicedItem
        v-if="choiceForecast"
        class="search__content"
        :widget="choiceForecast"
        @addedToMain="reset(true)"
      />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  name: 'Search',
  components: {
    ChoicedItem: defineAsyncComponent(() => import('@/components/moleculs/Search/ChoicedItem.vue'))
  },
  data() {
    return {
      searchValue: '',
      searchResult: [],
      selectedResult: null,
      choiceForecast: null
    };
  },
  computed: {
    isOpenSearch() {
      return this.$store.getters['isOpenSearch'];
    },
    userLang() {
      return this.$store.getters['userLang'];
    }
  },
  created() {
    this.getSearchResullt = this.debounce(this.handlerResponse);
  },
  methods: {
    debounce(func) {
      let timeout;
      return () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          func.apply(this);
        }, 300);
      };
    },
    async handlerResponse() {
      if (this.searchValue.length < 2) {
        this.reset();
        return;
      }
      if (this.selectedResult) return;
      this.searchResult = await this.$store.dispatch('searchCityByName', this.searchValue);
    },
    closeSearchModal() {
      this.$store.commit('TOGGLE_SEARCH', false);
    },
    getLabel(item) {
      const { userLang } = this;
      const cityName = item.local_names
        ? item.local_names[userLang]
          ? item.local_names[userLang]
          : item.name
        : item.name;
      return `${cityName} ${item.state ? item.state : ''} ${item.country}`;
    },
    async selectResultItem(item) {
      this.selectedResult = item;
      this.searchValue = this.getLabel(item);
      this.choiceForecast = await this.$store.dispatch('getWeatherByCityName', [
        item.name,
        item.country
      ]);
    },
    //   this.choiceForecast = await this.$store.dispatch('getWeatherByCoords', {
    //     lat: item.lat,
    //     lon: item.lon
    //   });
    // },
    reset(isAddedToMain) {
      this.choiceForecast = null;
      this.selectedResult = null;
      this.searchResult = [];
      if (isAddedToMain) {
        this.searchValue = '';
        this.closeSearchModal();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.search {
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(100%);
  width: 100%;
  height: 100%;
  padding: 32px;
  background-color: rgba(72, 49, 157, 1);
  background-image: linear-gradient(
    135deg,
    rgba(97, 47, 171, 0) 14%,
    rgba(97, 47, 171, 1) 36%,
    rgba(97, 47, 171, 0) 63%,
    rgba(97, 47, 171, 1)
  );
  transition-duration: 0.2s;
  z-index: 1;

  &.isOpen {
    transform: translateY(0%);
  }

  &__wrap {
    max-width: 500px;
    margin: 16px auto;
  }

  &__input {
    --input-padding-left: 3rem;

    display: block;
    width: 100%;
    margin: 0 auto;
    position: relative;

    input {
      width: 100%;
      background-image: linear-gradient(100deg, #2e335a, #1c1b33);
      outline: none;
      border: none;
      height: 2.5em;
      padding: 0 var(--input-padding-left);
      border-radius: 10px;
      color: inherit;
      font-size: 1rem;
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

      &::placeholder {
        color: var(--txt-color-secondary);
        font-size: 0.9rem;
      }
    }

    &--icon {
      position: absolute;
      top: 50%;
      left: calc(var(--input-padding-left) / 2);
      transform: translate(-50%, -50%);
    }
  }

  &__close {
    position: relative;
    width: 10px;
    height: 10px;
    margin-left: auto;
    cursor: pointer;

    &:before,
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: MAX(20px, 40%);
      height: 3px;
      border-radius: 10px;
      background: var(--txt-color-primary);
    }

    &:after {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &:before {
      transform: translate(-50%, -50%) rotate(135deg);
    }

    @media (max-width: 768px) {
      margin: 0;
      right: -100%;
    }
  }

  &__result {
    list-style-type: none;
    padding: 8px 12px;

    &__item {
      cursor: pointer;
      width: fit-content;
      min-width: 50%;
      padding: 6px;

      &:not(:last-child) {
        margin-bottom: 10px;
      }

      &:hover {
        background-image: linear-gradient(100deg, #2e335a, #1c1b33);
      }
    }
  }

  &__content {
    position: relative;
    margin: 36px auto;
    width: fit-content;
  }
}
</style>
