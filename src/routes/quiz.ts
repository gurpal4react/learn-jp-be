import { Router } from "express";
import { vocabularyController } from "../controllers/quiz/vocabulary";
import { particlesController } from "../controllers/quiz/particles";
import { letterController } from "../controllers/quiz/letter";
import { kanjiController } from "../controllers/quiz/kanji";

export const quizRoutes = Router();

// Letter route
quizRoutes.get("/letters", letterController);

// Grammar routes
quizRoutes.get("/particles", particlesController);

// Vocabulary routes
quizRoutes.get("/vocabulary", vocabularyController);

// Kanji route
quizRoutes.get("/kanji", kanjiController);
