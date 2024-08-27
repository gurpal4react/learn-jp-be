import { quizMaker } from "../../helpers/quizMaker";
import { particleQuestionModel } from "../../models/ParticlesQuestion";

export const particles = async (level: string, limit?: number) => {
  const data = await particleQuestionModel.find(
    {
      level,
    },
    { _id: 0, translation: 0, level: 0, createdAt: 0, updatedAt: 0 }
  );
  return quizMaker(data, limit);
};
