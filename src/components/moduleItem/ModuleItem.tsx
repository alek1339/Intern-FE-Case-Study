import { ModuleItemComponent } from "./ModuleItemTypes";
import LessonsList from "../lessonsList/LessonsList";

import "./ModuleItem.scss";

const ModuleItem: ModuleItemComponent = ({ module, moduleIndex, courseId }) => {
  return (
    <li className="module-item">
      <h3 className="module-item__title">{module.title}</h3>
      <LessonsList
        lessons={module.lessons}
        moduleIndex={moduleIndex}
        courseId={courseId}
      />
    </li>
  );
};

export default ModuleItem;
