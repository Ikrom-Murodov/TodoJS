export function getAllTasks(state) {
  return state.tasks;
}

export function getCompletedTasks(state) {
  const tasks = state.tasks.filter(items => items.done === true);
  return tasks;
}

export function getTasksNotCompleted(state) {
  const tasks = state.tasks.filter(items => items.done === false);
  return tasks;
}

export function getModeTasks(state) {
  return state.tasksMode;
}
