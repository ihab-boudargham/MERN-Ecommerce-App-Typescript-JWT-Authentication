import express, { Request, Response } from 'express';
import { sampleProducts } from './data';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/api/products', (req: Request, res: Response) => {
  res.json(sampleProducts);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
