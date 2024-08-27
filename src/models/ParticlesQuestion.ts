import mongoose, { Schema, Document } from "mongoose";

// Define the schema for the particles collection
const particleQuestionSchema = new Schema(
  {
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
    translation: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
  },
  {
    collection: "t_particles_question",
    timestamps: true,
  }
);

// Define an interface for the document based on the schema
interface IParticleQuestion extends Document {
  question: string;
  answer: string;
  translation: string;
  level: string;
}

// Create the model using the schema and the interface
export const particleQuestionModel = mongoose.model<IParticleQuestion>(
  "ParticleQuestions",
  particleQuestionSchema
);
