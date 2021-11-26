import React from "react";
import { Descriptions, Badge } from "antd";

const ProductDescription = () => {
    const { Item } = Descriptions;
    return (
        <div className="product-description">
            <Descriptions
                className="specification-table"
                column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
                bordered
            >
                <Item label="Product">Cloud Database</Item>
                <Item label="Billing Mode">Prepaid</Item>
                <Item label="Automatic Renewal">YES</Item>
                <Item label="Order time">2018-04-24 18:00:00</Item>
                <Item label="Usage Time">2019-04-24 18:00:00</Item>
                <Item label="Status">
                    <Badge status="processing" text="Running" />
                </Item>
                <Item label="Negotiated Amount">$80.00</Item>
                <Item label="Discount">$20.00</Item>
                <Item label="Official Receipts">$60.00</Item>
            </Descriptions>
        </div>
    );
};

export default ProductDescription;
