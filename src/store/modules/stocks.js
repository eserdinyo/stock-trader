import stocks from '../../data/stocks';

const state = {
  stocks: []
}

const getters = {
  stocks: state => state.stocks,
}

const mutations = {
  setStocks(state, stocks) {
    state.stocks = stocks;
  },
  randStocks(state) {

  }
};

const actions = {
  buyStock({ commit }, order) {
    commit('buyStock', order);
  },
  initStocks({ commit }) {
    commit('setStocks', stocks)
  },
  randomizeStocks({ commit }) {
    commit('randStocks')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

