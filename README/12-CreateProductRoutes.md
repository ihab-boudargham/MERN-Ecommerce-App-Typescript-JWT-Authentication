# CreateProductRoutes

1. Create a Router Folder.

2. in productRouter.ts
   export const productRouter = express.Router();

   and build your get requests, but first we need a dunction that can handle the address of this request, which is async Handler

   1. npm i express-async-handler

   2.

   ```js
   // /api/products
   productRouter.get(
     '/',
     asyncHandler(async (req, res) => {
       const products = await ProductModel.find();
       res.json(products);
     })
   );
   ```

   3. Wel list all the routers here with the errors

   4. in index.ts we can use:
      app.use('/api/products', productRouter);

Note: All the products that were saved in the data.ts wont be displayed any more as we connected our app to the database that is already empty.
