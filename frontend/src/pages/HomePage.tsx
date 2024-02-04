import React from 'react';
import { sampleProducts } from '../data';
import { Link } from 'react-router-dom';
import { Product } from '../types/Products';

type State = {
  products: Product[];
  loading: boolean;
  error: string;
};

type Action =
  | { type: 'FETCH_REQUEST' }
  | { type: 'FETCH_SUCCESS'; payload: Product[] }
  | { type: 'FETCH_FAILURE'; payload: string };

const initialState: State = {
  products: [],
  loading: true,
  error: '',
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default function HomePage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5 ">
      {sampleProducts.map((product) => (
        <li className="list-none w-[350px]" key={product.slug}>
          <div className="flex flex-col pl-3">
            <Link to={'/product/' + product.slug}>
              <img
                className="product-image"
                src={product.image}
                alt={product.name}
              />
              <div className="mt-2">
                <h2 className="font-bold">{product.name}</h2>
                <p>${product.price}</p>
              </div>
            </Link>
          </div>
        </li>
      ))}
    </div>
  );
}
