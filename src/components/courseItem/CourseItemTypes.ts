import { Course } from "../../types/CourseTypes";

interface CourseItemProps {
  course: Course;
}

export type CourseItemComponent = React.FC<CourseItemProps>;
