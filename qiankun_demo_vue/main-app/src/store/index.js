import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num: 0,
    user:'admin'
  },
  mutations: {
    addNum(state, n) {
      state.num += n
    },
    setLocal(state,o){
      localStorage.setItem('user','设置缓存名字')
      state.user=o
    }
  },
  actions: {},
  modules: {}
})
