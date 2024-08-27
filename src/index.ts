import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose"
import cors from "cors"
import { listRoutes } from "./routes/list";
import { quizRoutes } from "./routes/quiz";

const app = express();
const PORT = process.env.port || 8000;
dotenv.config();

const options = {
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
}

app.use(cors(options))

app.use("/list", listRoutes);
app.use("/quiz", quizRoutes);

if(process.env.mongodb_url) {
  mongoose.connect(process.env.mongodb_url).then(() => {
    console.log('Db connected')
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });    
  })
}
