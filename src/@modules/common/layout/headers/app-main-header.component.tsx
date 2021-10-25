
import MainDesktopHeader from "./main-desktop-header.component"
import MainMobileHeader from "./main-mobile-header.component"
import PureResponsive from "@modules/common/container/pure-responsive-container.component"
import React from "react"
import { toggleCartDrawer } from "@shared/redux/cart/cart-slice"
import { toggleWishlistDrawer } from "@shared/redux/wishlist/wishlist-slice"
import { useDispatch } from "react-redux"

const AppMainHeader = () => {
	const dispatch = useDispatch()
	const onToggleCartDrawer = () => dispatch(toggleCartDrawer())
	const onToggleWishlistDrawer = () => dispatch(toggleWishlistDrawer())
	return (
		<>
			<PureResponsive show="desktop">
				<MainDesktopHeader
					onClickWishlist={onToggleWishlistDrawer}
					onClickShoppingBag={onToggleCartDrawer}
				/>
			</PureResponsive>
			<PureResponsive show="mobile">
				<MainMobileHeader onClickShoppingBag={onToggleCartDrawer} />
			</PureResponsive>
		</>
	)
}

export default AppMainHeader
