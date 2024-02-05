# Product Routing

## So that when we click on a product it will take us to the description of the product

## npm i react-router-dom

1. In index.tsx
   import React from 'react';
   import ReactDOM from 'react-dom/client';
   import './index.css';

   import {
   Route,
   RouterProvider,
   createBrowserRouter,
   createRoutesFromElements,
   } from 'react-router-dom';
   import App from './App';
   import HomePage from './pages/HomePage';

   const router = createBrowserRouter(
   createRoutesFromElements(
   <Route path="/" element={<App />}> </Route>
   ));

   ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <React.StrictMode>
   <RouterProvider router={router} />
   </React.StrictMode>
   );

## Create a route for Home page

1. rfc and move the grid into the Home page.

2. Add the route of home page in the index.tsx:
   const router = createBrowserRouter(
   createRoutesFromElements(
   <Route path="/" element={<App />}>
   <Route index={true} element={<HomePage />} />
   </Route>
   )
   );

3. In App.tsx, add <Outlet /> from react-router-dom in the main.

## Creater router for Product page

1. In order to press on the product and take us to the product page, we need to create a route for the product page.
   What we basically need is to add the slug of each item to the route of the home page in the index.tsx.
   <Route path="product/:slug" element={<ProductPage />} />

2. This is not enough what we need also is to set a link in the Home page that will take us to that route.
<Link to={'/product/' + product.slug}>
