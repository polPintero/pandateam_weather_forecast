import { createStore } from 'vuex';
import forecastApi from '@/api/ForecastApi';

const store = createStore({
  state() {
    return {
      widget: {}
    };
  },
  getters: {
    widget: (state) => state.widget
  },
  mutations: {
    SET_WIDGET(state, payload) {
      state.widget = payload;
    }
  },
  actions: {
    async getWeatherByCoords({ commit }, payload) {
      const result = await forecastApi.getWeatherByCoords(payload);
      commit('SET_WIDGET', result);
    }
  }
});

export default store;
