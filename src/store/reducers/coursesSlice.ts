import { createSlice } from "@reduxjs/toolkit";
import coursesData from "../../data/courses.json";
import { Course } from "../../types/CourseTypes";

interface CoursesState {
  courses: Course[];
}

const initialState: CoursesState = {
  courses: [],
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses(state) {
      state.courses = coursesData as Course[];
    },
  },
});

export const { setCourses } = coursesSlice.actions;
export default coursesSlice.reducer;
