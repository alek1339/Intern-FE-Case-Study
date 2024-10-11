import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCourses } from "../store/reducers/coursesSlice";
import { useAppSelector } from "../hooks/useReduxActions";

export const useCourses = () => {
  const dispatch = useDispatch();
  const { courses } = useAppSelector((state) => state.courses);

  useEffect(() => {
    dispatch(setCourses());
  }, [dispatch]);

  return courses;
};
