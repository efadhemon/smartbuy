import AppLayout from "@modules/common/layout/AppLayout";
import ProductReviewCard from "@modules/e-commerce/products/product-review-card.component";
import ProductReviewForm from "@modules/e-commerce/products/product-review-form.component";
import ProductDescription from "@modules/e-commerce/products/product-description.component";
import ProductSpecificationTable from "@modules/e-commerce/sections/product-specification-table.components";
import RelatedProductSection from "@modules/e-commerce/sections/related-product-section.component";
import { Col, Row, Tabs } from "antd";
import { useRouter } from "next/dist/client/router";
import ReactImageGallery from "react-image-gallery";

const SingleProductDetail = () => {
    const router = useRouter();
    const { slug } = router.query;
    const { TabPane } = Tabs;
    const images = [
        {
            original: "https://i.ibb.co/378yD4v/shop-single-1-1.jpg",
            thumbnail: "https://i.ibb.co/RNsR6SM/shop-single-thumb-1-1.jpg",
        },
        {
            original: "https://i.ibb.co/378yD4v/shop-single-1-1.jpg",
            thumbnail: "https://i.ibb.co/RNsR6SM/shop-single-thumb-1-1.jpg",
        },
    ];
    return (
        <AppLayout>
            {/* <TitleBannerSection
        title="Product Details"
        breadcrumb="Product Details"
      /> */}

            <section className="single-product-area">
                <div className="container">
                    <Row
                        gutter={[
                            { xs: 8, sm: 16, md: 24, lg: 32 },
                            { xs: 8, sm: 16, md: 24, lg: 32 },
                        ]}
                    >
                        <Col
                            md={24}
                            lg={12}
                            xl={10}
                            className="product-image-gallery"
                        >
                            <ReactImageGallery
                                showNav={false}
                                showPlayButton={false}
                                items={images}
                            />
                        </Col>
                        <Col md={24} lg={12} xl={14}>
                            <ProductDescription title={slug} />
                        </Col>
                    </Row>
                </div>
            </section>

            <section>
                <div className="products-details-tab-area">
                    <div className="container">
                        <Tabs
                            className="product-detail-tabs"
                            defaultActiveKey="1"
                            centered
                        >
                            <TabPane tab="Description" key="1">
                                <ProductSpecificationTable />
                            </TabPane>
                            <TabPane tab="Comments" key="2">
                                <div className="p-10">
                                    <ProductReviewForm />
                                </div>
                            </TabPane>
                            <TabPane tab="Review" key="3">
                                <div className="p-10">
                                    <ProductReviewCard />
                                </div>
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
            </section>

            <RelatedProductSection />
        </AppLayout>
    );
};

export default SingleProductDetail;
