import { Request, Response } from "express";
import { particles } from "../../../usecases/lists/particles";

export const particlesController = async (req: Request, res: Response) => {
  try {
    const level = req.query.level as string;
    const data = await particles(level);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" }); 
  }
};
