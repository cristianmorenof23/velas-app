import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  nombre: string;
  precio: number;
  imagen: string;
  cantidad: number;
}

interface CartStore {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (nombre: string) => void;
  increaseQty: (nombre: string) => void;
  decreaseQty: (nombre: string) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (item) => {
        const cart = get().cart;
        const exist = cart.find((i) => i.nombre === item.nombre);

        if (exist) {
          exist.cantidad += 1;
          set({ cart: [...cart] });
        } else {
          set({ cart: [...cart, { ...item, cantidad: 1 }] });
        }
      },

      removeFromCart: (nombre) => {
        set({
          cart: get().cart.filter((i) => i.nombre !== nombre),
        });
      },

      increaseQty: (nombre) => {
        const cart = get().cart;
        const item = cart.find((i) => i.nombre === nombre);
        if (item) item.cantidad++;
        set({ cart: [...cart] });
      },

      decreaseQty: (nombre) => {
        const cart = get().cart;
        const item = cart.find((i) => i.nombre === nombre);
        if (!item) return;
        if (item.cantidad > 1) {
          item.cantidad--;
          set({ cart: [...cart] });
        } else {
          get().removeFromCart(nombre);
        }
      },

      getTotalItems: () =>
        get().cart.reduce((acc, i) => acc + i.cantidad, 0),

      getTotalPrice: () =>
        get().cart.reduce((acc, i) => acc + i.precio * i.cantidad, 0),

      clearCart: () => set({ cart: [] }),
    }),
    { name: "carrito-velas" } // 🔥 LocalStorage key
  )
);
