import { Request, Response } from "express";
import { naAdjectives } from "../../../usecases/lists/naAdjective";

export const naAdjectiveController = async (req: Request, res: Response) => {
  try {
    const level = req.query.level as string;
    const data = await naAdjectives(level);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" }); 
  }
};
