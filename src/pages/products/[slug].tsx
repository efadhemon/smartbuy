import AppLayout from "@modules/common/layout/AppLayout";
import ProductReviewCard from "@modules/e-commerce/products/product-review-card.component";
import ProductReviewForm from "@modules/e-commerce/products/product-review-form.component";
import ProductInfo from "@modules/e-commerce/products/product-info.component";
import ProductDescription from "@modules/e-commerce/products/product-description.component";
import { Col, Row, Tabs } from "antd";
import { useRouter } from "next/dist/client/router";
import ReactImageGallery from "react-image-gallery";
import DeliveryInfo from "@modules/e-commerce/products/delivery-info.component";
import RelatedProductSection from "@modules/e-commerce/sections/related-product-section.component";

const SingleProductDetail = () => {
    const router = useRouter();
    const { slug } = router.query;
    const { TabPane } = Tabs;

    const images = [
        "https://fairmartslive.s3.ap-south-1.amazonaws.com/public/assets/images/products/ckZpSFjNYfOH.jpg",
        "https://fairmartslive.s3.ap-south-1.amazonaws.com/public/assets/images/products/ckZpSFjNYfOH.jpg",
        "https://fairmartslive.s3.ap-south-1.amazonaws.com/public/assets/images/products/ckZpSFjNYfOH.jpg",
        "https://fairmartslive.s3.ap-south-1.amazonaws.com/public/assets/images/products/ckZpSFjNYfOH.jpg",
        "https://fairmartslive.s3.ap-south-1.amazonaws.com/public/assets/images/products/ckZpSFjNYfOH.jpg",
        "https://fairmartslive.s3.ap-south-1.amazonaws.com/public/assets/images/products/ckZpSFjNYfOH.jpg",
    ];

    const image = images.map((i: string) => ({
        original: i,
        thumbnail: i,
    }));

    return (
        <AppLayout>
            <section className="section-space-1">
                <div className="container">
                    <Row
                        gutter={[
                            { md: 20, lg: 30 },
                            { xs: 20, sm: 20, md: 20 },
                        ]}
                    >
                        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                            <div className="product-image-gallery">
                                <ReactImageGallery
                                    showNav={false}
                                    showPlayButton={false}
                                    items={image}
                                />
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={10} xl={10}>
                            <ProductInfo title={slug} />
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                            <DeliveryInfo />
                        </Col>
                    </Row>
                </div>
            </section>

            <section className="products-details-tab-area">
                <div className="container">
                    <Tabs
                        className="product-detail-tabs"
                        defaultActiveKey="1"
                        centered
                    >
                        <TabPane tab="Description" key="1">
                            <ProductDescription />
                        </TabPane>
                        <TabPane tab="Comments" key="2">
                            <ProductReviewForm />
                        </TabPane>
                        <TabPane tab="Review" key="3">
                            <ProductReviewCard />
                        </TabPane>
                    </Tabs>
                </div>
            </section>

            <RelatedProductSection />
        </AppLayout>
    );
};

export default SingleProductDetail;
