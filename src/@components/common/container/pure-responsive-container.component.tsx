import { configResponsive, useResponsive } from "ahooks"

import React from "react"

export const responsiveBreakPoint = {
	xs: 0,
	sm: 767,
	md: 992,
	lg: 992,
	xl: 1199,
	xxl: 1650,
}

configResponsive(responsiveBreakPoint)

interface IFProps {
	children: any
	show: "mobile" | "desktop"
}
const PureResponsive: React.FC<IFProps> = ({ show, children }) => {
	const responsive = useResponsive()
	const isMobileView = responsive.lg === false

	if (show === "mobile" && isMobileView) {
		return children
	} else if (show === "desktop" && isMobileView === false) {
		return children
	} else {
		return <span></span>
	}
}

export default PureResponsive
