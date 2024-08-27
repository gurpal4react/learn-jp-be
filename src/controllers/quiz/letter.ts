import { Request, Response } from "express";
import { letter } from "../../usecases/quiz/letters";

export const letterController = async (req: Request, res: Response) => {
  try {
    const limit = req.query.limit ? +req.query.limit : undefined;
    const data = await letter(limit);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
