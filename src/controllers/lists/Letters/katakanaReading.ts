import { Request, Response } from "express";
import { katakanaReadings } from "../../../usecases/lists/katakanaReading";

export const katakanaReadingController = async (
  req: Request,
  res: Response
) => {
  try {
    const data = await katakanaReadings();
    res.json(data);
  } catch (error) {
    console.log({error})
    res.status(500).json({ error: "Internal Server Error" }); 
  }
};
