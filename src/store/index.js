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
    addTask(state, data) {
      this.state.tasks.push(data);
    },
    removeTask(state, id) {
      const index = state.tasks.findIndex(items => items.id === id);
      state.tasks.splice(index, 1);
    },
    changeTask() {}
  },
  actions: {}
});
