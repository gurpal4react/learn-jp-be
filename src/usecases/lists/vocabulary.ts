import _ from "lodash";
import { vocabularyModel } from "../../models/Vocabulary";

export const vocabulary = async (
  level: string,
  lesson: string,
  type?: string[]
) => {
  const query: { level: string; lesson?: string; type?: { $in: string[] } } = {
    level,
  };
  const remover: { [key: string]: number } = {
    _id: 0,
    level: 0,
    createdAt: 0,
    updatedAt: 0,
  };
  if (lesson && lesson !== "all") {
    query.lesson = lesson.toString();
    remover.lesson = 0;
  }
  if (type) {
    query.type = { $in: type };
    remover.lesson = 0;
    remover.type = 0;
  }
  const data = await vocabularyModel.find(query, remover);
  if (!type && !query.lesson) {
    const lessonData = _.groupBy(data, "lesson");
    return lessonData;
  }
  return data;
};
