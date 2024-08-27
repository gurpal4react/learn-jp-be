import { Request, Response } from "express";
import { hiragana } from "../../../usecases/lists/hiragana";

export const hiraganaController = async (req: Request, res: Response) => {
  try {
    const data = await hiragana();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" }); 
  }
};
