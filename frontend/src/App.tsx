import './index.css';
import { sampleProducts } from './data';

function App() {
  return (
    <div className="flex flex-col vh-100">
      <header className=" flex flex-row bg-black justify-between py-4 px-5">
        <div className="text-white font-bold text-2xl">ShopeTech</div>
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

      <main className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
        {sampleProducts.map((product) => (
          <li className="list-none w-[350px]" key={product.slug}>
            <div className="flex flex-col ">
              <img
                className="product-image"
                src={product.image}
                alt={product.name}
              />
              <div className="mt-2">
                <h2 className="font-bold">{product.name}</h2>
                <p>${product.price}</p>
              </div>
            </div>
          </li>
        ))}
      </main>

      <footer>
        <div className="text-center">All rights are reserved</div>
      </footer>
    </div>
  );
}

export default App;
