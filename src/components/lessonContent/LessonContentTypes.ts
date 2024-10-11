import { Content } from "../../types/CourseTypes";

interface LessonContentProps {
  content: Content[];
}

export type LessonContentComponent = React.FC<LessonContentProps>;
