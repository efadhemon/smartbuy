/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

SwiperCore.use([Autoplay]);



const ProductCategorySlider = () => {
    const categoryData = [
        {
            id: 1,
            title: "Groceries",
            image: "https://fairmartslive.s3.ap-south-1.amazonaws.com/public/assets/images/categories/Uv2onBRA.Grocery.png",
        },
        {
            id: 2,
            title: "Mobile Phone",
            image: "https://fairmartslive.s3.ap-south-1.amazonaws.com/public/assets/images/categories/XCvlxt5n.mobile.png",
        },
        {
            id: 3,
            title: "Automobil",
            image: "https://fairmartslive.s3.ap-south-1.amazonaws.com/public/assets/images/categories/U03eFH9K.Automobil.png",
        },
        {
            id: 4,
            title: "Fashion",
            image: "https://fairmartslive.s3.ap-south-1.amazonaws.com/public/assets/images/categories/rUP2lDyA.Fashion.png",
        },
        {
            id: 5,
            title: "Beauty & Health",
            image: "https://fairmartslive.s3.ap-south-1.amazonaws.com/public/assets/images/categories/pdsx7Zyy.beauty.png",
        },
        {
            id: 6,
            title: "Food",
            image: "https://fairmartslive.s3.ap-south-1.amazonaws.com/public/assets/images/categories/2hJPqpDy.Food.png",
        },
    ];

    return (
        <section className="product-category-slider my-10">
            <div className="container">
                <Swiper
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 5,
                        },
                        480: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 4,
                            spaceBetween: 10,
                        },
                        992: {
                            slidesPerView: 5,
                            spaceBetween: 10,
                        },
                        1200: {
                            slidesPerView: 8,
                            spaceBetween: 20,
                        },
                    }}
                >
                    {categoryData.map((ct) => (
                        <SwiperSlide key={ct.id}>
                            <Link
                                href={`/products/category/${ct.title.toLowerCase()}`}
                            >
                                <a>
                                    <div className="text-center p-4 rounded-lg bg-white transform hover:scale-105 transition-all duration-300">
                                        <div className="mb-5">
                                            <img
                                                className="h-12 w-12 mx-auto"
                                                src={ct.image}
                                                alt=""
                                            />
                                        </div>
                                        <h5>{ct.title}</h5>
                                    </div>
                                </a>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default ProductCategorySlider;
