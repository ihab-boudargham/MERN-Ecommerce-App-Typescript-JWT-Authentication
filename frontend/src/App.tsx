import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './index.css';

import { FaMoon, FaSun, FaShoppingCart } from 'react-icons/fa';
import useStore from './Store';

function App() {
  const { mode, toggleMode } = useStore();
  const { cart } = useStore();

  return (
    <div className={`flex flex-col vh-100 `}>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full flex flex-row ${
          mode === 'dark' ? 'bg-black' : 'bg-black'
        } justify-between py-4 px-5`}
      >
        <Link to="/" className="text-white font-bold text-2xl no-underline">
          ShopTech
        </Link>

        <div className="flex flex-row text-xl">
          <button onClick={toggleMode} className="px-5 dark-mode-toggle-button">
            {mode === 'dark' ? <FaMoon /> : <FaSun />}
          </button>
          <Link
            to="/cart"
            className="flex items-center text-white no-underline mr-11"
          >
            <FaShoppingCart size={21} />
            {cart.cartItems.length > 0 && (
              <span className="flex items-center justify-center cart-quantity h-6 w-6 pr-[2px] ">
                {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
              </span>
            )}
          </Link>
          <a href="/signin" className="text-white no-underline hover:underline">
            Sign In
          </a>
        </div>
      </header>

      <main className="mt-14">
        <Outlet />
      </main>

      <footer
        className={`text-center ${
          mode === 'dark' ? 'bg-gray-500 text-white' : 'bg-white text-black'
        }`}
      >
        All rights are reserved
      </footer>
    </div>
  );
}

export default App;
