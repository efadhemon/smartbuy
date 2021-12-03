/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";

SwiperCore.use([Autoplay, Pagination]);

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
        <div className="banner-wrapper">
            <Swiper
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                slidesPerView={1}
                pagination={{
                    bulletClass:
                        "swiper-pagination-bullet swiper-custom-bullet",
                    clickable: true,
                }}
            >
                {banners.map((b) => (
                    <SwiperSlide key={b.id}>
                        <div className="banner-image">
                            <img src={b.img} alt="" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TopBannerSlider;
