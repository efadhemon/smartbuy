import  wishlistSlice  from './../../redux/wishlist/wishlist-slice';
import cartSlice from "./../../redux/cart/cart-slice"
import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["count"],
}

const rootReducer = combineReducers({
	cart: cartSlice,
	wishlist: wishlistSlice,
})

export const persistedReducer = persistReducer(persistConfig, rootReducer)
