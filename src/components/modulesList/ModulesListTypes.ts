import { Module } from "../../types/CourseTypes";

interface ModulesListProps {
  modules: Module[] | undefined;
  courseId: string;
}

export type ModulesListComponent = React.FC<ModulesListProps>;
