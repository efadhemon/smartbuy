/* eslint-disable @next/next/no-img-element */
import AppLayout from "@modules/common/layout/AppLayout";
import type { NextPage } from "next";
import ProductSliderSection from "@modules/e-commerce/home/product-slider-section.component";
import HeroSection from "@modules/e-commerce/home/hero-section.component";
import ProductCategorySlider from "@modules/e-commerce/home/product-category-slider-section.component";

const Home: NextPage = () => {
    return (
        <AppLayout>
            <HeroSection />
            <ProductCategorySlider />
            
            <ProductSliderSection />
            <ProductSliderSection />
            <ProductSliderSection />
            <ProductSliderSection />
            <ProductSliderSection />
        </AppLayout>
    );
};

export default Home;
