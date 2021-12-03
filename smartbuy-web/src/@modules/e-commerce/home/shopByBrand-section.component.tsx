/* eslint-disable @next/next/no-img-element */
import { Card, Col, Row } from "antd";

import { AiOutlineSearch } from "react-icons/ai";

const { Meta } = Card;

const ShopByBrandSection = () => {
  const vendorData = [
    {
      name: "Yamaha",
      img: "https://fairmartslive.s3.ap-south-1.amazonaws.com/public/assets/images/thumbnails/05fiynLRZDNx.jpg",
    },
    {
      name: "Yamaha",
      img: "https://fairmartslive.s3.ap-south-1.amazonaws.com/public/assets/images/thumbnails/05fiynLRZDNx.jpg",
    },
    {
      name: "Yamaha",
      img: "https://fairmartslive.s3.ap-south-1.amazonaws.com/public/assets/images/thumbnails/05fiynLRZDNx.jpg",
    },
    {
      name: "Yamaha",
      img: "https://fairmartslive.s3.ap-south-1.amazonaws.com/public/assets/images/thumbnails/05fiynLRZDNx.jpg",
    },
    {
      name: "Yamaha",
      img: "https://fairmartslive.s3.ap-south-1.amazonaws.com/public/assets/images/thumbnails/05fiynLRZDNx.jpg",
    },
    {
      name: "Yamaha",
      img: "https://fairmartslive.s3.ap-south-1.amazonaws.com/public/assets/images/thumbnails/05fiynLRZDNx.jpg",
    },
    {
      name: "Yamaha",
      img: "https://fairmartslive.s3.ap-south-1.amazonaws.com/public/assets/images/thumbnails/05fiynLRZDNx.jpg",
    },
    {
      name: "Yamaha",
      img: "https://fairmartslive.s3.ap-south-1.amazonaws.com/public/assets/images/thumbnails/05fiynLRZDNx.jpg",
    },
    {
      name: "Yamaha",
      img: "https://fairmartslive.s3.ap-south-1.amazonaws.com/public/assets/images/thumbnails/05fiynLRZDNx.jpg",
    },
    {
      name: "Yamaha",
      img: "https://fairmartslive.s3.ap-south-1.amazonaws.com/public/assets/images/thumbnails/05fiynLRZDNx.jpg",
    },
    {
      name: "Yamaha",
      img: "https://fairmartslive.s3.ap-south-1.amazonaws.com/public/assets/images/thumbnails/05fiynLRZDNx.jpg",
    },
    {
      name: "Yamaha",
      img: "https://fairmartslive.s3.ap-south-1.amazonaws.com/public/assets/images/thumbnails/05fiynLRZDNx.jpg",
    },
  ];
  return (
    <div className="shop-by-brand-wrapper">
      <Row justify="space-between" align="middle">
        <Col xs={24} sm={24} md={24} lg={24} xl={12}>
          <h4>Shop by Brands</h4>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={12}>
          <div className="search-area">
            <div className="search-bar">
              <input type="search" name="" id="" />
              <button>
                <AiOutlineSearch />
              </button>
            </div>
            <button className="view-all-btn">View All</button>
          </div>
        </Col>
      </Row>

      <Row
        gutter={[
          { xs: 8, sm: 8, md: 8, lg: 8 },
          { xs: 8, sm: 8, md: 8, lg: 8 },
        ]}
        className="py-5"
      >
        {vendorData.map((vd, i) => (
          <Col key={i} xs={24} sm={12} md={8} lg={6} xl={4}>
            <Card
              className="vendor-card"
              bodyStyle={{ padding: "10px 24px" }}
              key={i}
              bordered
              cover={<img alt="example" src={vd.img} />}
            >
              <Meta title={<p className="text-center p-0 m-0">Yamaha</p>} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ShopByBrandSection;
