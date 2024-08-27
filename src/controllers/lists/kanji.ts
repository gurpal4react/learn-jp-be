import { Request, Response } from "express";
import { kanji } from "../../usecases/lists/kanji";

export const kanjiController = async (req: Request, res: Response) => {
  try {
    const level = req.query.level as string;
    const data = await kanji(level);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" }); 
  }
};
