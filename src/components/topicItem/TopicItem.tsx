import { TopicItemComponent } from "./TopicItemTypes";

import "./TopicItem.scss";

const TopicItem: TopicItemComponent = ({ topic }) => {
  return (
    <li className="topic-item" key={topic}>
      {topic}
    </li>
  );
};

export default TopicItem;
