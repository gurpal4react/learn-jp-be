import { letterModel } from "../../models/Letters";

export const hiragana = async () => {
  const data = await letterModel.find(
    {
      letter_type: 'hiragana'
    },
    { _id: 0, letter_type: 0, createdAt: 0, updatedAt: 0 }
  );
  return data;
};
