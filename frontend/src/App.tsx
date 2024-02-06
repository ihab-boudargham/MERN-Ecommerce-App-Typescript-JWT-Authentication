import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import './index.css';
import { Store } from './Store';
import { FaSun, FaMoon } from 'react-icons/fa';

function App() {
  const { state, dispatch } = useContext(Store);

  const toggleDarkMode = () => {
    dispatch({ type: 'SWITCH_MODE' });
    localStorage.setItem('mode', state.mode);
  };

  return (
    <div
      className={`flex flex-col vh-100 ${state.mode === 'dark' ? 'dark' : ''}`}
    >
      <header
        className={`flex flex-row ${
          state.mode === 'dark' ? 'bg-black' : 'bg-black'
        } justify-between py-4 px-5`}
      >
        <div className={`text-white font-bold text-2xl`}>ShopTech</div>
        <div className="flex flex-row text-xl">
          <button
            onClick={toggleDarkMode}
            className="px-5 dark-mode-toggle-button"
          >
            {state.mode === 'dark' ? <FaMoon /> : <FaSun />}
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
          state.mode === 'dark'
            ? 'bg-gray-500 text-white'
            : 'bg-white text-black'
        }`}
      >
        All rights are reserved
      </footer>
    </div>
  );
}

export default App;
