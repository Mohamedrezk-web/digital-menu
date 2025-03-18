// app/features/cart/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  total: number;
}

const initialState: CartState =
  typeof window !== 'undefined'
    ? JSON.parse(localStorage.getItem('cart') || '{"items":[],"total":0}')
    : { items: [], total: 0 };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.total = calculateTotal(state.items);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.total = calculateTotal(state.items);
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) item.quantity += 1;
      state.total = calculateTotal(state.items);
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        if (item.quantity === 1) {
          state.items = state.items.filter((i) => i.id !== action.payload);
        } else {
          item.quantity -= 1;
        }
      }
      state.total = calculateTotal(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

const calculateTotal = (items: CartItem[]) => {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
};

export const {
  addItem,
  removeItem,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
