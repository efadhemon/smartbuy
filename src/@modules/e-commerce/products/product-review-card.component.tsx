import React from "react";
import { AiFillStar } from "react-icons/ai";

const ProductReviewCard = () => {
  return (
    <section>
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
          <div className="icon-box">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <div className="comments">
            <p>
              Value for money , I use it from long time and it is very useful
              and good product.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductReviewCard;
