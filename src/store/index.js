import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: []
  },
  getters: {
    returnTasks(state) {
      return state.tasks;
    }
  },
  mutations: {
    addTask() {},
    removeTask() {},
    changeTask() {}
  },
  actions: {}
});
