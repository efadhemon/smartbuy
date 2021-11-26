import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

import ProductCard from "../products/product-card.component";

SwiperCore.use([Pagination]);

const RelatedProductSection = () => {

  const productData = [
    {
      id: 1,
      name: "Lucy Love Sophia Rust Chair",
      price: "500",
      img: "https://i.ibb.co/v4vkXGh/battlecreek-coffee-roasters-rsnzc-8d-Vs0-unsplash.jpg",
    },
    {
      id: 2,
      name: "Lucy Love Sophia Rust Chair",
      price: "500",
      img: "https://i.ibb.co/v4vkXGh/battlecreek-coffee-roasters-rsnzc-8d-Vs0-unsplash.jpg",
    },
    {
      id: 3,
      name: "Lucy Love Sophia Rust Chair",
      price: "500",
      img: "https://i.ibb.co/v4vkXGh/battlecreek-coffee-roasters-rsnzc-8d-Vs0-unsplash.jpg",
    },
    {
      id: 4,
      name: "Lucy Love Sophia Rust Chair",
      price: "500",
      img: "https://i.ibb.co/v4vkXGh/battlecreek-coffee-roasters-rsnzc-8d-Vs0-unsplash.jpg",
    },
    {
      id: 5,
      name: "Lucy Love Sophia Rust Chair",
      price: "500",
      img: "https://i.ibb.co/v4vkXGh/battlecreek-coffee-roasters-rsnzc-8d-Vs0-unsplash.jpg",
    },
    {
      id: 6,
      name: "Lucy Love Sophia Rust Chair",
      price: "500",
      img: "https://i.ibb.co/v4vkXGh/battlecreek-coffee-roasters-rsnzc-8d-Vs0-unsplash.jpg",
    },
    {
      id: 7,
      name: "Lucy Love Sophia Rust Chair",
      price: "500",
      img: "https://i.ibb.co/v4vkXGh/battlecreek-coffee-roasters-rsnzc-8d-Vs0-unsplash.jpg",
    },
    {
      id: 8,
      name: "Lucy Love Sophia Rust Chair",
      price: "500",
      img: "https://i.ibb.co/v4vkXGh/battlecreek-coffee-roasters-rsnzc-8d-Vs0-unsplash.jpg",
    },
    {
      id: 9,
      name: "Lucy Love Sophia Rust Chair",
      price: "500",
      img: "https://i.ibb.co/v4vkXGh/battlecreek-coffee-roasters-rsnzc-8d-Vs0-unsplash.jpg",
    },
    {
      id: 10,
      name: "Lucy Love Sophia Rust Chair",
      price: "500",
      img: "https://i.ibb.co/v4vkXGh/battlecreek-coffee-roasters-rsnzc-8d-Vs0-unsplash.jpg",
    },
  ];

    return (
        <section className="related-products py-10 lg:py-16">
            <div className="container">
                <h2 className="pb-4 text-2xl lg:text-3xl font-bold">
                    Related Products
                </h2>

                <div className="product-slider-wrapper">
                    <Swiper
                       breakpoints={{
                            320: {
                                slidesPerView: 2,
                                spaceBetween: 5,
                            },
                            480: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            992: {
                                slidesPerView: 4,
                                spaceBetween: 10,
                            },
                            1200: {
                                slidesPerView: 5,
                                spaceBetween: 20,
                            },
                        }}
                        pagination={{
                            bulletClass: "swiper-pagination-bullet swiper-custom-bullet",
                            clickable: true,
                        }}
                    >
                        {productData.map((pd) => (
                            <SwiperSlide key={pd.id}>
                                <ProductCard product={pd} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default RelatedProductSection;
