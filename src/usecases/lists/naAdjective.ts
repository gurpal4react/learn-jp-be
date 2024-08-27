import { adjectiveModel } from "../../models/Adjectives";

export const naAdjectives = async (level: string) => {
  const data = await adjectiveModel.find(
    {
      level,
      type: 'na'
    },
    { _id: 0, level: 0, type: 0, createdAt: 0, updatedAt: 0 }
  );
  return data;
};
