import React, { Dispatch, useContext, useReducer } from "react";
import { Product } from "@domainTypes/Product";

export type WishlistItemType = Product & { quantity: number };

export type WishlistState = {
  [key: string]: WishlistItemType;
};

export type WishlistAction = {
  type: "add" | "remove";
  item: Product;
  quantity?: number;
};

const defaultState = {} as WishlistState;

const WishlistItemsContext = React.createContext(defaultState);
const WishlistDispatchContext = React.createContext(
  (() => {}) as Dispatch<WishlistAction>
);

const WishListProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(wishlistReducers, defaultState);

  return (
    <WishlistItemsContext.Provider value={state}>
      <WishlistDispatchContext.Provider value={dispatch}>
        {children}
      </WishlistDispatchContext.Provider>
    </WishlistItemsContext.Provider>
  );
};

function wishlistReducers(
  state: WishlistState,
  { item, type, quantity: qtyToAdd = 1 }: WishlistAction
) {
  const existingWishlistItem = state[item.id];

  switch (type) {
    case "add": {
      if (existingWishlistItem != undefined) {
        const quantity = existingWishlistItem.quantity + qtyToAdd;
        return {
          ...state,
          [item.id]: {
            ...existingWishlistItem,
            quantity,
          },
        };
      }

      return {
        ...state,
        [item.id]: {
          ...item,
          quantity: qtyToAdd,
        },
      };
    }

    case "remove": {
      if (existingWishlistItem == undefined) {
        return state;
      }

      const quantity = existingWishlistItem.quantity - 1;
      if (quantity > 0) {
        return {
          ...state,
          [item.id]: {
            ...existingWishlistItem,
            quantity,
          },
        };
      }

      const newWishlistItems = { ...state };
      delete newWishlistItems[item.id];
      return newWishlistItems;
    }

    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
}

const getWishlistSubTotal = (sum: number, item: WishlistItemType) => {
  sum += item.price * item.quantity;
  return sum;
};
const getWishlistCount = (sum: number, item: WishlistItemType) =>
  sum + item.quantity;

export const useWishlist = () => {
  const itemsById = useContext(WishlistItemsContext);
  const items = Object.values(itemsById);
  const count = items.reduce(getWishlistCount, 0);
  const subTotal = items.reduce(getWishlistSubTotal, 0);

  return {
    items,
    itemsById,
    count,
    subTotal,
  };
};
export const useWishlistMutations = () => {
  const dispatch = useContext(WishlistDispatchContext);

  const addToWishlist = (product: Product, quantity?: number) =>
    dispatch({
      type: "add",
      item: product,
      quantity,
    });

  const removeFromWishlist = (product: Product) =>
    dispatch({
      type: "remove",
      item: product,
    });

  return {
    addToWishlist,
    removeFromWishlist,
  };
};

export default WishListProvider;
