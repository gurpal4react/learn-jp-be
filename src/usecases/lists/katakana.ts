import { letterModel } from "../../models/Letters";

export const katakana = async () => {
  const data = await letterModel.find(
    {
      letter_type: "katakana",
    },
    { _id: 0, letter_type: 0, createdAt: 0, updatedAt: 0 }
  );
  return data;
};
