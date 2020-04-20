export function saveDataToLs({ getters }) {
  console.log("saveDataToLs");
  const data = JSON.stringify(getters.returnTasks);
  localStorage.setItem("tasks", data);
}

export function getDataFromLs({ commit }) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  commit("setTasks", tasks);
}
