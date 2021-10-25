import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

import ProductCardSingle from "../products/product-card-single.component";

SwiperCore.use([Pagination]);

const RelatedProductSection = () => {
  const productData = [
    {
      id: 1,
      title: "Lucy Love Sophia Rust Chair",
      price: "500",
      img: "https://i.ibb.co/v4vkXGh/battlecreek-coffee-roasters-rsnzc-8d-Vs0-unsplash.jpg",
    },
    {
      id: 2,
      title: "Lucy Love Sophia Rust Chair",
      price: "500",
      img: "https://i.ibb.co/v4vkXGh/battlecreek-coffee-roasters-rsnzc-8d-Vs0-unsplash.jpg",
    },
    {
      id: 3,
      title: "Lucy Love Sophia Rust Chair",
      price: "500",
      img: "https://i.ibb.co/v4vkXGh/battlecreek-coffee-roasters-rsnzc-8d-Vs0-unsplash.jpg",
    },
    {
      id: 4,
      title: "Lucy Love Sophia Rust Chair",
      price: "500",
      img: "https://i.ibb.co/v4vkXGh/battlecreek-coffee-roasters-rsnzc-8d-Vs0-unsplash.jpg",
    },
    {
      id: 5,
      title: "Lucy Love Sophia Rust Chair",
      price: "500",
      img: "https://i.ibb.co/v4vkXGh/battlecreek-coffee-roasters-rsnzc-8d-Vs0-unsplash.jpg",
    },
    {
      id: 6,
      title: "Lucy Love Sophia Rust Chair",
      price: "500",
      img: "https://i.ibb.co/v4vkXGh/battlecreek-coffee-roasters-rsnzc-8d-Vs0-unsplash.jpg",
    },
    {
      id: 7,
      title: "Lucy Love Sophia Rust Chair",
      price: "500",
      img: "https://i.ibb.co/v4vkXGh/battlecreek-coffee-roasters-rsnzc-8d-Vs0-unsplash.jpg",
    },
  ];

  return (
    <section className="container my-16">
      <div>
        <p className="my-4 text-2xl lg:text-3xl font-bold block">Related Products</p>
      </div>

      <div className="related-product-wrapper mx-auto">
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
              slidesPerView: 2,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          pagination={{
            bulletClass: "swiper-pagination-bullet swiper-custom-bullet",
            clickable: true,
          }}
          slidesPerView={4}
          spaceBetween={30}
        >
          {productData.map((pd) => (
            <SwiperSlide key={pd.id}>
              <ProductCardSingle product={pd} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default RelatedProductSection;
