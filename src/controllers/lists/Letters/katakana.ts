import { Request, Response } from "express";
import { katakana } from "../../../usecases/lists/katakana";

export const katakanaController = async (req: Request, res: Response) => {
  try {
    const data = await katakana();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" }); 
  }
};
