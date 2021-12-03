import { createSlice } from "@reduxjs/toolkit";

interface IFWishlist {
  wishlistItem: Array<any>;
  wishlistDrawerState: Boolean;
}

export const wishlistSlice = createSlice({
  name: "wishlist",

  initialState: {
    wishlistItem: [],
    wishlistDrawerState: false,
  } as IFWishlist,

  reducers: {
    addToWishList: (state, { payload }: any) => {
      const existingItem = state.wishlistItem.find(
        (itm) => itm.id === payload.id
      );
      if (!existingItem) {
        state.wishlistItem = [...state.wishlistItem, { ...payload }];
      }
    },

    removeFromWishlist: (state, { payload }: any) => {
      state.wishlistItem = state.wishlistItem.filter(
        (itm) => itm.id !== payload.id
      );
    },

    clearWishlist: (state) => {
        state.wishlistItem = [];
    },

    toggleWishlistDrawer: (state) => {
      state.wishlistDrawerState = !state.wishlistDrawerState;
    },

  },
});

export const { addToWishList, toggleWishlistDrawer, removeFromWishlist, clearWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
