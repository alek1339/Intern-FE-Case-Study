import { combineReducers } from "@reduxjs/toolkit";
import coursesReducer from "./coursesSlice";

const rootReducer = combineReducers({
  courses: coursesReducer,
});

export default rootReducer;
