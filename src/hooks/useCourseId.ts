import { useParams } from "react-router-dom";
import { useMemo } from "react";

const PARSE_BASE = 10;

const useCourseId = () => {
  const { id } = useParams<{ id: string }>();

  const courseId = useMemo(() => {
    return parseInt(id || "0", PARSE_BASE);
  }, [id]);

  return courseId;
};

export default useCourseId;
