import React from "react";
import { Row, Col } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";

const CampaignSliderSection = () => {
  const campaignData = [
    {
      id: 1,
      img: "https://i.ibb.co/0f2hVfB/bike.jpg",
      productName: "Bajaj Pulsar 150CC Double Disc",
      campaignName: "Poshapets T3",
    },
    {
      id: 2,
      img: "https://i.ibb.co/0f2hVfB/bike.jpg",
      productName: "Bajaj Pulsar 150CC Double Disc",
      campaignName: "Poshapets T3",
    },
    {
      id: 3,
      img: "https://i.ibb.co/0f2hVfB/bike.jpg",
      productName: "Bajaj Pulsar 150CC Double Disc",
      campaignName: "Poshapets T3",
    },
  ];
  return (
    <Row className="campaign-slider-container">
      <Col
        className="slider-wrapper relative self-center px-8 py-2 text-center sm:text-left md:py-6"
        xs={24}
        sm={24}
        md={24}
        lg={24}
        xl={24}
      >
        <Row align="middle">
          <Col xs={10} sm={10} md={10} lg={6} xl={6}>
            <h1 className="text-base font-bold md:text-xl">
              Poshapets Campaign
            </h1>
            <h1 className="mb-0 text-base">Delivery within 7 Days</h1>
          </Col>
          <Col xs={14} sm={14} md={14} lg={18} xl={18}>
            <Swiper
              style={{ padding: "0px " }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 5,
                },
                480: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                992: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1200: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
              }}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
              slidesPerView={2}
              spaceBetween={30}
            >
              {campaignData.map((pd) => (
                <SwiperSlide key={pd.id}>
                  <div className="flex items-center gap-5">
                    <img src={pd.img} alt="" />
                    <div>
                      <h1 className="text-base">{pd.productName}</h1>
                      <h1 className="text-base font-bold">{pd.campaignName}</h1>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default CampaignSliderSection;
