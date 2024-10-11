import { Topic } from "../../types/CourseTypes";

interface TopicsListProps {
  topics: Topic[];
}

export type TopicsListComponent = React.FC<TopicsListProps>;
