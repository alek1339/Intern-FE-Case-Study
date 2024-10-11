import { Module } from "../../types/CourseTypes";

interface ModuleItemProps {
  module: Module;
  moduleIndex: number;
  courseId: string;
}

export type ModuleItemComponent = React.FC<ModuleItemProps>;
