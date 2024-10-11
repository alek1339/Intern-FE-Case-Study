import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { CourseDetailsComponent } from "./CourseDetailsTypes";
import { Course } from "../../types/CourseTypes";
import ModulesList from "../modulesList/ModulesList";
import { useCourses } from "../../hooks/useCourses";
import useCourseId from "../../hooks/useCourseId";

import "./CourseDetails.scss";

const CourseDetails: CourseDetailsComponent = () => {
  const courseId = useCourseId();
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course | undefined>(undefined);
  const courses = useCourses();

  const foundCourse = useMemo(() => {
    return courses.find((course: Course) => course.id === courseId);
  }, [courses, courseId]);

  useEffect(() => {
    setCourse(foundCourse);
  }, [foundCourse]);

  return (
    <div className="course-details">
      {course ? (
        <>
          <h1 className="course-details__title">{course.title}</h1>
          <p className="course-details__description">{course.description}</p>

          <h2 className="course-details__modules-title">Modules:</h2>
          {id && <ModulesList courseId={id} modules={course.modules} />}
        </>
      ) : (
        <p className="course-details__not-found">Course not found.</p>
      )}
    </div>
  );
};

export default CourseDetails;
