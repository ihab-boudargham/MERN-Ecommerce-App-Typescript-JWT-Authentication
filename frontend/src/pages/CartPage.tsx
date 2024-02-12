import { Link, useNavigate } from 'react-router-dom';
import useStore from '../Store';
import { CartItem } from '../types/Cart';

import {
  IoIosRemoveCircleOutline,
  IoIosAddCircleOutline,
  IoMdCart,
} from 'react-icons/io';

function CartPage() {
  const navigate = useNavigate();

  const checkOutHandler = () => {
    navigate('/signin?redirect=/shipping');
  };

  const { mode, cart, updateCartHandler, removeFromCart } = useStore();
  console.log('Cart Items:', cart.cartItems);

  return (
    <div className={` ${mode === 'dark' ? 'bg-gray-400' : 'bg-white'}`}>
      <div className={`container mx-auto px-4 `}>
        <div className="pt-10 font-bold text-xl">
          Shopping Cart
          <hr className="border-black border-5 w-full mx-auto" />
        </div>

        <div className="flex flex-col md:flex-row justify-between px-4 ">
          <div className="md:w-2/3">
            {cart.cartItems.length === 0 ? (
              <div className="flex h-32 w-full justify-center ml-[200px] items-center">
                <div className="flex flex-col items-center">
                  <p className="text-2xl">Cart is empty</p>
                  <div>
                    <button className="bg-black px-2 py-2 rounded-md ">
                      <Link
                        className="no-underline font-bold text-white"
                        to="/"
                      >
                        SHOP NOW
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="sm:grid-cols-1 md:grid-cols-4 md:w-7/8 md:pr-4">
                <div className="pt-3 font-bold text-lg">
                  Products
                  <hr className="border-black border-2 w-full mx-auto" />
                </div>
                <div
                  className={`max-h-[600px] overflow-y-auto scrollbar-thin ${
                    mode === 'dark'
                      ? 'scrollbar-thumb-gray-400 scrollbar-track-gray-800'
                      : 'scrollbar-thumb-gray-300 scrollbar-track-gray-100'
                  }`}
                >
                  {cart.cartItems.map((item: CartItem) => (
                    <div key={item._id} className="mb-4 ">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 items-center pr-2">
                        <div className="flex w-32 h-28 items-center bg-white justify-center rounded-md">
                          <Link
                            to={`/product/${item.slug}`}
                            style={{ textDecoration: 'none' }}
                          >
                            <img
                              src={item.image}
                              alt={item.name}
                              className=" w-28 h-auto object-fit "
                            />
                          </Link>
                        </div>
                        <div className=" flex flex-col  text-black md:col-span-1 md:col-start-2">
                          <Link
                            to={`/product/${item.slug}`}
                            style={{
                              textDecoration: 'none',
                              color: 'black',
                              display: 'flex',
                              flexDirection: 'column',
                            }}
                          >
                            <span className="text-md font-bold">
                              {item.name}
                            </span>
                            <span className="text-sm ">{item._id}</span>
                            <span className="text-md ">
                              <span className="font-semibold ">Store:</span>{' '}
                              {item.storeName}
                            </span>
                            <span>
                              <span className="font-semibold ">Category:</span>{' '}
                              {item.productCategory}
                            </span>
                          </Link>
                        </div>

                        <div className="flex flex-col items-end text-lg justify-end">
                          <div className="flex flex-row ">
                            <button
                              onClick={() =>
                                updateCartHandler(item, item.quantity - 1)
                              }
                              className="py-1 text-lg text-gray-700 hover:bg-gray-400 focus:outline-none focus:ring focus:border-blue-300 rounded-md"
                            >
                              <IoIosRemoveCircleOutline size={20} />
                            </button>
                            <span className="px-3 flex justify-center mx-2 w-5">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateCartHandler(item, item.quantity + 1)
                              }
                              className=" px-[3px] py-1 text-lg text-gray-700 hover:bg-gray-400 focus:outline-none focus:ring focus:border-blue-300 rounded-md"
                            >
                              <IoIosAddCircleOutline size={20} />
                            </button>
                          </div>
                          <div className="mt-1">
                            <button
                              onClick={() => removeFromCart(item)}
                              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-sm transition-all duration-300"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                        <div className="flex justify-end text-lg">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>

                      <hr className="border-black border-2 w-[99%]" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          {cart.cartItems.length > 0 && (
            <div className="md:w-1/3 md:pl-4 mt-4 md:mt-0 mb-5">
              <div className="bg-gray-300 p-4 rounded-lg">
                <p className="flex items-center font-bold text-xl">
                  <IoMdCart size={24} className="mr-2" />
                  Order Summary
                </p>
                <hr className="border-black border-2 w-full mx-auto my-2" />
                <div className="flex flex-col text-lg mt-4">
                  <span className="flex flex-row justify-between gap-2">
                    <p className=" font-bold"> Quantity: </p>
                    {cart.cartItems.reduce(
                      (acc, item) => acc + item.quantity,
                      0
                    )}{' '}
                    {cart.cartItems.reduce(
                      (acc, item) => acc + item.quantity,
                      0
                    ) === 1
                      ? 'item'
                      : 'items'}
                  </span>
                  <span className="flex flex-row justify-between items-center gap-2 font-bold">
                    <p className="text-xl">Total:</p>
                    <p className="text-2xl">
                      ${' '}
                      {cart.cartItems
                        .reduce(
                          (acc, item) => acc + item.price * item.quantity,
                          0
                        )
                        .toFixed(2)}
                    </p>
                  </span>
                  <hr className="border-black border-2 w-full mx-auto my-2" />
                  <button
                    onClick={checkOutHandler}
                    className="bg-gray-900 text-white font-bold text-lg py-2 mt-3 rounded-md hover:bg-gray-600 "
                  >
                    {' '}
                    Check Out{' '}
                  </button>
                  <span className="mt-1 text-sm">
                    Need help?{' '}
                    <Link
                      className="no-underline font-bold text-black"
                      to="/help"
                    >
                      Click here.
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartPage;
