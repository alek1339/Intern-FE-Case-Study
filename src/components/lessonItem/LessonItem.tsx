import { LessonItemComponent } from "./LessonItemTypes";
import { Link } from "react-router-dom";

import "./LessonItem.scss";

const LessonItem: LessonItemComponent = ({
  lesson,
  moduleIndex,
  courseId,
  lessonIndex,
}) => {
  return (
    <li className="lesson-item">
      <Link
        className="lesson-item__link"
        to={`/courses/${courseId}/modules/${moduleIndex}/lessons/${lessonIndex}`}
      >
        {lesson.title}
      </Link>
    </li>
  );
};

export default LessonItem;
