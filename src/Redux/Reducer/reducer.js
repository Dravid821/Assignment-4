import { ADD_TO_CART, REMOVE_TO_CART } from "../Actions/type";

const initialState = {
  carts: [],
  qnty:0,
};

export const cartreducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const IteamIndex = state.carts.findIndex(
        (iteam) => iteam.id === action.payload.id
      );
      if (IteamIndex >= 0) {
        state.carts[IteamIndex].qnty += 1;
        return {
          ...state,
          carts: [...state.carts],
        };
      } else {
        const temp = { ...action.payload, qnty: 1 };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }

    case REMOVE_TO_CART:
      const cartItemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (cartItemIndex >= 0) {
        const updatedCart = [...state.carts];
        const existingCartItem = updatedCart[cartItemIndex];

        if (action.payload.isIncrement) {
          existingCartItem.qnty++;
        } else {
          existingCartItem.qnty--;
          if (existingCartItem.qnty === 0) {
            updatedCart.splice(cartItemIndex, 1);
          }
        }

        return {
          ...state,
          carts: updatedCart,
        };
      } else {
        return {
          ...state,
          carts: [
            ...state.carts,
            {
              ...action.payload,
              qnty: 1,
            },
          ],
        };
      }
    default:
      return {
        ...state,
      };
  }
};
