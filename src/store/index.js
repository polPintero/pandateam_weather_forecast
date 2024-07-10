import { createStore } from 'vuex';
import forecastApi from '@/api/ForecastApi';
import geoApi from '@/api/GeoAPI';
import LocalStorageApi from '@/api/LocalStorageApi.js';

import forecast from './forecast';
import cityByName from './cityByName';
import weeklyFormat from '@/utils/weeklyFormat';

const store = createStore({
  state() {
    return {
      widget: null,
      currentBlock: null,
      weeklyBlock: null,
      weeklyForecast: null,
      isOpenSearch: false,
      listFavorites: []
    };
  },
  getters: {
    widget: (state) => state.widget,
    currentBlock: (state) => state.currentBlock,
    weeklyBlock: (state) => state.weeklyBlock,
    isOpenSearch: (state) => state.isOpenSearch,
    listFavorites: (state) => state.listFavorites
  },
  mutations: {
    SET_WIDGET(state, payload) {
      state.widget = payload;
    },
    SET_CURRENT_BLOCK(state, payload) {
      state.currentBlock = payload;
    },
    SET_WEEKLY_BLOCK(state, payload) {
      state.weeklyBlock = payload;
    },
    SET_WEEKLY_FORECAST(state, payload) {
      state.weeklyForecast = payload;
    },
    TOGGLE_SEARCH(state, payload) {
      state.isOpenSearch = payload;
    },
    ADD_TO_FAVORITE_LIST(state, payload) {
      state.listFavorites.push(payload);
    },
    REMOVE_FROM_FAVORITE_LIST(state, payload) {
      state.listFavorites = state.listFavorites.filter((i) => i.id !== payload.id);
    }
  },
  actions: {
    async getWeatherByCoords({}, payload) {
      const result = await forecastApi.getWeatherByCoords(payload);
      return result;
    },
    async getForecastByCoords({ dispatch }, payload) {
      const result = forecast;
      // const result = await forecastApi.getForecastByCoords(payload);
      dispatch('setForecast', result);
      return result;
    },
    async initialRequest({ dispatch, commit }, payload) {
      const result = await Promise.allSettled([
        dispatch('getWeatherByCoords', payload),
        dispatch('getForecastByCoords', payload)
      ]);
      const weather = result[0].value;
      commit('SET_WIDGET', weather);
    },
    async searchCityByName({}, sityName) {
      const result = cityByName;
      // const result = await geoApi.searchCityByName(sityName);
      return result;
    },
    async getForecastById({ dispatch }, { id }) {
      const result = await forecastApi.getForecastById(id);
      dispatch('setForecast', result);
      return result;
    },
    setForecast({ commit }, payload) {
      const weeklyBlock = weeklyFormat(payload.list);
      commit('SET_CURRENT_BLOCK', weeklyBlock[0]);
      commit('SET_WEEKLY_BLOCK', weeklyBlock);
      commit('SET_WEEKLY_FORECAST', payload);
    },
    addToFavorite({ commit }, widget) {
      LocalStorageApi.setToStorage(widget.id);
      commit('ADD_TO_FAVORITE_LIST', widget);
    },
    removeFromFavorite({ commit }, widget) {
      LocalStorageApi.removeFromStorage(widget.id);
      commit('REMOVE_FROM_FAVORITE_LIST', widget);
    }
  }
});

export default store;
