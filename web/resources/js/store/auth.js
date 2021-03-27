const state = {
  user: null
};

const getters = {};

const mutations = {
  setUser(state, user) {
    state.user = user;
  }
};

const actions = {
  async register(context, data) {
    const response = await axios.post("/api/register", data);
    context.commit("setUser", response.data);
  }
};

export default {
  namespaced: true, //↑のactionsのregisterを呼び出すとき, 'auth/register'と呼べるようになる。
  state,
  getters,
  mutations,
  actions
};
