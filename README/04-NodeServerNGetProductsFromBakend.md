# Create Node Server

1.  Create Backend folder

2.  config typescript
    npm install --save-dev typescript ts-node-dev
    create tsconfig.json and the dep

3.  npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
    create .eslintrc.json

4.  create gitignore and .eslintric.js

5.  npm install express
    npm install --save-sev @types/express

6.  create src/index.ts

7.  copy data.ts and types folder to the src folder in the backend

8.  set the app with out router get products
    import express, { Request, Response } from 'express';
    import { sampleProducts } from './data';

    const app = express();

    app.get('/api/products', (req: Request, res: Response) => {
    res.json(sampleProducts);
    });

    const PORT = 5000;

    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });

9.  to run the code:
    In package.json
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev" : "ts-node-dev --respawn --transpile-only src/index.ts"
    },

10. npm run build

11. npm run dev

12. By mentioning the sampleProducts in the index.ts file, we can access it from the browser at http://localhost:5000/api/products
