import './App.css';
import { sampleProducts } from './data';

function App() {
  return (
    <div className="App">
      <header>ShopTech</header>

      <main>
        {sampleProducts.map((product) => (
          <li className="list-none" key={product.slug}>
            <img
              className="product-image"
              src={product.image}
              alt={product.name}
            />
            <h2 className="text-bold"> {product.name} </h2>
            <p>${product.price}</p>
          </li>
        ))}
      </main>

      <footer>All rights are reserved</footer>
    </div>
  );
}

export default App;
