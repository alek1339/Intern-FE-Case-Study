import { Lesson } from "../../types/CourseTypes";

interface LessonsListProps {
  lessons: Lesson[];
  moduleIndex: number;
  courseId: string;
}

export type LessonsListComponent = React.FC<LessonsListProps>;
