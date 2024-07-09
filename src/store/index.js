import { createStore } from 'vuex';
import forecastApi from '@/api/ForecastApi';
import forecast from './forecast';
import weeklyFormat from '@/utils/weeklyFormat';

const store = createStore({
  state() {
    return {
      widget: null,
      currentBlock: null,
      weeklyBlock: null,
      weeklyForecast: null
    };
  },
  getters: {
    widget: (state) => state.widget,
    currentBlock: (state) => state.currentBlock,
    weeklyBlock: (state) => state.weeklyBlock
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
    }
  },
  actions: {
    async getWeatherByCoords({ commit }, payload) {
      const result = await forecastApi.getWeatherByCoords(payload);
      commit('SET_WIDGET', result);
    },
    async getForecastByCoords({ commit }, payload) {
      const result = forecast;
      // const result = await forecastApi.getForecastByCoords(payload);
      const weeklyBlock = weeklyFormat(result.list);
      // console.log(weeklyBlock);
      commit('SET_CURRENT_BLOCK', weeklyBlock[0]);
      commit('SET_WEEKLY_BLOCK', weeklyBlock);
      commit('SET_WEEKLY_FORECAST', result);
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
