import { LessonsListComponent } from "./LessonsListTypes";
import LessonItem from "../lessonItem/LessonItem";

import "./LessonsList.scss";

const LessonsList: LessonsListComponent = ({
  lessons,
  moduleIndex,
  courseId,
}) => {
  return (
    <ul className="lessons-list">
      {lessons.map((lesson, lessonIndex) => (
        <LessonItem
          key={lessonIndex}
          lesson={lesson}
          moduleIndex={moduleIndex}
          courseId={courseId}
          lessonIndex={lessonIndex}
        />
      ))}
    </ul>
  );
};

export default LessonsList;
