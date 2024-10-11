import { ContentSelectorComponent } from "./ContentSelectorTypes";

import "./ContentSelector.scss";

const ContentSelector: ContentSelectorComponent = ({
  content,
  selectedIndex,
  onContentSelect,
}) => {
  return (
    <div className="content-selector">
      {content.map((item, index) => (
        <button
          key={index}
          onClick={() => onContentSelect(index)}
          className={`content-selector__button ${
            selectedIndex === index ? "content-selector__button--active" : ""
          }`}
        >
          {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default ContentSelector;
