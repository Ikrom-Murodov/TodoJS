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
      state.tasks.push(data);
    },
    removeTask(state, id) {
      const index = state.tasks.findIndex(items => items.id === id);
      state.tasks.splice(index, 1);
    },
    changeTask() {},

    setTasks(state, tasks) {
      state.tasks = tasks;
    }
  },
  actions: {
    saveDataToLs() {
      const data = JSON.stringify(this.getters.returnTasks);
      localStorage.setItem("tasks", data);
    },

    getDataFromLs(context) {
      const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      context.commit("setTasks", tasks);
    }
  }
});
