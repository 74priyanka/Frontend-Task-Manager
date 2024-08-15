import {
  ADD_TASK,
  REMOVE_TASK,
  UPDATE_TASK,
  ADD_TASK_ITEM,
  REMOVE_TASK_ITEM,
  UPDATE_TASK_ITEM,
  UPDATE_USER_DATA,
  SET_ALL_USER_TASKS,
} from "../actions";

const initialState = {
  tasks: [],
  userData: {},
  taskData: {},
};

const taskReducer = (state = initialState, action) => {
  console.log("outer action", action);
  switch (action.type) {
    case UPDATE_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };

    case SET_ALL_USER_TASKS:
      console.log("action ", action);
      return {
        ...state,
        taskData: action.payload,
      };

    default:
      return state;
  }
};

export default taskReducer;
