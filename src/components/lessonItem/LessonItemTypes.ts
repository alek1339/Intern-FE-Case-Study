import { Lesson } from "../../types/CourseTypes";

interface LessonItemProps {
  lesson: Lesson;
  moduleIndex: number;
  courseId: string;
  lessonIndex: number;
}

export type LessonItemComponent = React.FC<LessonItemProps>;
