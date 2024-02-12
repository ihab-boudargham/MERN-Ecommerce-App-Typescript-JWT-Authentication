# List Products

## Create Product Type

1. in types create a file Products.ts
   export type Product = {
   name: string;
   slug: string;
   image: string;
   productCategory: string;
   storeName: string;
   price: number;
   countInStock: number;
   description: string;
   rating: number;
   numReviews: number;
   };

## Create Product Array

1. Create a sample data to follow.

2. Create a data.ts file and add the array of products.

3. Add Product Images

## Render Products

To render our products we use map function. It is important to set a key after the map fucntion for each product.

### Later

We created a ProductItem in the components folder where we set the style for it. And refereced it in the HomePage after the map function.
