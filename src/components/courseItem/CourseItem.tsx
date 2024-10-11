import { CourseItemComponent } from "./CourseItemTypes";
import { Link } from "react-router-dom";

import "./CourseItem.scss";

const CourseItem: CourseItemComponent = ({ course }) => {
  const { id, title } = course;

  return (
    <Link className="course-item__link" to={`/courses/${id}`}>
      <h2 className="course-item__title">{title}</h2>
    </Link>
  );
};

export default CourseItem;
