import { Product } from '../types/Products';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import { useContext } from 'react';
import { Store } from '../Store';

export default function ProductItem({ product }: { product: Product }) {
  const { state } = useContext(Store);

  return (
    <div className="bg-white shadow-lg rounded-md overflow-hidden transition-transform transform hover:scale-105 border border-gray-200 h-[500px]">
      <Link
        to={`/product/${product.slug}`}
        className=" p-2 overflow-hidden h-50 flex items-center justify-center"
      >
        <img
          className=" w-auto h-auto object-cover"
          src={product.image}
          alt={product.name}
        />
      </Link>
      <div
        className={`p-4 h-[400px] ${
          state.mode === 'dark' ? 'bg-gray-400' : 'bg-gray-100'
        } rounded-md`}
      >
        <div className="h-[70px]">
          <Link
            to={`/product/${product.slug}`}
            className="text-indigo-800 text-decoration-none h-24"
          >
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
          </Link>
        </div>
        <p className="text-gray-700 mb-2">${product.price}</p>

        <Rating rating={product.rating} numReviews={product.numReviews} />

        <div className="flex justify-between items-center mt-4">
          {product.countInStock === 0 ? (
            <button
              className="bg-gray-300 text-gray-600 py-2 px-4 rounded-md cursor-not-allowed"
              disabled
            >
              Out of Stock
            </button>
          ) : (
            <button className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
