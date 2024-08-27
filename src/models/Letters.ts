import mongoose, { Schema, Document } from "mongoose";

// Define the schema for the letters collection
const letterSchema = new Schema(
  {
    kana: {
      type: String,
      required: true,
    },
    roumaji: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    letter_type: {
      type: String,
      required: true,
    },
  },
  {
    collection: "m_letters",
    timestamps: true,
  }
);

// Define an interface for the document based on the schema
interface ILetter extends Document {
  kana: string;
  roumaji: string;
  type: string;
  letter_type: string;
}

// Create the model using the schema and the interface
export const letterModel = mongoose.model<ILetter>(
  "Letter",
  letterSchema
);
