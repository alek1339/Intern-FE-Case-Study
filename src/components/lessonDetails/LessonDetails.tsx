import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { Course } from "../../types/CourseTypes";
import { useCourses } from "../../hooks/useCourses";
import useCourseId from "../../hooks/useCourseId";
import LessonContent from "../lessonContent/LessonContent";
import TopicsList from "../topicsList/TopicsList";

import "./LessonDetails.scss";

const PARSE_BASE = 10;

const LessonDetails = () => {
  const courseId = useCourseId();
  const { moduleIndex, lessonIndex } = useParams<{
    id: string;
    moduleIndex: string;
    lessonIndex: string;
  }>();
  const courses = useCourses();
  const moduleIdx = parseInt(moduleIndex || "-1", PARSE_BASE);
  const lessonIdx = parseInt(lessonIndex || "-1", PARSE_BASE);

  const course = useMemo(
    () => courses.find((course: Course) => course.id === courseId),
    [courses, courseId]
  );

  const lesson = useMemo(
    () => course?.modules?.[moduleIdx]?.lessons?.[lessonIdx],
    [course, moduleIdx, lessonIdx]
  );

  if (!course || !lesson) {
    return <p>Lesson not found.</p>;
  }

  return (
    <div className="lesson-details">
      <h2 className="lesson-details__title">{lesson.title}</h2>
      <p className="lesson-details__description">{lesson.description}</p>
      {lesson.topics && <TopicsList topics={lesson.topics} />}
      <LessonContent content={lesson.content} />
    </div>
  );
};

export default LessonDetails;
