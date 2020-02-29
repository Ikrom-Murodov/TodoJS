import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
    mode: "returnTasks"
  },

  getters: {
    returnTasks(state) {
      return state.tasks;
    },
    returnCompletedTasks(state) {
      const tasks = state.tasks.filter(items => items.done === true);
      return tasks;
    },

    returnFailedTasks(state) {
      const tasks = state.tasks.filter(items => items.done === false);
      return tasks;
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

    changeTask(state, data) {
      const index = state.tasks.findIndex(items => items.id === data.id);
      state.tasks.splice(index, 1, data);
    },

    setTasks(state, tasks) {
      state.tasks = tasks;
    },

    editMode(state, value) {
      state.mode = value;
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
