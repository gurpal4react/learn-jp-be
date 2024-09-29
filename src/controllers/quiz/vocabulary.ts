import { Request, Response } from "express";
import { vocabulary } from "../../usecases/quiz/vocabulary";

export const vocabularyController = async (req: Request, res: Response) => {
  try {
    const level = req.query.level as string;
    const quizType = req.query?.quizType?.toString();
    const lesson = req.query.lesson ? req.query.lesson.toString() : undefined;
    const data = await vocabulary(level, quizType, lesson);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
