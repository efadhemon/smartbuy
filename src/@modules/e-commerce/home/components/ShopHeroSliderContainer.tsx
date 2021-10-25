/* eslint-disable @next/next/no-img-element */
import { getSession } from "@shared/utils"

interface IFProps {
	banners: any
}

const ShopHeroSliderContainer: React.FC<IFProps> = ({ banners }) => {
	const tokenUser = getSession()

	return (
		<>
			<img src="https://fairmartslive.s3.ap-south-1.amazonaws.com/public/assets/images/sliders/cT1HjFTI.FairMart_Tv_A_series_web.jpg" alt="" />
		</>
	)
}

export default ShopHeroSliderContainer
