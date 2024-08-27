import mongoose, { Schema, Document } from "mongoose";

// Define the schema for the adjectives collection
const adjectiveSchema = new Schema(
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
    type: {
      type: String,
      required: true,
    },
  },
  {
    collection: "m_adjectives",
    timestamps: true,
  }
);

// Define an interface for the document based on the schema
interface IAdjective extends Document {
  jp: string;
  kanji?: string;
  pronunciation: string;
  meaning: string;
  level: string;
  type: string;
}

// Create the model using the schema and the interface
export const adjectiveModel = mongoose.model<IAdjective>(
  "Adjective",
  adjectiveSchema
);
