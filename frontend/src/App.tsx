import React from 'react';
import { Outlet } from 'react-router-dom';
import './index.css';

import { FaSun, FaMoon } from 'react-icons/fa';
import useStore from './Store';

function App() {
  const { mode, toggleMode } = useStore();

  return (
    <div className={`flex flex-col vh-100 `}>
      <header
        className={`flex flex-row ${
          mode === 'dark' ? 'bg-black' : 'bg-black'
        } justify-between py-4 px-5`}
      >
        <div className={`text-white font-bold text-2xl`}>ShopTech</div>
        <div className="flex flex-row text-xl">
          <button onClick={toggleMode} className="px-5 dark-mode-toggle-button">
            {mode === 'dark' ? <FaMoon /> : <FaSun />}
          </button>
          <a
            href="/cart"
            className="text-white no-underline hover:underline mr-11"
          >
            Cart
          </a>
          <a href="/signin" className="text-white no-underline hover:underline">
            Sign In
          </a>
        </div>
      </header>

      <main>
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
