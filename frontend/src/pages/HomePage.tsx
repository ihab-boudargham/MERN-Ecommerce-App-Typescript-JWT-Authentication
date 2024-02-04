import React from 'react';
import { sampleProducts } from '../data';

export default function HomePage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5 ">
      {sampleProducts.map((product) => (
        <li className="list-none w-[350px]" key={product.slug}>
          <div className="flex flex-col pl-3">
            <img
              className="product-image"
              src={product.image}
              alt={product.name}
            />
            <div className="mt-2">
              <h2 className="font-bold">{product.name}</h2>
              <p>${product.price}</p>
            </div>
          </div>
        </li>
      ))}
    </div>
  );
}
