import { Router } from "express";
import { hiraganaController } from "../controllers/lists/Letters/hiragana";
import { katakanaController } from "../controllers/lists/Letters/katakana";
import { katakanaReadingController } from "../controllers/lists/Letters/katakanaReading";
import { particlesController } from "../controllers/lists/Grammar/particles";
import { adverbController } from "../controllers/lists/Grammar/adverb";
import { eAdjectiveController } from "../controllers/lists/Grammar/eAdjective";
import { naAdjectiveController } from "../controllers/lists/Grammar/naAdjective";
import { vocabularyController } from "../controllers/lists/Vocabulary/vocabulary";
import { countingController } from "../controllers/lists/Vocabulary/counting";
import { directionController } from "../controllers/lists/Vocabulary/direction";
import { timeController } from "../controllers/lists/Vocabulary/time";
import { kanjiController } from "../controllers/lists/kanji";

export const listRoutes = Router();
// Letter routes
listRoutes.get("/hiragana", hiraganaController);
listRoutes.get("/katakana", katakanaController);
listRoutes.get("/katakana-reading", katakanaReadingController);

// Grammar routes
listRoutes.get("/particles", particlesController);
listRoutes.get("/adverbs", adverbController);
listRoutes.get("/e-adjective", eAdjectiveController);
listRoutes.get("/na-adjective", naAdjectiveController);

// Vocabulary route
listRoutes.get("/vocabulary", vocabularyController);

// Kanji route
listRoutes.get("/kanji", kanjiController);

// Common routes
listRoutes.get("/common/counting", countingController);
listRoutes.get("/common/directions", directionController);
listRoutes.get("/common/time", timeController);
