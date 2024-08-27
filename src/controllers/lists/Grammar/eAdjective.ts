import { Request, Response } from "express";
import { eAdjectives } from "../../../usecases/lists/eAdjective";

export const eAdjectiveController = async (req: Request, res: Response) => {
  try {
    const level = req.query.level as string;
    const data = await eAdjectives(level);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" }); 
  }
};
