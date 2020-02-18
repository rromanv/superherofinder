import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    heroes: [],
    searchItem: '',
    loading: false,
    notFound: false,
  },
  getters: {
    getHeroes: state => state.heroes,
    getHero: state => id => state.heroes.find(hero => hero.id === id),
    getSearchItem: state => state.searchItem,
    isLoading: state => state.loading,
    getNotFound: state => state.notFound,
  },
  mutations: {
    settingHeroes: (state, heroes) => (state.heroes = heroes),
    settingSearchItem: (state, seatchItem) => (state.searchItem = seatchItem),
    changingLoading: (state, status) => (state.loading = status),
    changingNotFound: (state, status) => (state.notFound = status),
  },
  actions: {
    setHeros: ({ commit }, data) => commit('settingHeroes', data),
    setSearchItem: ({ commit }, searchItem) =>
      commit('settingSearchItem', searchItem),
    changeLoading: ({ commit }, status) => commit('changingLoading', status),
    changeNotFound: ({ commit }, status) => commit('changingNotFound', status),
  },
})
