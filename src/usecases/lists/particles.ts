import { particleModel } from "../../models/Particles";

export const particles = async (level: string) => {
  const data = await particleModel.find(
    {
      level,
    },
    { _id: 0, level: 0, createdAt: 0, updatedAt: 0 }
  );
  return data;
};
