/* eslint-disable @next/next/no-img-element */
import AppLayout from "@modules/common/layout/AppLayout";
import type { NextPage } from "next";

import { Col, Row } from "antd";
import SidebarMenuLanding from "@modules/e-commerce/home/sidebar-menu-landing.component";
import ShopHeroSliderContainer from "@modules/e-commerce/home/components/ShopHeroSliderContainer";
import ShopByBrandLanding from "@modules/e-commerce/home/shopByBrand-landing-section.component";
import ProductSliderLanding from "@modules/e-commerce/home/product-slider-landing-compnent";

const Home: NextPage = () => {
  return (
    <AppLayout>
      <div className="container my-5">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }}>
          <Col xs={24} sm={24} md={24} lg={6} xl={6}>
            <SidebarMenuLanding />
          </Col>

          <Col xs={24} sm={24} md={24} lg={18} xl={18}>
            <ShopHeroSliderContainer banners={[]} />
          </Col>
        </Row>

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }}>
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <img
              src="https://fairmartslive.s3.ap-south-1.amazonaws.com/public/assets/images/thumbnails/mjJBnkjDA1.png"
              alt="AirRide1"
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <img
              src="https://fairmartslive.s3.ap-south-1.amazonaws.com/public/assets/images/thumbnails/mjJBnkjDA1.png"
              alt="AirRide1"
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={8} xl={8}>
            <img
              src="https://fairmartslive.s3.ap-south-1.amazonaws.com/public/assets/images/thumbnails/mjJBnkjDA1.png"
              alt="AirRide1"
            />
          </Col>
        </Row>
        
        <ShopByBrandLanding />
        <ProductSliderLanding />
      </div>
    </AppLayout>
  );
};

export default Home;
