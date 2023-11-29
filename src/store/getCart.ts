import { create } from "zustand";

interface CartItem {
  id: number;
  price: number;
}

interface CartListState {
  cart: CartItem[];
  total: number;
  addCartItem: (id: number, price: number, isChecked: boolean) => void;
}

export const useCart = create<CartListState>((set) => ({
  cart: [],
  total: 0,
  addCartItem: (id, price, isChecked) => {
    set((prevState) => {
      const isItemInCart = prevState.cart.some((item) => item.id === id);

      if (isItemInCart && !isChecked) {
        const updatedCart = prevState.cart.filter((item) => item.id !== id);

        return {
          cart: updatedCart,
          total: updatedCart.reduce((sum, item) => sum + item.price, 0),
        };
      } else if (isItemInCart) {
        const updatedCart = prevState.cart.map((item) =>
          item.id === id ? { ...item, price: price } : item
        );

        return {
          cart: updatedCart,
          total: updatedCart.reduce((sum, item) => sum + item.price, 0),
        };
      } else {
        const updatedCart = [...prevState.cart, { id: id, price: price }];

        return {
          cart: updatedCart,
          total: updatedCart.reduce((sum, item) => sum + item.price, 0),
        };
      }
    });
  },
}));
