import { Col, Row } from "antd";
import SidebarMenu from "./elements/sidebar-menu.component";
import TopBannerSlider from "./elements/top-banner-slider.component";

const HeroSection = () => {
    return (
        <section id="hero-section" className="my-5">
            <div className="container overflow-hidden">
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }}>
                    <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                        <SidebarMenu />
                    </Col>

                    <Col xs={24} sm={24} md={24} lg={18} xl={18}>
                        <TopBannerSlider banners={[]} />
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default HeroSection;
