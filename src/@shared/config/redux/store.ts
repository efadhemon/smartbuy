import { configureStore } from "@reduxjs/toolkit"
import { persistedReducer } from "./rootReducer"

const middleware: any = []

if (process.env.NODE_ENV === "development") {
	// middleware.push()
}

export const initializeStore = () => {
	return configureStore({
		reducer: persistedReducer,
		middleware: [...middleware] as const,
	})
}
