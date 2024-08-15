import taskReducer from "./taskReducer";

import { combineReducers } from "redux";
const rootReducer = combineReducers({
  applicationData: taskReducer,
});
export default rootReducer;
