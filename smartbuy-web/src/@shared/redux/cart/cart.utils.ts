export const addItemUtils = (cartItems: any, addItem: any) => {
	const existingItem = cartItems.find((x: any) => x.id === addItem.id)

	if (existingItem) {
		return cartItems.map((x: any) =>
			x.id === addItem.id ? { ...x, quantity: x.quantity + 1 } : x
		)
	}
	const quantity = addItem.quantity || 1;
	return [...cartItems, { ...addItem, quantity: quantity }]
}

export const removeItemUtils = (cartItems: any, cartItemToRemove: any) => {
	const existingCartItem = cartItems.find(
		(cartItem: any) => cartItem.id === cartItemToRemove.id
	)
	if (existingCartItem.quantity === 1) {
		return cartItems.filter(
			(cartItem: any) => cartItem.id !== cartItemToRemove.id
		)
	}
	return cartItems.map((cartItem: any) =>
		cartItem.id === cartItemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
	)
}

export const clearFromCartUtils = (cartItems: any, cartItemToRemove: any) => {
	return cartItems.filter((x: any) => x.id !== cartItemToRemove.id)
}
