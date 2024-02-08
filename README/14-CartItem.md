Since we are going to manage the Cart item form more than one page and components, it is better to have in the global state then

1. After defining all its type in /types/Cart.ts.

2. In the zustand Store.tsx, create a cart object in the application store.

3. In the AppState, tdefine the type of cart and its Function AddToCart.

   ```js
   type AppState = {
     mode: string,
     toggleMode: () => void,
     cart: Cart,
     addToCart: (item: CartItem) => void,
   };
   ```

4. In the useStore:
   We define the initial state and its structure using the create function. The cart state provided is an example of what our global state might look like in the e-commerce application.

   ```js

   cart: {
     cartItems: localStorage.getItem('cartItems')
       ? JSON.parse(localStorage.getItem('cartItems')!)
       : [],
     shippingAddress: localStorage.getItem('shippingAddress')
       ? JSON.parse(localStorage.getItem('shippingAddress')!)
       : { fullName: '', address: '', city: '', country: '', postalCode: '' },
     paymentMethod: localStorage.getItem('paymentMethod') || 'PayPal',
     itemsPrice: 0,
     shippingPrice: 0,
     taxPrice: 0,
     totalPrice: 0,
   },

   ```

   Some are initialized from the data stored in localStorage if they exist; otherwise, they start as an empty array or empty string.

5.

```js
  addToCart: (item) => {
    set((state) => {
      const existItem = state.cart.cartItems.find((x) => x._id === item._id);
      const quantity = existItem ? existItem.quantity + 1 : 1;
      const cartItems = existItem
        ? state.cart.cartItems.map((x) =>
            x._id === existItem._id ? { ...existItem, quantity } : x
          )
        : [...state.cart.cartItems, { ...item, quantity }];
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    });
  },


Let us use the example where you have an initial state:

{
  cart: {
    cartItems: [
      { _id: '1', name: 'Product A', quantity: 2 },
      { _id: '2', name: 'Product B', quantity: 1 },
    ],
    // Other cart properties...
  },
  // Other state properties...
}
And you want to add a new item to the cart:

{
  _id: '3',
  name: 'Product C',
  quantity: 1,
}
Now, let's go through the logic inside the addToCart function step by step:

Check if the item is already in the cart:

In this example, existItem is undefined because the item with _id: '3' is not in the cart yet.
Calculate the new quantity:

Since existItem is undefined, set quantity to 1.
Update the cartItems array:

The ternary operator checks if existItem is truthy (it's not in this case).
Since existItem is falsy, it goes to the false branch ([...state.cart.cartItems, { ...item, quantity }]).
This means it spreads all existing items (state.cart.cartItems) and adds a new item to the end of the array.
The new item is created by spreading the properties of the item you're trying to add ({ ...item }) and setting its quantity property to the calculated quantity (1).
So, the cartItems array becomes:


[
  { _id: '1', name: 'Product A', quantity: 2 },
  { _id: '2', name: 'Product B', quantity: 1 },
  { _id: '3', name: 'Product C', quantity: 1 },
]

the, Update localStorage:

Save the updated cartItems array to localStorage.
Update the state:

Return a new state object with the updated cartItems.
After running the addToCart function, your state will be updated to include the new item in the cart, and the cartItems array will now have the added item

```

6. In the App.tsx where we are going to add the number of how manyy products did we add to card. We should add the change in state that will update the number of products in the cart in the header.

```js
Cart
{
  cart.cartItems.length > 0 && (
    <span className="cart-quantity">
      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
    </span>
  );
}

 Let's walk through how the code calculates the total quantity using the provided example cart:

{
  cartItems: [
    { _id: '1', name: 'Product A', quantity: 2 },
    { _id: '2', name: 'Product B', quantity: 1 },
    { _id: '3', name: 'Product C', quantity: 3 },
  ],
}

The reduce function starts with an initial accumulator (a) value of 0.
It iterates over each item in cartItems, and for each item (c), it adds the quantity of that item to the accumulator.
Iteration 1 (Product A):

Accumulator (a): 0 + Quantity (c.quantity): 2 = 2
Iteration 2 (Product B):

Accumulator (a): 2 + Quantity (c.quantity): 1 = 3
Iteration 3 (Product C):

Accumulator (a): 3 + Quantity (c.quantity): 3 = 6
```

7. Till now, we didnt manage the Add to cart button. So , we need to add the functionality of adding the product to the cart in the ProductItem.tsx:

```js
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
```

8. Now we need to add the functionality of adding the product to the cart:

```js
<button
  onClick={() => addToCartHandler(convertProductToCartItem(product))}
  className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600"
>
  Add to Cart
</button>
```

9.  We have defined the convertProductToCartItem before in the utils, this function will take the chosen properties and save them as an AddToCartItem object.

    ```js
    export const convertProductToCartItem = (product: Product): CartItem => {
      const cartItem: CartItem = {
        _id: product._id,
        name: product.name,
        slug: product.slug,
        image: product.image,
        price: product.price,
        countInStock: product.countInStock,
        quantity: 1,
      };
      return cartItem;
    };
    ```
