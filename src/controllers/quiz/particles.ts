import { Request, Response } from "express";
import { particles } from "../../usecases/quiz/particles";

export const particlesController = async (req: Request, res: Response) => {
  try {
    const level = req.query.level as string;
    const limit = req.query.limit ? +req.query.limit : undefined;
    const data = await particles(level, limit);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
