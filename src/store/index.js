import { createStore } from 'vuex';
import forecastApi from '@/api/ForecastApi';

const store = createStore({
  state() {
    return {
      widget: null,
      currentBlock: null
    };
  },
  getters: {
    widget: (state) => state.widget,
    currentBlock: (state) => state.currentBlock
  },
  mutations: {
    SET_WIDGET(state, payload) {
      state.widget = payload;
    },
    SET_CURRENTB_LOCK(state, payload) {
      state.currentBlock = payload;
    }
  },
  actions: {
    async getWeatherByCoords({ commit }, payload) {
      const result = await forecastApi.getWeatherByCoords(payload);
      commit('SET_WIDGET', result);
    },
    async getForecastByCoords({ commit }, payload) {
      const result = await forecastApi.getForecastByCoords(payload);
      console.log(result);
      commit('SET_CURRENTB_LOCK', result);
    },
    async initialRequest({ dispatch }, payload) {
      await Promise.allSettled[
        (dispatch('getWeatherByCoords', payload), dispatch('getForecastByCoords', payload))
      ];
      // dispatch('getWeatherByCoords', payload);
      // dispatch('getForecastByCoords', payload);
    }
  }
});

export default store;
