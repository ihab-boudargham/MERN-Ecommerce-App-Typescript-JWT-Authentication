import { Outlet } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <div className="flex flex-col vh-100">
      <header className=" flex flex-row bg-black justify-between py-4 px-5">
        <div className="text-white font-bold text-2xl">ShopTech</div>
        <div className="text-xl ">
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

      <footer>
        <div className="text-center">All rights are reserved</div>
      </footer>
    </div>
  );
}

export default App;
