import React, { Dispatch, useContext, useReducer } from "react";
import { Product } from "@domainTypes/Product";
import { useLocalStorage } from "hooks/useLocalStorage";
import { useEffect } from "react";

export type CartItemType = Product & { quantity: number };

export type CartState = {
  [key: string]: CartItemType;
};

export type CartAction = {
  type: "add" | "remove" | "decrease" | "set";
  item: Product;
  quantity?: number;
  localState?: CartState;
};

const defaultState = {} as CartState;
const CartItemsContext = React.createContext(defaultState);
const CartDispatchContext = React.createContext(
  (() => {}) as Dispatch<CartAction>
);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [localStorageCart, setLocalStorageCart] = useLocalStorage("cart", null);
  const [state, dispatch] = useReducer(cartReducers, defaultState);

  useEffect(() => {
    if (localStorageCart !== null) {
      setLocalStorageCart(state);
    }
  }, [state]);

  useEffect(() => {
    if (JSON.stringify(localStorageCart) !== JSON.stringify(state)) {
      const localState = localStorageCart as CartState;
      const item = {} as Product;
      dispatch({ type: "set", localState, item });
    }
  }, [localStorageCart]);

  return (
    <CartItemsContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartItemsContext.Provider>
  );
};

function cartReducers(
  state: CartState,
  { localState, item, type, quantity: qtyToAdd = 1 }: CartAction
) {
  const existingCartItem = state[item.id];

  switch (type) {
    case "set": {
      return !localState ? {} : { ...localState };
    }

    case "add": {
      if (existingCartItem != undefined) {
        const quantity = existingCartItem.quantity + qtyToAdd;
        return {
          ...state,
          [item.id]: {
            ...existingCartItem,
            quantity,
          },
        };
      }

      const cartState = {
        ...state,
        [item.id]: {
          ...item,
          quantity: qtyToAdd,
        },
      };

      return cartState;
    }

    case "decrease": {
      if (existingCartItem == undefined) {
        return state;
      }

      const quantity = existingCartItem.quantity - 1;
      if (quantity > 0) {
        const cartState = {
          ...state,
          [item.id]: {
            ...existingCartItem,
            quantity,
          },
        };
      }

      const cartState = { ...state };
      delete cartState[item.id];
      return cartState;
    }

    case "remove": {
      if (existingCartItem == undefined) {
        return state;
      }

      const cartState = { ...state };
      delete cartState[item.id];
      return cartState;
    }

    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
}

const getCartSubTotal = (sum: number, item: CartItemType) => {
  sum += parseFloat(item.price) * item.quantity;
  return sum;
};
const getCartCount = (sum: number, item: CartItemType) => sum + item.quantity;
export const useCart = () => {
  const itemsById = useContext(CartItemsContext);
  const items = Object.values(itemsById);
  const count = items.reduce(getCartCount, 0);
  const subTotal = items.reduce(getCartSubTotal, 0);

  return {
    items,
    itemsById,
    count,
    subTotal,
  };
};
export const useCartMutations = () => {
  const dispatch = useContext(CartDispatchContext);

  const addToCart = (product: Product, quantity?: number) =>
    dispatch({
      type: "add",
      item: product,
      quantity,
    });

  const removeFromCart = (product: Product) =>
    dispatch({
      type: "remove",
      item: product,
    });

  const decreaseFromCart = (product: Product) =>
    dispatch({
      type: "decrease",
      item: product,
    });

  return {
    addToCart,
    removeFromCart,
    decreaseFromCart,
  };
};

export default CartProvider;
