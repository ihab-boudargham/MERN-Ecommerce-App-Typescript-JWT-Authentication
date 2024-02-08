import { create } from 'zustand';
import { Cart, CartItem } from './types/Cart';

type AppState = {
  mode: string;
  toggleMode: () => void;
  cart: Cart;
  addToCart: (item: CartItem) => void;
};

const useStore = create<AppState>((set) => ({
  mode: localStorage.getItem('mode')
    ? localStorage.getItem('mode')!
    : window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light',

  toggleMode: () =>
    set((state) => ({ mode: state.mode === 'dark' ? 'light' : 'dark' })),

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
}));

export default useStore;
