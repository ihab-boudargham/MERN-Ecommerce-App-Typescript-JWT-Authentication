# Create Each Product Page

## How to think

- Get the product from backend (ie. search for it in the datasample)
- Fetch it using ReactQuery in the frontend.
  - apiClient to set the base of the URL
  - Create the fetching hook
  - Call the hook in product page
- Display it

1. To create a page where we can see the information of each product. We should think of the api path.
   if api/products/ can give me all the products, api/products/:slug should give me the page including the information of the product with the slug.

   For this reason, in our api get request we should find the p.slug in the samplesProducts by comparing the slug present in our api (req.params.slug) and the p.slug in the samplesProducts.

   Create and api in the backend to return product information by the slug.

   app.get('/api/product/:slug', (req, res) => {
   res.json(sampleProducts.find(p => p.slug === req.params.slug);
   }

2. In the frontend we should create a hook to get the the detail of one product by:
   export const useGetProuctDetailsBySlugQuery = (slug: string) => {
   useQuery ({
   queryKey: ['product', slug],
   queryFn: async() => {
   await apiClient.get<Product>(`/api/products/${slug}`).data,
   }
   })
   }
3. In productPage.tsx:
   Since we need to get the slug from the url , we should use useParams hook from react.
   const params = useParams();
   const {slug} = params;

4. Call the react query hook we defined:
   const { data: product, isLoading, error } = useGetProuctDetailsBySlugQuery(slug!);
   ! to make sure it is a string

5. We made use of the <Loading /> and <MessageBox /> to handle errors (make sure we include all errors)
