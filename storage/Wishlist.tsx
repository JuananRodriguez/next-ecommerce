import React, { Dispatch, useContext, useReducer } from "react";
import { Product } from "@domainTypes/Product";

export type WishlistState = {
  [key: string]: Product;
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
  { item, type }: WishlistAction
) {
  const existingWishlistItem = state[item.id];

  switch (type) {
    case "add": {
      if (existingWishlistItem != undefined) {
        return {
          ...state,
          [item.id]: { ...existingWishlistItem },
        };
      }

      return {
        ...state,
        [item.id]: { ...item },
      };
    }

    case "remove": {
      if (existingWishlistItem == undefined) {
        return state;
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

const getWishlistSubTotal = (sum: number, item: Product) => {
  sum += parseFloat(item.price);
  return sum;
};

export const useWishlist = () => {
  const itemsById = useContext(WishlistItemsContext);
  const items = Object.values(itemsById);
  const count = items.length;
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

  const addToWishlist = (product: Product) =>
    dispatch({
      type: "add",
      item: product,
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
