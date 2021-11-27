import AppLayout from "@modules/common/layout/AppLayout";
import FilterBySize from "@modules/e-commerce/products/filterBySize.component";
import ProductCard from "@modules/e-commerce/products/product-card.component";
import { Col, Row } from "antd";
import productData from "productData";
import React from "react";

const SingleCategoryProduct = () => {
    return (
        <AppLayout>
            <section className="product-category-page">
                <div className="container">
                    <Row gutter={{ lg: 24 }}>
                        <Col xs={24} sm={24} md={24} lg={6} xl={4}>
                            
                        </Col>

                        <Col xs={24} sm={24} md={24} lg={18} xl={20}>
                            <div className="product-wrapper">
                                {productData.map((pd) => (
                                    <ProductCard key={pd.id} product={pd} />
                                ))}
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </AppLayout>
    );
};

export default SingleCategoryProduct;
