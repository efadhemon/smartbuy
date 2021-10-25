import { Col, Row } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

import { AiOutlineSearch } from "react-icons/ai";
import ProductCardSingle from "../products/product-card-single.component";

SwiperCore.use([Pagination]);

const ProductSliderLanding = () => {
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
    <div className="landing-slider-product-wrapper">
      <Row justify="space-between" align="middle">
        <Col xs={24} sm={24} md={24} lg={24} xl={12}>
          <h4>Products</h4>
        </Col>
        <Col className="search-area" xs={24} sm={24} md={24} lg={24} xl={12}>
          <div className="search-bar">
            <input type="search" name="" id="" />
            <button>
              <AiOutlineSearch />
            </button>
          </div>
          <button className="view-all-btn">View All</button>
        </Col>
      </Row>

      <div className="product-slider-wrapper py-5">
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
              slidesPerView: 5,
              spaceBetween: 10,
            },
          }}
          pagination={{
            bulletClass: "swiper-pagination-bullet swiper-custom-bullet",
            clickable: true,
          }}
          slidesPerView={4}
          spaceBetween={30}
          autoplay={true}
        >
          {productData.map((pd) => (
            <SwiperSlide key={pd.id}>
              <ProductCardSingle product={pd} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductSliderLanding;
