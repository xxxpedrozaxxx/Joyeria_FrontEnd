import { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';
import { Product } from '../types/Product';

export interface CartItem extends Product {}

interface CartState {
  cartItems: CartItem[];
  total: number;
}

type CartAction =
  | { type: 'ADD'; payload: Product }
  | { type: 'REMOVE'; payload: string };

const initialState: CartState = {
  cartItems: [],
  total: 0,
};

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD': {
      const exists = state.cartItems.find(item => item.id === action.payload.id);
      if (exists) return state;
      const newCart = [...state.cartItems, action.payload];
      return {
        cartItems: newCart,
        total: newCart.reduce((acc, item) => acc + item.price, 0),
      };
    }
    case 'REMOVE': {
      const newCart = state.cartItems.filter(item => item.id !== action.payload);
      return {
        cartItems: newCart,
        total: newCart.reduce((acc, item) => acc + item.price, 0),
      };
    }
    default:
      return state;
  }
}

const CartContext = createContext<any>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState, (init) => {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : init;
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  const addToCart = (product: Product) => dispatch({ type: 'ADD', payload: product });
  const removeFromCart = (id: string) => dispatch({ type: 'REMOVE', payload: id });

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
