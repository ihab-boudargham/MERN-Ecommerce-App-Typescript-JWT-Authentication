import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useGetProuctDetailsBySlugQuery } from '../hooks/productHooks';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { convertProductToCartItem, getError } from '../utils';
import { ApiError } from '../types/ApiError';
import Rating from '../components/Rating';
import useStore from '../Store';
import { CartItem } from '../types/Cart';

export default function ProductPage() {
  const { mode } = useStore();
  const params = useParams();
  const { slug } = params;
  const { cart, addToCart } = useStore();

  const {
    data: product,
    isLoading,
    error,
  } = useGetProuctDetailsBySlugQuery(slug!);

  const addToCartHandler = async (item: CartItem) => {
    if (!product) {
      console.error('Product data is not available.');
      return;
    }

    const existItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (product.countInStock < quantity) {
      alert('Sorry. Product is out of stock');
      return;
    }

    addToCart({ ...item, quantity });
    console.log('Product added to the cart');
  };

  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    // @ts-ignore
    <MessageBox variant="red">{getError(error as ApiError)}</MessageBox>
  ) : !product ? (
    <MessageBox variant="red">Product not found!</MessageBox>
  ) : (
    <>
      <Helmet>
        <title>Product</title>
      </Helmet>

      <div
        className={` flex justify-center items-center h-screen ${
          mode === 'dark' ? 'bg-gray-500' : 'bg-gray-200'
        }`}
      >
        <div className=" bg-white rounded-lg p-10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="aspect-w-1 aspect-h-1 flex items-center justify-center"
              style={{ width: '500px', height: '500px' }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-auto h-auto object-fit"
              />
            </div>
            <div className="mt-[-100px]">
              <div
                className={`flex flex-col absolute ${
                  mode === 'dark' ? 'bg-black' : 'bg-gray-700'
                } text-white rounded-lg p-8 py-16 shadow-lg h-[700px] w-[500px]`}
              >
                <h2 className="text-3xl font-bold mb-7">{product.name}</h2>
                <div className="mb-4">
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  />
                </div>
                <p className="text-gray-200 text-lg mb-52 ">
                  {product.description}
                </p>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div className="md:w-2/3">
                    <div className="mb-2">
                      <span className="text-xl text-gray-200 font-medium">
                        storeName:
                      </span>
                      <span className="font-semibold text-xl text-gray-200 ml-2">
                        {product.storeName}
                      </span>
                    </div>
                    <div className="mb-2">
                      <span className="text-xl text-gray-200 font-medium">
                        productCategory:
                      </span>
                      <span className="font-semibold text-xl text-gray-200 ml-2">
                        {product.productCategory}
                      </span>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                      <div className="md:w-2/3">
                        <div className="flex mb-2 w-[430px] ">
                          <span className="font-bold text-4xl text-white ml-auto">
                            ${product.price.toFixed(2)}
                          </span>
                        </div>
                        <div className="mt-4">
                          {product.countInStock === 0 ? (
                            <button
                              className="w-full bg-gray-300 text-gray-600 py-2 px-4 rounded-md cursor-not-allowed"
                              disabled
                            >
                              Out of Stock
                            </button>
                          ) : (
                            <button
                              onClick={() =>
                                addToCartHandler(
                                  convertProductToCartItem(product)
                                )
                              }
                              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
                            >
                              Add to Cart
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
