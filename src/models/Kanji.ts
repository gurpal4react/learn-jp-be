import mongoose, { Schema, Document } from "mongoose";

// Define the schema for the kanji collection
const kanjiSchema = new Schema(
  {
    jp: {
      type: String,
      required: true,
    },
    kanji: {
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
    level: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  {
    collection: "m_kanji",
    timestamps: true,
  }
);

// Define an interface for the document based on the schema
interface IKanji extends Document {
  jp: string;
  kanji?: string;
  pronunciation: string;
  meaning: string;
  level: string;
  type: string;
}

// Create the model using the schema and the interface
export const kanjiModel = mongoose.model<IKanji>(
  "Kanji",
  kanjiSchema
);
