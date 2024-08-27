import { Request, Response } from 'express';
import { adverbs } from "../../../usecases/lists/adverb";

export const adverbController = async (req: Request, res: Response) => {
  try {
    const level = req.query.level as string
    const data = await adverbs(level);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' }); 
  }
};