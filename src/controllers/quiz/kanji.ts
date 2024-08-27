import { Request, Response } from "express";
import { kanji } from "../../usecases/quiz/kanji";

export const kanjiController = async (req: Request, res: Response) => {
  try {
    const level = req.query.level as string;
    const limit = req.query.limit ? +req.query.limit : undefined;
    const data = await kanji(level, limit);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
