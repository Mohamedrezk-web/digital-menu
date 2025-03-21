import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface OptionChoice {
  name: string;
  additionalPrice: number;
}

export interface SelectedOption {
  category: string;
  selectedChoices: OptionChoice[];
}

export interface CartItem {
  id: string;
  name: string;
  basePrice: number;
  selectedOptions?: SelectedOption[];
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

const calculateItemPrice = (item: CartItem): number => {
  let optionsPrice = 0;
  if (item.selectedOptions) {
    for (const option of item.selectedOptions) {
      optionsPrice += option.selectedChoices.reduce(
        (sum, choice) => sum + choice.additionalPrice,
        0
      );
    }
  }
  return item.basePrice + optionsPrice;
};

const calculateTotal = (items: CartItem[]) =>
  items.reduce(
    (sum, item) => sum + calculateItemPrice(item) * item.quantity,
    0
  );

interface AddItemPayload {
  id: string;
  name: string;
  basePrice: number;
  selectedOptions?: SelectedOption[];
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<AddItemPayload>) => {
      // Generate a key that uniquely identifies the item including its options.
      const itemKey = JSON.stringify({
        id: action.payload.id,
        selectedOptions: action.payload.selectedOptions || [],
      });
      // Check for an existing item with the same id and options.
      const existingItem = state.items.find(
        (item) =>
          JSON.stringify({
            id: item.id,
            selectedOptions: item.selectedOptions || [],
          }) === itemKey
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

export const {
  addItem,
  removeItem,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
