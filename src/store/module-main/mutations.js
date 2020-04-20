export function addTask(state, data) {
  state.tasks.push(data);
}

export function removeTask(state, id) {
  const index = state.tasks.findIndex(items => items.id === id);
  state.tasks.splice(index, 1);
}

export function changeTask(state, data) {
  const index = state.tasks.findIndex(items => items.id === data.id);
  state.tasks.splice(index, 1, data);
}

export function setTasks(state, tasks) {
  state.tasks = tasks;
}

export function editMode(state, value) {
  state.mode = value;
}
