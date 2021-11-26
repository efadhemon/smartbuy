import { Col, Row, Input, Space, Button, Typography } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import ProductCard from "../products/product-card.component";

const { Search } = Input;
const { Title } = Typography;

SwiperCore.use([Pagination]);

interface IProps {
    title: string;
}

const ProductSliderSection = () => {
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

    const onSearch = (value: any) => console.log(value);

    return (
        <section id="home-product-slider-section" className="py-5">
            <div className="container">
                <Row justify="space-between" align="middle">
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Title level={3}>Product</Title>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Space
                            size="middle"
                            style={{ display: "flex", justifyContent: "end" }}
                        >
                            <Search
                                // style={{ width: 300 }}
                                placeholder="input search text"
                                allowClear
                                enterButton
                                size="large"
                                onSearch={onSearch}
                            />

                            <Button type="primary" size="large">
                                View All
                            </Button>
                        </Space>
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
                            bulletClass:
                                "swiper-pagination-bullet swiper-custom-bullet",
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

export default ProductSliderSection;