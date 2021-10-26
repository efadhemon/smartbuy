/* eslint-disable @next/next/no-img-element */
import AppLayout from "@modules/common/layout/AppLayout";
import type { NextPage } from "next";
import ProductSliderSection from "@modules/e-commerce/home/product-slider-section.compnent";
import HeroSection from "@modules/e-commerce/home/hero-section.component";

const Home: NextPage = () => {
  return (
    <AppLayout>
      <HeroSection />
      <ProductSliderSection />
      <ProductSliderSection />
      <ProductSliderSection />
      <ProductSliderSection />
      <ProductSliderSection />
    </AppLayout>
  );
};

export default Home;
