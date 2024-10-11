import { Topic } from "../../types/CourseTypes";

interface TopicItemProps {
  topic: Topic;
}

export type TopicItemComponent = React.FC<TopicItemProps>;
