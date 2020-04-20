export function saveDataToLs({ getters }) {
  const data = JSON.stringify(getters.getAllTasks);
  localStorage.setItem("tasks", data);
}

export function getDataFromLs({ commit }) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  commit("setNewTasks", tasks);
}
