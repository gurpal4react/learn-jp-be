import { quizMaker } from "../../helpers/quizMaker";
import { letterModel } from "../../models/Letters";

export const letter = async (limit?: number) => {
  const data = await letterModel.find(
    {},
    {
      _id: 0,
      letter_type: 0,
      createdAt: 0,
      updatedAt: 0,
    }
  );
  return quizMaker(
    data?.map((d) => {
      return {
        question: d.kana,
        answer: d.roumaji,
        type: d.type
      };
    }),
    limit
  );
};
