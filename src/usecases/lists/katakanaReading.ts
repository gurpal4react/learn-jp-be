import { katakanaReadingModel } from "../../models/KatakanaReading";

export const katakanaReadings = async () => {
  const data = await katakanaReadingModel.find(
    {},
    {
      _id: 0,
      createdAt: 0,
      updatedAt: 0,
    }
  );
  return data;
};
