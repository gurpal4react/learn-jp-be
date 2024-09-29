import { Request, Response } from "express";
import { vocabulary } from "../../../usecases/lists/vocabulary";

export const vocabularyController = async (req: Request, res: Response) => {
  try {
    const level = req.query.level as string;
    const types = req.query.types as string;
    const typesArray = types?.split(',')
    const lessons = req.query.lesson as string;
    const data = await vocabulary(level, lessons, typesArray);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" }); 
  }
};
