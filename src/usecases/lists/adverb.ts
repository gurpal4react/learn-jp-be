import { adverbModel } from "../../models/Adverbs";

export const adverbs = async (level: string) => {
  const data = await adverbModel.find(
    {
      level,
    },
    { _id: 0, level: 0, createdAt: 0, updatedAt: 0 }
  );
  return data;
};
