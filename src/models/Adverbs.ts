import mongoose, { Schema, Document } from "mongoose";

// Define the schema for the adverbs collection
const adverbSchema = new Schema(
  {
    jp: {
      type: String,
      required: true,
    },
    kanji: {
      type: String,
      required: false,
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
  },
  {
    collection: "m_adverbs",
    timestamps: true,
  }
);

// Define an interface for the document based on the schema
interface IAdverb extends Document {
  jp: string;
  pronunciation: string;
  meaning: string;
  level: string;
  kanji?: string;
}

// Create the model using the schema and the interface
export const adverbModel = mongoose.model<IAdverb>("Adverb", adverbSchema);
