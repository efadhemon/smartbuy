/* eslint-disable @next/next/no-img-element */
import { getSession } from "@shared/utils"

interface IFProps {
	banners: any
}

const TopBannerSlider: React.FC<IFProps> = ({ banners }) => {
	const tokenUser = getSession()

	return (
		<>
			<img src="https://api.airmoll.com/1633849427908.jpg" alt="" />
		</>
	)
}

export default TopBannerSlider
