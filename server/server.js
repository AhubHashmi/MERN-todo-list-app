import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import todoRoutes from './routes/todoRoutes.js';
import connectDB from './config/db.js';

connectDB();

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", todoRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to TODO List App</h1>");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});