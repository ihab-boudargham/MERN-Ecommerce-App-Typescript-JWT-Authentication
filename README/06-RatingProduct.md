1. Create a react component Rating.tsx

2. Add in index.html :
   <link
     rel="stylesheet"
     href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/all.min.css"
   />

3. Ceate Rating and Caption component.

4. Create a product item component.

5. npm i react-helmet-async, we use this to manage the title of the react app.

6. in the index.tsx file, in the frontend, import helmet provider by:
   import { HelmetProvider } from 'react-helmet-async';

7. Wrap the RouterProvider with helmet provider.

8. Add the title of the page in the Home Page or any page we want.
   <Helmet>
   <title>ShopTech</title>
   </Helmet>
