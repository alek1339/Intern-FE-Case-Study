import { CourseListComponent } from "./CourseListTypes";
import { useCourses } from "../../hooks/useCourses";
import CourseItem from "../courseItem/CourseItem";

import "./CourseList.scss";

const CourseListTypes: CourseListComponent = () => {
  const courses = useCourses();

  return (
    <div className="course-list">
      {courses.map((course) => (
        <CourseItem key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseListTypes;
