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
    state.stocks.forEach(stock => {
      stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
    });
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

