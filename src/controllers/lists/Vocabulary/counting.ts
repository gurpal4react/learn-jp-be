import { Request, Response } from "express";
import { vocabulary } from "../../../usecases/lists/vocabulary";

export const countingController = async (req: Request, res: Response) => {
  try {
    const level = "n5";
    const lessons = "all";
    const types = ["Counting"];
    const data = await vocabulary(level, lessons, types);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
