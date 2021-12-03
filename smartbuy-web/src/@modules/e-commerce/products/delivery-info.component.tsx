import React from "react";
import { FaCheckCircle, FaHome, FaLocationArrow, FaShoppingBag, FaUndo } from "react-icons/fa";

const DeliveryInfo = () => {
    return (
        <div className="product-delivery-info">
            <div className="info-box">
                <h6>Delivery Option</h6>
                <ul>
                    <li> <FaLocationArrow/> Cash On Delivery Available</li>
                    <li> <FaHome/> Delivery Charge Inside 60 TK</li>
                    <li> <FaShoppingBag/> And Outside Dhaka 120 TK</li>
                </ul>
            </div>

            <hr />

            <div className="info-box">
                <h6>Our Values</h6>
                <ul>
                    <li> <FaCheckCircle/> 100% Authentic</li>
                    <li> <FaUndo/> Instant Return</li>
                </ul>
            </div>
        </div>
    );
};

export default DeliveryInfo;
