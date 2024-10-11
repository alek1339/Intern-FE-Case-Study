import LessonsList from "../lessonsList/LessonsList";
import { ModulesListComponent } from "./ModulesListTypes";

import "./ModulesList.scss";

const ModulesList: ModulesListComponent = ({ courseId, modules }) => {
  return (
    <ul className="modules-list">
      {modules &&
        modules.map((module, moduleIndex) => (
          <li key={moduleIndex} className="modules-list__item">
            <h3 className="modules-list__item__title">{module.title}</h3>
            <LessonsList
              lessons={module.lessons}
              moduleIndex={moduleIndex}
              courseId={courseId}
            />
          </li>
        ))}
    </ul>
  );
};

export default ModulesList;
