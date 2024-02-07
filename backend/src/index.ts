import express, { Request, Response } from 'express';
import { sampleProducts } from './data';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const MONGODB_URL =
  process.env.MONGODB_URL || 'mongodb://localhost/ihababoudargham78';
mongoose.set('strictQuery', true);
mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log('>>>>>> Connected to MongoDB <<<<<<');
  })
  .catch(() => {
    console.log('>>>>>> error mongodb <<<<<<');
  });

const app = express();
app.use(cors());

app.get('/api/products', (req: Request, res: Response) => {
  res.json(sampleProducts);
});

app.get('/api/product/:slug', (req: Request, res: Response) => {
  res.json(sampleProducts.find((x) => x.slug === req.params.slug));
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
