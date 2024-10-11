import { TopicsListComponent } from "./TopicsListTypes";
import TopicItem from "../topicItem/TopicItem";

const TopicsList: TopicsListComponent = ({ topics }) => {
  return (
    <ul className="topics-list">
      {topics.map((topic) => (
        <TopicItem key={topic} topic={topic} />
      ))}
    </ul>
  );
};

export default TopicsList;
