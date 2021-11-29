/* eslint-disable @next/next/no-img-element */
import { Rate } from "antd";
import React from "react";

const ProductReviewCard = () => {
    return (
        <div className="review-box">
            <div className="review-card">
                <div className="img-holder">
                    <img src="https://i.ibb.co/py8jbLG/review-1-1.png" alt="" />
                </div>
                <div className="text-holder">
                    <div className="name">
                        <h3>
                            Steven Rich <span> – April 10, 2019:</span>
                        </h3>
                    </div>
                    <div className="ratings">
                        <Rate disabled allowHalf defaultValue={5} />
                    </div>
                    <div className="comment">
                        <p>
                            Value for money , I use it from long time and it is
                            very useful and good product.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductReviewCard;
