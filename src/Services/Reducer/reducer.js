import { ADD_TO_CART, REMOVE_TO_CART } from "../Constant";

const initialState = {
  cartItems: [],
  loading: false,
};

export const cartreducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const itemToAdd = action.payload;
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === itemToAdd.id
      );
      if (existingItemIndex >= 0) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex].quantity += itemToAdd.quantity;
        return {
          ...state,
          cartItems: updatedCartItems,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, itemToAdd],
        };
      }

    case REMOVE_TO_CART:

      const itemToRemove = action.payload;
      const updatedCartItems = state.cartItems.filter(
        (item) => item.id !== itemToRemove.id
      );
      return {
        ...state,
        cartItems: updatedCartItems,
      };
    default:
      return {
        ...state,
      };
  }
};
