import { Content } from "../../types/CourseTypes";

interface ContentSelectorProps {
  content: Content[];
  selectedIndex: number;
  onContentSelect: (index: number) => void;
}

export type ContentSelectorComponent = React.FC<ContentSelectorProps>;
