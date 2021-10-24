import { createSelector } from "reselect"

export const selectWishlistState = (state: any) => state.wishlist

export const selectWishlistItem = createSelector(
  [selectWishlistState],
  (edge: any) => edge.wishlistItem
)

export const selectToggleWishlistDrawer = createSelector(
  [selectWishlistState],
  (edge: any) => edge.wishlistDrawerState
)
