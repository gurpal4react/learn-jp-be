import { quizMaker } from "../../helpers/quizMaker";
import { vocabularyModel } from "../../models/Vocabulary";

export const vocabulary = async (level: string, type?: string, lesson?: string) => {
  const query: {[key:string]: string} = {
    level,
  }
  if(lesson && lesson!=='all') query.lesson = lesson
  const data = await vocabularyModel.find(
    query,
    {
      _id: 0,
      kanji: 0,
      pronunciation: 0,
      type: 0,
      lesson: 0,
      level: 0,
      createdAt: 0,
      updatedAt: 0,
    }
  );
  return quizMaker(
    data?.map((d) => {
      return {
        question: type === "mtw" ? d.meaning : d.jp,
        answer: type === "mtw" ? d.jp : d.meaning,
      };
    })
  );
};
