import { kanjiModel } from "../../models/Kanji";

export const kanji = async (level: string) => {
  const data = await kanjiModel.find(
    {
      level,
    },
    { _id: 0, level: 0, createdAt: 0, updatedAt: 0 }
  );
  return data;
};
