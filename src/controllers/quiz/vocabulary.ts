import { Request, Response } from "express";
import { vocabulary } from "../../usecases/quiz/vocabulary";

export const vocabularyController = async (req: Request, res: Response) => {
  try {
    const level = req.query.level as string;
    const type = req.query.type ? req.query.type.toString() : undefined;
    const lesson = req.query.lesson ? req.query.lesson.toString() : undefined;
    const data = await vocabulary(level, type, lesson);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
