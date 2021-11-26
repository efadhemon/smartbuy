import React from "react";
import { Col, Row, Card } from "antd";

const CampaignBrandSection = () => {
  const { Meta } = Card;
  const brandData = [
    {
      name: "Yamaha",
      img: "https://api.airmoll.com/1621853982481.jpg",
    },
    {
      name: "Yamaha",
      img: "https://api.airmoll.com/1621853982481.jpg",
    },
    {
      name: "Yamaha",
      img: "https://api.airmoll.com/1621853982481.jpg",
    },
    {
      name: "Yamaha",
      img: "https://api.airmoll.com/1621853982481.jpg",
    },
    {
      name: "Yamaha",
      img: "https://api.airmoll.com/1621853982481.jpg",
    },
    {
      name: "Yamaha",
      img: "https://api.airmoll.com/1621853982481.jpg",
    },
  ];

  return (
    <Row
      gutter={[
        { xs: 8, sm: 16, md: 24, lg: 30 },
        { xs: 8, sm: 16, md: 24, lg: 30 },
      ]}
    >
      {brandData.map((vd, i) => (
        <Col key={i} xs={24} sm={12} md={8} lg={6} xl={4}>
          <Card
            className="vendor-card shadow-md"
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
  );
};

export default CampaignBrandSection;
