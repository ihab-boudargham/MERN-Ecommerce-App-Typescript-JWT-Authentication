import { Product } from '../types/Products';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import useStore from '../Store';
import { CartItem } from '../types/Cart';
import { convertProductToCartItem } from '../utils';

export default function ProductItem({ product }: { product: Product }) {
  const { mode } = useStore();
  const { cart, addToCart } = useStore();

  const addToCartHandler = async (item: CartItem) => {
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (product.countInStock < quantity) {
      console.error('Sorry. Product is out of stock');
      return;
    }

    addToCart({ ...item, quantity });
    console.log('Product added to the cart');
  };

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
          mode === 'dark' ? 'bg-gray-400' : 'bg-gray-200'
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
            <button
              onClick={() =>
                addToCartHandler(convertProductToCartItem(product))
              }
              className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
