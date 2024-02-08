import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { productRouter } from './routers/productRouter';
import { seedRouter } from './routers/seedRouter';

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

app.use('/api/products', productRouter);

app.use('/api/seed', seedRouter);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
