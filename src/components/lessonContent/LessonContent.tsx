import { LessonContentComponent } from "./LessonContentTypes";
import { ContentType } from "../../types/CourseTypes";
import { useState } from "react";
import ContentSelector from "../contentSelector/ContentSelector";

import "./LessonContent.scss";

const LessonContent: LessonContentComponent = ({ content }) => {
  const [selectedContentIndex, setSelectedContentIndex] = useState(0);

  const handleContentSelect = (index: number) => {
    setSelectedContentIndex(index);
  };

  const currentContent = content[selectedContentIndex];

  return (
    <div className="lesson-content">
      <ContentSelector
        content={content}
        selectedIndex={selectedContentIndex}
        onContentSelect={handleContentSelect}
      />

      <div className="lesson-content__display">
        {currentContent && currentContent.type === ContentType.Text && (
          <p>{currentContent.data}</p>
        )}
        {currentContent && currentContent.type === ContentType.Video && (
          <video src={currentContent.data} controls>
            Your browser does not support the video tag.
          </video>
        )}
        {currentContent && currentContent.type === ContentType.Audio && (
          <audio src={currentContent.data} controls>
            Your browser does not support the audio element.
          </audio>
        )}
        {currentContent && currentContent.type === ContentType.Podcast && (
          <iframe
            src={currentContent.data}
            title="Podcast"
            width="100%"
            height="100%"
          />
        )}
      </div>
    </div>
  );
};

export default LessonContent;
