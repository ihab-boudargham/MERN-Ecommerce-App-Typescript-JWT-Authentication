import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types/Products';
import { useReducer } from 'react';
import { ApiError } from '../types/ApiError';
import axios from 'axios';
import { getError } from '../utils';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

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
  const [{ loading, error, products }, dispatch] = useReducer<
    React.Reducer<State, Action>
  >(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' }); // set loading true
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data }); // Fetch the data from backend
      } catch (err) {
        dispatch({ type: 'FETCH_FAILURE', payload: getError(err as ApiError) });
      }
    };
    fetchData();
  }, []);

  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="red">{error}</MessageBox>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5 ">
      {products.map((product) => (
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
