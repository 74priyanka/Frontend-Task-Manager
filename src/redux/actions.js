export const ADD_TASK = "ADD_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const ADD_TASK_ITEM = "ADD_TASK_ITEM";
export const REMOVE_TASK_ITEM = "REMOVE_TASK_ITEM";
export const UPDATE_TASK_ITEM = "UPDATE_TASK_ITEM";

export const UPDATE_USER_DATA = "UPDATE_USER_DATA";
export const SET_ALL_USER_TASKS = "SET_ALL_USER_TASKS";

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const removeTask = (taskId) => ({
  type: REMOVE_TASK,
  payload: taskId,
});
export const updateTask = (task) => ({
  type: UPDATE_TASK,
  payload: task,
});

export const addTaskItem = (taskId, item) => ({
  type: ADD_TASK_ITEM,
  payload: { taskId, item },
});

export const removeTaskItem = (taskId, itemId) => ({
  type: REMOVE_TASK_ITEM,
  payload: { taskId, itemId },
});

export const updateTaskItem = (taskId, item) => ({
  type: UPDATE_TASK_ITEM,
  payload: { taskId, item },
});

export const updateUserDataAction = (userData) => {
  return {
    type: UPDATE_USER_DATA,
    payload: userData,
  };
};

export const setAllUserTasks = (taskData) => {
  console.log("taskdata", taskData);
  return {
    type: SET_ALL_USER_TASKS,
    payload: taskData.response,
  };
};
