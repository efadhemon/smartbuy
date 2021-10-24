import { addItemUtils, clearFromCartUtils, removeItemUtils } from "./cart.utils"

import { createSlice } from "@reduxjs/toolkit"

interface ICartSlice {
	cartItems: Array<any>
	toggleCart: boolean
}

export const cartSlice = createSlice({
	name: "cartSlice",
	initialState: {
		cartItems: [],
		toggleCart: false,
	} as ICartSlice,
	reducers: {
		addToCart: (state, action: any) => {
			state.cartItems = addItemUtils(state.cartItems, action.payload)
		},
		removeFromCart: (state, action: any) => {
			state.cartItems = removeItemUtils(state.cartItems, action.payload)
		},
		clearFromCart: (state, action: any) => {
			state.cartItems = clearFromCartUtils(state.cartItems, action.payload)
		},
		clearCart: (state) => {
			state.cartItems = []
		},
		toggleCartDrawer: (state) => {
			state.toggleCart = !state.toggleCart
		},
	},
})

export const { addToCart, removeFromCart, clearFromCart, toggleCartDrawer, clearCart } =
	cartSlice.actions

export default cartSlice.reducer
