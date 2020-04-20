export function returnTasks(state) {
  return state.tasks;
}

export function returnMode(state) {
  return state.mode;
}

export function returnCompletedTasks(state) {
  const tasks = state.tasks.filter(items => items.done === true);
  return tasks;
}

export function returnFailedTasks(state) {
  const tasks = state.tasks.filter(items => items.done === false);
  return tasks;
}
