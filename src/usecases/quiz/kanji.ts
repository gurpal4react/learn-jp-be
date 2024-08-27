import { quizMaker } from "../../helpers/quizMaker";
import { kanjiModel } from "../../models/Kanji";

export const kanji = async (level: string, limit?: number) => {
  const data = await kanjiModel.find(
    {
      level,
    },
    { _id: 0, meaning: 0, level: 0, createdAt: 0, updatedAt: 0 }
  );
  return quizMaker(
    data?.map((d) => {
      return { question: d.kanji ?? '', answer: d.jp };
    }),
    limit
  );
};
