/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";

SwiperCore.use([Autoplay, Navigation]);

const TopBannerSlider = () => {
    const banners = [
        {
            id: 1,
            img: "https://fairmartslive.s3.ap-south-1.amazonaws.com/public/assets/images/banners/29eMbSMw.400x216-emi.jpg",
        },
        {
            id: 2,
            img: "https://fairmartslive.s3.ap-south-1.amazonaws.com/public/assets/images/banners/z4xZdctI.400x216.jpg",
        },
        {
            id: 3,
            img: "https://fairmartslive.s3.ap-south-1.amazonaws.com/public/assets/images/banners/3wXKeymW.400x216.jpg",
        },
    ];

    return (
        <Swiper
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            navigation={true}
        >
            {banners.map((b) => (
                <SwiperSlide key={b.id}>
                    <div className="banner-box">
                        <img src={b.img} alt="" />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default TopBannerSlider;
