import mongoose, { Schema, Document } from "mongoose";

// Define the schema for the particles collection
const particleSchema = new Schema(
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
    level: {
      type: String,
      required: true,
    },
  },
  {
    collection: "m_particles",
    timestamps: true,
  }
);

// Define an interface for the document based on the schema
interface IParticle extends Document {
  jp: string;
  pronunciation: string;
  meaning: string;
  level: string;
}

// Create the model using the schema and the interface
export const particleModel = mongoose.model<IParticle>(
  "Particle",
  particleSchema
);
