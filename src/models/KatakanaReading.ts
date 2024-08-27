import mongoose, { Schema, Document } from "mongoose";

// Define the schema for the katakana readings collection
const katakanaReadingSchema = new Schema(
  {
    jp: {
      type: String,
      required: true,
    },
    pronunciation: {
      type: String,
      required: true,
    },
    meaning: {
      type: String,
      required: true,
    },
  },
  {
    collection: "m_katakana",
    timestamps: true,
  }
);

// Define an interface for the document based on the schema
interface IKatakanaReading extends Document {
  jp: string;
  pronunciation: string;
  meaning: string;
}

// Create the model using the schema and the interface
export const katakanaReadingModel = mongoose.model<IKatakanaReading>(
  "KatakanaReading",
  katakanaReadingSchema
);
