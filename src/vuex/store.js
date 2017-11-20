import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
  demoScrollTop: 0,
  isLoading: false,
  direction: 'forward',
  drawerVisibility: false
}
const mutations = {
  updateDemoPosition (state, payload) {
    state.demoScrollTop = payload.top
  },
  updateLoadingStatus (state, payload) {
    state.isLoading = payload.isLoading
  },
  updateDirection (state, payload) {
    state.direction = payload.direction
  },
  updateDrawerVisibility(state){
    state.drawerVisibility = !state.drawerVisibility
  },
  updateDrawerVisibilityByFlag(state,flag){
    state.drawerVisibility = flag
  }
}
const actions = {
  updateDemoPosition ({commit}, top) {
    commit({type: 'updateDemoPosition', top: top})
  }
}

export default new Vuex.Store({
  state,mutations,actions
})
