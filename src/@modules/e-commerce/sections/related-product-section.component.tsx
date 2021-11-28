import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

import ProductCard from "../products/product-card.component";

SwiperCore.use([Pagination]);

const RelatedProductSection = () => {

  const productData = [
    {
      id: 1,
      name: "Wavefun G100 Wireless Gaming TWS Headphones 45ms Low Latency AAC Bluetooth TWS Game Enhanced Earbuds",
      price: "500",
      img: "https://heriken.com/assets/products/1ccd82c9f1454776695ab5959f9e1c9f.jpg",
    },
    {
      id: 2,
      name: "Wavefun G100 Wireless Gaming TWS Headphones 45ms Low Latency AAC Bluetooth TWS Game Enhanced Earbuds",
      price: "500",
      img: "https://heriken.com/assets/products/1ccd82c9f1454776695ab5959f9e1c9f.jpg",
    },
    {
      id: 3,
      name: "Wavefun G100 Wireless Gaming TWS Headphones 45ms Low Latency AAC Bluetooth TWS Game Enhanced Earbuds",
      price: "500",
      img: "https://heriken.com/assets/products/1ccd82c9f1454776695ab5959f9e1c9f.jpg",
    },
    {
      id: 4,
      name: "Wavefun G100 Wireless Gaming TWS Headphones 45ms Low Latency AAC Bluetooth TWS Game Enhanced Earbuds",
      price: "500",
      img: "https://heriken.com/assets/products/1ccd82c9f1454776695ab5959f9e1c9f.jpg",
    },
    {
      id: 5,
      name: "Wavefun G100 Wireless Gaming TWS Headphones 45ms Low Latency AAC Bluetooth TWS Game Enhanced Earbuds",
      price: "500",
      img: "https://heriken.com/assets/products/1ccd82c9f1454776695ab5959f9e1c9f.jpg",
    },
    {
      id: 6,
      name: "Wavefun G100 Wireless Gaming TWS Headphones 45ms Low Latency AAC Bluetooth TWS Game Enhanced Earbuds",
      price: "500",
      img: "https://heriken.com/assets/products/1ccd82c9f1454776695ab5959f9e1c9f.jpg",
    },
    {
      id: 7,
      name: "Wavefun G100 Wireless Gaming TWS Headphones 45ms Low Latency AAC Bluetooth TWS Game Enhanced Earbuds",
      price: "500",
      img: "https://heriken.com/assets/products/1ccd82c9f1454776695ab5959f9e1c9f.jpg",
    },
    {
      id: 8,
      name: "Wavefun G100 Wireless Gaming TWS Headphones 45ms Low Latency AAC Bluetooth TWS Game Enhanced Earbuds",
      price: "500",
      img: "https://heriken.com/assets/products/1ccd82c9f1454776695ab5959f9e1c9f.jpg",
    },
    {
      id: 9,
      name: "Wavefun G100 Wireless Gaming TWS Headphones 45ms Low Latency AAC Bluetooth TWS Game Enhanced Earbuds",
      price: "500",
      img: "https://heriken.com/assets/products/1ccd82c9f1454776695ab5959f9e1c9f.jpg",
    },
    {
      id: 10,
      name: "Wavefun G100 Wireless Gaming TWS Headphones 45ms Low Latency AAC Bluetooth TWS Game Enhanced Earbuds",
      price: "500",
      img: "https://heriken.com/assets/products/1ccd82c9f1454776695ab5959f9e1c9f.jpg",
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
