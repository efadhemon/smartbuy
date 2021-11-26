import { Col, Row } from "antd";
import ProductCard from "../products/product-card.component";

const CampaignProductSection = () => {
  const productData = [
    {
      id: 1,
      title: "Lucy Love Sophia Rust Chair",
      price: "500",
      img: "https://i.ibb.co/v4vkXGh/battlecreek-coffee-roasters-rsnzc-8d-Vs0-unsplash.jpg",
    },
    {
      id: 2,
      title: "Lucy Love Sophia Rust Chair",
      price: "500",
      img: "https://i.ibb.co/v4vkXGh/battlecreek-coffee-roasters-rsnzc-8d-Vs0-unsplash.jpg",
    },
    {
      id: 3,
      title: "Lucy Love Sophia Rust Chair",
      price: "500",
      img: "https://i.ibb.co/v4vkXGh/battlecreek-coffee-roasters-rsnzc-8d-Vs0-unsplash.jpg",
    },
    {
      id: 4,
      title: "Lucy Love Sophia Rust Chair",
      price: "500",
      img: "https://i.ibb.co/v4vkXGh/battlecreek-coffee-roasters-rsnzc-8d-Vs0-unsplash.jpg",
    },
    {
      id: 5,
      title: "Lucy Love Sophia Rust Chair",
      price: "500",
      img: "https://i.ibb.co/v4vkXGh/battlecreek-coffee-roasters-rsnzc-8d-Vs0-unsplash.jpg",
    },
  ];
  return (
    <Row
      gutter={[
        { xs: 8, sm: 16, md: 24, lg: 30 },
        { xs: 8, sm: 16, md: 24, lg: 30 },
      ]}
    >
      <Col sm={24} md={24} lg={24} xl={24}>
        <div className="grid grid-cols-2 gap-4 content-center md:grid-cols-5 ">
          {productData.map((pd) => (
            <ProductCard key={pd.id} product={pd} />
          ))}
        </div>
      </Col>
    </Row>
  );
};

export default CampaignProductSection;
